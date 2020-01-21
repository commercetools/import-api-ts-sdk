
import { ProcessingState } from './../.././../../import-storage-api/model/common'
import { ImportOperation, ImportOperationDraft, ImportOperationPagedResponse } from './../.././../../import-storage-api/model/importoperations'
import { ByProjectKeyImportOperationByIdRequestBuilder } from './by-project-key-import-operation-by-id-request-builder'
import { ApiRequestExecutor, ApiRequest } from './../../base/requests-utils'

export class ByProjectKeyImportOperationRequestBuilder {

    
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
    ): ByProjectKeyImportOperationByIdRequestBuilder {
       return new ByProjectKeyImportOperationByIdRequestBuilder(
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
    *	Updates an import operation given in the body.
    *	
    */
    public put(
               methodArgs:{
                  
                  body: ImportOperationDraft,
                  headers?: {
                     [key:string]:string
                  },
               }): ApiRequest<ImportOperation> {
       return new ApiRequest<ImportOperation>(
           {
              baseURL: 'http://import-storage',
              method: 'PUT',
              uriTemplate: '/{projectKey}/import-operation',
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
    *	Creates or updates the import operation given in the body.
    *	
    */
    public post(
                methodArgs:{
                   
                   body: ImportOperationDraft,
                   headers?: {
                      [key:string]:string
                   },
                }): ApiRequest<ImportOperation> {
       return new ApiRequest<ImportOperation>(
           {
              baseURL: 'http://import-storage',
              method: 'POST',
              uriTemplate: '/{projectKey}/import-operation',
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
    *	Retrieves all import operations for the given import sink.
    *	
    */
    public get(
               methodArgs?:{
                  
                  queryArgs?: {
                     'limit'?: number | number[]
                     'offset'?: number | number[]
                     'resourceKey'?: string | string[]
                     'importSinkKey'?: string | string[]
                     'state'?: ProcessingState | ProcessingState[]
                  },
                  headers?: {
                     [key:string]:string
                  },
               }): ApiRequest<ImportOperationPagedResponse> {
       return new ApiRequest<ImportOperationPagedResponse>(
           {
              baseURL: 'http://import-storage',
              method: 'GET',
              uriTemplate: '/{projectKey}/import-operation',
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
