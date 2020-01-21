

import { ApiRequestExecutor, ApiRequest } from './../../base/requests-utils'

export class ByProjectKeyPricesImportSinkKeyByImportSinkKeyResourceKeyByResourceKeyRequestBuilder {

    
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
              uriTemplate: '/{projectKey}/prices/importSinkKey={importSinkKey}/resourceKey={resourceKey}',
              pathVariables: this.args.pathArgs,
              headers: {
                  ...(methodArgs || {} as any).headers
              },
           },
           this.args.apiRequestExecutor
       )
    }
    

}
