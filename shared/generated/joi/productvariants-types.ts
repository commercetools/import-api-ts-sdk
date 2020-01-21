//Generated file, please do not change

import * as Joi from 'joi'
import { localizedStringType } from './common-types'
import { moneyType } from './common-types'
import { keyReferenceType } from './common-types'
import { productKeyReferenceType } from './common-types'
import { imageType } from './common-types'
import { assetType } from './common-types'
import { importResourceType } from './common-types'
import { productVariantKeyReferenceType } from './common-types'

const schema = {
  attributeType: null,
  booleanAttributeType: null,
  booleanSetAttributeType: null,
  dateAttributeType: null,
  dateSetAttributeType: null,
  dateTimeAttributeType: null,
  dateTimeSetAttributeType: null,
  enumAttributeType: null,
  enumSetAttributeType: null,
  localizableEnumAttributeType: null,
  localizableEnumSetAttributeType: null,
  localizableTextAttributeType: null,
  localizableTextSetAttributeType: null,
  moneyAttributeType: null,
  moneySetAttributeType: null,
  numberAttributeType: null,
  numberSetAttributeType: null,
  referenceAttributeType: null,
  referenceSetAttributeType: null,
  textAttributeType: null,
  textSetAttributeType: null,
  timeAttributeType: null,
  timeSetAttributeType: null,
  productVariantImportType: null,
  productVariantPatchType: null,
  attributesType: null
}

schema.attributeType = Joi.lazy(() => Joi.alternatives([booleanAttributeType(), booleanSetAttributeType(), dateAttributeType(), dateSetAttributeType(), dateTimeAttributeType(), dateTimeSetAttributeType(), enumAttributeType(), enumSetAttributeType(), localizableEnumAttributeType(), localizableEnumSetAttributeType(), localizableTextAttributeType(), localizableTextSetAttributeType(), moneyAttributeType(), moneySetAttributeType(), numberAttributeType(), numberSetAttributeType(), referenceAttributeType(), referenceSetAttributeType(), textAttributeType(), textSetAttributeType(), timeAttributeType(), timeSetAttributeType()]))
export function attributeType() : Joi.AnySchema {
   return schema.attributeType
}

schema.booleanAttributeType = Joi.lazy(() => Joi.object().unknown().keys({
                                 value: Joi.boolean().required(),
                                 type: Joi.string().only('boolean').required(),
                                 name: Joi.string().optional()
                              }))
export function booleanAttributeType() : Joi.AnySchema {
   return schema.booleanAttributeType
}

schema.booleanSetAttributeType = Joi.lazy(() => Joi.object().unknown().keys({
                                    value: Joi.array().items(Joi.boolean()).required(),
                                    type: Joi.string().only('boolean-set').required(),
                                    name: Joi.string().optional()
                                 }))
export function booleanSetAttributeType() : Joi.AnySchema {
   return schema.booleanSetAttributeType
}

schema.dateAttributeType = Joi.lazy(() => Joi.object().unknown().keys({
                              value: Joi.date().iso().required(),
                              type: Joi.string().only('date').required(),
                              name: Joi.string().optional()
                           }))
export function dateAttributeType() : Joi.AnySchema {
   return schema.dateAttributeType
}

schema.dateSetAttributeType = Joi.lazy(() => Joi.object().unknown().keys({
                                 value: Joi.array().items(Joi.date().iso()).required(),
                                 type: Joi.string().only('date-set').required(),
                                 name: Joi.string().optional()
                              }))
export function dateSetAttributeType() : Joi.AnySchema {
   return schema.dateSetAttributeType
}

schema.dateTimeAttributeType = Joi.lazy(() => Joi.object().unknown().keys({
                                  value: Joi.date().iso().required(),
                                  type: Joi.string().only('datetime').required(),
                                  name: Joi.string().optional()
                               }))
export function dateTimeAttributeType() : Joi.AnySchema {
   return schema.dateTimeAttributeType
}

schema.dateTimeSetAttributeType = Joi.lazy(() => Joi.object().unknown().keys({
                                     value: Joi.array().items(Joi.date().iso()).required(),
                                     type: Joi.string().only('datetime-set').required(),
                                     name: Joi.string().optional()
                                  }))
export function dateTimeSetAttributeType() : Joi.AnySchema {
   return schema.dateTimeSetAttributeType
}

schema.enumAttributeType = Joi.lazy(() => Joi.object().unknown().keys({
                              type: Joi.string().only('enum').required(),
                              value: Joi.string().required(),
                              name: Joi.string().optional()
                           }))
export function enumAttributeType() : Joi.AnySchema {
   return schema.enumAttributeType
}

schema.enumSetAttributeType = Joi.lazy(() => Joi.object().unknown().keys({
                                 value: Joi.array().items(Joi.string()).required(),
                                 type: Joi.string().only('enum-set').required(),
                                 name: Joi.string().optional()
                              }))
export function enumSetAttributeType() : Joi.AnySchema {
   return schema.enumSetAttributeType
}

schema.localizableEnumAttributeType = Joi.lazy(() => Joi.object().unknown().keys({
                                         type: Joi.string().only('lenum').required(),
                                         value: Joi.string().required(),
                                         name: Joi.string().optional()
                                      }))
export function localizableEnumAttributeType() : Joi.AnySchema {
   return schema.localizableEnumAttributeType
}

schema.localizableEnumSetAttributeType = Joi.lazy(() => Joi.object().unknown().keys({
                                            value: Joi.array().items(Joi.string()).required(),
                                            type: Joi.string().only('lenum-set').required(),
                                            name: Joi.string().optional()
                                         }))
export function localizableEnumSetAttributeType() : Joi.AnySchema {
   return schema.localizableEnumSetAttributeType
}

schema.localizableTextAttributeType = Joi.lazy(() => Joi.object().unknown().keys({
                                         value: localizedStringType().required(),
                                         type: Joi.string().only('ltext').required(),
                                         name: Joi.string().optional()
                                      }))
export function localizableTextAttributeType() : Joi.AnySchema {
   return schema.localizableTextAttributeType
}

schema.localizableTextSetAttributeType = Joi.lazy(() => Joi.object().unknown().keys({
                                            value: Joi.array().items(localizedStringType()).required(),
                                            type: Joi.string().only('ltext-set').required(),
                                            name: Joi.string().optional()
                                         }))
export function localizableTextSetAttributeType() : Joi.AnySchema {
   return schema.localizableTextSetAttributeType
}

schema.moneyAttributeType = Joi.lazy(() => Joi.object().unknown().keys({
                               value: moneyType().required(),
                               type: Joi.string().only('money').required(),
                               name: Joi.string().optional()
                            }))
export function moneyAttributeType() : Joi.AnySchema {
   return schema.moneyAttributeType
}

schema.moneySetAttributeType = Joi.lazy(() => Joi.object().unknown().keys({
                                  value: Joi.array().items(moneyType()).required(),
                                  type: Joi.string().only('money-set').required(),
                                  name: Joi.string().optional()
                               }))
export function moneySetAttributeType() : Joi.AnySchema {
   return schema.moneySetAttributeType
}

schema.numberAttributeType = Joi.lazy(() => Joi.object().unknown().keys({
                                value: Joi.number().required(),
                                type: Joi.string().only('number').required(),
                                name: Joi.string().optional()
                             }))
export function numberAttributeType() : Joi.AnySchema {
   return schema.numberAttributeType
}

schema.numberSetAttributeType = Joi.lazy(() => Joi.object().unknown().keys({
                                   value: Joi.array().items(Joi.number()).required(),
                                   type: Joi.string().only('number-set').required(),
                                   name: Joi.string().optional()
                                }))
export function numberSetAttributeType() : Joi.AnySchema {
   return schema.numberSetAttributeType
}

schema.referenceAttributeType = Joi.lazy(() => Joi.object().unknown().keys({
                                   value: keyReferenceType().required(),
                                   type: Joi.string().only('reference').required(),
                                   name: Joi.string().optional()
                                }))
export function referenceAttributeType() : Joi.AnySchema {
   return schema.referenceAttributeType
}

schema.referenceSetAttributeType = Joi.lazy(() => Joi.object().unknown().keys({
                                      value: Joi.array().items(keyReferenceType()).required(),
                                      type: Joi.string().only('reference-set').required(),
                                      name: Joi.string().optional()
                                   }))
export function referenceSetAttributeType() : Joi.AnySchema {
   return schema.referenceSetAttributeType
}

schema.textAttributeType = Joi.lazy(() => Joi.object().unknown().keys({
                              type: Joi.string().only('text').required(),
                              value: Joi.string().required(),
                              name: Joi.string().optional()
                           }))
export function textAttributeType() : Joi.AnySchema {
   return schema.textAttributeType
}

schema.textSetAttributeType = Joi.lazy(() => Joi.object().unknown().keys({
                                 value: Joi.array().items(Joi.string()).required(),
                                 type: Joi.string().only('text-set').required(),
                                 name: Joi.string().optional()
                              }))
export function textSetAttributeType() : Joi.AnySchema {
   return schema.textSetAttributeType
}

schema.timeAttributeType = Joi.lazy(() => Joi.object().unknown().keys({
                              type: Joi.string().only('time').required(),
                              value: Joi.string().required(),
                              name: Joi.string().optional()
                           }))
export function timeAttributeType() : Joi.AnySchema {
   return schema.timeAttributeType
}

schema.timeSetAttributeType = Joi.lazy(() => Joi.object().unknown().keys({
                                 value: Joi.array().items(Joi.string()).required(),
                                 type: Joi.string().only('time-set').required(),
                                 name: Joi.string().optional()
                              }))
export function timeSetAttributeType() : Joi.AnySchema {
   return schema.timeSetAttributeType
}

schema.productVariantImportType = Joi.lazy(() => Joi.object().unknown().keys({
                                     product: productKeyReferenceType().required(),
                                     isMasterVariant: Joi.boolean().required(),
                                     key: Joi.string().required(),
                                     assets: Joi.array().items(assetType()).optional(),
                                     attributes: Joi.array().items(attributeType()).optional(),
                                     images: Joi.array().items(imageType()).optional(),
                                     sku: Joi.string().optional()
                                  }))
export function productVariantImportType() : Joi.AnySchema {
   return schema.productVariantImportType
}

schema.productVariantPatchType = Joi.lazy(() => Joi.object().unknown().keys({
                                    product: productKeyReferenceType().required(),
                                    productVariant: productVariantKeyReferenceType().required(),
                                    attributes: attributesType().optional()
                                 }))
export function productVariantPatchType() : Joi.AnySchema {
   return schema.productVariantPatchType
}

schema.attributesType = Joi.lazy(() => Joi.object().pattern(new RegExp('//'), attributeType()))
export function attributesType() : Joi.AnySchema {
   return schema.attributesType
}