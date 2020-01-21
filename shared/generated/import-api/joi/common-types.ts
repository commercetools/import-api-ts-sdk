//Generated file, please do not change

import * as Joi from 'joi'
import { productVariantImportType } from './productvariants-types'
import { priceImportType } from './prices-types'
import { categoryImportType } from './categories-types'
import { productImportType } from './products-types'
import { productTypeImportType } from './producttypes-types'

const schema = {
  assetType: null,
  assetDimensionsType: null,
  assetSourceType: null,
  imageType: null,
  enumValueType: null,
  localizedEnumValueType: null,
  localizedStringType: null,
  importResourceType: null,
  keyReferenceType: null,
  cartDiscountKeyReferenceType: null,
  categoryKeyReferenceType: null,
  channelKeyReferenceType: null,
  customerKeyReferenceType: null,
  customerGroupKeyReferenceType: null,
  priceKeyReferenceType: null,
  productKeyReferenceType: null,
  productTypeKeyReferenceType: null,
  productVariantKeyReferenceType: null,
  shippingMethodKeyReferenceType: null,
  stateKeyReferenceType: null,
  taxCategoryKeyReferenceType: null,
  moneyType: null,
  importResourceTypeType: null,
  referenceTypeType: null,
  processingStateType: null,
  addressType: null
}

schema.assetType = Joi.lazy(() => Joi.object().unknown().keys({
                      sources: Joi.array().items(assetSourceType()).required(),
                      name: localizedStringType().required(),
                      key: Joi.string().required(),
                      tags: Joi.array().items(Joi.string()).optional(),
                      description: localizedStringType().optional()
                   }))
export function assetType() : Joi.AnySchema {
   return schema.assetType
}

schema.assetDimensionsType = Joi.lazy(() => Joi.object().unknown().keys({
                                h: Joi.number().required(),
                                w: Joi.number().required()
                             }))
export function assetDimensionsType() : Joi.AnySchema {
   return schema.assetDimensionsType
}

schema.assetSourceType = Joi.lazy(() => Joi.object().unknown().keys({
                            uri: Joi.string().required(),
                            dimensions: assetDimensionsType().optional(),
                            contentType: Joi.string().optional(),
                            key: Joi.string().optional()
                         }))
export function assetSourceType() : Joi.AnySchema {
   return schema.assetSourceType
}

schema.imageType = Joi.lazy(() => Joi.object().unknown().keys({
                      dimensions: assetDimensionsType().required(),
                      url: Joi.string().required(),
                      label: Joi.string().optional()
                   }))
export function imageType() : Joi.AnySchema {
   return schema.imageType
}

schema.enumValueType = Joi.lazy(() => Joi.object().unknown().keys({
                          key: Joi.string().required(),
                          label: Joi.string().required()
                       }))
export function enumValueType() : Joi.AnySchema {
   return schema.enumValueType
}

schema.localizedEnumValueType = Joi.lazy(() => Joi.object().unknown().keys({
                                   label: localizedStringType().required(),
                                   key: Joi.string().required()
                                }))
export function localizedEnumValueType() : Joi.AnySchema {
   return schema.localizedEnumValueType
}

schema.localizedStringType = Joi.lazy(() => Joi.object().pattern(new RegExp('/^[a-z]{2}(-[A-Z]{2})?$/'), Joi.string()))
export function localizedStringType() : Joi.AnySchema {
   return schema.localizedStringType
}

schema.importResourceType = Joi.lazy(() => Joi.object().unknown().keys({
                               key: Joi.string().required()
                            }))
export function importResourceType() : Joi.AnySchema {
   return schema.importResourceType
}

schema.keyReferenceType = Joi.lazy(() => Joi.alternatives([cartDiscountKeyReferenceType(), categoryKeyReferenceType(), channelKeyReferenceType(), customerKeyReferenceType(), customerGroupKeyReferenceType(), priceKeyReferenceType(), productKeyReferenceType(), productTypeKeyReferenceType(), productVariantKeyReferenceType(), shippingMethodKeyReferenceType(), stateKeyReferenceType(), taxCategoryKeyReferenceType()]))
export function keyReferenceType() : Joi.AnySchema {
   return schema.keyReferenceType
}

schema.cartDiscountKeyReferenceType = Joi.lazy(() => Joi.object().unknown().keys({
                                         typeId: referenceTypeType().only('cart-discount').required(),
                                         key: Joi.string().required()
                                      }))
export function cartDiscountKeyReferenceType() : Joi.AnySchema {
   return schema.cartDiscountKeyReferenceType
}

schema.categoryKeyReferenceType = Joi.lazy(() => Joi.object().unknown().keys({
                                     typeId: referenceTypeType().only('category').required(),
                                     key: Joi.string().required()
                                  }))
export function categoryKeyReferenceType() : Joi.AnySchema {
   return schema.categoryKeyReferenceType
}

schema.channelKeyReferenceType = Joi.lazy(() => Joi.object().unknown().keys({
                                    typeId: referenceTypeType().only('channel').required(),
                                    key: Joi.string().required()
                                 }))
export function channelKeyReferenceType() : Joi.AnySchema {
   return schema.channelKeyReferenceType
}

schema.customerKeyReferenceType = Joi.lazy(() => Joi.object().unknown().keys({
                                     typeId: referenceTypeType().only('customer').required(),
                                     key: Joi.string().required()
                                  }))
export function customerKeyReferenceType() : Joi.AnySchema {
   return schema.customerKeyReferenceType
}

schema.customerGroupKeyReferenceType = Joi.lazy(() => Joi.object().unknown().keys({
                                          typeId: referenceTypeType().only('customer-group').required(),
                                          key: Joi.string().required()
                                       }))
export function customerGroupKeyReferenceType() : Joi.AnySchema {
   return schema.customerGroupKeyReferenceType
}

schema.priceKeyReferenceType = Joi.lazy(() => Joi.object().unknown().keys({
                                  typeId: referenceTypeType().only('price').required(),
                                  key: Joi.string().required()
                               }))
export function priceKeyReferenceType() : Joi.AnySchema {
   return schema.priceKeyReferenceType
}

schema.productKeyReferenceType = Joi.lazy(() => Joi.object().unknown().keys({
                                    typeId: referenceTypeType().only('product').required(),
                                    key: Joi.string().required()
                                 }))
export function productKeyReferenceType() : Joi.AnySchema {
   return schema.productKeyReferenceType
}

schema.productTypeKeyReferenceType = Joi.lazy(() => Joi.object().unknown().keys({
                                        typeId: referenceTypeType().only('product-type').required(),
                                        key: Joi.string().required()
                                     }))
export function productTypeKeyReferenceType() : Joi.AnySchema {
   return schema.productTypeKeyReferenceType
}

schema.productVariantKeyReferenceType = Joi.lazy(() => Joi.object().unknown().keys({
                                           typeId: referenceTypeType().only('product-variant').required(),
                                           key: Joi.string().required()
                                        }))
export function productVariantKeyReferenceType() : Joi.AnySchema {
   return schema.productVariantKeyReferenceType
}

schema.shippingMethodKeyReferenceType = Joi.lazy(() => Joi.object().unknown().keys({
                                           typeId: referenceTypeType().only('shipping-method').required(),
                                           key: Joi.string().required()
                                        }))
export function shippingMethodKeyReferenceType() : Joi.AnySchema {
   return schema.shippingMethodKeyReferenceType
}

schema.stateKeyReferenceType = Joi.lazy(() => Joi.object().unknown().keys({
                                  typeId: referenceTypeType().only('state').required(),
                                  key: Joi.string().required()
                               }))
export function stateKeyReferenceType() : Joi.AnySchema {
   return schema.stateKeyReferenceType
}

schema.taxCategoryKeyReferenceType = Joi.lazy(() => Joi.object().unknown().keys({
                                        typeId: referenceTypeType().only('tax-category').required(),
                                        key: Joi.string().required()
                                     }))
export function taxCategoryKeyReferenceType() : Joi.AnySchema {
   return schema.taxCategoryKeyReferenceType
}

schema.moneyType = Joi.lazy(() => Joi.object().unknown().keys({
                      currencyCode: Joi.string().required(),
                      centAmount: Joi.number().required()
                   }))
export function moneyType() : Joi.AnySchema {
   return schema.moneyType
}

const importResourceTypeTypeValues = [
   'category',
   'order',
   'price',
   'product',
   'product-type',
   'product-variant',
   'product-variant-patch'
]

export function importResourceTypeType(): Joi.AnySchema {
   return Joi.string().only(importResourceTypeTypeValues)
}

const referenceTypeTypeValues = [
   'cart-discount',
   'category',
   'channel',
   'customer',
   'customer-group',
   'price',
   'product',
   'product-type',
   'product-variant',
   'shipping-method',
   'state',
   'tax-category'
]

export function referenceTypeType(): Joi.AnySchema {
   return Joi.string().only(referenceTypeTypeValues)
}

const processingStateTypeValues = [
   'Accepted',
   'ValidationFailed',
   'Unresolved',
   'Resolved',
   'WaitForMasterVariant',
   'Imported',
   'Deleted',
   'Rejected',
   'Skipped',
   'Expired'
]

export function processingStateType(): Joi.AnySchema {
   return Joi.string().only(processingStateTypeValues)
}

schema.addressType = Joi.lazy(() => Joi.object().unknown().keys({
                        country: Joi.string().required(),
                        additionalAddressInfo: Joi.string().optional(),
                        additionalStreetInfo: Joi.string().optional(),
                        apartment: Joi.string().optional(),
                        building: Joi.string().optional(),
                        city: Joi.string().optional(),
                        company: Joi.string().optional(),
                        department: Joi.string().optional(),
                        email: Joi.string().optional(),
                        externalId: Joi.string().optional(),
                        fax: Joi.string().optional(),
                        firstName: Joi.string().optional(),
                        id: Joi.string().optional(),
                        key: Joi.string().optional(),
                        lastName: Joi.string().optional(),
                        mobile: Joi.string().optional(),
                        pOBox: Joi.string().optional(),
                        phone: Joi.string().optional(),
                        postalCode: Joi.string().optional(),
                        region: Joi.string().optional(),
                        salutation: Joi.string().optional(),
                        state: Joi.string().optional(),
                        streetName: Joi.string().optional(),
                        streetNumber: Joi.string().optional(),
                        title: Joi.string().optional()
                     }))
export function addressType() : Joi.AnySchema {
   return schema.addressType
}