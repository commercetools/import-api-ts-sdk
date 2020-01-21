import { ImportSinkDraft } from './../model/importsinks'
import { ImportSink } from './../model/importsinks'
import { ErrorResponse } from './../model/errors'
import { ImportSinkPagedResponse } from './../model/importsinks'
import { ImportSummary } from './../model/importsummaries'
import { CategoryImportRequest } from './../model/importrequests'
import { ImportResponse } from './../model/importrequests'
import { ImportOperationPagedResponse } from './../model/importoperations'
import { ProcessingState } from './../model/common'
import { ImportOperation } from './../model/importoperations'
import { PriceImportRequest } from './../model/importrequests'
import { ProductImportRequest } from './../model/importrequests'
import { ProductTypeImportRequest } from './../model/importrequests'
import { ProductVariantImportRequest } from './../model/importrequests'
import { ProductVariantPatchRequest } from './../model/importrequests'
import { ScalarValue } from './common'

export type ByProjectKeyImportSinksPostParameter = {
   headers: {
       [key:string]:string
   },
   
   pathParams: {
          projectKey: string
   }
  
   body: ImportSinkDraft
}

export type ByProjectKeyImportSinksGetParameter = {
   headers: {
       [key:string]:string
   },
   
   queryParams: {
          limit: number
          offset: number
   }
   
   pathParams: {
          projectKey: string
   }
  
}

export type ByProjectKeyImportSinksByImportSinkKeyPutParameter = {
   headers: {
       [key:string]:string
   },
   
   pathParams: {
          projectKey: string
          importSinkKey: string
   }
  
   body: ImportSinkDraft
}

export type ByProjectKeyImportSinksByImportSinkKeyGetParameter = {
   headers: {
       [key:string]:string
   },
   
   pathParams: {
          projectKey: string
          importSinkKey: string
   }
  
}

export type ByProjectKeyImportSinksByImportSinkKeyDeleteParameter = {
   headers: {
       [key:string]:string
   },
   
   pathParams: {
          projectKey: string
          importSinkKey: string
   }
  
}

export type ByProjectKeyImportSummariesImportSinkKeyByImportSinkKeyGetParameter = {
   headers: {
       [key:string]:string
   },
   
   pathParams: {
          projectKey: string
          importSinkKey: string
   }
  
}

export type ByProjectKeyCategoriesImportSinkKeyByImportSinkKeyPostParameter = {
   headers: {
       [key:string]:string
   },
   
   pathParams: {
          projectKey: string
          importSinkKey: string
   }
  
   body: CategoryImportRequest
}

export type ByProjectKeyCategoriesImportSinkKeyByImportSinkKeyResourceKeyByResourceKeyDeleteParameter = {
   headers: {
       [key:string]:string
   },
   
   pathParams: {
          projectKey: string
          importSinkKey: string
          resourceKey: string
   }
  
}

export type ByProjectKeyCategoriesImportSinkKeyByImportSinkKeyImportOperationsGetParameter = {
   headers: {
       [key:string]:string
   },
   
   queryParams: {
          limit: number
          offset: number
          resourceKey: string
          state: ProcessingState
   }
   
   pathParams: {
          projectKey: string
          importSinkKey: string
   }
  
}

export type ByProjectKeyCategoriesImportSinkKeyByImportSinkKeyImportOperationsByIdGetParameter = {
   headers: {
       [key:string]:string
   },
   
   pathParams: {
          projectKey: string
          importSinkKey: string
          id: string
   }
  
}

export type ByProjectKeyPricesImportSinkKeyByImportSinkKeyPostParameter = {
   headers: {
       [key:string]:string
   },
   
   pathParams: {
          projectKey: string
          importSinkKey: string
   }
  
   body: PriceImportRequest
}

export type ByProjectKeyPricesImportSinkKeyByImportSinkKeyResourceKeyByResourceKeyDeleteParameter = {
   headers: {
       [key:string]:string
   },
   
   pathParams: {
          projectKey: string
          importSinkKey: string
          resourceKey: string
   }
  
}

export type ByProjectKeyPricesImportSinkKeyByImportSinkKeyImportOperationsGetParameter = {
   headers: {
       [key:string]:string
   },
   
   queryParams: {
          limit: number
          offset: number
          resourceKey: string
          state: ProcessingState
   }
   
   pathParams: {
          projectKey: string
          importSinkKey: string
   }
  
}

export type ByProjectKeyPricesImportSinkKeyByImportSinkKeyImportOperationsByIdGetParameter = {
   headers: {
       [key:string]:string
   },
   
   pathParams: {
          projectKey: string
          importSinkKey: string
          id: string
   }
  
}

export type ByProjectKeyProductsImportSinkKeyByImportSinkKeyPostParameter = {
   headers: {
       [key:string]:string
   },
   
   pathParams: {
          projectKey: string
          importSinkKey: string
   }
  
   body: ProductImportRequest
}

export type ByProjectKeyProductsImportSinkKeyByImportSinkKeyResourceKeyByResourceKeyDeleteParameter = {
   headers: {
       [key:string]:string
   },
   
   pathParams: {
          projectKey: string
          importSinkKey: string
          resourceKey: string
   }
  
}

export type ByProjectKeyProductsImportSinkKeyByImportSinkKeyImportOperationsGetParameter = {
   headers: {
       [key:string]:string
   },
   
   queryParams: {
          limit: number
          offset: number
          resourceKey: string
          state: ProcessingState
   }
   
   pathParams: {
          projectKey: string
          importSinkKey: string
   }
  
}

export type ByProjectKeyProductsImportSinkKeyByImportSinkKeyImportOperationsByIdGetParameter = {
   headers: {
       [key:string]:string
   },
   
   pathParams: {
          projectKey: string
          importSinkKey: string
          id: string
   }
  
}

export type ByProjectKeyProductTypesImportSinkKeyByImportSinkKeyPostParameter = {
   headers: {
       [key:string]:string
   },
   
   pathParams: {
          projectKey: string
          importSinkKey: string
   }
  
   body: ProductTypeImportRequest
}

export type ByProjectKeyProductTypesImportSinkKeyByImportSinkKeyResourceKeyByResourceKeyDeleteParameter = {
   headers: {
       [key:string]:string
   },
   
   pathParams: {
          projectKey: string
          importSinkKey: string
          resourceKey: string
   }
  
}

export type ByProjectKeyProductTypesImportSinkKeyByImportSinkKeyImportOperationsGetParameter = {
   headers: {
       [key:string]:string
   },
   
   queryParams: {
          limit: number
          offset: number
          resourceKey: string
          state: ProcessingState
   }
   
   pathParams: {
          projectKey: string
          importSinkKey: string
   }
  
}

export type ByProjectKeyProductTypesImportSinkKeyByImportSinkKeyImportOperationsByIdGetParameter = {
   headers: {
       [key:string]:string
   },
   
   pathParams: {
          projectKey: string
          importSinkKey: string
          id: string
   }
  
}

export type ByProjectKeyProductVariantsImportSinkKeyByImportSinkKeyPostParameter = {
   headers: {
       [key:string]:string
   },
   
   pathParams: {
          projectKey: string
          importSinkKey: string
   }
  
   body: ProductVariantImportRequest
}

export type ByProjectKeyProductVariantsImportSinkKeyByImportSinkKeyResourceKeyByResourceKeyDeleteParameter = {
   headers: {
       [key:string]:string
   },
   
   pathParams: {
          projectKey: string
          importSinkKey: string
          resourceKey: string
   }
  
}

export type ByProjectKeyProductVariantsImportSinkKeyByImportSinkKeyImportOperationsGetParameter = {
   headers: {
       [key:string]:string
   },
   
   queryParams: {
          limit: number
          offset: number
          resourceKey: string
          state: ProcessingState
   }
   
   pathParams: {
          projectKey: string
          importSinkKey: string
   }
  
}

export type ByProjectKeyProductVariantsImportSinkKeyByImportSinkKeyImportOperationsByIdGetParameter = {
   headers: {
       [key:string]:string
   },
   
   pathParams: {
          projectKey: string
          importSinkKey: string
          id: string
   }
  
}

export type ByProjectKeyProductVariantPatchesImportSinkKeyByImportSinkKeyPostParameter = {
   headers: {
       [key:string]:string
   },
   
   pathParams: {
          projectKey: string
          importSinkKey: string
   }
  
   body: ProductVariantPatchRequest
}

export type ByProjectKeyProductVariantPatchesImportSinkKeyByImportSinkKeyImportOperationsGetParameter = {
   headers: {
       [key:string]:string
   },
   
   queryParams: {
          limit: number
          offset: number
          resourceKey: string
          state: ProcessingState
   }
   
   pathParams: {
          projectKey: string
          importSinkKey: string
   }
  
}

export type ByProjectKeyProductVariantPatchesImportSinkKeyByImportSinkKeyImportOperationsByIdGetParameter = {
   headers: {
       [key:string]:string
   },
   
   pathParams: {
          projectKey: string
          importSinkKey: string
          id: string
   }
  
}

export type ByProjectKeyImportSinksPostResponse = 
{
   headers?: {[key:string]:string}
   statusCode: 201
   body: ImportSink
}
|{
   headers?: {[key:string]:string}
   statusCode: 400
   body: ErrorResponse
}

export type ByProjectKeyImportSinksGetResponse = 
{
   headers?: {[key:string]:string}
   statusCode: 200
   body: ImportSinkPagedResponse
}

export type ByProjectKeyImportSinksByImportSinkKeyPutResponse = 
{
   headers?: {[key:string]:string}
   statusCode: 200
   body: ImportSink
}
|{
   headers?: {[key:string]:string}
   statusCode: 409
   body: ErrorResponse
}

export type ByProjectKeyImportSinksByImportSinkKeyGetResponse = 
{
   headers?: {[key:string]:string}
   statusCode: 200
   body: ImportSink
}
|{
   headers?: {[key:string]:string}
   statusCode: 404
   body: ErrorResponse
}

export type ByProjectKeyImportSinksByImportSinkKeyDeleteResponse = 
{
   headers?: {[key:string]:string}
   statusCode: 200
   body: ImportSink
}
|{
   headers?: {[key:string]:string}
   statusCode: 404
   body: ErrorResponse
}

export type ByProjectKeyImportSummariesImportSinkKeyByImportSinkKeyGetResponse = 
{
   headers?: {[key:string]:string}
   statusCode: 200
   body: ImportSummary
}

export type ByProjectKeyCategoriesImportSinkKeyByImportSinkKeyPostResponse = 
{
   headers?: {[key:string]:string}
   statusCode: 201
   body: ImportResponse
}

export type ByProjectKeyCategoriesImportSinkKeyByImportSinkKeyResourceKeyByResourceKeyDeleteResponse = 
{
   headers?: {[key:string]:string}
   statusCode: number
}

export type ByProjectKeyCategoriesImportSinkKeyByImportSinkKeyImportOperationsGetResponse = 
{
   headers?: {[key:string]:string}
   statusCode: 200
   body: ImportOperationPagedResponse
}
|{
   headers?: {[key:string]:string}
   statusCode: 400
   body: ErrorResponse
}

export type ByProjectKeyCategoriesImportSinkKeyByImportSinkKeyImportOperationsByIdGetResponse = 
{
   headers?: {[key:string]:string}
   statusCode: 200
   body: ImportOperation
}
|{
   headers?: {[key:string]:string}
   statusCode: 404
   body: ErrorResponse
}
|{
   headers?: {[key:string]:string}
   statusCode: 503
   body: ErrorResponse
}

export type ByProjectKeyPricesImportSinkKeyByImportSinkKeyPostResponse = 
{
   headers?: {[key:string]:string}
   statusCode: 201
   body: ImportResponse
}

export type ByProjectKeyPricesImportSinkKeyByImportSinkKeyResourceKeyByResourceKeyDeleteResponse = 
{
   headers?: {[key:string]:string}
   statusCode: number
}

export type ByProjectKeyPricesImportSinkKeyByImportSinkKeyImportOperationsGetResponse = 
{
   headers?: {[key:string]:string}
   statusCode: 200
   body: ImportOperationPagedResponse
}
|{
   headers?: {[key:string]:string}
   statusCode: 400
   body: ErrorResponse
}

export type ByProjectKeyPricesImportSinkKeyByImportSinkKeyImportOperationsByIdGetResponse = 
{
   headers?: {[key:string]:string}
   statusCode: 200
   body: ImportOperation
}
|{
   headers?: {[key:string]:string}
   statusCode: 404
   body: ErrorResponse
}
|{
   headers?: {[key:string]:string}
   statusCode: 503
   body: ErrorResponse
}

export type ByProjectKeyProductsImportSinkKeyByImportSinkKeyPostResponse = 
{
   headers?: {[key:string]:string}
   statusCode: 201
   body: ImportResponse
}

export type ByProjectKeyProductsImportSinkKeyByImportSinkKeyResourceKeyByResourceKeyDeleteResponse = 
{
   headers?: {[key:string]:string}
   statusCode: number
}

export type ByProjectKeyProductsImportSinkKeyByImportSinkKeyImportOperationsGetResponse = 
{
   headers?: {[key:string]:string}
   statusCode: 200
   body: ImportOperationPagedResponse
}
|{
   headers?: {[key:string]:string}
   statusCode: 400
   body: ErrorResponse
}

export type ByProjectKeyProductsImportSinkKeyByImportSinkKeyImportOperationsByIdGetResponse = 
{
   headers?: {[key:string]:string}
   statusCode: 200
   body: ImportOperation
}
|{
   headers?: {[key:string]:string}
   statusCode: 404
   body: ErrorResponse
}
|{
   headers?: {[key:string]:string}
   statusCode: 503
   body: ErrorResponse
}

export type ByProjectKeyProductTypesImportSinkKeyByImportSinkKeyPostResponse = 
{
   headers?: {[key:string]:string}
   statusCode: 201
   body: ImportResponse
}

export type ByProjectKeyProductTypesImportSinkKeyByImportSinkKeyResourceKeyByResourceKeyDeleteResponse = 
{
   headers?: {[key:string]:string}
   statusCode: number
}

export type ByProjectKeyProductTypesImportSinkKeyByImportSinkKeyImportOperationsGetResponse = 
{
   headers?: {[key:string]:string}
   statusCode: 200
   body: ImportOperationPagedResponse
}
|{
   headers?: {[key:string]:string}
   statusCode: 400
   body: ErrorResponse
}

export type ByProjectKeyProductTypesImportSinkKeyByImportSinkKeyImportOperationsByIdGetResponse = 
{
   headers?: {[key:string]:string}
   statusCode: 200
   body: ImportOperation
}
|{
   headers?: {[key:string]:string}
   statusCode: 404
   body: ErrorResponse
}
|{
   headers?: {[key:string]:string}
   statusCode: 503
   body: ErrorResponse
}

export type ByProjectKeyProductVariantsImportSinkKeyByImportSinkKeyPostResponse = 
{
   headers?: {[key:string]:string}
   statusCode: 201
   body: ImportResponse
}

export type ByProjectKeyProductVariantsImportSinkKeyByImportSinkKeyResourceKeyByResourceKeyDeleteResponse = 
{
   headers?: {[key:string]:string}
   statusCode: number
}

export type ByProjectKeyProductVariantsImportSinkKeyByImportSinkKeyImportOperationsGetResponse = 
{
   headers?: {[key:string]:string}
   statusCode: 200
   body: ImportOperationPagedResponse
}
|{
   headers?: {[key:string]:string}
   statusCode: 400
   body: ErrorResponse
}

export type ByProjectKeyProductVariantsImportSinkKeyByImportSinkKeyImportOperationsByIdGetResponse = 
{
   headers?: {[key:string]:string}
   statusCode: 200
   body: ImportOperation
}
|{
   headers?: {[key:string]:string}
   statusCode: 404
   body: ErrorResponse
}
|{
   headers?: {[key:string]:string}
   statusCode: 503
   body: ErrorResponse
}

export type ByProjectKeyProductVariantPatchesImportSinkKeyByImportSinkKeyPostResponse = 
{
   headers?: {[key:string]:string}
   statusCode: 201
   body: ImportResponse
}

export type ByProjectKeyProductVariantPatchesImportSinkKeyByImportSinkKeyImportOperationsGetResponse = 
{
   headers?: {[key:string]:string}
   statusCode: 200
   body: ImportOperationPagedResponse
}
|{
   headers?: {[key:string]:string}
   statusCode: 400
   body: ErrorResponse
}

export type ByProjectKeyProductVariantPatchesImportSinkKeyByImportSinkKeyImportOperationsByIdGetResponse = 
{
   headers?: {[key:string]:string}
   statusCode: 200
   body: ImportOperation
}
|{
   headers?: {[key:string]:string}
   statusCode: 404
   body: ErrorResponse
}
|{
   headers?: {[key:string]:string}
   statusCode: 503
   body: ErrorResponse
}



export type ByProjectKeyImportSinksPostHandler = (input: ByProjectKeyImportSinksPostParameter) => Promise<ByProjectKeyImportSinksPostResponse>


export type ByProjectKeyImportSinksGetHandler = (input: ByProjectKeyImportSinksGetParameter) => Promise<ByProjectKeyImportSinksGetResponse>


export type ByProjectKeyImportSinksByImportSinkKeyPutHandler = (input: ByProjectKeyImportSinksByImportSinkKeyPutParameter) => Promise<ByProjectKeyImportSinksByImportSinkKeyPutResponse>


export type ByProjectKeyImportSinksByImportSinkKeyGetHandler = (input: ByProjectKeyImportSinksByImportSinkKeyGetParameter) => Promise<ByProjectKeyImportSinksByImportSinkKeyGetResponse>


export type ByProjectKeyImportSinksByImportSinkKeyDeleteHandler = (input: ByProjectKeyImportSinksByImportSinkKeyDeleteParameter) => Promise<ByProjectKeyImportSinksByImportSinkKeyDeleteResponse>


export type ByProjectKeyImportSummariesImportSinkKeyByImportSinkKeyGetHandler = (input: ByProjectKeyImportSummariesImportSinkKeyByImportSinkKeyGetParameter) => Promise<ByProjectKeyImportSummariesImportSinkKeyByImportSinkKeyGetResponse>


export type ByProjectKeyCategoriesImportSinkKeyByImportSinkKeyPostHandler = (input: ByProjectKeyCategoriesImportSinkKeyByImportSinkKeyPostParameter) => Promise<ByProjectKeyCategoriesImportSinkKeyByImportSinkKeyPostResponse>


export type ByProjectKeyCategoriesImportSinkKeyByImportSinkKeyResourceKeyByResourceKeyDeleteHandler = (input: ByProjectKeyCategoriesImportSinkKeyByImportSinkKeyResourceKeyByResourceKeyDeleteParameter) => Promise<ByProjectKeyCategoriesImportSinkKeyByImportSinkKeyResourceKeyByResourceKeyDeleteResponse>


export type ByProjectKeyCategoriesImportSinkKeyByImportSinkKeyImportOperationsGetHandler = (input: ByProjectKeyCategoriesImportSinkKeyByImportSinkKeyImportOperationsGetParameter) => Promise<ByProjectKeyCategoriesImportSinkKeyByImportSinkKeyImportOperationsGetResponse>


export type ByProjectKeyCategoriesImportSinkKeyByImportSinkKeyImportOperationsByIdGetHandler = (input: ByProjectKeyCategoriesImportSinkKeyByImportSinkKeyImportOperationsByIdGetParameter) => Promise<ByProjectKeyCategoriesImportSinkKeyByImportSinkKeyImportOperationsByIdGetResponse>


export type ByProjectKeyPricesImportSinkKeyByImportSinkKeyPostHandler = (input: ByProjectKeyPricesImportSinkKeyByImportSinkKeyPostParameter) => Promise<ByProjectKeyPricesImportSinkKeyByImportSinkKeyPostResponse>


export type ByProjectKeyPricesImportSinkKeyByImportSinkKeyResourceKeyByResourceKeyDeleteHandler = (input: ByProjectKeyPricesImportSinkKeyByImportSinkKeyResourceKeyByResourceKeyDeleteParameter) => Promise<ByProjectKeyPricesImportSinkKeyByImportSinkKeyResourceKeyByResourceKeyDeleteResponse>


export type ByProjectKeyPricesImportSinkKeyByImportSinkKeyImportOperationsGetHandler = (input: ByProjectKeyPricesImportSinkKeyByImportSinkKeyImportOperationsGetParameter) => Promise<ByProjectKeyPricesImportSinkKeyByImportSinkKeyImportOperationsGetResponse>


export type ByProjectKeyPricesImportSinkKeyByImportSinkKeyImportOperationsByIdGetHandler = (input: ByProjectKeyPricesImportSinkKeyByImportSinkKeyImportOperationsByIdGetParameter) => Promise<ByProjectKeyPricesImportSinkKeyByImportSinkKeyImportOperationsByIdGetResponse>


export type ByProjectKeyProductsImportSinkKeyByImportSinkKeyPostHandler = (input: ByProjectKeyProductsImportSinkKeyByImportSinkKeyPostParameter) => Promise<ByProjectKeyProductsImportSinkKeyByImportSinkKeyPostResponse>


export type ByProjectKeyProductsImportSinkKeyByImportSinkKeyResourceKeyByResourceKeyDeleteHandler = (input: ByProjectKeyProductsImportSinkKeyByImportSinkKeyResourceKeyByResourceKeyDeleteParameter) => Promise<ByProjectKeyProductsImportSinkKeyByImportSinkKeyResourceKeyByResourceKeyDeleteResponse>


export type ByProjectKeyProductsImportSinkKeyByImportSinkKeyImportOperationsGetHandler = (input: ByProjectKeyProductsImportSinkKeyByImportSinkKeyImportOperationsGetParameter) => Promise<ByProjectKeyProductsImportSinkKeyByImportSinkKeyImportOperationsGetResponse>


export type ByProjectKeyProductsImportSinkKeyByImportSinkKeyImportOperationsByIdGetHandler = (input: ByProjectKeyProductsImportSinkKeyByImportSinkKeyImportOperationsByIdGetParameter) => Promise<ByProjectKeyProductsImportSinkKeyByImportSinkKeyImportOperationsByIdGetResponse>


export type ByProjectKeyProductTypesImportSinkKeyByImportSinkKeyPostHandler = (input: ByProjectKeyProductTypesImportSinkKeyByImportSinkKeyPostParameter) => Promise<ByProjectKeyProductTypesImportSinkKeyByImportSinkKeyPostResponse>


export type ByProjectKeyProductTypesImportSinkKeyByImportSinkKeyResourceKeyByResourceKeyDeleteHandler = (input: ByProjectKeyProductTypesImportSinkKeyByImportSinkKeyResourceKeyByResourceKeyDeleteParameter) => Promise<ByProjectKeyProductTypesImportSinkKeyByImportSinkKeyResourceKeyByResourceKeyDeleteResponse>


export type ByProjectKeyProductTypesImportSinkKeyByImportSinkKeyImportOperationsGetHandler = (input: ByProjectKeyProductTypesImportSinkKeyByImportSinkKeyImportOperationsGetParameter) => Promise<ByProjectKeyProductTypesImportSinkKeyByImportSinkKeyImportOperationsGetResponse>


export type ByProjectKeyProductTypesImportSinkKeyByImportSinkKeyImportOperationsByIdGetHandler = (input: ByProjectKeyProductTypesImportSinkKeyByImportSinkKeyImportOperationsByIdGetParameter) => Promise<ByProjectKeyProductTypesImportSinkKeyByImportSinkKeyImportOperationsByIdGetResponse>


export type ByProjectKeyProductVariantsImportSinkKeyByImportSinkKeyPostHandler = (input: ByProjectKeyProductVariantsImportSinkKeyByImportSinkKeyPostParameter) => Promise<ByProjectKeyProductVariantsImportSinkKeyByImportSinkKeyPostResponse>


export type ByProjectKeyProductVariantsImportSinkKeyByImportSinkKeyResourceKeyByResourceKeyDeleteHandler = (input: ByProjectKeyProductVariantsImportSinkKeyByImportSinkKeyResourceKeyByResourceKeyDeleteParameter) => Promise<ByProjectKeyProductVariantsImportSinkKeyByImportSinkKeyResourceKeyByResourceKeyDeleteResponse>


export type ByProjectKeyProductVariantsImportSinkKeyByImportSinkKeyImportOperationsGetHandler = (input: ByProjectKeyProductVariantsImportSinkKeyByImportSinkKeyImportOperationsGetParameter) => Promise<ByProjectKeyProductVariantsImportSinkKeyByImportSinkKeyImportOperationsGetResponse>


export type ByProjectKeyProductVariantsImportSinkKeyByImportSinkKeyImportOperationsByIdGetHandler = (input: ByProjectKeyProductVariantsImportSinkKeyByImportSinkKeyImportOperationsByIdGetParameter) => Promise<ByProjectKeyProductVariantsImportSinkKeyByImportSinkKeyImportOperationsByIdGetResponse>


export type ByProjectKeyProductVariantPatchesImportSinkKeyByImportSinkKeyPostHandler = (input: ByProjectKeyProductVariantPatchesImportSinkKeyByImportSinkKeyPostParameter) => Promise<ByProjectKeyProductVariantPatchesImportSinkKeyByImportSinkKeyPostResponse>


export type ByProjectKeyProductVariantPatchesImportSinkKeyByImportSinkKeyImportOperationsGetHandler = (input: ByProjectKeyProductVariantPatchesImportSinkKeyByImportSinkKeyImportOperationsGetParameter) => Promise<ByProjectKeyProductVariantPatchesImportSinkKeyByImportSinkKeyImportOperationsGetResponse>


export type ByProjectKeyProductVariantPatchesImportSinkKeyByImportSinkKeyImportOperationsByIdGetHandler = (input: ByProjectKeyProductVariantPatchesImportSinkKeyByImportSinkKeyImportOperationsByIdGetParameter) => Promise<ByProjectKeyProductVariantPatchesImportSinkKeyByImportSinkKeyImportOperationsByIdGetResponse>

