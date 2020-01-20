
import { ByProjectKeyProductVariantPatchesImportSinkKeyByImportSinkKeyRequestBuilder } from './by-project-key-product-variant-patches-import-sink-key-by-import-sink-key-request-builder'
import { ApiRequestExecutor, ApiRequest } from './../../base/requests-utils'

export class ByProjectKeyProductVariantPatchesRequestBuilder {

    
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
    ): ByProjectKeyProductVariantPatchesImportSinkKeyByImportSinkKeyRequestBuilder {
       return new ByProjectKeyProductVariantPatchesImportSinkKeyByImportSinkKeyRequestBuilder(
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
