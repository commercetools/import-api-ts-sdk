
import { ImportOperation } from './../../../import-api-model/importoperations'
import { ApiRequestExecutor, ApiRequest } from './../../base/requests-utils'

export class ByProjectKeyProductVariantPatchesImportSinkKeyByImportSinkKeyImportOperationsByIdRequestBuilder {

    
      constructor(
        protected readonly args: {
          pathArgs: {
                projectKey: string,
                importSinkKey: string,
                id: string
           },
          apiRequestExecutor: ApiRequestExecutor;
        }
      ) {}
    
    public get(
               methodArgs?:{
                  
                  headers?: {
                     [key:string]:string
                  },
               }): ApiRequest<ImportOperation> {
       return new ApiRequest<ImportOperation>(
           {
              baseURL: 'https://import.commercetools.com',
              method: 'GET',
              uriTemplate: '/{projectKey}/product-variant-patches/importSinkKey={importSinkKey}/import-operations/{id}',
              pathVariables: this.args.pathArgs,
              headers: {
                  ...(methodArgs || {} as any).headers
              },
           },
           this.args.apiRequestExecutor
       )
    }
    

}
