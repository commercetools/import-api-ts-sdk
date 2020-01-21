//Generated file, please do not change

import * as Joi from 'joi'


const schema = {
  importSummaryType: null,
  operationStatesType: null
}

schema.importSummaryType = Joi.lazy(() => Joi.object().unknown().keys({
                              states: operationStatesType().required(),
                              total: Joi.number().required()
                           }))
export function importSummaryType() : Joi.AnySchema {
   return schema.importSummaryType
}

schema.operationStatesType = Joi.lazy(() => Joi.object().unknown().keys({
                                Accepted: Joi.number().required(),
                                Deleted: Joi.number().required(),
                                Expired: Joi.number().required(),
                                Imported: Joi.number().required(),
                                Rejected: Joi.number().required(),
                                Resolved: Joi.number().required(),
                                Skipped: Joi.number().required(),
                                Unresolved: Joi.number().required(),
                                ValidationFailed: Joi.number().required(),
                                WaitForMasterVariant: Joi.number().required()
                             }))
export function operationStatesType() : Joi.AnySchema {
   return schema.operationStatesType
}