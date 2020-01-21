import * as Joi from 'joi'
import { ByProjectKeyImportSinksPostHandler } from './parameters'
import { ByProjectKeyImportSinksGetHandler } from './parameters'
import { ByProjectKeyImportSinksByImportSinkKeyPutHandler } from './parameters'
import { ByProjectKeyImportSinksByImportSinkKeyGetHandler } from './parameters'
import { ByProjectKeyImportSinksByImportSinkKeyDeleteHandler } from './parameters'
import { ByProjectKeyImportSummariesImportSinkKeyByImportSinkKeyGetHandler } from './parameters'
import { ByProjectKeyCategoriesImportSinkKeyByImportSinkKeyPostHandler } from './parameters'
import { ByProjectKeyCategoriesImportSinkKeyByImportSinkKeyResourceKeyByResourceKeyDeleteHandler } from './parameters'
import { ByProjectKeyCategoriesImportSinkKeyByImportSinkKeyImportOperationsGetHandler } from './parameters'
import { ByProjectKeyCategoriesImportSinkKeyByImportSinkKeyImportOperationsByIdGetHandler } from './parameters'
import { ByProjectKeyPricesImportSinkKeyByImportSinkKeyPostHandler } from './parameters'
import { ByProjectKeyPricesImportSinkKeyByImportSinkKeyResourceKeyByResourceKeyDeleteHandler } from './parameters'
import { ByProjectKeyPricesImportSinkKeyByImportSinkKeyImportOperationsGetHandler } from './parameters'
import { ByProjectKeyPricesImportSinkKeyByImportSinkKeyImportOperationsByIdGetHandler } from './parameters'
import { ByProjectKeyProductsImportSinkKeyByImportSinkKeyPostHandler } from './parameters'
import { ByProjectKeyProductsImportSinkKeyByImportSinkKeyResourceKeyByResourceKeyDeleteHandler } from './parameters'
import { ByProjectKeyProductsImportSinkKeyByImportSinkKeyImportOperationsGetHandler } from './parameters'
import { ByProjectKeyProductsImportSinkKeyByImportSinkKeyImportOperationsByIdGetHandler } from './parameters'
import { ByProjectKeyProductTypesImportSinkKeyByImportSinkKeyPostHandler } from './parameters'
import { ByProjectKeyProductTypesImportSinkKeyByImportSinkKeyResourceKeyByResourceKeyDeleteHandler } from './parameters'
import { ByProjectKeyProductTypesImportSinkKeyByImportSinkKeyImportOperationsGetHandler } from './parameters'
import { ByProjectKeyProductTypesImportSinkKeyByImportSinkKeyImportOperationsByIdGetHandler } from './parameters'
import { ByProjectKeyProductVariantsImportSinkKeyByImportSinkKeyPostHandler } from './parameters'
import { ByProjectKeyProductVariantsImportSinkKeyByImportSinkKeyResourceKeyByResourceKeyDeleteHandler } from './parameters'
import { ByProjectKeyProductVariantsImportSinkKeyByImportSinkKeyImportOperationsGetHandler } from './parameters'
import { ByProjectKeyProductVariantsImportSinkKeyByImportSinkKeyImportOperationsByIdGetHandler } from './parameters'
import { ByProjectKeyProductVariantPatchesImportSinkKeyByImportSinkKeyPostHandler } from './parameters'
import { ByProjectKeyProductVariantPatchesImportSinkKeyByImportSinkKeyImportOperationsGetHandler } from './parameters'
import { ByProjectKeyProductVariantPatchesImportSinkKeyByImportSinkKeyImportOperationsByIdGetHandler } from './parameters'
import { Resource } from './common'
import { ServerRoute } from '@hapi/hapi'
import { Lifecycle } from '@hapi/hapi'
import { Request } from '@hapi/hapi'
import { ResponseToolkit } from '@hapi/hapi'
import { ErrorHandler } from './common'
import { importSinkDraftType } from './../joi/importsinks-types'
import { categoryImportRequestType } from './../joi/importrequests-types'
import { priceImportRequestType } from './../joi/importrequests-types'
import { productImportRequestType } from './../joi/importrequests-types'
import { productTypeImportRequestType } from './../joi/importrequests-types'
import { productVariantImportRequestType } from './../joi/importrequests-types'
import { productVariantPatchRequestType } from './../joi/importrequests-types'

const requiredString = Joi.string().required()

export type ApiServer = {
    "{projectKey}": {
        "import-sinks": {
            post: ByProjectKeyImportSinksPostHandler,
            get: ByProjectKeyImportSinksGetHandler,
            "{importSinkKey}": {
                put: ByProjectKeyImportSinksByImportSinkKeyPutHandler,
                get: ByProjectKeyImportSinksByImportSinkKeyGetHandler,
                delete: ByProjectKeyImportSinksByImportSinkKeyDeleteHandler
            }
        },
        "import-summaries": {
            "importSinkKey={importSinkKey}": {
                get: ByProjectKeyImportSummariesImportSinkKeyByImportSinkKeyGetHandler
            }
        },
        "categories": {
            "importSinkKey={importSinkKey}": {
                post: ByProjectKeyCategoriesImportSinkKeyByImportSinkKeyPostHandler,
                "resourceKey={resourceKey}": {
                    delete: ByProjectKeyCategoriesImportSinkKeyByImportSinkKeyResourceKeyByResourceKeyDeleteHandler
                },
                "import-operations": {
                    get: ByProjectKeyCategoriesImportSinkKeyByImportSinkKeyImportOperationsGetHandler,
                    "{id}": {
                        get: ByProjectKeyCategoriesImportSinkKeyByImportSinkKeyImportOperationsByIdGetHandler
                    }
                }
            }
        },
        "prices": {
            "importSinkKey={importSinkKey}": {
                post: ByProjectKeyPricesImportSinkKeyByImportSinkKeyPostHandler,
                "resourceKey={resourceKey}": {
                    delete: ByProjectKeyPricesImportSinkKeyByImportSinkKeyResourceKeyByResourceKeyDeleteHandler
                },
                "import-operations": {
                    get: ByProjectKeyPricesImportSinkKeyByImportSinkKeyImportOperationsGetHandler,
                    "{id}": {
                        get: ByProjectKeyPricesImportSinkKeyByImportSinkKeyImportOperationsByIdGetHandler
                    }
                }
            }
        },
        "products": {
            "importSinkKey={importSinkKey}": {
                post: ByProjectKeyProductsImportSinkKeyByImportSinkKeyPostHandler,
                "resourceKey={resourceKey}": {
                    delete: ByProjectKeyProductsImportSinkKeyByImportSinkKeyResourceKeyByResourceKeyDeleteHandler
                },
                "import-operations": {
                    get: ByProjectKeyProductsImportSinkKeyByImportSinkKeyImportOperationsGetHandler,
                    "{id}": {
                        get: ByProjectKeyProductsImportSinkKeyByImportSinkKeyImportOperationsByIdGetHandler
                    }
                }
            }
        },
        "product-types": {
            "importSinkKey={importSinkKey}": {
                post: ByProjectKeyProductTypesImportSinkKeyByImportSinkKeyPostHandler,
                "resourceKey={resourceKey}": {
                    delete: ByProjectKeyProductTypesImportSinkKeyByImportSinkKeyResourceKeyByResourceKeyDeleteHandler,
                    "import-operation": {
                    }
                },
                "import-operations": {
                    get: ByProjectKeyProductTypesImportSinkKeyByImportSinkKeyImportOperationsGetHandler,
                    "{id}": {
                        get: ByProjectKeyProductTypesImportSinkKeyByImportSinkKeyImportOperationsByIdGetHandler
                    }
                }
            }
        },
        "product-variants": {
            "importSinkKey={importSinkKey}": {
                post: ByProjectKeyProductVariantsImportSinkKeyByImportSinkKeyPostHandler,
                "resourceKey={resourceKey}": {
                    delete: ByProjectKeyProductVariantsImportSinkKeyByImportSinkKeyResourceKeyByResourceKeyDeleteHandler,
                    "import-operation": {
                    }
                },
                "import-operations": {
                    get: ByProjectKeyProductVariantsImportSinkKeyByImportSinkKeyImportOperationsGetHandler,
                    "{id}": {
                        get: ByProjectKeyProductVariantsImportSinkKeyByImportSinkKeyImportOperationsByIdGetHandler
                    }
                }
            }
        },
        "product-variant-patches": {
            "importSinkKey={importSinkKey}": {
                post: ByProjectKeyProductVariantPatchesImportSinkKeyByImportSinkKeyPostHandler,
                "resourceKey={resourceKey}": {
                },
                "import-operations": {
                    get: ByProjectKeyProductVariantPatchesImportSinkKeyByImportSinkKeyImportOperationsGetHandler,
                    "{id}": {
                        get: ByProjectKeyProductVariantPatchesImportSinkKeyByImportSinkKeyImportOperationsByIdGetHandler
                    }
                }
            }
        }
    }
}

export function toHapiServerRoutes(
   arg: {
       apiServer: ApiServer,
       failAction: Lifecycle.FailAction,
       handleError: ErrorHandler
   }
) : ServerRoute[] {
    const { apiServer, failAction, handleError } = arg
    return [
               {
                  path: '/{projectKey}/import-sinks',
                  method: 'POST',
                  handler: async (request: Request, responseToolkit: ResponseToolkit, err?: Error) => {
                       const method =
                         apiServer['{projectKey}']['import-sinks'].post
                       try {
                         const result = await method({
                           headers: request.headers,
                           pathParams: request.params as any,
                           
                           body: request.payload as any
                         });
                         const response = responseToolkit
                           .response(result.body)
                           .code(result.statusCode);
                         // Add headers to response
                         for (const header in result.headers) {
                           response.header(header, result.headers[header]);
                         }
                         return response;
                        } catch (error) {
                         return handleError({
                           request,
                           responseToolkit,
                           error
                         })
                        }
                  },
                  options: {
                     validate: {
                       payload: importSinkDraftType(),
                       params: {
                         projectKey: requiredString
                       },
                       failAction,
                     },
                   }
               },
               {
                  path: '/{projectKey}/import-sinks',
                  method: 'GET',
                  handler: async (request: Request, responseToolkit: ResponseToolkit, err?: Error) => {
                       const method =
                         apiServer['{projectKey}']['import-sinks'].get
                       try {
                         const result = await method({
                           headers: request.headers,
                           pathParams: request.params as any,
                           queryParams: request.query as any,
                         });
                         const response = responseToolkit
                           .response(result.body)
                           .code(result.statusCode);
                         // Add headers to response
                         for (const header in result.headers) {
                           response.header(header, result.headers[header]);
                         }
                         return response;
                        } catch (error) {
                         return handleError({
                           request,
                           responseToolkit,
                           error
                         })
                        }
                  },
                  options: {
                     validate: {
                       params: {
                         projectKey: requiredString
                       },
                       failAction,
                     },
                   }
               },
               {
                  path: '/{projectKey}/import-sinks/{importSinkKey}',
                  method: 'PUT',
                  handler: async (request: Request, responseToolkit: ResponseToolkit, err?: Error) => {
                       const method =
                         apiServer['{projectKey}']['import-sinks']['{importSinkKey}'].put
                       try {
                         const result = await method({
                           headers: request.headers,
                           pathParams: request.params as any,
                           
                           body: request.payload as any
                         });
                         const response = responseToolkit
                           .response(result.body)
                           .code(result.statusCode);
                         // Add headers to response
                         for (const header in result.headers) {
                           response.header(header, result.headers[header]);
                         }
                         return response;
                        } catch (error) {
                         return handleError({
                           request,
                           responseToolkit,
                           error
                         })
                        }
                  },
                  options: {
                     validate: {
                       payload: importSinkDraftType(),
                       params: {
                         projectKey: requiredString,
                         importSinkKey: requiredString
                       },
                       failAction,
                     },
                   }
               },
               {
                  path: '/{projectKey}/import-sinks/{importSinkKey}',
                  method: 'GET',
                  handler: async (request: Request, responseToolkit: ResponseToolkit, err?: Error) => {
                       const method =
                         apiServer['{projectKey}']['import-sinks']['{importSinkKey}'].get
                       try {
                         const result = await method({
                           headers: request.headers,
                           pathParams: request.params as any,
                           
                         });
                         const response = responseToolkit
                           .response(result.body)
                           .code(result.statusCode);
                         // Add headers to response
                         for (const header in result.headers) {
                           response.header(header, result.headers[header]);
                         }
                         return response;
                        } catch (error) {
                         return handleError({
                           request,
                           responseToolkit,
                           error
                         })
                        }
                  },
                  options: {
                     validate: {
                       params: {
                         projectKey: requiredString,
                         importSinkKey: requiredString
                       },
                       failAction,
                     },
                   }
               },
               {
                  path: '/{projectKey}/import-sinks/{importSinkKey}',
                  method: 'DELETE',
                  handler: async (request: Request, responseToolkit: ResponseToolkit, err?: Error) => {
                       const method =
                         apiServer['{projectKey}']['import-sinks']['{importSinkKey}'].delete
                       try {
                         const result = await method({
                           headers: request.headers,
                           pathParams: request.params as any,
                           
                         });
                         const response = responseToolkit
                           .response(result.body)
                           .code(result.statusCode);
                         // Add headers to response
                         for (const header in result.headers) {
                           response.header(header, result.headers[header]);
                         }
                         return response;
                        } catch (error) {
                         return handleError({
                           request,
                           responseToolkit,
                           error
                         })
                        }
                  },
                  options: {
                     validate: {
                       params: {
                         projectKey: requiredString,
                         importSinkKey: requiredString
                       },
                       failAction,
                     },
                   }
               },
               {
                  path: '/{projectKey}/import-summaries/importSinkKey={importSinkKey}',
                  method: 'GET',
                  handler: async (request: Request, responseToolkit: ResponseToolkit, err?: Error) => {
                       const method =
                         apiServer['{projectKey}']['import-summaries']['importSinkKey={importSinkKey}'].get
                       try {
                         const result = await method({
                           headers: request.headers,
                           pathParams: request.params as any,
                           
                         });
                         const response = responseToolkit
                           .response(result.body)
                           .code(result.statusCode);
                         // Add headers to response
                         for (const header in result.headers) {
                           response.header(header, result.headers[header]);
                         }
                         return response;
                        } catch (error) {
                         return handleError({
                           request,
                           responseToolkit,
                           error
                         })
                        }
                  },
                  options: {
                     validate: {
                       params: {
                         projectKey: requiredString,
                         importSinkKey: requiredString
                       },
                       failAction,
                     },
                   }
               },
               {
                  path: '/{projectKey}/categories/importSinkKey={importSinkKey}',
                  method: 'POST',
                  handler: async (request: Request, responseToolkit: ResponseToolkit, err?: Error) => {
                       const method =
                         apiServer['{projectKey}']['categories']['importSinkKey={importSinkKey}'].post
                       try {
                         const result = await method({
                           headers: request.headers,
                           pathParams: request.params as any,
                           
                           body: request.payload as any
                         });
                         const response = responseToolkit
                           .response(result.body)
                           .code(result.statusCode);
                         // Add headers to response
                         for (const header in result.headers) {
                           response.header(header, result.headers[header]);
                         }
                         return response;
                        } catch (error) {
                         return handleError({
                           request,
                           responseToolkit,
                           error
                         })
                        }
                  },
                  options: {
                     validate: {
                       payload: categoryImportRequestType(),
                       params: {
                         projectKey: requiredString,
                         importSinkKey: requiredString
                       },
                       failAction,
                     },
                   }
               },
               {
                  path: '/{projectKey}/categories/importSinkKey={importSinkKey}/resourceKey={resourceKey}',
                  method: 'DELETE',
                  handler: async (request: Request, responseToolkit: ResponseToolkit, err?: Error) => {
                       const method =
                         apiServer['{projectKey}']['categories']['importSinkKey={importSinkKey}']['resourceKey={resourceKey}'].delete
                       try {
                         const result = await method({
                           headers: request.headers,
                           pathParams: request.params as any,
                           
                         });
                         const response = responseToolkit
                           .response()
                           .code(result.statusCode);
                         // Add headers to response
                         for (const header in result.headers) {
                           response.header(header, result.headers[header]);
                         }
                         return response;
                        } catch (error) {
                         return handleError({
                           request,
                           responseToolkit,
                           error
                         })
                        }
                  },
                  options: {
                     validate: {
                       params: {
                         projectKey: requiredString,
                         importSinkKey: requiredString,
                         resourceKey: requiredString
                       },
                       failAction,
                     },
                   }
               },
               {
                  path: '/{projectKey}/categories/importSinkKey={importSinkKey}/import-operations',
                  method: 'GET',
                  handler: async (request: Request, responseToolkit: ResponseToolkit, err?: Error) => {
                       const method =
                         apiServer['{projectKey}']['categories']['importSinkKey={importSinkKey}']['import-operations'].get
                       try {
                         const result = await method({
                           headers: request.headers,
                           pathParams: request.params as any,
                           queryParams: request.query as any,
                         });
                         const response = responseToolkit
                           .response(result.body)
                           .code(result.statusCode);
                         // Add headers to response
                         for (const header in result.headers) {
                           response.header(header, result.headers[header]);
                         }
                         return response;
                        } catch (error) {
                         return handleError({
                           request,
                           responseToolkit,
                           error
                         })
                        }
                  },
                  options: {
                     validate: {
                       params: {
                         projectKey: requiredString,
                         importSinkKey: requiredString
                       },
                       failAction,
                     },
                   }
               },
               {
                  path: '/{projectKey}/categories/importSinkKey={importSinkKey}/import-operations/{id}',
                  method: 'GET',
                  handler: async (request: Request, responseToolkit: ResponseToolkit, err?: Error) => {
                       const method =
                         apiServer['{projectKey}']['categories']['importSinkKey={importSinkKey}']['import-operations']['{id}'].get
                       try {
                         const result = await method({
                           headers: request.headers,
                           pathParams: request.params as any,
                           
                         });
                         const response = responseToolkit
                           .response(result.body)
                           .code(result.statusCode);
                         // Add headers to response
                         for (const header in result.headers) {
                           response.header(header, result.headers[header]);
                         }
                         return response;
                        } catch (error) {
                         return handleError({
                           request,
                           responseToolkit,
                           error
                         })
                        }
                  },
                  options: {
                     validate: {
                       params: {
                         projectKey: requiredString,
                         importSinkKey: requiredString,
                         id: requiredString
                       },
                       failAction,
                     },
                   }
               },
               {
                  path: '/{projectKey}/prices/importSinkKey={importSinkKey}',
                  method: 'POST',
                  handler: async (request: Request, responseToolkit: ResponseToolkit, err?: Error) => {
                       const method =
                         apiServer['{projectKey}']['prices']['importSinkKey={importSinkKey}'].post
                       try {
                         const result = await method({
                           headers: request.headers,
                           pathParams: request.params as any,
                           
                           body: request.payload as any
                         });
                         const response = responseToolkit
                           .response(result.body)
                           .code(result.statusCode);
                         // Add headers to response
                         for (const header in result.headers) {
                           response.header(header, result.headers[header]);
                         }
                         return response;
                        } catch (error) {
                         return handleError({
                           request,
                           responseToolkit,
                           error
                         })
                        }
                  },
                  options: {
                     validate: {
                       payload: priceImportRequestType(),
                       params: {
                         projectKey: requiredString,
                         importSinkKey: requiredString
                       },
                       failAction,
                     },
                   }
               },
               {
                  path: '/{projectKey}/prices/importSinkKey={importSinkKey}/resourceKey={resourceKey}',
                  method: 'DELETE',
                  handler: async (request: Request, responseToolkit: ResponseToolkit, err?: Error) => {
                       const method =
                         apiServer['{projectKey}']['prices']['importSinkKey={importSinkKey}']['resourceKey={resourceKey}'].delete
                       try {
                         const result = await method({
                           headers: request.headers,
                           pathParams: request.params as any,
                           
                         });
                         const response = responseToolkit
                           .response()
                           .code(result.statusCode);
                         // Add headers to response
                         for (const header in result.headers) {
                           response.header(header, result.headers[header]);
                         }
                         return response;
                        } catch (error) {
                         return handleError({
                           request,
                           responseToolkit,
                           error
                         })
                        }
                  },
                  options: {
                     validate: {
                       params: {
                         projectKey: requiredString,
                         importSinkKey: requiredString,
                         resourceKey: requiredString
                       },
                       failAction,
                     },
                   }
               },
               {
                  path: '/{projectKey}/prices/importSinkKey={importSinkKey}/import-operations',
                  method: 'GET',
                  handler: async (request: Request, responseToolkit: ResponseToolkit, err?: Error) => {
                       const method =
                         apiServer['{projectKey}']['prices']['importSinkKey={importSinkKey}']['import-operations'].get
                       try {
                         const result = await method({
                           headers: request.headers,
                           pathParams: request.params as any,
                           queryParams: request.query as any,
                         });
                         const response = responseToolkit
                           .response(result.body)
                           .code(result.statusCode);
                         // Add headers to response
                         for (const header in result.headers) {
                           response.header(header, result.headers[header]);
                         }
                         return response;
                        } catch (error) {
                         return handleError({
                           request,
                           responseToolkit,
                           error
                         })
                        }
                  },
                  options: {
                     validate: {
                       params: {
                         projectKey: requiredString,
                         importSinkKey: requiredString
                       },
                       failAction,
                     },
                   }
               },
               {
                  path: '/{projectKey}/prices/importSinkKey={importSinkKey}/import-operations/{id}',
                  method: 'GET',
                  handler: async (request: Request, responseToolkit: ResponseToolkit, err?: Error) => {
                       const method =
                         apiServer['{projectKey}']['prices']['importSinkKey={importSinkKey}']['import-operations']['{id}'].get
                       try {
                         const result = await method({
                           headers: request.headers,
                           pathParams: request.params as any,
                           
                         });
                         const response = responseToolkit
                           .response(result.body)
                           .code(result.statusCode);
                         // Add headers to response
                         for (const header in result.headers) {
                           response.header(header, result.headers[header]);
                         }
                         return response;
                        } catch (error) {
                         return handleError({
                           request,
                           responseToolkit,
                           error
                         })
                        }
                  },
                  options: {
                     validate: {
                       params: {
                         projectKey: requiredString,
                         importSinkKey: requiredString,
                         id: requiredString
                       },
                       failAction,
                     },
                   }
               },
               {
                  path: '/{projectKey}/products/importSinkKey={importSinkKey}',
                  method: 'POST',
                  handler: async (request: Request, responseToolkit: ResponseToolkit, err?: Error) => {
                       const method =
                         apiServer['{projectKey}']['products']['importSinkKey={importSinkKey}'].post
                       try {
                         const result = await method({
                           headers: request.headers,
                           pathParams: request.params as any,
                           
                           body: request.payload as any
                         });
                         const response = responseToolkit
                           .response(result.body)
                           .code(result.statusCode);
                         // Add headers to response
                         for (const header in result.headers) {
                           response.header(header, result.headers[header]);
                         }
                         return response;
                        } catch (error) {
                         return handleError({
                           request,
                           responseToolkit,
                           error
                         })
                        }
                  },
                  options: {
                     validate: {
                       payload: productImportRequestType(),
                       params: {
                         projectKey: requiredString,
                         importSinkKey: requiredString
                       },
                       failAction,
                     },
                   }
               },
               {
                  path: '/{projectKey}/products/importSinkKey={importSinkKey}/resourceKey={resourceKey}',
                  method: 'DELETE',
                  handler: async (request: Request, responseToolkit: ResponseToolkit, err?: Error) => {
                       const method =
                         apiServer['{projectKey}']['products']['importSinkKey={importSinkKey}']['resourceKey={resourceKey}'].delete
                       try {
                         const result = await method({
                           headers: request.headers,
                           pathParams: request.params as any,
                           
                         });
                         const response = responseToolkit
                           .response()
                           .code(result.statusCode);
                         // Add headers to response
                         for (const header in result.headers) {
                           response.header(header, result.headers[header]);
                         }
                         return response;
                        } catch (error) {
                         return handleError({
                           request,
                           responseToolkit,
                           error
                         })
                        }
                  },
                  options: {
                     validate: {
                       params: {
                         projectKey: requiredString,
                         importSinkKey: requiredString,
                         resourceKey: requiredString
                       },
                       failAction,
                     },
                   }
               },
               {
                  path: '/{projectKey}/products/importSinkKey={importSinkKey}/import-operations',
                  method: 'GET',
                  handler: async (request: Request, responseToolkit: ResponseToolkit, err?: Error) => {
                       const method =
                         apiServer['{projectKey}']['products']['importSinkKey={importSinkKey}']['import-operations'].get
                       try {
                         const result = await method({
                           headers: request.headers,
                           pathParams: request.params as any,
                           queryParams: request.query as any,
                         });
                         const response = responseToolkit
                           .response(result.body)
                           .code(result.statusCode);
                         // Add headers to response
                         for (const header in result.headers) {
                           response.header(header, result.headers[header]);
                         }
                         return response;
                        } catch (error) {
                         return handleError({
                           request,
                           responseToolkit,
                           error
                         })
                        }
                  },
                  options: {
                     validate: {
                       params: {
                         projectKey: requiredString,
                         importSinkKey: requiredString
                       },
                       failAction,
                     },
                   }
               },
               {
                  path: '/{projectKey}/products/importSinkKey={importSinkKey}/import-operations/{id}',
                  method: 'GET',
                  handler: async (request: Request, responseToolkit: ResponseToolkit, err?: Error) => {
                       const method =
                         apiServer['{projectKey}']['products']['importSinkKey={importSinkKey}']['import-operations']['{id}'].get
                       try {
                         const result = await method({
                           headers: request.headers,
                           pathParams: request.params as any,
                           
                         });
                         const response = responseToolkit
                           .response(result.body)
                           .code(result.statusCode);
                         // Add headers to response
                         for (const header in result.headers) {
                           response.header(header, result.headers[header]);
                         }
                         return response;
                        } catch (error) {
                         return handleError({
                           request,
                           responseToolkit,
                           error
                         })
                        }
                  },
                  options: {
                     validate: {
                       params: {
                         projectKey: requiredString,
                         importSinkKey: requiredString,
                         id: requiredString
                       },
                       failAction,
                     },
                   }
               },
               {
                  path: '/{projectKey}/product-types/importSinkKey={importSinkKey}',
                  method: 'POST',
                  handler: async (request: Request, responseToolkit: ResponseToolkit, err?: Error) => {
                       const method =
                         apiServer['{projectKey}']['product-types']['importSinkKey={importSinkKey}'].post
                       try {
                         const result = await method({
                           headers: request.headers,
                           pathParams: request.params as any,
                           
                           body: request.payload as any
                         });
                         const response = responseToolkit
                           .response(result.body)
                           .code(result.statusCode);
                         // Add headers to response
                         for (const header in result.headers) {
                           response.header(header, result.headers[header]);
                         }
                         return response;
                        } catch (error) {
                         return handleError({
                           request,
                           responseToolkit,
                           error
                         })
                        }
                  },
                  options: {
                     validate: {
                       payload: productTypeImportRequestType(),
                       params: {
                         projectKey: requiredString,
                         importSinkKey: requiredString
                       },
                       failAction,
                     },
                   }
               },
               {
                  path: '/{projectKey}/product-types/importSinkKey={importSinkKey}/resourceKey={resourceKey}',
                  method: 'DELETE',
                  handler: async (request: Request, responseToolkit: ResponseToolkit, err?: Error) => {
                       const method =
                         apiServer['{projectKey}']['product-types']['importSinkKey={importSinkKey}']['resourceKey={resourceKey}'].delete
                       try {
                         const result = await method({
                           headers: request.headers,
                           pathParams: request.params as any,
                           
                         });
                         const response = responseToolkit
                           .response()
                           .code(result.statusCode);
                         // Add headers to response
                         for (const header in result.headers) {
                           response.header(header, result.headers[header]);
                         }
                         return response;
                        } catch (error) {
                         return handleError({
                           request,
                           responseToolkit,
                           error
                         })
                        }
                  },
                  options: {
                     validate: {
                       params: {
                         projectKey: requiredString,
                         importSinkKey: requiredString,
                         resourceKey: requiredString
                       },
                       failAction,
                     },
                   }
               },
               {
                  path: '/{projectKey}/product-types/importSinkKey={importSinkKey}/import-operations',
                  method: 'GET',
                  handler: async (request: Request, responseToolkit: ResponseToolkit, err?: Error) => {
                       const method =
                         apiServer['{projectKey}']['product-types']['importSinkKey={importSinkKey}']['import-operations'].get
                       try {
                         const result = await method({
                           headers: request.headers,
                           pathParams: request.params as any,
                           queryParams: request.query as any,
                         });
                         const response = responseToolkit
                           .response(result.body)
                           .code(result.statusCode);
                         // Add headers to response
                         for (const header in result.headers) {
                           response.header(header, result.headers[header]);
                         }
                         return response;
                        } catch (error) {
                         return handleError({
                           request,
                           responseToolkit,
                           error
                         })
                        }
                  },
                  options: {
                     validate: {
                       params: {
                         projectKey: requiredString,
                         importSinkKey: requiredString
                       },
                       failAction,
                     },
                   }
               },
               {
                  path: '/{projectKey}/product-types/importSinkKey={importSinkKey}/import-operations/{id}',
                  method: 'GET',
                  handler: async (request: Request, responseToolkit: ResponseToolkit, err?: Error) => {
                       const method =
                         apiServer['{projectKey}']['product-types']['importSinkKey={importSinkKey}']['import-operations']['{id}'].get
                       try {
                         const result = await method({
                           headers: request.headers,
                           pathParams: request.params as any,
                           
                         });
                         const response = responseToolkit
                           .response(result.body)
                           .code(result.statusCode);
                         // Add headers to response
                         for (const header in result.headers) {
                           response.header(header, result.headers[header]);
                         }
                         return response;
                        } catch (error) {
                         return handleError({
                           request,
                           responseToolkit,
                           error
                         })
                        }
                  },
                  options: {
                     validate: {
                       params: {
                         projectKey: requiredString,
                         importSinkKey: requiredString,
                         id: requiredString
                       },
                       failAction,
                     },
                   }
               },
               {
                  path: '/{projectKey}/product-variants/importSinkKey={importSinkKey}',
                  method: 'POST',
                  handler: async (request: Request, responseToolkit: ResponseToolkit, err?: Error) => {
                       const method =
                         apiServer['{projectKey}']['product-variants']['importSinkKey={importSinkKey}'].post
                       try {
                         const result = await method({
                           headers: request.headers,
                           pathParams: request.params as any,
                           
                           body: request.payload as any
                         });
                         const response = responseToolkit
                           .response(result.body)
                           .code(result.statusCode);
                         // Add headers to response
                         for (const header in result.headers) {
                           response.header(header, result.headers[header]);
                         }
                         return response;
                        } catch (error) {
                         return handleError({
                           request,
                           responseToolkit,
                           error
                         })
                        }
                  },
                  options: {
                     validate: {
                       payload: productVariantImportRequestType(),
                       params: {
                         projectKey: requiredString,
                         importSinkKey: requiredString
                       },
                       failAction,
                     },
                   }
               },
               {
                  path: '/{projectKey}/product-variants/importSinkKey={importSinkKey}/resourceKey={resourceKey}',
                  method: 'DELETE',
                  handler: async (request: Request, responseToolkit: ResponseToolkit, err?: Error) => {
                       const method =
                         apiServer['{projectKey}']['product-variants']['importSinkKey={importSinkKey}']['resourceKey={resourceKey}'].delete
                       try {
                         const result = await method({
                           headers: request.headers,
                           pathParams: request.params as any,
                           
                         });
                         const response = responseToolkit
                           .response()
                           .code(result.statusCode);
                         // Add headers to response
                         for (const header in result.headers) {
                           response.header(header, result.headers[header]);
                         }
                         return response;
                        } catch (error) {
                         return handleError({
                           request,
                           responseToolkit,
                           error
                         })
                        }
                  },
                  options: {
                     validate: {
                       params: {
                         projectKey: requiredString,
                         importSinkKey: requiredString,
                         resourceKey: requiredString
                       },
                       failAction,
                     },
                   }
               },
               {
                  path: '/{projectKey}/product-variants/importSinkKey={importSinkKey}/import-operations',
                  method: 'GET',
                  handler: async (request: Request, responseToolkit: ResponseToolkit, err?: Error) => {
                       const method =
                         apiServer['{projectKey}']['product-variants']['importSinkKey={importSinkKey}']['import-operations'].get
                       try {
                         const result = await method({
                           headers: request.headers,
                           pathParams: request.params as any,
                           queryParams: request.query as any,
                         });
                         const response = responseToolkit
                           .response(result.body)
                           .code(result.statusCode);
                         // Add headers to response
                         for (const header in result.headers) {
                           response.header(header, result.headers[header]);
                         }
                         return response;
                        } catch (error) {
                         return handleError({
                           request,
                           responseToolkit,
                           error
                         })
                        }
                  },
                  options: {
                     validate: {
                       params: {
                         projectKey: requiredString,
                         importSinkKey: requiredString
                       },
                       failAction,
                     },
                   }
               },
               {
                  path: '/{projectKey}/product-variants/importSinkKey={importSinkKey}/import-operations/{id}',
                  method: 'GET',
                  handler: async (request: Request, responseToolkit: ResponseToolkit, err?: Error) => {
                       const method =
                         apiServer['{projectKey}']['product-variants']['importSinkKey={importSinkKey}']['import-operations']['{id}'].get
                       try {
                         const result = await method({
                           headers: request.headers,
                           pathParams: request.params as any,
                           
                         });
                         const response = responseToolkit
                           .response(result.body)
                           .code(result.statusCode);
                         // Add headers to response
                         for (const header in result.headers) {
                           response.header(header, result.headers[header]);
                         }
                         return response;
                        } catch (error) {
                         return handleError({
                           request,
                           responseToolkit,
                           error
                         })
                        }
                  },
                  options: {
                     validate: {
                       params: {
                         projectKey: requiredString,
                         importSinkKey: requiredString,
                         id: requiredString
                       },
                       failAction,
                     },
                   }
               },
               {
                  path: '/{projectKey}/product-variant-patches/importSinkKey={importSinkKey}',
                  method: 'POST',
                  handler: async (request: Request, responseToolkit: ResponseToolkit, err?: Error) => {
                       const method =
                         apiServer['{projectKey}']['product-variant-patches']['importSinkKey={importSinkKey}'].post
                       try {
                         const result = await method({
                           headers: request.headers,
                           pathParams: request.params as any,
                           
                           body: request.payload as any
                         });
                         const response = responseToolkit
                           .response(result.body)
                           .code(result.statusCode);
                         // Add headers to response
                         for (const header in result.headers) {
                           response.header(header, result.headers[header]);
                         }
                         return response;
                        } catch (error) {
                         return handleError({
                           request,
                           responseToolkit,
                           error
                         })
                        }
                  },
                  options: {
                     validate: {
                       payload: productVariantPatchRequestType(),
                       params: {
                         projectKey: requiredString,
                         importSinkKey: requiredString
                       },
                       failAction,
                     },
                   }
               },
               {
                  path: '/{projectKey}/product-variant-patches/importSinkKey={importSinkKey}/import-operations',
                  method: 'GET',
                  handler: async (request: Request, responseToolkit: ResponseToolkit, err?: Error) => {
                       const method =
                         apiServer['{projectKey}']['product-variant-patches']['importSinkKey={importSinkKey}']['import-operations'].get
                       try {
                         const result = await method({
                           headers: request.headers,
                           pathParams: request.params as any,
                           queryParams: request.query as any,
                         });
                         const response = responseToolkit
                           .response(result.body)
                           .code(result.statusCode);
                         // Add headers to response
                         for (const header in result.headers) {
                           response.header(header, result.headers[header]);
                         }
                         return response;
                        } catch (error) {
                         return handleError({
                           request,
                           responseToolkit,
                           error
                         })
                        }
                  },
                  options: {
                     validate: {
                       params: {
                         projectKey: requiredString,
                         importSinkKey: requiredString
                       },
                       failAction,
                     },
                   }
               },
               {
                  path: '/{projectKey}/product-variant-patches/importSinkKey={importSinkKey}/import-operations/{id}',
                  method: 'GET',
                  handler: async (request: Request, responseToolkit: ResponseToolkit, err?: Error) => {
                       const method =
                         apiServer['{projectKey}']['product-variant-patches']['importSinkKey={importSinkKey}']['import-operations']['{id}'].get
                       try {
                         const result = await method({
                           headers: request.headers,
                           pathParams: request.params as any,
                           
                         });
                         const response = responseToolkit
                           .response(result.body)
                           .code(result.statusCode);
                         // Add headers to response
                         for (const header in result.headers) {
                           response.header(header, result.headers[header]);
                         }
                         return response;
                        } catch (error) {
                         return handleError({
                           request,
                           responseToolkit,
                           error
                         })
                        }
                  },
                  options: {
                     validate: {
                       params: {
                         projectKey: requiredString,
                         importSinkKey: requiredString,
                         id: requiredString
                       },
                       failAction,
                     },
                   }
               }
           ]
}