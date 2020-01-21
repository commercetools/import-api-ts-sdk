
import { PriceMapping } from './../.././../../import-storage-api/model/pricemapping'
import { ApiRequestExecutor, ApiRequest } from './../../base/requests-utils'

export class ByProjectKeyPriceMappingByKeyRequestBuilder {

    
      constructor(
        protected readonly args: {
          pathArgs: {
                projectKey: string,
                key: string
           },
          apiRequestExecutor: ApiRequestExecutor;
        }
      ) {}
    /**
    *	Retrieves the price mapping with the given key.
    *	
    */
    public get(
               methodArgs?:{
                  
                  headers?: {
                     [key:string]:string
                  },
               }): ApiRequest<PriceMapping> {
       return new ApiRequest<PriceMapping>(
           {
              baseURL: 'http://import-storage',
              method: 'GET',
              uriTemplate: '/{projectKey}/price-mapping/{key}',
              pathVariables: this.args.pathArgs,
              headers: {
                  ...methodArgs?.headers
              },
           },
           this.args.apiRequestExecutor
       )
    }
    /**
    *	Deletes the price mapping with the given key.
    *	
    */
    public delete(
                  methodArgs?:{
                     
                     headers?: {
                        [key:string]:string
                     },
                  }): ApiRequest<PriceMapping> {
       return new ApiRequest<PriceMapping>(
           {
              baseURL: 'http://import-storage',
              method: 'DELETE',
              uriTemplate: '/{projectKey}/price-mapping/{key}',
              pathVariables: this.args.pathArgs,
              headers: {
                  ...methodArgs?.headers
              },
           },
           this.args.apiRequestExecutor
       )
    }
    

}
