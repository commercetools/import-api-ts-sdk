import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import * as csv from 'fast-csv';
import * as fetch from 'node-fetch';
import {Transform} from 'stream';

import {createAuthMiddlewareForClientCredentialsFlow} from '@commercetools/sdk-middleware-auth';
import {createHttpMiddleware} from '@commercetools/sdk-middleware-http';
import {createClient, ClientResponse} from '@commercetools/sdk-client';
import {middlewareFromCtpClient} from '~/necessary-middlewares/ctp_middlware';
import {
  ApiRoot,
  Attribute,
  CategoryImport,
  CategoryImportRequest,
  CategoryKeyReference,
  ImportOperationPagedResponse,
  ImportResourceType,
  ImportSinkDraft,
  ImportSummary,
  LocalizedString,
  Money,
  PriceImport,
  PriceImportRequest,
  ProcessingState,
  ProductImport,
  ProductImportRequest,
  ProductKeyReference,
  ProductTypeImportRequest,
  ProductTypeKeyReference,
  ProductVariantImport,
  ProductVariantImportRequest,
  ProductVariantKeyReference
} from '@commercetools/import-api-ts-sdk';

import {AggregateImportRequest} from './AggregateImportRequest';
import {FilterStream} from './FilterStream';
import {SendImportRequest} from './SendImportRequest';
import {TransformStream} from './TransformStream';

function createApiBuilderFromCtpClient(ctpClient: any): ApiRoot {
  return new ApiRoot({
    middlewares: [middlewareFromCtpClient(ctpClient)],
  });
}

type CsvRow = {[column: string]: string};

/**
 * The given property name is used to extract all localized values from the given row.
 * The locale specific values are contained in columns with the format `${property}.${locale}`
 *
 * @param row  the row to extract the loaclized string from
 * @param property the property to extract the localized string for
 *
 * @returns the localized string for the given property
 */
function extractLocalizedString(
  row: CsvRow,
  property: string,
): LocalizedString {
  const prefix = `${property}.`;
  const localizedString = Object.keys(row)
    .filter(key => key.startsWith(prefix))
    .map(key => {
      const lang = key.substring(prefix.length);
      const localizedValue = row[key];
      return localizedValue?.length > 0 ? {[lang]: localizedValue} : {};
    })
    .reduce((acc, cur) => Object.assign(acc, cur));
  return localizedString;
}

/**
 * Extracts a product from the given row.
 * @param row the row as parsed from csv
 *
 * @returns the extracted product
 */
function extractProduct(row: {[column: string]: string}): ProductImport {
  const productType: ProductTypeKeyReference = {
    typeId: 'product-type',
    key: row.productType,
  };
  const name = extractLocalizedString(row, 'name');
  const description = extractLocalizedString(row, 'description');
  const slug = extractLocalizedString(row, 'slug');
  const metaTitle = extractLocalizedString(row, 'metaTitle');
  const metaDescription = extractLocalizedString(row, 'metaDescription');
  const metaKeywords = extractLocalizedString(row, 'metaKeywords');
  const key = slug.en;

  return {
    key,
    name,
    description,
    slug,
    metaTitle,
    metaDescription,
    metaKeywords,
    productType,
  };
}

/**
 * Creates a function to extracts a product variant from the given row.
 *
 * @@param currentProductKey initial value for the product key, will be properly set on the first call
 */
function extractProductVariant(): (row: CsvRow) => ProductVariantImport {
  let currentProductKey: string;
  return (row: CsvRow) => {
    const {variantId, baseId} = row;
    const isMasterVariant = variantId === '1';
    const slug = extractLocalizedString(row, 'slug');
    if (isMasterVariant) {
      currentProductKey = slug.en;
    }
    const product: ProductKeyReference = {
      key: currentProductKey,
      typeId: 'product',
    };
    const attributes: Attribute[] = [
      {name: 'baseId', value: baseId, type: 'text'},
    ];

    return {
      key: `${product.key}- ${variantId}`,
      isMasterVariant,
      product,
      attributes,
    };
  };
}

/**
 * Extracts a product from the given row.
 * @param row the row as parsed from csv
 *
 * @returns a list with extracted prices
 */
function extractPrices(): (row: CsvRow) => PriceImport[] {
  let currentProductKey: string;
  return (row: CsvRow) => {
    const {variantId, prices} = row;
    const isMasterVariant = variantId === '1';
    const slug = extractLocalizedString(row, 'slug');
    if (isMasterVariant) {
      currentProductKey = slug.en;
    }
    const product: ProductKeyReference = {
      key: currentProductKey,
      typeId: 'product',
    };
    const productVariant: ProductVariantKeyReference = {
      key: `${product.key}- ${variantId}`,
      typeId: 'product-variant',
    };
    // prices use ';' as separator
    const allPrices = prices.split(';');

    return allPrices.map(priceRow => {
      const channelSplit = priceRow.split('#');
      const channelKey = channelSplit.splice(1)[0];

      const centAmountAndCustomerGroupSplit = channelSplit[0].split(' ');
      const customerGroupKey = centAmountAndCustomerGroupSplit.splice(2)[0];
      const centAmount = Number(centAmountAndCustomerGroupSplit.splice(1)[0]);

      const currencyCodeSplit = centAmountAndCustomerGroupSplit[0].split('-');

      // these values are not consistent, sometimes we have both
      // country + currencyCode, sometimes not.
      // e.g. `DE-EUR` and `USD`
      // that's why we check length of the array
      const currencyCode =
        currencyCodeSplit.length > 1
          ? currencyCodeSplit.splice(1)[0]
          : currencyCodeSplit.splice(0)[0];
      const country = currencyCodeSplit[0];

      const value: Money = {centAmount, currencyCode};

      const basePrice: PriceImport = {
        value,
        productVariant,
        product,
        key: `${product.key}- ${variantId}- ${value.currencyCode}${value.centAmount}`,
      };
      let countryObj;
      let customerGroupObj;
      let channelObj;
      if (country) countryObj = {country};
      if (customerGroupKey) {
        customerGroupObj = {
          customerGroup: {
            typeId: 'customer-group',
            key: customerGroupKey,
          },
        };
      }
      if (channelKey) {
        channelObj = {
          channel: {
            typeId: 'channel',
            key: channelKey,
          },
        };
      }
      return {
        ...basePrice,
        ...countryObj,
        ...customerGroupObj,
        ...channelObj,
      };
    });
  };
}

function extractCategory(row: CsvRow): CategoryImport {
  const {key, externalId, parentId} = row;
  const slug = extractLocalizedString(row, 'slug');
  const name = extractLocalizedString(row, 'slug');
  const baseCategory = {
    key,
    name,
    slug,
    externalId,
  };
  if (parentId) {
    const parent: CategoryKeyReference = {
      key: `c${parentId}`,
      typeId: 'category',
    };
    return {
      ...baseCategory,
      parent,
    };
  }

  return baseCategory;
}

const {
  SUNRISE_DATA_CLIENT_ID,
  SUNRISE_DATA_CLIENT_SECRET,
  CTP_PROJECT_KEY,
  SUNRISE_DATA_PATH,
  IT_TEST_URL,
  NUM_PRODUCTS,
} = process.env;

const numProducts = NUM_PRODUCTS ? parseInt(NUM_PRODUCTS, 10) : Infinity;

const authMiddleware = createAuthMiddlewareForClientCredentialsFlow({
  host: 'https://auth.sphere.io',
  projectKey: CTP_PROJECT_KEY,
  credentials: {
    clientId: SUNRISE_DATA_CLIENT_ID,
    clientSecret: SUNRISE_DATA_CLIENT_SECRET,
  },
  fetch,
});

const host =
  IT_TEST_URL || 'https://import-eu.europe-west1.gcp.commercetools.com';
const httpMiddleware = createHttpMiddleware({
  host,
  fetch,
});

const ctpClient = createClient({
  middlewares: [authMiddleware, httpMiddleware],
});

const projectKey = CTP_PROJECT_KEY || '';
console.log(`Using ${projectKey}`);

const apiBuilder = () =>
  createApiBuilderFromCtpClient(ctpClient).withProjectKeyValue({projectKey});

const importSinkDrafts: ImportSinkDraft[] = [
  {
    key: 'products',
    resourceType: 'product',
  },
  {
    key: 'productVariants',
    resourceType: 'product-variant',
  },
  {
    key: 'categories',
    resourceType: 'category',
  },
  {
    key: 'productTypes',
    resourceType: 'product-type',
  },
  {
    key: 'prices',
    resourceType: 'price',
  },
];

function importSinkKeyForResourceType(
  resourceType: ImportResourceType,
): string {
  return (
    importSinkDrafts.find(
      importSinkDraft => importSinkDraft.resourceType === resourceType,
    )?.key ?? ''
  );
}

const allImportSinkKeys = {
  products: importSinkKeyForResourceType('product'),
  productVariants: importSinkKeyForResourceType('product-variant'),
  categories: importSinkKeyForResourceType('category'),
  productTypes: importSinkKeyForResourceType('product-type'),
  prices: importSinkKeyForResourceType('price'),
};

/**
 * This function creates a function to limit the number of parsed products and can be used on
 * streams of csv rows.
 *
 * @param maxProducts  the maximum  number of products to parse
 * @param productCount this provides a binding for counting the parsed products
 */
function productLimiter(maxProducts: number): (row: CsvRow) => boolean {
  let productCount: number = 0;
  return (row: CsvRow) => {
    if (row.variantId === '1') {
      productCount += 1;
    }
    return productCount <= maxProducts;
  };
}

const resourceSeparator = new Transform({
  objectMode: true,
  transform(resources, _, callback) {
    resources.forEach((resource: any) => this.push(resource));
    callback();
  },
});

function doCategoryImport(tmpFolder: string, importSinkKeys: string[]) {
  const categoryExtractor = new TransformStream({}, extractCategory);
  const categoryImportRequestAggregator = new AggregateImportRequest(
    {},
    'category',
  );
  if (importSinkKeys.includes('categories')) {
    const categoryImportRequests = apiBuilder()
      .categories()
      .importSinkKeyWithImportSinkKeyValue({
        importSinkKey: allImportSinkKeys.categories,
      });
    const categoryImportRequestSender = new SendImportRequest<
      CategoryImportRequest
    >({}, importRequest => categoryImportRequests.post({body: importRequest}));
    const categoryResultsStream = fs.createWriteStream(
      `${tmpFolder}/category-results.json`,
    );

    fs.createReadStream(`${SUNRISE_DATA_PATH}/data/categories.csv`)
      .pipe(csv.parse({headers: true}))
      .pipe(categoryExtractor)
      .pipe(categoryImportRequestAggregator)
      .pipe(categoryImportRequestSender)
      .pipe(new TransformStream({}, element => `${JSON.stringify(element)}\n`))
      .pipe(categoryResultsStream);
  }
}

function doProductImport(tmpFolder: string, importSinkKeys: string[]) {
  const productFilter = new FilterStream({}, row => row.variantId === '1');
  const productExtractor = new TransformStream({}, extractProduct);
  const productImportRequestAggregator = new AggregateImportRequest(
    {},
    'product',
  );
  if (importSinkKeys.includes('products')) {
    const productImportRequests = apiBuilder()
      .products()
      .importSinkKeyWithImportSinkKeyValue({
        importSinkKey: allImportSinkKeys.products,
      });
    const productImportRequestSender = new SendImportRequest<
      ProductImportRequest
    >({}, importRequest => productImportRequests.post({body: importRequest}));
    const productResultsStream = fs.createWriteStream(
      `${tmpFolder}/product-results.json`,
    );

    fs.createReadStream(`${SUNRISE_DATA_PATH}/data/products.csv`)
      .pipe(csv.parse({headers: true}))
      .pipe(new FilterStream({}, productLimiter(numProducts))) // it would be more efficient if we would stop the stream when the filter evaluates to false :-)
      .pipe(productFilter)
      .pipe(productExtractor)
      .pipe(productImportRequestAggregator)
      .pipe(productImportRequestSender)
      .pipe(new TransformStream({}, element => `${JSON.stringify(element)}\n`))
      .pipe(productResultsStream);
  }
}

function doProductVariantImport(tmpFolder: string, importSinkKeys: string[]) {
  if (importSinkKeys.includes('productVariants')) {
    const productVariantExtractor = new TransformStream(
      {},
      extractProductVariant(),
    );
    const productVariantImportRequestAggregator = new AggregateImportRequest(
      {},
      'product-variant',
    );
    const productVariantImportRequests = apiBuilder()
      .productVariants()
      .importSinkKeyWithImportSinkKeyValue({
        importSinkKey: allImportSinkKeys.productVariants,
      });
    const productVariantImportRequestSender = new SendImportRequest<
      ProductVariantImportRequest
    >({}, importRequest =>
      productVariantImportRequests.post({body: importRequest}),
    );
    const productVariantResultsStream = fs.createWriteStream(
      `${tmpFolder}/product-variant-results.json`,
    );

    fs.createReadStream(`${SUNRISE_DATA_PATH}/data/products.csv`)
      .pipe(csv.parse({headers: true}))
      .pipe(new FilterStream({}, productLimiter(numProducts)))
      .pipe(productVariantExtractor)
      .pipe(productVariantImportRequestAggregator)
      .pipe(productVariantImportRequestSender)
      .pipe(new TransformStream({}, element => `${JSON.stringify(element)}\n`))
      .pipe(productVariantResultsStream);
  }
}

function doProductTypeImport(tmpFolder: string, importSinkKeys: string[]) {
  const productTypeImportRequestAggregator = new AggregateImportRequest(
    {},
    'product-type',
  );
  if (importSinkKeys.includes('productTypes')) {
    const productTypeImportRequests = apiBuilder()
      .productTypes()
      .importSinkKeyWithImportSinkKeyValue({
        importSinkKey: allImportSinkKeys.productTypes,
      });
    const productTypeImportRequestSender = new SendImportRequest<
      ProductTypeImportRequest
    >({}, importRequest =>
      productTypeImportRequests.post({body: importRequest}),
    );
    const productTypeResultsStream = fs.createWriteStream(
      `${tmpFolder}/product-type-results.json`,
    );

    fs.createReadStream(`${SUNRISE_DATA_PATH}/data/product-type.json`)
      .pipe(new TransformStream({}, (element: any) => JSON.parse(element)))
      .pipe(resourceSeparator)
      .pipe(productTypeImportRequestAggregator)
      .pipe(productTypeImportRequestSender)
      .pipe(new TransformStream({}, element => `${JSON.stringify(element)}\n`))
      .pipe(productTypeResultsStream);
  }
}

function doPriceImport(tmpFolder: string, importSinkKeys: string[]) {
  if (importSinkKeys.includes('prices')) {
    const pricesExtractor = new TransformStream({}, extractPrices());
    const priceImportRequestAggregator = new AggregateImportRequest(
      {},
      'price',
    );
    const priceImportRequests = apiBuilder()
      .prices()
      .importSinkKeyWithImportSinkKeyValue({
        importSinkKey: allImportSinkKeys.prices,
      });
    const priceImportRequestSender = new SendImportRequest<PriceImportRequest>(
      {},
      importRequest => priceImportRequests.post({body: importRequest}),
    );
    const priceResultsStream = fs.createWriteStream(
      `${tmpFolder}/price-results.json`,
    );

    fs.createReadStream(`${SUNRISE_DATA_PATH}/data/products.csv`)
      .pipe(csv.parse({headers: true}))
      .pipe(new FilterStream({}, productLimiter(numProducts)))
      .pipe(pricesExtractor)
      .pipe(resourceSeparator)
      .pipe(priceImportRequestAggregator)
      .pipe(priceImportRequestSender)
      .pipe(new TransformStream({}, element => `${JSON.stringify(element)}\n`))
      .pipe(priceResultsStream);
  }
}

async function doImport(importSinkKeys: string[]) {
  const tmpFolder = path.join(os.tmpdir(), 'sunrise-data-importer');
  try {
    fs.mkdirSync(tmpFolder);
  } catch (e) {
    console.log(`Folder was already created:${e.message}`);
  }

  importSinkDrafts
    .filter(importSinkDraft => importSinkKeys.includes(importSinkDraft.key))
    .forEach(async importSinkDraft => {
      const {key, resourceType} = importSinkDraft;
      try {
        await apiBuilder()
          .importSinks()
          .post({body: {key, resourceType}})
          .execute();
      } catch (e) {
        console.error(
          `Error ${e.message} ${e.statusCode} ${JSON.stringify(e.body)}`,
        );
      }
    });

  doCategoryImport(tmpFolder, importSinkKeys);
  doProductImport(tmpFolder, importSinkKeys);
  doProductVariantImport(tmpFolder, importSinkKeys);
  doProductTypeImport(tmpFolder, importSinkKeys);
  doPriceImport(tmpFolder, importSinkKeys);
}

async function printImportSummaries(importSinkKeys: string[]) {
  const importSummaryPromises: Promise<ClientResponse<ImportSummary>>[] = [];
  const importSinkKeyColumn: string[] = [];
  importSinkKeys.forEach(importSinkKey => {
    const importSummaryPromise = apiBuilder()
      .importSummaries()
      .importSinkKeyWithImportSinkKeyValue({
        importSinkKey,
      })
      .get()
      .execute();
    importSummaryPromises.push(importSummaryPromise);
    importSinkKeyColumn.push(importSinkKey);
  });

  const results = await Promise.all(importSummaryPromises);

  console.log('\n\n\n');
  console.table(
    results
      .map(result => result.body)
      .map((importSummary, index) => {
        const {
          ValidationFailed,
          Accepted,
          Unresolved,
          Resolved,
          WaitForMasterVariant,
          Imported,
          Rejected,
          Expired,
        } = importSummary.states;
        const importSink = importSinkKeyColumn[index];
        return {
          ImportSink: importSink,
          ValidationFailed,
          Accepted,
          Unresolved,
          Resolved,
          WaitForMasterVariant,
          Imported,
          Rejected,
          Expired,
          Total: importSummary.total,
        };
      }),
  );

  setTimeout(() => printImportSummaries(importSinkKeys), 1000);
}

async function printImportOperations(importSinkKeys: string[]) {
  const importOperationPromises: Promise<
    ClientResponse<ImportOperationPagedResponse>
  >[] = [];

  const states: ProcessingState[] = [
    'ValidationFailed',
    'Rejected',
    'Unresolved',
  ];

  if (importSinkKeys.includes('products')) {
    const productStates: ProcessingState[] = [
      ...states,
      'WaitForMasterVariant',
    ];
    productStates.forEach(state => {
      const resultPromise = apiBuilder()
        .products()
        .importSinkKeyWithImportSinkKeyValue({
          importSinkKey: allImportSinkKeys.products,
        })
        .importOperations()
        .get({queryArgs: {state, limit: 10}})
        .execute();
      importOperationPromises.push(resultPromise);
    });
  }

  if (importSinkKeys.includes('productVariants')) {
    states.forEach(state => {
      const resultPromise = apiBuilder()
        .productVariants()
        .importSinkKeyWithImportSinkKeyValue({
          importSinkKey: allImportSinkKeys.productVariants,
        })
        .importOperations()
        .get({queryArgs: {state, limit: 10}})
        .execute();
      importOperationPromises.push(resultPromise);
    });
  }

  if (importSinkKeys.includes('categories')) {
    states.forEach(state => {
      const resultPromise = apiBuilder()
        .categories()
        .importSinkKeyWithImportSinkKeyValue({
          importSinkKey: allImportSinkKeys.categories,
        })
        .importOperations()
        .get({queryArgs: {state, limit: 10}})
        .execute();
      importOperationPromises.push(resultPromise);
    });
  }

  const results = await Promise.all(importOperationPromises);

  console.log('\n\n\n');
  results.forEach(result => {
    if (result.body.results.length > 0) {
      console.table(
        result.body.results.map(importOperation => {
          const {
            resourceKey,
            state,
            errors,
            unresolvedReferences,
          } = importOperation;

          switch (state) {
            case 'Unresolved':
              return {
                resourceKey,
                state,
                unresolvedReferences: unresolvedReferences
                  ?.map(unresolved => `${unresolved.typeId}:${unresolved.key}`)
                  .join(','),
              };
            default:
              return {
                resourceKey,
                state,
                error: errors?.map(e => e.message).join(','),
              };
          }
        }),
      );
    }
  });
  console.log('\n');

  setTimeout(() => printImportOperations(importSinkKeys), 1000);
}

const importSinkKeyArgs = process.argv.slice(2);
if (!importSinkKeyArgs.length) {
  throw Error(
    'Min. 1 resource needs to be imported. `$ yarn start <resource>`',
  );
}
console.log(`Importing: ${importSinkKeyArgs.join(', ')}`);

doImport(importSinkKeyArgs);

printImportSummaries(importSinkKeyArgs);

printImportOperations(importSinkKeyArgs);
