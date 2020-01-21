//Generated file, please do not change

import * as Joi from 'joi'


const schema = {
  priceMappingType: null
}

schema.priceMappingType = Joi.lazy(() => Joi.object().unknown().keys({
                             priceId: Joi.string().required(),
                             priceKey: Joi.string().required(),
                             productVariantKey: Joi.string().required()
                          }))
export function priceMappingType() : Joi.AnySchema {
   return schema.priceMappingType
}