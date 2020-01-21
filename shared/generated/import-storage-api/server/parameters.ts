import { ImportSinkDraft } from './../model/importsinks'
import { ImportSink } from './../model/importsinks'
import { ErrorResponse } from './../model/errors'
import { ImportSinkPagedResponse } from './../model/importsinks'
import { ImportOperationDraft } from './../model/importoperations'
import { ImportOperation } from './../model/importoperations'
import { ImportOperationPagedResponse } from './../model/importoperations'
import { ProcessingState } from './../model/common'
import { PriceMapping } from './../model/pricemapping'
import { UnresolvedImportResource } from './../model/importresources'
import { UnresolvedImportResourcePagedResponse } from './../model/importresources'
import { ReferenceType } from './../model/common'
import { ImportResourceType } from './../model/common'
import { ImportSummary } from './../model/importsummaries'
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

export type ByProjectKeyImportOperationPutParameter = {
   headers: {
       [key:string]:string
   },
   
   pathParams: {
          projectKey: string
   }
  
   body: ImportOperationDraft
}

export type ByProjectKeyImportOperationPostParameter = {
   headers: {
       [key:string]:string
   },
   
   pathParams: {
          projectKey: string
   }
  
   body: ImportOperationDraft
}

export type ByProjectKeyImportOperationGetParameter = {
   headers: {
       [key:string]:string
   },
   
   queryParams: {
          limit: number
          offset: number
          resourceKey: string
          importSinkKey: string
          state: ProcessingState
   }
   
   pathParams: {
          projectKey: string
   }
  
}

export type ByProjectKeyPriceMappingPostParameter = {
   headers: {
       [key:string]:string
   },
   
   pathParams: {
          projectKey: string
   }
  
   body: PriceMapping
}

export type ByProjectKeyUnresolvedImportResourcePostParameter = {
   headers: {
       [key:string]:string
   },
   
   pathParams: {
          projectKey: string
   }
  
   body: UnresolvedImportResource
}

export type ByProjectKeyUnresolvedImportResourceGetParameter = {
   headers: {
       [key:string]:string
   },
   
   queryParams: {
          referenceType: ReferenceType
          referenceKey: string
          resourceType: ImportResourceType
          resourceKey: string
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

export type ByProjectKeyImportOperationByIdGetParameter = {
   headers: {
       [key:string]:string
   },
   
   pathParams: {
          projectKey: string
          id: string
   }
  
}

export type ByProjectKeyImportOperationByIdDeleteParameter = {
   headers: {
       [key:string]:string
   },
   
   pathParams: {
          projectKey: string
          id: string
   }
  
}

export type ByProjectKeyPriceMappingByKeyGetParameter = {
   headers: {
       [key:string]:string
   },
   
   pathParams: {
          projectKey: string
          key: string
   }
  
}

export type ByProjectKeyPriceMappingByKeyDeleteParameter = {
   headers: {
       [key:string]:string
   },
   
   pathParams: {
          projectKey: string
          key: string
   }
  
}

export type ByProjectKeyUnresolvedImportResourceByIdDeleteParameter = {
   headers: {
       [key:string]:string
   },
   
   pathParams: {
          projectKey: string
          id: string
   }
  
}

export type ByProjectKeyUnresolvedImportResourceByIdGetParameter = {
   headers: {
       [key:string]:string
   },
   
   pathParams: {
          projectKey: string
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

export type ByProjectKeyImportOperationPutResponse = 
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

export type ByProjectKeyImportOperationPostResponse = 
{
   headers?: {[key:string]:string}
   statusCode: 200
   body: ImportOperation
}

export type ByProjectKeyImportOperationGetResponse = 
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

export type ByProjectKeyPriceMappingPostResponse = 
{
   headers?: {[key:string]:string}
   statusCode: 200
   body: PriceMapping
}

export type ByProjectKeyUnresolvedImportResourcePostResponse = 
{
   headers?: {[key:string]:string}
   statusCode: 200
   body: UnresolvedImportResource
}

export type ByProjectKeyUnresolvedImportResourceGetResponse = 
{
   headers?: {[key:string]:string}
   statusCode: 200
   body: UnresolvedImportResourcePagedResponse
}
|{
   headers?: {[key:string]:string}
   statusCode: 400
   body: ErrorResponse
}

export type ByProjectKeyImportSinksByImportSinkKeyPutResponse = 
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

export type ByProjectKeyImportOperationByIdGetResponse = 
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

export type ByProjectKeyImportOperationByIdDeleteResponse = 
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

export type ByProjectKeyPriceMappingByKeyGetResponse = 
{
   headers?: {[key:string]:string}
   statusCode: 200
   body: PriceMapping
}
|{
   headers?: {[key:string]:string}
   statusCode: 404
   body: ErrorResponse
}

export type ByProjectKeyPriceMappingByKeyDeleteResponse = 
{
   headers?: {[key:string]:string}
   statusCode: 200
   body: PriceMapping
}
|{
   headers?: {[key:string]:string}
   statusCode: 404
   body: ErrorResponse
}

export type ByProjectKeyUnresolvedImportResourceByIdDeleteResponse = 
{
   headers?: {[key:string]:string}
   statusCode: 200
   body: UnresolvedImportResource
}
|{
   headers?: {[key:string]:string}
   statusCode: 404
   body: ErrorResponse
}

export type ByProjectKeyUnresolvedImportResourceByIdGetResponse = 
{
   headers?: {[key:string]:string}
   statusCode: 200
   body: UnresolvedImportResource
}
|{
   headers?: {[key:string]:string}
   statusCode: 404
   body: ErrorResponse
}



export type ByProjectKeyImportSinksPostHandler = (input: ByProjectKeyImportSinksPostParameter) => Promise<ByProjectKeyImportSinksPostResponse>


export type ByProjectKeyImportSinksGetHandler = (input: ByProjectKeyImportSinksGetParameter) => Promise<ByProjectKeyImportSinksGetResponse>


export type ByProjectKeyImportOperationPutHandler = (input: ByProjectKeyImportOperationPutParameter) => Promise<ByProjectKeyImportOperationPutResponse>


export type ByProjectKeyImportOperationPostHandler = (input: ByProjectKeyImportOperationPostParameter) => Promise<ByProjectKeyImportOperationPostResponse>


export type ByProjectKeyImportOperationGetHandler = (input: ByProjectKeyImportOperationGetParameter) => Promise<ByProjectKeyImportOperationGetResponse>


export type ByProjectKeyPriceMappingPostHandler = (input: ByProjectKeyPriceMappingPostParameter) => Promise<ByProjectKeyPriceMappingPostResponse>


export type ByProjectKeyUnresolvedImportResourcePostHandler = (input: ByProjectKeyUnresolvedImportResourcePostParameter) => Promise<ByProjectKeyUnresolvedImportResourcePostResponse>


export type ByProjectKeyUnresolvedImportResourceGetHandler = (input: ByProjectKeyUnresolvedImportResourceGetParameter) => Promise<ByProjectKeyUnresolvedImportResourceGetResponse>


export type ByProjectKeyImportSinksByImportSinkKeyPutHandler = (input: ByProjectKeyImportSinksByImportSinkKeyPutParameter) => Promise<ByProjectKeyImportSinksByImportSinkKeyPutResponse>


export type ByProjectKeyImportSinksByImportSinkKeyGetHandler = (input: ByProjectKeyImportSinksByImportSinkKeyGetParameter) => Promise<ByProjectKeyImportSinksByImportSinkKeyGetResponse>


export type ByProjectKeyImportSinksByImportSinkKeyDeleteHandler = (input: ByProjectKeyImportSinksByImportSinkKeyDeleteParameter) => Promise<ByProjectKeyImportSinksByImportSinkKeyDeleteResponse>


export type ByProjectKeyImportSummariesImportSinkKeyByImportSinkKeyGetHandler = (input: ByProjectKeyImportSummariesImportSinkKeyByImportSinkKeyGetParameter) => Promise<ByProjectKeyImportSummariesImportSinkKeyByImportSinkKeyGetResponse>


export type ByProjectKeyImportOperationByIdGetHandler = (input: ByProjectKeyImportOperationByIdGetParameter) => Promise<ByProjectKeyImportOperationByIdGetResponse>


export type ByProjectKeyImportOperationByIdDeleteHandler = (input: ByProjectKeyImportOperationByIdDeleteParameter) => Promise<ByProjectKeyImportOperationByIdDeleteResponse>


export type ByProjectKeyPriceMappingByKeyGetHandler = (input: ByProjectKeyPriceMappingByKeyGetParameter) => Promise<ByProjectKeyPriceMappingByKeyGetResponse>


export type ByProjectKeyPriceMappingByKeyDeleteHandler = (input: ByProjectKeyPriceMappingByKeyDeleteParameter) => Promise<ByProjectKeyPriceMappingByKeyDeleteResponse>


export type ByProjectKeyUnresolvedImportResourceByIdDeleteHandler = (input: ByProjectKeyUnresolvedImportResourceByIdDeleteParameter) => Promise<ByProjectKeyUnresolvedImportResourceByIdDeleteResponse>


export type ByProjectKeyUnresolvedImportResourceByIdGetHandler = (input: ByProjectKeyUnresolvedImportResourceByIdGetParameter) => Promise<ByProjectKeyUnresolvedImportResourceByIdGetResponse>

