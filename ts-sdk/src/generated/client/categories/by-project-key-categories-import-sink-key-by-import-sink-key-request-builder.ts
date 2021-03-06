
import { ByProjectKeyCategoriesImportSinkKeyByImportSinkKeyResourceKeyByResourceKeyRequestBuilder } from './by-project-key-categories-import-sink-key-by-import-sink-key-resource-key-by-resource-key-request-builder'
import { ByProjectKeyCategoriesImportSinkKeyByImportSinkKeyImportOperationsRequestBuilder } from './../import-operations/by-project-key-categories-import-sink-key-by-import-sink-key-import-operations-request-builder'
import { CategoryImportRequest, ImportResponse } from './../../models/importrequests'
import { ApiRequestExecutor, ApiRequest } from './../../base/requests-utils'

export class ByProjectKeyCategoriesImportSinkKeyByImportSinkKeyRequestBuilder {

    
      constructor(
        protected readonly args: {
          pathArgs: {
                projectKey: string,
                importSinkKey: string
           },
          apiRequestExecutor: ApiRequestExecutor;
        }
      ) {}
    public resourceKeyWithResourceKeyValue(
       childPathArgs: {
           resourceKey: string
       }
    ): ByProjectKeyCategoriesImportSinkKeyByImportSinkKeyResourceKeyByResourceKeyRequestBuilder {
       return new ByProjectKeyCategoriesImportSinkKeyByImportSinkKeyResourceKeyByResourceKeyRequestBuilder(
             {
                pathArgs: {
                   ...this.args.pathArgs,
                   ...childPathArgs
                },
                apiRequestExecutor: this.args.apiRequestExecutor
             }
       )
    }
    public importOperations(): ByProjectKeyCategoriesImportSinkKeyByImportSinkKeyImportOperationsRequestBuilder {
       return new ByProjectKeyCategoriesImportSinkKeyByImportSinkKeyImportOperationsRequestBuilder(
             {
                pathArgs: {
                   ...this.args.pathArgs,
                },
                apiRequestExecutor: this.args.apiRequestExecutor
             }
       )
    }
    
    /**
    *	Creates a new import request for a category
    */
    public post(
                methodArgs:{
                   
                   body: CategoryImportRequest,
                   headers?: {
                      [key:string]:string
                   },
                }): ApiRequest<ImportResponse> {
       return new ApiRequest<ImportResponse>(
           {
              baseURL: 'https://import.commercetools.com',
              method: 'POST',
              uriTemplate: '/{projectKey}/categories/importSinkKey={importSinkKey}',
              pathVariables: this.args.pathArgs,
              headers: {
                  'Content-Type': 'application/json',
                  ...methodArgs?.headers
              },
              body: methodArgs?.body,
           },
           this.args.apiRequestExecutor
       )
    }
    

}
