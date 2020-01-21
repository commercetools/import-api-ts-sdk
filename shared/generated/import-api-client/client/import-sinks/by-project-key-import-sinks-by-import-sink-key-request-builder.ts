
import { ImportSink, ImportSinkDraft } from './../../../import-api-model/importsinks'
import { ApiRequestExecutor, ApiRequest } from './../../base/requests-utils'

export class ByProjectKeyImportSinksByImportSinkKeyRequestBuilder {

    
      constructor(
        protected readonly args: {
          pathArgs: {
                projectKey: string,
                importSinkKey: string
           },
          apiRequestExecutor: ApiRequestExecutor;
        }
      ) {}
    
    public put(
               methodArgs:{
                  
                  body: ImportSinkDraft,
                  headers?: {
                     [key:string]:string
                  },
               }): ApiRequest<ImportSink> {
       return new ApiRequest<ImportSink>(
           {
              baseURL: 'https://import.commercetools.com',
              method: 'PUT',
              uriTemplate: '/{projectKey}/import-sinks/{importSinkKey}',
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
               methodArgs?:{
                  
                  headers?: {
                     [key:string]:string
                  },
               }): ApiRequest<ImportSink> {
       return new ApiRequest<ImportSink>(
           {
              baseURL: 'https://import.commercetools.com',
              method: 'GET',
              uriTemplate: '/{projectKey}/import-sinks/{importSinkKey}',
              pathVariables: this.args.pathArgs,
              headers: {
                  ...(methodArgs || {} as any).headers
              },
           },
           this.args.apiRequestExecutor
       )
    }
    
    public delete(
                  methodArgs?:{
                     
                     headers?: {
                        [key:string]:string
                     },
                  }): ApiRequest<ImportSink> {
       return new ApiRequest<ImportSink>(
           {
              baseURL: 'https://import.commercetools.com',
              method: 'DELETE',
              uriTemplate: '/{projectKey}/import-sinks/{importSinkKey}',
              pathVariables: this.args.pathArgs,
              headers: {
                  ...(methodArgs || {} as any).headers
              },
           },
           this.args.apiRequestExecutor
       )
    }
    

}
