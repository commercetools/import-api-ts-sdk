
import { ByProjectKeyProductVariantPatchesImportSinkKeyByImportSinkKeyImportOperationsByIdRequestBuilder } from './by-project-key-product-variant-patches-import-sink-key-by-import-sink-key-import-operations-by-id-request-builder'
import { ProcessingState } from './../../models/common'
import { ImportOperationPagedResponse } from './../../models/importoperations'
import { ApiRequestExecutor, ApiRequest } from './../../base/requests-utils'

export class ByProjectKeyProductVariantPatchesImportSinkKeyByImportSinkKeyImportOperationsRequestBuilder {

    
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
    ): ByProjectKeyProductVariantPatchesImportSinkKeyByImportSinkKeyImportOperationsByIdRequestBuilder {
       return new ByProjectKeyProductVariantPatchesImportSinkKeyByImportSinkKeyImportOperationsByIdRequestBuilder(
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
    *	Retrieves all product-variant-patches import operations of an import sink key.
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
              uriTemplate: '/{projectKey}/product-variant-patches/importSinkKey={importSinkKey}/import-operations',
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
