
import { UnresolvedImportResource } from './../.././../../import-storage-api/model/importresources'
import { ApiRequestExecutor, ApiRequest } from './../../base/requests-utils'

export class ByProjectKeyUnresolvedImportResourceByIdRequestBuilder {

    
      constructor(
        protected readonly args: {
          pathArgs: {
                projectKey: string,
                id: string
           },
          apiRequestExecutor: ApiRequestExecutor;
        }
      ) {}
    /**
    *	Deletes the unresolved resource with the given id.
    */
    public delete(
                  methodArgs?:{
                     
                     headers?: {
                        [key:string]:string
                     },
                  }): ApiRequest<UnresolvedImportResource> {
       return new ApiRequest<UnresolvedImportResource>(
           {
              baseURL: 'http://import-storage',
              method: 'DELETE',
              uriTemplate: '/{projectKey}/unresolved-import-resource/{id}',
              pathVariables: this.args.pathArgs,
              headers: {
                  ...methodArgs?.headers
              },
           },
           this.args.apiRequestExecutor
       )
    }
    /**
    *	Retrievees the unresolved resource with the given `operationId`.
    */
    public get(
               methodArgs?:{
                  
                  headers?: {
                     [key:string]:string
                  },
               }): ApiRequest<UnresolvedImportResource> {
       return new ApiRequest<UnresolvedImportResource>(
           {
              baseURL: 'http://import-storage',
              method: 'GET',
              uriTemplate: '/{projectKey}/unresolved-import-resource/{id}',
              pathVariables: this.args.pathArgs,
              headers: {
                  ...methodArgs?.headers
              },
           },
           this.args.apiRequestExecutor
       )
    }
    

}
