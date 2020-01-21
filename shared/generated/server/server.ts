import * as Joi from 'joi'
import { ByProjectKeyImportSinksPostHandler } from './parameters'
import { ByProjectKeyImportSinksGetHandler } from './parameters'
import { ByProjectKeyImportOperationPutHandler } from './parameters'
import { ByProjectKeyImportOperationPostHandler } from './parameters'
import { ByProjectKeyImportOperationGetHandler } from './parameters'
import { ByProjectKeyPriceMappingPostHandler } from './parameters'
import { ByProjectKeyUnresolvedImportResourcePostHandler } from './parameters'
import { ByProjectKeyUnresolvedImportResourceGetHandler } from './parameters'
import { ByProjectKeyImportSinksByImportSinkKeyPutHandler } from './parameters'
import { ByProjectKeyImportSinksByImportSinkKeyGetHandler } from './parameters'
import { ByProjectKeyImportSinksByImportSinkKeyDeleteHandler } from './parameters'
import { ByProjectKeyImportSummariesImportSinkKeyByImportSinkKeyGetHandler } from './parameters'
import { ByProjectKeyImportOperationByIdGetHandler } from './parameters'
import { ByProjectKeyImportOperationByIdDeleteHandler } from './parameters'
import { ByProjectKeyPriceMappingByKeyGetHandler } from './parameters'
import { ByProjectKeyPriceMappingByKeyDeleteHandler } from './parameters'
import { ByProjectKeyUnresolvedImportResourceByIdDeleteHandler } from './parameters'
import { ByProjectKeyUnresolvedImportResourceByIdGetHandler } from './parameters'
import { Resource } from './common'
import { ServerRoute } from '@hapi/hapi'
import { Lifecycle } from '@hapi/hapi'
import { Request } from '@hapi/hapi'
import { ResponseToolkit } from '@hapi/hapi'
import { ErrorHandler } from './common'
import { importSinkDraftType } from './../joi/importsinks-types'
import { importOperationDraftType } from './../joi/importoperations-types'
import { priceMappingType } from './../joi/pricemapping-types'
import { unresolvedImportResourceType } from './../joi/importresources-types'

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
        "import-operation": {
            put: ByProjectKeyImportOperationPutHandler,
            post: ByProjectKeyImportOperationPostHandler,
            get: ByProjectKeyImportOperationGetHandler,
            "{id}": {
                get: ByProjectKeyImportOperationByIdGetHandler,
                delete: ByProjectKeyImportOperationByIdDeleteHandler
            }
        },
        "price-mapping": {
            post: ByProjectKeyPriceMappingPostHandler,
            "{key}": {
                get: ByProjectKeyPriceMappingByKeyGetHandler,
                delete: ByProjectKeyPriceMappingByKeyDeleteHandler
            }
        },
        "unresolved-import-resource": {
            post: ByProjectKeyUnresolvedImportResourcePostHandler,
            get: ByProjectKeyUnresolvedImportResourceGetHandler,
            "{id}": {
                delete: ByProjectKeyUnresolvedImportResourceByIdDeleteHandler,
                get: ByProjectKeyUnresolvedImportResourceByIdGetHandler
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
                  path: '/{projectKey}/import-operation',
                  method: 'PUT',
                  handler: async (request: Request, responseToolkit: ResponseToolkit, err?: Error) => {
                       const method =
                         apiServer['{projectKey}']['import-operation'].put
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
                       payload: importOperationDraftType(),
                       params: {
                         projectKey: requiredString
                       },
                       failAction,
                     },
                   }
               },
               {
                  path: '/{projectKey}/import-operation',
                  method: 'POST',
                  handler: async (request: Request, responseToolkit: ResponseToolkit, err?: Error) => {
                       const method =
                         apiServer['{projectKey}']['import-operation'].post
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
                       payload: importOperationDraftType(),
                       params: {
                         projectKey: requiredString
                       },
                       failAction,
                     },
                   }
               },
               {
                  path: '/{projectKey}/import-operation',
                  method: 'GET',
                  handler: async (request: Request, responseToolkit: ResponseToolkit, err?: Error) => {
                       const method =
                         apiServer['{projectKey}']['import-operation'].get
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
                  path: '/{projectKey}/price-mapping',
                  method: 'POST',
                  handler: async (request: Request, responseToolkit: ResponseToolkit, err?: Error) => {
                       const method =
                         apiServer['{projectKey}']['price-mapping'].post
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
                       payload: priceMappingType(),
                       params: {
                         projectKey: requiredString
                       },
                       failAction,
                     },
                   }
               },
               {
                  path: '/{projectKey}/unresolved-import-resource',
                  method: 'POST',
                  handler: async (request: Request, responseToolkit: ResponseToolkit, err?: Error) => {
                       const method =
                         apiServer['{projectKey}']['unresolved-import-resource'].post
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
                       payload: unresolvedImportResourceType(),
                       params: {
                         projectKey: requiredString
                       },
                       failAction,
                     },
                   }
               },
               {
                  path: '/{projectKey}/unresolved-import-resource',
                  method: 'GET',
                  handler: async (request: Request, responseToolkit: ResponseToolkit, err?: Error) => {
                       const method =
                         apiServer['{projectKey}']['unresolved-import-resource'].get
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
                  path: '/{projectKey}/import-operation/{id}',
                  method: 'GET',
                  handler: async (request: Request, responseToolkit: ResponseToolkit, err?: Error) => {
                       const method =
                         apiServer['{projectKey}']['import-operation']['{id}'].get
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
                         id: requiredString
                       },
                       failAction,
                     },
                   }
               },
               {
                  path: '/{projectKey}/import-operation/{id}',
                  method: 'DELETE',
                  handler: async (request: Request, responseToolkit: ResponseToolkit, err?: Error) => {
                       const method =
                         apiServer['{projectKey}']['import-operation']['{id}'].delete
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
                         id: requiredString
                       },
                       failAction,
                     },
                   }
               },
               {
                  path: '/{projectKey}/price-mapping/{key}',
                  method: 'GET',
                  handler: async (request: Request, responseToolkit: ResponseToolkit, err?: Error) => {
                       const method =
                         apiServer['{projectKey}']['price-mapping']['{key}'].get
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
                         key: requiredString
                       },
                       failAction,
                     },
                   }
               },
               {
                  path: '/{projectKey}/price-mapping/{key}',
                  method: 'DELETE',
                  handler: async (request: Request, responseToolkit: ResponseToolkit, err?: Error) => {
                       const method =
                         apiServer['{projectKey}']['price-mapping']['{key}'].delete
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
                         key: requiredString
                       },
                       failAction,
                     },
                   }
               },
               {
                  path: '/{projectKey}/unresolved-import-resource/{id}',
                  method: 'DELETE',
                  handler: async (request: Request, responseToolkit: ResponseToolkit, err?: Error) => {
                       const method =
                         apiServer['{projectKey}']['unresolved-import-resource']['{id}'].delete
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
                         id: requiredString
                       },
                       failAction,
                     },
                   }
               },
               {
                  path: '/{projectKey}/unresolved-import-resource/{id}',
                  method: 'GET',
                  handler: async (request: Request, responseToolkit: ResponseToolkit, err?: Error) => {
                       const method =
                         apiServer['{projectKey}']['unresolved-import-resource']['{id}'].get
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
                         id: requiredString
                       },
                       failAction,
                     },
                   }
               }
           ]
}