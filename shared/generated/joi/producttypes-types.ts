//Generated file, please do not change

import * as Joi from 'joi'
import { localizedStringType } from './common-types'
import { productTypeKeyReferenceType } from './common-types'
import { referenceTypeType } from './common-types'
import { importResourceType } from './common-types'

const schema = {
  attributeDefinitionType: null,
  attributeTypeType: null,
  attributeBooleanTypeType: null,
  attributeDateTimeTypeType: null,
  attributeDateTypeType: null,
  attributeEnumTypeType: null,
  attributePlainEnumValueType: null,
  attributeLocalizableTextTypeType: null,
  attributeLocalizedEnumTypeType: null,
  attributeLocalizedEnumValueType: null,
  attributeMoneyTypeType: null,
  attributeNestedTypeType: null,
  attributeNumberTypeType: null,
  attributeReferenceTypeType: null,
  attributeSetTypeType: null,
  attributeTextTypeType: null,
  attributeTimeTypeType: null,
  attributeConstraintEnumType: null,
  textInputHintType: null,
  productTypeImportType: null
}

schema.attributeDefinitionType = Joi.lazy(() => Joi.object().unknown().keys({
                                    type: attributeTypeType().required(),
                                    label: localizedStringType().required(),
                                    isRequired: Joi.boolean().required(),
                                    name: Joi.string().required(),
                                    attributeConstraint: attributeConstraintEnumType().optional(),
                                    inputTip: localizedStringType().optional(),
                                    inputHint: textInputHintType().optional(),
                                    isSearchable: Joi.boolean().optional()
                                 }))
export function attributeDefinitionType() : Joi.AnySchema {
   return schema.attributeDefinitionType
}

schema.attributeTypeType = Joi.lazy(() => Joi.alternatives([attributeBooleanTypeType(), attributeDateTimeTypeType(), attributeDateTypeType(), attributeEnumTypeType(), attributeLocalizableTextTypeType(), attributeLocalizedEnumTypeType(), attributeMoneyTypeType(), attributeNestedTypeType(), attributeNumberTypeType(), attributeReferenceTypeType(), attributeSetTypeType(), attributeTextTypeType(), attributeTimeTypeType()]))
export function attributeTypeType() : Joi.AnySchema {
   return schema.attributeTypeType
}

schema.attributeBooleanTypeType = Joi.lazy(() => Joi.object().unknown().keys({
                                     name: Joi.string().only('boolean').required()
                                  }))
export function attributeBooleanTypeType() : Joi.AnySchema {
   return schema.attributeBooleanTypeType
}

schema.attributeDateTimeTypeType = Joi.lazy(() => Joi.object().unknown().keys({
                                      name: Joi.string().only('datetime').required()
                                   }))
export function attributeDateTimeTypeType() : Joi.AnySchema {
   return schema.attributeDateTimeTypeType
}

schema.attributeDateTypeType = Joi.lazy(() => Joi.object().unknown().keys({
                                  name: Joi.string().only('date').required()
                               }))
export function attributeDateTypeType() : Joi.AnySchema {
   return schema.attributeDateTypeType
}

schema.attributeEnumTypeType = Joi.lazy(() => Joi.object().unknown().keys({
                                  values: Joi.array().items(attributePlainEnumValueType()).required(),
                                  name: Joi.string().only('enum').required()
                               }))
export function attributeEnumTypeType() : Joi.AnySchema {
   return schema.attributeEnumTypeType
}

schema.attributePlainEnumValueType = Joi.lazy(() => Joi.object().unknown().keys({
                                        key: Joi.string().required(),
                                        label: Joi.string().required()
                                     }))
export function attributePlainEnumValueType() : Joi.AnySchema {
   return schema.attributePlainEnumValueType
}

schema.attributeLocalizableTextTypeType = Joi.lazy(() => Joi.object().unknown().keys({
                                             name: Joi.string().only('ltext').required()
                                          }))
export function attributeLocalizableTextTypeType() : Joi.AnySchema {
   return schema.attributeLocalizableTextTypeType
}

schema.attributeLocalizedEnumTypeType = Joi.lazy(() => Joi.object().unknown().keys({
                                           values: Joi.array().items(attributeLocalizedEnumValueType()).required(),
                                           name: Joi.string().only('lenum').required()
                                        }))
export function attributeLocalizedEnumTypeType() : Joi.AnySchema {
   return schema.attributeLocalizedEnumTypeType
}

schema.attributeLocalizedEnumValueType = Joi.lazy(() => Joi.object().unknown().keys({
                                            label: localizedStringType().required(),
                                            key: Joi.string().required()
                                         }))
export function attributeLocalizedEnumValueType() : Joi.AnySchema {
   return schema.attributeLocalizedEnumValueType
}

schema.attributeMoneyTypeType = Joi.lazy(() => Joi.object().unknown().keys({
                                   name: Joi.string().only('money').required()
                                }))
export function attributeMoneyTypeType() : Joi.AnySchema {
   return schema.attributeMoneyTypeType
}

schema.attributeNestedTypeType = Joi.lazy(() => Joi.object().unknown().keys({
                                    typeReference: productTypeKeyReferenceType().required(),
                                    name: Joi.string().only('nested').required()
                                 }))
export function attributeNestedTypeType() : Joi.AnySchema {
   return schema.attributeNestedTypeType
}

schema.attributeNumberTypeType = Joi.lazy(() => Joi.object().unknown().keys({
                                    name: Joi.string().only('number').required()
                                 }))
export function attributeNumberTypeType() : Joi.AnySchema {
   return schema.attributeNumberTypeType
}

schema.attributeReferenceTypeType = Joi.lazy(() => Joi.object().unknown().keys({
                                       referenceTypeId: referenceTypeType().required(),
                                       name: Joi.string().only('reference').required()
                                    }))
export function attributeReferenceTypeType() : Joi.AnySchema {
   return schema.attributeReferenceTypeType
}

schema.attributeSetTypeType = Joi.lazy(() => Joi.object().unknown().keys({
                                 elementType: attributeTypeType().required(),
                                 name: Joi.string().only('set').required()
                              }))
export function attributeSetTypeType() : Joi.AnySchema {
   return schema.attributeSetTypeType
}

schema.attributeTextTypeType = Joi.lazy(() => Joi.object().unknown().keys({
                                  name: Joi.string().only('text').required()
                               }))
export function attributeTextTypeType() : Joi.AnySchema {
   return schema.attributeTextTypeType
}

schema.attributeTimeTypeType = Joi.lazy(() => Joi.object().unknown().keys({
                                  name: Joi.string().only('time').required()
                               }))
export function attributeTimeTypeType() : Joi.AnySchema {
   return schema.attributeTimeTypeType
}

const attributeConstraintEnumTypeValues = [
   'None',
   'Unique',
   'CombinationUnique',
   'SameForAll'
]

export function attributeConstraintEnumType(): Joi.AnySchema {
   return Joi.string().only(attributeConstraintEnumTypeValues)
}

const textInputHintTypeValues = [
   'SingleLine',
   'MultiLine'
]

export function textInputHintType(): Joi.AnySchema {
   return Joi.string().only(textInputHintTypeValues)
}

schema.productTypeImportType = Joi.lazy(() => Joi.object().unknown().keys({
                                  description: Joi.string().required(),
                                  key: Joi.string().required(),
                                  name: Joi.string().required(),
                                  attributes: Joi.array().items(attributeDefinitionType()).optional()
                               }))
export function productTypeImportType() : Joi.AnySchema {
   return schema.productTypeImportType
}