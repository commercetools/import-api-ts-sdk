
import { ImportSink, ImportSinkDraft } from './../.././../../import-api/model/importsinks'
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
    /**
    *	Updates the import sink given by the key.
    */
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
                  ...methodArgs?.headers
              },
              body: methodArgs?.body,
           },
           this.args.apiRequestExecutor
       )
    }
    /**
    *	Retrieves the import sink given by the key.
    */
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
                  ...methodArgs?.headers
              },
           },
           this.args.apiRequestExecutor
       )
    }
    /**
    *	Deletes the import sink given by the key.
    */
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
                  ...methodArgs?.headers
              },
           },
           this.args.apiRequestExecutor
       )
    }
    

}
