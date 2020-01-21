//Generated file, please do not change

import * as Joi from 'joi'
import { importResourceTypeType } from './common-types'

const schema = {
  importSinkType: null,
  importSinkDraftType: null,
  predicateType: null,
  javascriptPredicateType: null,
  importSinkPagedResponseType: null
}

schema.importSinkType = Joi.lazy(() => Joi.object().unknown().keys({
                           resourceType: importResourceTypeType().required(),
                           createdAt: Joi.date().iso().required(),
                           lastModifiedAt: Joi.date().iso().required(),
                           version: Joi.number().required(),
                           key: Joi.string().required(),
                           skipPredicate: predicateType().optional()
                        }))
export function importSinkType() : Joi.AnySchema {
   return schema.importSinkType
}

schema.importSinkDraftType = Joi.lazy(() => Joi.object().unknown().keys({
                                resourceType: importResourceTypeType().required(),
                                key: Joi.string().required(),
                                skipPredicate: predicateType().optional(),
                                version: Joi.number().optional()
                             }))
export function importSinkDraftType() : Joi.AnySchema {
   return schema.importSinkDraftType
}

schema.predicateType = Joi.lazy(() => Joi.alternatives([javascriptPredicateType()]))
export function predicateType() : Joi.AnySchema {
   return schema.predicateType
}

schema.javascriptPredicateType = Joi.lazy(() => Joi.object().unknown().keys({
                                    expression: Joi.string().required(),
                                    type: Joi.string().only('javascript').required()
                                 }))
export function javascriptPredicateType() : Joi.AnySchema {
   return schema.javascriptPredicateType
}

schema.importSinkPagedResponseType = Joi.lazy(() => Joi.object().unknown().keys({
                                        results: Joi.array().items(importSinkType()).required(),
                                        count: Joi.number().required(),
                                        limit: Joi.number().required(),
                                        offset: Joi.number().required()
                                     }))
export function importSinkPagedResponseType() : Joi.AnySchema {
   return schema.importSinkPagedResponseType
}