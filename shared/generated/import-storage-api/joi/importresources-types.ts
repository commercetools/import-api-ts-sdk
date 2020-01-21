//Generated file, please do not change

import * as Joi from 'joi'
import { referenceTypeType } from './common-types'
import { importResourceTypeType } from './common-types'

const schema = {
  unresolvedReferenceType: null,
  resourceReferenceType: null,
  unresolvedImportResourceType: null,
  unresolvedImportResourcePagedResponseType: null
}

schema.unresolvedReferenceType = Joi.lazy(() => Joi.object().unknown().keys({
                                    referenceType: referenceTypeType().required(),
                                    id: Joi.string().required(),
                                    importSinkKey: Joi.string().required(),
                                    operationId: Joi.string().required(),
                                    referenceKey: Joi.string().required()
                                 }))
export function unresolvedReferenceType() : Joi.AnySchema {
   return schema.unresolvedReferenceType
}

schema.resourceReferenceType = Joi.lazy(() => Joi.object().unknown().keys({
                                  resourceType: importResourceTypeType().required(),
                                  projectKey: Joi.string().required(),
                                  resourceKey: Joi.string().required()
                               }))
export function resourceReferenceType() : Joi.AnySchema {
   return schema.resourceReferenceType
}

schema.unresolvedImportResourceType = Joi.lazy(() => Joi.object().unknown().keys({
                                         resourceType: importResourceTypeType().required(),
                                         createdAt: Joi.date().iso().required(),
                                         importSinkKey: Joi.string().required(),
                                         operationId: Joi.string().required(),
                                         resourceAsString: Joi.string().required(),
                                         resourceKey: Joi.string().required()
                                      }))
export function unresolvedImportResourceType() : Joi.AnySchema {
   return schema.unresolvedImportResourceType
}

schema.unresolvedImportResourcePagedResponseType = Joi.lazy(() => Joi.object().unknown().keys({
                                                      results: Joi.array().items(unresolvedImportResourceType()).required(),
                                                      count: Joi.number().required(),
                                                      limit: Joi.number().required(),
                                                      offset: Joi.number().required()
                                                   }))
export function unresolvedImportResourcePagedResponseType() : Joi.AnySchema {
   return schema.unresolvedImportResourcePagedResponseType
}