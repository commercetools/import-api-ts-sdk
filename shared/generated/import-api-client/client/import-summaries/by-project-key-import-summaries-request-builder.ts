
import { ByProjectKeyImportSummariesImportSinkKeyByImportSinkKeyRequestBuilder } from './by-project-key-import-summaries-import-sink-key-by-import-sink-key-request-builder'
import { ApiRequestExecutor, ApiRequest } from './../../base/requests-utils'

export class ByProjectKeyImportSummariesRequestBuilder {

    
      constructor(
        protected readonly args: {
          pathArgs: {
                projectKey: string
           },
          apiRequestExecutor: ApiRequestExecutor;
        }
      ) {}
    
    public importSinkKeyWithImportSinkKeyValue(
       childPathArgs: {
           importSinkKey: string
       }
    ): ByProjectKeyImportSummariesImportSinkKeyByImportSinkKeyRequestBuilder {
       return new ByProjectKeyImportSummariesImportSinkKeyByImportSinkKeyRequestBuilder(
             {
                pathArgs: {
                   ...this.args.pathArgs,
                   ...childPathArgs
                },
                apiRequestExecutor: this.args.apiRequestExecutor
             }
       )
    }
    

}
