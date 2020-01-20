

import { ApiRequestExecutor, ApiRequest } from './../../base/requests-utils'

export class ByProjectKeyCategoriesImportSinkKeyByImportSinkKeyResourceKeyByResourceKeyRequestBuilder {

    
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
              uriTemplate: '/{projectKey}/categories/importSinkKey={importSinkKey}/resourceKey={resourceKey}',
              pathVariables: this.args.pathArgs,
              headers: {
                  ...methodArgs?.headers
              },
           },
           this.args.apiRequestExecutor
       )
    }
    

}
