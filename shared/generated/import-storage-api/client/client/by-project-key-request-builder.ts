
import { ByProjectKeyImportOperationRequestBuilder } from './import-operation/by-project-key-import-operation-request-builder'
import { ByProjectKeyImportSinksRequestBuilder } from './import-sinks/by-project-key-import-sinks-request-builder'
import { ByProjectKeyImportSummariesRequestBuilder } from './import-summaries/by-project-key-import-summaries-request-builder'
import { ByProjectKeyPriceMappingRequestBuilder } from './price-mapping/by-project-key-price-mapping-request-builder'
import { ByProjectKeyUnresolvedImportResourceRequestBuilder } from './unresolved-import-resource/by-project-key-unresolved-import-resource-request-builder'
import { ApiRequestExecutor, ApiRequest } from './../base/requests-utils'

export class ByProjectKeyRequestBuilder {

    
      constructor(
        protected readonly args: {
          pathArgs: {
                projectKey: string
           },
          apiRequestExecutor: ApiRequestExecutor;
        }
      ) {}
    public importSinks(): ByProjectKeyImportSinksRequestBuilder {
       return new ByProjectKeyImportSinksRequestBuilder(
             {
                pathArgs: {
                   ...this.args.pathArgs,
                },
                apiRequestExecutor: this.args.apiRequestExecutor
             }
       )
    }
    public importSummaries(): ByProjectKeyImportSummariesRequestBuilder {
       return new ByProjectKeyImportSummariesRequestBuilder(
             {
                pathArgs: {
                   ...this.args.pathArgs,
                },
                apiRequestExecutor: this.args.apiRequestExecutor
             }
       )
    }
    public importOperation(): ByProjectKeyImportOperationRequestBuilder {
       return new ByProjectKeyImportOperationRequestBuilder(
             {
                pathArgs: {
                   ...this.args.pathArgs,
                },
                apiRequestExecutor: this.args.apiRequestExecutor
             }
       )
    }
    public priceMapping(): ByProjectKeyPriceMappingRequestBuilder {
       return new ByProjectKeyPriceMappingRequestBuilder(
             {
                pathArgs: {
                   ...this.args.pathArgs,
                },
                apiRequestExecutor: this.args.apiRequestExecutor
             }
       )
    }
    public unresolvedImportResource(): ByProjectKeyUnresolvedImportResourceRequestBuilder {
       return new ByProjectKeyUnresolvedImportResourceRequestBuilder(
             {
                pathArgs: {
                   ...this.args.pathArgs,
                },
                apiRequestExecutor: this.args.apiRequestExecutor
             }
       )
    }
    

}
