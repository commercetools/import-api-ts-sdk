
import { ImportSummary } from './../.././../../import-storage-api/model/importsummaries'
import { ApiRequestExecutor, ApiRequest } from './../../base/requests-utils'

export class ByProjectKeyImportSummariesImportSinkKeyByImportSinkKeyRequestBuilder {

    
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
    *	Retrieves the import summary for the given import sink.
    *	
    *	The import summary is calculated on demand.
    *	
    */
    public get(
               methodArgs?:{
                  
                  headers?: {
                     [key:string]:string
                  },
               }): ApiRequest<ImportSummary> {
       return new ApiRequest<ImportSummary>(
           {
              baseURL: 'http://import-storage',
              method: 'GET',
              uriTemplate: '/{projectKey}/import-summaries/importSinkKey={importSinkKey}',
              pathVariables: this.args.pathArgs,
              headers: {
                  ...methodArgs?.headers
              },
           },
           this.args.apiRequestExecutor
       )
    }
    

}
