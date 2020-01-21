//Generated file, please do not change

import * as Joi from 'joi'
import { productKeyReferenceType } from './common-types'
import { productVariantKeyReferenceType } from './common-types'
import { customerGroupKeyReferenceType } from './common-types'
import { channelKeyReferenceType } from './common-types'
import { moneyType } from './common-types'
import { importResourceType } from './common-types'

const schema = {
  subRateType: null,
  taxRateType: null,
  priceImportType: null
}

schema.subRateType = Joi.lazy(() => Joi.object().unknown().keys({
                        amount: Joi.number().required(),
                        name: Joi.string().required()
                     }))
export function subRateType() : Joi.AnySchema {
   return schema.subRateType
}

schema.taxRateType = Joi.lazy(() => Joi.object().unknown().keys({
                        country: Joi.string().required(),
                        includedInPrice: Joi.boolean().required(),
                        amount: Joi.number().required(),
                        name: Joi.string().required(),
                        subRates: Joi.array().items(subRateType()).optional(),
                        id: Joi.string().optional(),
                        state: Joi.string().optional()
                     }))
export function taxRateType() : Joi.AnySchema {
   return schema.taxRateType
}

schema.priceImportType = Joi.lazy(() => Joi.object().unknown().keys({
                            value: moneyType().required(),
                            product: productKeyReferenceType().required(),
                            productVariant: productVariantKeyReferenceType().required(),
                            key: Joi.string().required(),
                            channel: channelKeyReferenceType().optional(),
                            country: Joi.string().optional(),
                            customerGroup: customerGroupKeyReferenceType().optional(),
                            validFrom: Joi.date().iso().optional(),
                            validUntil: Joi.date().iso().optional()
                         }))
export function priceImportType() : Joi.AnySchema {
   return schema.priceImportType
}