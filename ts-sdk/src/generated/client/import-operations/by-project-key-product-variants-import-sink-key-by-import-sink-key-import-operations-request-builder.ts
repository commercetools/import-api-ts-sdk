
import { ByProjectKeyProductVariantsImportSinkKeyByImportSinkKeyImportOperationsByIdRequestBuilder } from './by-project-key-product-variants-import-sink-key-by-import-sink-key-import-operations-by-id-request-builder'
import { ProcessingState } from './../../models/common'
import { ImportOperationPagedResponse } from './../../models/importoperations'
import { ApiRequestExecutor, ApiRequest } from './../../base/requests-utils'

export class ByProjectKeyProductVariantsImportSinkKeyByImportSinkKeyImportOperationsRequestBuilder {

    
      constructor(
        protected readonly args: {
          pathArgs: {
                projectKey: string,
                importSinkKey: string
           },
          apiRequestExecutor: ApiRequestExecutor;
        }
      ) {}
    public withIdValue(
       childPathArgs: {
           id: string
       }
    ): ByProjectKeyProductVariantsImportSinkKeyByImportSinkKeyImportOperationsByIdRequestBuilder {
       return new ByProjectKeyProductVariantsImportSinkKeyByImportSinkKeyImportOperationsByIdRequestBuilder(
             {
                pathArgs: {
                   ...this.args.pathArgs,
                   ...childPathArgs
                },
                apiRequestExecutor: this.args.apiRequestExecutor
             }
       )
    }
    
    /**
    *	Retrieves all product-variant import operations of an import sink key.
    */
    public get(
               methodArgs?:{
                  
                  queryArgs?: {
                     'limit'?: number | number[]
                     'offset'?: number | number[]
                     'resourceKey'?: string | string[]
                     'state'?: ProcessingState | ProcessingState[]
                  },
                  headers?: {
                     [key:string]:string
                  },
               }): ApiRequest<ImportOperationPagedResponse> {
       return new ApiRequest<ImportOperationPagedResponse>(
           {
              baseURL: 'https://import.commercetools.com',
              method: 'GET',
              uriTemplate: '/{projectKey}/product-variants/importSinkKey={importSinkKey}/import-operations',
              pathVariables: this.args.pathArgs,
              headers: {
                  ...methodArgs?.headers
              },
              queryParams: methodArgs?.queryArgs,
           },
           this.args.apiRequestExecutor
       )
    }
    

}
