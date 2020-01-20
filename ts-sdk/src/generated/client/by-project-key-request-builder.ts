
import { ByProjectKeyCategoriesRequestBuilder } from './categories/by-project-key-categories-request-builder'
import { ByProjectKeyImportSinksRequestBuilder } from './import-sinks/by-project-key-import-sinks-request-builder'
import { ByProjectKeyImportSummariesRequestBuilder } from './import-summaries/by-project-key-import-summaries-request-builder'
import { ByProjectKeyPricesRequestBuilder } from './prices/by-project-key-prices-request-builder'
import { ByProjectKeyProductTypesRequestBuilder } from './product-types/by-project-key-product-types-request-builder'
import { ByProjectKeyProductVariantPatchesRequestBuilder } from './product-variant-patches/by-project-key-product-variant-patches-request-builder'
import { ByProjectKeyProductVariantsRequestBuilder } from './product-variants/by-project-key-product-variants-request-builder'
import { ByProjectKeyProductsRequestBuilder } from './products/by-project-key-products-request-builder'
import { ApiRequestExecutor, ApiRequest } from './../base/requests-utils'

export class ByProjectKeyRequestBuilder {

    
      constructor(
        protected readonly args: {
          pathArgs: {
                projectKey: string
           },
          apiRequestExecutor: ApiRequestExecutor;
        }
      ) {}
    public importSinks(): ByProjectKeyImportSinksRequestBuilder {
       return new ByProjectKeyImportSinksRequestBuilder(
             {
                pathArgs: {
                   ...this.args.pathArgs,
                },
                apiRequestExecutor: this.args.apiRequestExecutor
             }
       )
    }
    public importSummaries(): ByProjectKeyImportSummariesRequestBuilder {
       return new ByProjectKeyImportSummariesRequestBuilder(
             {
                pathArgs: {
                   ...this.args.pathArgs,
                },
                apiRequestExecutor: this.args.apiRequestExecutor
             }
       )
    }
    public categories(): ByProjectKeyCategoriesRequestBuilder {
       return new ByProjectKeyCategoriesRequestBuilder(
             {
                pathArgs: {
                   ...this.args.pathArgs,
                },
                apiRequestExecutor: this.args.apiRequestExecutor
             }
       )
    }
    public prices(): ByProjectKeyPricesRequestBuilder {
       return new ByProjectKeyPricesRequestBuilder(
             {
                pathArgs: {
                   ...this.args.pathArgs,
                },
                apiRequestExecutor: this.args.apiRequestExecutor
             }
       )
    }
    public products(): ByProjectKeyProductsRequestBuilder {
       return new ByProjectKeyProductsRequestBuilder(
             {
                pathArgs: {
                   ...this.args.pathArgs,
                },
                apiRequestExecutor: this.args.apiRequestExecutor
             }
       )
    }
    public productTypes(): ByProjectKeyProductTypesRequestBuilder {
       return new ByProjectKeyProductTypesRequestBuilder(
             {
                pathArgs: {
                   ...this.args.pathArgs,
                },
                apiRequestExecutor: this.args.apiRequestExecutor
             }
       )
    }
    public productVariants(): ByProjectKeyProductVariantsRequestBuilder {
       return new ByProjectKeyProductVariantsRequestBuilder(
             {
                pathArgs: {
                   ...this.args.pathArgs,
                },
                apiRequestExecutor: this.args.apiRequestExecutor
             }
       )
    }
    public productVariantPatches(): ByProjectKeyProductVariantPatchesRequestBuilder {
       return new ByProjectKeyProductVariantPatchesRequestBuilder(
             {
                pathArgs: {
                   ...this.args.pathArgs,
                },
                apiRequestExecutor: this.args.apiRequestExecutor
             }
       )
    }
    

}
