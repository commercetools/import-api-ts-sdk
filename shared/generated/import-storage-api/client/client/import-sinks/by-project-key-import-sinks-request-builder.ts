
import { ImportSink, ImportSinkDraft, ImportSinkPagedResponse } from './../.././../../import-storage-api/model/importsinks'
import { ByProjectKeyImportSinksByImportSinkKeyRequestBuilder } from './by-project-key-import-sinks-by-import-sink-key-request-builder'
import { ApiRequestExecutor, ApiRequest } from './../../base/requests-utils'

export class ByProjectKeyImportSinksRequestBuilder {

    
      constructor(
        protected readonly args: {
          pathArgs: {
                projectKey: string
           },
          apiRequestExecutor: ApiRequestExecutor;
        }
      ) {}
    public withImportSinkKeyValue(
       childPathArgs: {
           importSinkKey: string
       }
    ): ByProjectKeyImportSinksByImportSinkKeyRequestBuilder {
       return new ByProjectKeyImportSinksByImportSinkKeyRequestBuilder(
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
    *	Creates a new import sink.
    */
    public post(
                methodArgs:{
                   
                   body: ImportSinkDraft,
                   headers?: {
                      [key:string]:string
                   },
                }): ApiRequest<ImportSink> {
       return new ApiRequest<ImportSink>(
           {
              baseURL: 'http://import-storage',
              method: 'POST',
              uriTemplate: '/{projectKey}/import-sinks',
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
    *	Retrieves all import sinks for the given import sink.
    *	
    */
    public get(
               methodArgs?:{
                  
                  queryArgs?: {
                     'limit'?: number | number[]
                     'offset'?: number | number[]
                  },
                  headers?: {
                     [key:string]:string
                  },
               }): ApiRequest<ImportSinkPagedResponse> {
       return new ApiRequest<ImportSinkPagedResponse>(
           {
              baseURL: 'http://import-storage',
              method: 'GET',
              uriTemplate: '/{projectKey}/import-sinks',
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
