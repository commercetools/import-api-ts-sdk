

import { ApiRequestExecutor, ApiRequest } from './../../base/requests-utils'

export class ByProjectKeyProductsImportSinkKeyByImportSinkKeyResourceKeyByResourceKeyRequestBuilder {

    
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
    /**
    *	Deletes the product given by the resource key.
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
              uriTemplate: '/{projectKey}/products/importSinkKey={importSinkKey}/resourceKey={resourceKey}',
              pathVariables: this.args.pathArgs,
              headers: {
                  ...methodArgs?.headers
              },
           },
           this.args.apiRequestExecutor
       )
    }
    

}
