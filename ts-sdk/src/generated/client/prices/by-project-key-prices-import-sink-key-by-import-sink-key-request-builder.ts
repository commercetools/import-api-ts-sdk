
import { ByProjectKeyPricesImportSinkKeyByImportSinkKeyImportOperationsRequestBuilder } from './../import-operations/by-project-key-prices-import-sink-key-by-import-sink-key-import-operations-request-builder'
import { ByProjectKeyPricesImportSinkKeyByImportSinkKeyResourceKeyByResourceKeyRequestBuilder } from './by-project-key-prices-import-sink-key-by-import-sink-key-resource-key-by-resource-key-request-builder'
import { ImportResponse, PriceImportRequest } from './../../models/importrequests'
import { ApiRequestExecutor, ApiRequest } from './../../base/requests-utils'

export class ByProjectKeyPricesImportSinkKeyByImportSinkKeyRequestBuilder {

    
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
    ): ByProjectKeyPricesImportSinkKeyByImportSinkKeyResourceKeyByResourceKeyRequestBuilder {
       return new ByProjectKeyPricesImportSinkKeyByImportSinkKeyResourceKeyByResourceKeyRequestBuilder(
             {
                pathArgs: {
                   ...this.args.pathArgs,
                   ...childPathArgs
                },
                apiRequestExecutor: this.args.apiRequestExecutor
             }
       )
    }
    public importOperations(): ByProjectKeyPricesImportSinkKeyByImportSinkKeyImportOperationsRequestBuilder {
       return new ByProjectKeyPricesImportSinkKeyByImportSinkKeyImportOperationsRequestBuilder(
             {
                pathArgs: {
                   ...this.args.pathArgs,
                },
                apiRequestExecutor: this.args.apiRequestExecutor
             }
       )
    }
    
    /**
    *	Creates a new import request for prices
    */
    public post(
                methodArgs:{
                   
                   body: PriceImportRequest,
                   headers?: {
                      [key:string]:string
                   },
                }): ApiRequest<ImportResponse> {
       return new ApiRequest<ImportResponse>(
           {
              baseURL: 'https://import.commercetools.com',
              method: 'POST',
              uriTemplate: '/{projectKey}/prices/importSinkKey={importSinkKey}',
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
