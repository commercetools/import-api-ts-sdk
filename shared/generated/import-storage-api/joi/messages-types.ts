//Generated file, please do not change

import * as Joi from 'joi'
import { importResourceTypeType } from './common-types'

const schema = {
  importMessageHeadersType: null,
  importMessageType: null
}

schema.importMessageHeadersType = Joi.lazy(() => Joi.object().unknown().keys({
                                     type: importResourceTypeType().required(),
                                     importSinkKey: Joi.string().required(),
                                     operationId: Joi.string().required(),
                                     projectKey: Joi.string().required()
                                  }))
export function importMessageHeadersType() : Joi.AnySchema {
   return schema.importMessageHeadersType
}

schema.importMessageType = Joi.lazy(() => Joi.object().unknown().keys({
                              headers: importMessageHeadersType().required(),
                              data: Joi.any().required()
                           }))
export function importMessageType() : Joi.AnySchema {
   return schema.importMessageType
}