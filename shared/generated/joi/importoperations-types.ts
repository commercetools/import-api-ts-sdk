//Generated file, please do not change

import * as Joi from 'joi'
import { keyReferenceType } from './common-types'
import { processingStateType } from './common-types'
import { errorObjectType } from './errors-types'

const schema = {
  importOperationType: null,
  importOperationPagedResponseType: null,
  importOperationStateType: null,
  importOperationStatusType: null,
  importOperationDraftType: null
}

schema.importOperationType = Joi.lazy(() => Joi.object().unknown().keys({
                                state: processingStateType().required(),
                                createdAt: Joi.date().iso().required(),
                                lastModifiedAt: Joi.date().iso().required(),
                                version: Joi.number().required(),
                                retryCount: Joi.number().required(),
                                id: Joi.string().required(),
                                importSinkKey: Joi.string().required(),
                                resourceKey: Joi.string().required(),
                                errors: Joi.array().items(errorObjectType()).optional(),
                                unresolvedReferences: Joi.array().items(keyReferenceType()).optional(),
                                expiresAt: Joi.date().iso().optional(),
                                resourceVersion: Joi.number().optional()
                             }))
export function importOperationType() : Joi.AnySchema {
   return schema.importOperationType
}

schema.importOperationPagedResponseType = Joi.lazy(() => Joi.object().unknown().keys({
                                             results: Joi.array().items(importOperationType()).required(),
                                             count: Joi.number().required(),
                                             limit: Joi.number().required(),
                                             offset: Joi.number().required()
                                          }))
export function importOperationPagedResponseType() : Joi.AnySchema {
   return schema.importOperationPagedResponseType
}

const importOperationStateTypeValues = [
   'Accepted',
   'ValidationFailed'
]

export function importOperationStateType(): Joi.AnySchema {
   return Joi.string().only(importOperationStateTypeValues)
}

schema.importOperationStatusType = Joi.lazy(() => Joi.object().unknown().keys({
                                      state: importOperationStateType().required(),
                                      errors: Joi.array().items(errorObjectType()).optional(),
                                      operationId: Joi.string().optional()
                                   }))
export function importOperationStatusType() : Joi.AnySchema {
   return schema.importOperationStatusType
}

schema.importOperationDraftType = Joi.lazy(() => Joi.object().unknown().keys({
                                     state: processingStateType().required(),
                                     version: Joi.number().required(),
                                     retryCount: Joi.number().required(),
                                     id: Joi.string().required(),
                                     importSinkKey: Joi.string().required(),
                                     resourceKey: Joi.string().required(),
                                     errors: Joi.array().items(errorObjectType()).optional(),
                                     unresolvedReferences: Joi.array().items(keyReferenceType()).optional(),
                                     expiresAt: Joi.date().iso().optional(),
                                     resourceVersion: Joi.number().optional()
                                  }))
export function importOperationDraftType() : Joi.AnySchema {
   return schema.importOperationDraftType
}