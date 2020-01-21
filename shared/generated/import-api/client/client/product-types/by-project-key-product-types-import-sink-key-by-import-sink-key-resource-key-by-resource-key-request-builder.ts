
import { ByProjectKeyProductTypesImportSinkKeyByImportSinkKeyResourceKeyByResourceKeyImportOperationRequestBuilder } from './../import-operation/by-project-key-product-types-import-sink-key-by-import-sink-key-resource-key-by-resource-key-import-operation-request-builder'
import { ApiRequestExecutor, ApiRequest } from './../../base/requests-utils'

export class ByProjectKeyProductTypesImportSinkKeyByImportSinkKeyResourceKeyByResourceKeyRequestBuilder {

    
      constructor(
        protected readonly args: {
          pathArgs: {
                projectKey: string,
                importSinkKey: string,
                resourceKey: string
           },
          apiRequestExecutor: ApiRequestExecutor;
        }
      ) {}
    public importOperation(): ByProjectKeyProductTypesImportSinkKeyByImportSinkKeyResourceKeyByResourceKeyImportOperationRequestBuilder {
       return new ByProjectKeyProductTypesImportSinkKeyByImportSinkKeyResourceKeyByResourceKeyImportOperationRequestBuilder(
             {
                pathArgs: {
                   ...this.args.pathArgs,
                },
                apiRequestExecutor: this.args.apiRequestExecutor
             }
       )
    }
    
    /**
    *	Deletes the product type given by the resource key.
    */
    public delete(
                  methodArgs?:{
                     
                     headers?: {
                        [key:string]:string
                     },
                  }): ApiRequest<void> {
       return new ApiRequest<void>(
           {
              baseURL: 'https://import.commercetools.com',
              method: 'DELETE',
              uriTemplate: '/{projectKey}/product-types/importSinkKey={importSinkKey}/resourceKey={resourceKey}',
              pathVariables: this.args.pathArgs,
              headers: {
                  ...methodArgs?.headers
              },
           },
           this.args.apiRequestExecutor
       )
    }
    

}
