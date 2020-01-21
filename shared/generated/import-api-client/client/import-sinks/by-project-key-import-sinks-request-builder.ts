
import { ImportSink, ImportSinkDraft, ImportSinkPagedResponse } from './../../../import-api-model/importsinks'
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
    
    
    public post(
                methodArgs:{
                   
                   body: ImportSinkDraft,
                   headers?: {
                      [key:string]:string
                   },
                }): ApiRequest<ImportSink> {
       return new ApiRequest<ImportSink>(
           {
              baseURL: 'https://import.commercetools.com',
              method: 'POST',
              uriTemplate: '/{projectKey}/import-sinks',
              pathVariables: this.args.pathArgs,
              headers: {
                  'Content-Type': 'application/json',
                  ...(methodArgs || {} as any).headers
              },
              body: (methodArgs || {} as any).body,
           },
           this.args.apiRequestExecutor
       )
    }
    
    public get(
               methodArgs:{
                  
                  queryArgs: {
                     'limit': number | number[]
                     'offset': number | number[]
                  },
                  headers?: {
                     [key:string]:string
                  },
               }): ApiRequest<ImportSinkPagedResponse> {
       return new ApiRequest<ImportSinkPagedResponse>(
           {
              baseURL: 'https://import.commercetools.com',
              method: 'GET',
              uriTemplate: '/{projectKey}/import-sinks',
              pathVariables: this.args.pathArgs,
              headers: {
                  ...(methodArgs || {} as any).headers
              },
              queryParams: (methodArgs || {} as any).queryArgs,
           },
           this.args.apiRequestExecutor
       )
    }
    

}