
import { PriceMapping } from './../.././../../import-storage-api/model/pricemapping'
import { ByProjectKeyPriceMappingByKeyRequestBuilder } from './by-project-key-price-mapping-by-key-request-builder'
import { ApiRequestExecutor, ApiRequest } from './../../base/requests-utils'

export class ByProjectKeyPriceMappingRequestBuilder {

    
      constructor(
        protected readonly args: {
          pathArgs: {
                projectKey: string
           },
          apiRequestExecutor: ApiRequestExecutor;
        }
      ) {}
    public withKeyValue(
       childPathArgs: {
           key: string
       }
    ): ByProjectKeyPriceMappingByKeyRequestBuilder {
       return new ByProjectKeyPriceMappingByKeyRequestBuilder(
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
    *	Creates or updates the price-mapping given in the body.
    *	
    */
    public post(
                methodArgs:{
                   
                   body: PriceMapping,
                   headers?: {
                      [key:string]:string
                   },
                }): ApiRequest<PriceMapping> {
       return new ApiRequest<PriceMapping>(
           {
              baseURL: 'http://import-storage',
              method: 'POST',
              uriTemplate: '/{projectKey}/price-mapping',
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
