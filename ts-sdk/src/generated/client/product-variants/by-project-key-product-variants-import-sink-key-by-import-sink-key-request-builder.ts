
import { ByProjectKeyProductVariantsImportSinkKeyByImportSinkKeyImportOperationsRequestBuilder } from './../import-operations/by-project-key-product-variants-import-sink-key-by-import-sink-key-import-operations-request-builder'
import { ByProjectKeyProductVariantsImportSinkKeyByImportSinkKeyResourceKeyByResourceKeyRequestBuilder } from './by-project-key-product-variants-import-sink-key-by-import-sink-key-resource-key-by-resource-key-request-builder'
import { ImportResponse, ProductVariantImportRequest } from './../../models/importrequests'
import { ApiRequestExecutor, ApiRequest } from './../../base/requests-utils'

export class ByProjectKeyProductVariantsImportSinkKeyByImportSinkKeyRequestBuilder {

    
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
    ): ByProjectKeyProductVariantsImportSinkKeyByImportSinkKeyResourceKeyByResourceKeyRequestBuilder {
       return new ByProjectKeyProductVariantsImportSinkKeyByImportSinkKeyResourceKeyByResourceKeyRequestBuilder(
             {
                pathArgs: {
                   ...this.args.pathArgs,
                   ...childPathArgs
                },
                apiRequestExecutor: this.args.apiRequestExecutor
             }
       )
    }
    public importOperations(): ByProjectKeyProductVariantsImportSinkKeyByImportSinkKeyImportOperationsRequestBuilder {
       return new ByProjectKeyProductVariantsImportSinkKeyByImportSinkKeyImportOperationsRequestBuilder(
             {
                pathArgs: {
                   ...this.args.pathArgs,
                },
                apiRequestExecutor: this.args.apiRequestExecutor
             }
       )
    }
    
    /**
    *	Creates a new import request for product variants
    */
    public post(
                methodArgs:{
                   
                   body: ProductVariantImportRequest,
                   headers?: {
                      [key:string]:string
                   },
                }): ApiRequest<ImportResponse> {
       return new ApiRequest<ImportResponse>(
           {
              baseURL: 'https://import.commercetools.com',
              method: 'POST',
              uriTemplate: '/{projectKey}/product-variants/importSinkKey={importSinkKey}',
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
