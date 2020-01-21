
import { ImportResourceType, ReferenceType } from './../.././../../import-storage-api/model/common'
import { UnresolvedImportResource, UnresolvedImportResourcePagedResponse } from './../.././../../import-storage-api/model/importresources'
import { ByProjectKeyUnresolvedImportResourceByIdRequestBuilder } from './by-project-key-unresolved-import-resource-by-id-request-builder'
import { ApiRequestExecutor, ApiRequest } from './../../base/requests-utils'

export class ByProjectKeyUnresolvedImportResourceRequestBuilder {

    
      constructor(
        protected readonly args: {
          pathArgs: {
                projectKey: string
           },
          apiRequestExecutor: ApiRequestExecutor;
        }
      ) {}
    public withIdValue(
       childPathArgs: {
           id: string
       }
    ): ByProjectKeyUnresolvedImportResourceByIdRequestBuilder {
       return new ByProjectKeyUnresolvedImportResourceByIdRequestBuilder(
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
    *	Creates or updates the unresolved import resource given in the body.
    *	
    */
    public post(
                methodArgs:{
                   
                   body: UnresolvedImportResource,
                   headers?: {
                      [key:string]:string
                   },
                }): ApiRequest<UnresolvedImportResource> {
       return new ApiRequest<UnresolvedImportResource>(
           {
              baseURL: 'http://import-storage',
              method: 'POST',
              uriTemplate: '/{projectKey}/unresolved-import-resource',
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
    /**
    *	Retrieves all unresolved import resources that with the given `resourceType` and `resourceKey` or that
    *	have unresolved references of the given `referenceType` and `referenceKey`.
    *	
    */
    public get(
               methodArgs?:{
                  
                  queryArgs?: {
                     'referenceType'?: ReferenceType | ReferenceType[]
                     'referenceKey'?: string | string[]
                     'resourceType'?: ImportResourceType | ImportResourceType[]
                     'resourceKey'?: string | string[]
                     'limit'?: number | number[]
                     'offset'?: number | number[]
                  },
                  headers?: {
                     [key:string]:string
                  },
               }): ApiRequest<UnresolvedImportResourcePagedResponse> {
       return new ApiRequest<UnresolvedImportResourcePagedResponse>(
           {
              baseURL: 'http://import-storage',
              method: 'GET',
              uriTemplate: '/{projectKey}/unresolved-import-resource',
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
