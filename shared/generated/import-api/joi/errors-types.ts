//Generated file, please do not change

import * as Joi from 'joi'
import { attributeType } from './productvariants-types'
import { priceImportType } from './prices-types'
import { processingStateType } from './common-types'

const schema = {
  errorResponseType: null,
  errorObjectType: null,
  accessDeniedErrorType: null,
  invalidScopeErrorType: null,
  duplicateAttributeValueErrorType: null,
  duplicateAttributeValuesErrorType: null,
  duplicateFieldErrorType: null,
  duplicateVariantValuesErrorType: null,
  variantValuesType: null,
  insufficientScopeErrorType: null,
  invalidCredentialsErrorType: null,
  invalidTokenErrorType: null,
  invalidFieldErrorType: null,
  invalidJsonInputType: null,
  invalidInputType: null,
  resourceNotFoundErrorType: null,
  resourceCreationErrorType: null,
  resourceUpdateErrorType: null,
  resourceDeletionErrorType: null,
  requiredFieldErrorType: null,
  invalidStateTransitionErrorType: null,
  concurrentModificationErrorType: null,
  contentionErrorType: null,
  genericErrorType: null
}

schema.errorResponseType = Joi.lazy(() => Joi.object().unknown().keys({
                              statusCode: Joi.number().required(),
                              message: Joi.string().required(),
                              errors: Joi.array().items(errorObjectType()).optional(),
                              error: Joi.string().optional(),
                              error_description: Joi.string().optional()
                           }))
export function errorResponseType() : Joi.AnySchema {
   return schema.errorResponseType
}

schema.errorObjectType = Joi.lazy(() => Joi.alternatives([accessDeniedErrorType(), invalidScopeErrorType(), duplicateAttributeValueErrorType(), duplicateAttributeValuesErrorType(), duplicateFieldErrorType(), duplicateVariantValuesErrorType(), insufficientScopeErrorType(), invalidCredentialsErrorType(), invalidTokenErrorType(), invalidFieldErrorType(), invalidJsonInputType(), invalidInputType(), resourceNotFoundErrorType(), resourceCreationErrorType(), resourceUpdateErrorType(), resourceDeletionErrorType(), requiredFieldErrorType(), invalidStateTransitionErrorType(), concurrentModificationErrorType(), contentionErrorType(), genericErrorType()]))
export function errorObjectType() : Joi.AnySchema {
   return schema.errorObjectType
}

schema.accessDeniedErrorType = Joi.lazy(() => Joi.object().unknown().keys({
                                  code: Joi.string().only('access_denied').required(),
                                  message: Joi.string().required()
                               }))
export function accessDeniedErrorType() : Joi.AnySchema {
   return schema.accessDeniedErrorType
}

schema.invalidScopeErrorType = Joi.lazy(() => Joi.object().unknown().keys({
                                  code: Joi.string().only('invalid_scope').required(),
                                  message: Joi.string().required()
                               }))
export function invalidScopeErrorType() : Joi.AnySchema {
   return schema.invalidScopeErrorType
}

schema.duplicateAttributeValueErrorType = Joi.lazy(() => Joi.object().unknown().keys({
                                             attribute: attributeType().required(),
                                             code: Joi.string().only('DuplicateAttributeValue').required(),
                                             message: Joi.string().required()
                                          }))
export function duplicateAttributeValueErrorType() : Joi.AnySchema {
   return schema.duplicateAttributeValueErrorType
}

schema.duplicateAttributeValuesErrorType = Joi.lazy(() => Joi.object().unknown().keys({
                                              attributes: Joi.array().items(attributeType()).required(),
                                              code: Joi.string().only('DuplicateAttributeValues').required(),
                                              message: Joi.string().required()
                                           }))
export function duplicateAttributeValuesErrorType() : Joi.AnySchema {
   return schema.duplicateAttributeValuesErrorType
}

schema.duplicateFieldErrorType = Joi.lazy(() => Joi.object().unknown().keys({
                                    code: Joi.string().only('DuplicateField').required(),
                                    message: Joi.string().required(),
                                    duplicateValue: Joi.any().optional(),
                                    field: Joi.string().optional()
                                 }))
export function duplicateFieldErrorType() : Joi.AnySchema {
   return schema.duplicateFieldErrorType
}

schema.duplicateVariantValuesErrorType = Joi.lazy(() => Joi.object().unknown().keys({
                                            variantValues: variantValuesType().required(),
                                            code: Joi.string().only('DuplicateVariantValues').required(),
                                            message: Joi.string().required()
                                         }))
export function duplicateVariantValuesErrorType() : Joi.AnySchema {
   return schema.duplicateVariantValuesErrorType
}

schema.variantValuesType = Joi.lazy(() => Joi.object().unknown().keys({
                              attributes: Joi.array().items(attributeType()).required(),
                              prices: Joi.array().items(priceImportType()).required(),
                              sku: Joi.string().optional()
                           }))
export function variantValuesType() : Joi.AnySchema {
   return schema.variantValuesType
}

schema.insufficientScopeErrorType = Joi.lazy(() => Joi.object().unknown().keys({
                                       code: Joi.string().only('insufficient_scope').required(),
                                       message: Joi.string().required()
                                    }))
export function insufficientScopeErrorType() : Joi.AnySchema {
   return schema.insufficientScopeErrorType
}

schema.invalidCredentialsErrorType = Joi.lazy(() => Joi.object().unknown().keys({
                                        code: Joi.string().only('InvalidCredentials').required(),
                                        message: Joi.string().required()
                                     }))
export function invalidCredentialsErrorType() : Joi.AnySchema {
   return schema.invalidCredentialsErrorType
}

schema.invalidTokenErrorType = Joi.lazy(() => Joi.object().unknown().keys({
                                  code: Joi.string().only('invalid_token').required(),
                                  message: Joi.string().required()
                               }))
export function invalidTokenErrorType() : Joi.AnySchema {
   return schema.invalidTokenErrorType
}

schema.invalidFieldErrorType = Joi.lazy(() => Joi.object().unknown().keys({
                                  invalidValue: Joi.any().required(),
                                  code: Joi.string().only('InvalidField').required(),
                                  field: Joi.string().required(),
                                  message: Joi.string().required(),
                                  allowedValues: Joi.array().items(Joi.any()).optional()
                               }))
export function invalidFieldErrorType() : Joi.AnySchema {
   return schema.invalidFieldErrorType
}

schema.invalidJsonInputType = Joi.lazy(() => Joi.object().unknown().keys({
                                 code: Joi.string().only('InvalidJsonInput').required(),
                                 message: Joi.string().required()
                              }))
export function invalidJsonInputType() : Joi.AnySchema {
   return schema.invalidJsonInputType
}

schema.invalidInputType = Joi.lazy(() => Joi.object().unknown().keys({
                             code: Joi.string().only('InvalidInput').required(),
                             message: Joi.string().required()
                          }))
export function invalidInputType() : Joi.AnySchema {
   return schema.invalidInputType
}

schema.resourceNotFoundErrorType = Joi.lazy(() => Joi.object().unknown().keys({
                                      code: Joi.string().only('ResourceNotFound').required(),
                                      message: Joi.string().required(),
                                      resource: Joi.any().optional()
                                   }))
export function resourceNotFoundErrorType() : Joi.AnySchema {
   return schema.resourceNotFoundErrorType
}

schema.resourceCreationErrorType = Joi.lazy(() => Joi.object().unknown().keys({
                                      code: Joi.string().only('ResourceCreation').required(),
                                      message: Joi.string().required(),
                                      resource: Joi.any().optional()
                                   }))
export function resourceCreationErrorType() : Joi.AnySchema {
   return schema.resourceCreationErrorType
}

schema.resourceUpdateErrorType = Joi.lazy(() => Joi.object().unknown().keys({
                                    code: Joi.string().only('ResourceUpdate').required(),
                                    message: Joi.string().required(),
                                    resource: Joi.any().optional()
                                 }))
export function resourceUpdateErrorType() : Joi.AnySchema {
   return schema.resourceUpdateErrorType
}

schema.resourceDeletionErrorType = Joi.lazy(() => Joi.object().unknown().keys({
                                      code: Joi.string().only('ResourceDeletion').required(),
                                      message: Joi.string().required(),
                                      resource: Joi.any().optional()
                                   }))
export function resourceDeletionErrorType() : Joi.AnySchema {
   return schema.resourceDeletionErrorType
}

schema.requiredFieldErrorType = Joi.lazy(() => Joi.object().unknown().keys({
                                   code: Joi.string().only('RequiredField').required(),
                                   field: Joi.string().required(),
                                   message: Joi.string().required()
                                }))
export function requiredFieldErrorType() : Joi.AnySchema {
   return schema.requiredFieldErrorType
}

schema.invalidStateTransitionErrorType = Joi.lazy(() => Joi.object().unknown().keys({
                                            currentState: processingStateType().required(),
                                            newState: processingStateType().required(),
                                            code: Joi.string().only('InvalidTransition').required(),
                                            message: Joi.string().required()
                                         }))
export function invalidStateTransitionErrorType() : Joi.AnySchema {
   return schema.invalidStateTransitionErrorType
}

schema.concurrentModificationErrorType = Joi.lazy(() => Joi.object().unknown().keys({
                                            conflictedResource: Joi.any().required(),
                                            currentVersion: Joi.number().required(),
                                            specifiedVersion: Joi.number().required(),
                                            code: Joi.string().only('ConcurrentModification').required(),
                                            message: Joi.string().required()
                                         }))
export function concurrentModificationErrorType() : Joi.AnySchema {
   return schema.concurrentModificationErrorType
}

schema.contentionErrorType = Joi.lazy(() => Joi.object().unknown().keys({
                                code: Joi.string().only('Contention').required(),
                                message: Joi.string().required()
                             }))
export function contentionErrorType() : Joi.AnySchema {
   return schema.contentionErrorType
}

schema.genericErrorType = Joi.lazy(() => Joi.object().unknown().keys({
                             code: Joi.string().only('Generic').required(),
                             message: Joi.string().required()
                          }))
export function genericErrorType() : Joi.AnySchema {
   return schema.genericErrorType
}