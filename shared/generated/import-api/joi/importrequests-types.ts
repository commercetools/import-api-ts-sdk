//Generated file, please do not change

import * as Joi from 'joi'
import { importResourceTypeType } from './common-types'
import { importOperationStatusType } from './importoperations-types'
import { categoryImportType } from './categories-types'
import { productImportType } from './products-types'
import { productTypeImportType } from './producttypes-types'
import { productVariantImportType } from './productvariants-types'
import { priceImportType } from './prices-types'
import { productVariantPatchType } from './productvariants-types'

const schema = {
  importRequestType: null,
  importResponseType: null,
  categoryImportRequestType: null,
  productImportRequestType: null,
  productTypeImportRequestType: null,
  productVariantImportRequestType: null,
  priceImportRequestType: null,
  productVariantPatchRequestType: null
}

schema.importRequestType = Joi.lazy(() => Joi.alternatives([categoryImportRequestType(), productImportRequestType(), productTypeImportRequestType(), productVariantImportRequestType(), priceImportRequestType(), productVariantPatchRequestType()]))
export function importRequestType() : Joi.AnySchema {
   return schema.importRequestType
}

schema.importResponseType = Joi.lazy(() => Joi.object().unknown().keys({
                               operationStatus: Joi.array().items(importOperationStatusType()).required()
                            }))
export function importResponseType() : Joi.AnySchema {
   return schema.importResponseType
}

schema.categoryImportRequestType = Joi.lazy(() => Joi.object().unknown().keys({
                                      resources: Joi.array().items(categoryImportType()).required(),
                                      type: importResourceTypeType().only('category').required()
                                   }))
export function categoryImportRequestType() : Joi.AnySchema {
   return schema.categoryImportRequestType
}

schema.productImportRequestType = Joi.lazy(() => Joi.object().unknown().keys({
                                     resources: Joi.array().items(productImportType()).required(),
                                     type: importResourceTypeType().only('product').required()
                                  }))
export function productImportRequestType() : Joi.AnySchema {
   return schema.productImportRequestType
}

schema.productTypeImportRequestType = Joi.lazy(() => Joi.object().unknown().keys({
                                         resources: Joi.array().items(productTypeImportType()).required(),
                                         type: importResourceTypeType().only('product-type').required()
                                      }))
export function productTypeImportRequestType() : Joi.AnySchema {
   return schema.productTypeImportRequestType
}

schema.productVariantImportRequestType = Joi.lazy(() => Joi.object().unknown().keys({
                                            resources: Joi.array().items(productVariantImportType()).required(),
                                            type: importResourceTypeType().only('product-variant').required()
                                         }))
export function productVariantImportRequestType() : Joi.AnySchema {
   return schema.productVariantImportRequestType
}

schema.priceImportRequestType = Joi.lazy(() => Joi.object().unknown().keys({
                                   resources: Joi.array().items(priceImportType()).required(),
                                   type: importResourceTypeType().only('price').required()
                                }))
export function priceImportRequestType() : Joi.AnySchema {
   return schema.priceImportRequestType
}

schema.productVariantPatchRequestType = Joi.lazy(() => Joi.object().unknown().keys({
                                           patches: Joi.array().items(productVariantPatchType()).required(),
                                           type: importResourceTypeType().only('product-variant-patch').required()
                                        }))
export function productVariantPatchRequestType() : Joi.AnySchema {
   return schema.productVariantPatchRequestType
}