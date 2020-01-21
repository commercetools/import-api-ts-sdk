//Generated file, please do not change

import * as Joi from 'joi'
import { localizedStringType } from './common-types'
import { stateKeyReferenceType } from './common-types'
import { categoryKeyReferenceType } from './common-types'
import { productTypeKeyReferenceType } from './common-types'
import { taxCategoryKeyReferenceType } from './common-types'
import { importResourceType } from './common-types'

const schema = {
  searchKeywordsType: null,
  searchKeywordType: null,
  suggestTokenizerType: null,
  customTokenizerType: null,
  whitespaceTokenizerType: null,
  productImportType: null
}

schema.searchKeywordsType = Joi.lazy(() => Joi.object().pattern(new RegExp('/^[a-z]{2}(-[A-Z]{2})?$/'), searchKeywordType()))
export function searchKeywordsType() : Joi.AnySchema {
   return schema.searchKeywordsType
}

schema.searchKeywordType = Joi.lazy(() => Joi.object().unknown().keys({
                              text: Joi.string().required(),
                              suggestTokenizer: suggestTokenizerType().optional()
                           }))
export function searchKeywordType() : Joi.AnySchema {
   return schema.searchKeywordType
}

schema.suggestTokenizerType = Joi.lazy(() => Joi.alternatives([customTokenizerType(), whitespaceTokenizerType()]))
export function suggestTokenizerType() : Joi.AnySchema {
   return schema.suggestTokenizerType
}

schema.customTokenizerType = Joi.lazy(() => Joi.object().unknown().keys({
                                inputs: Joi.array().items(Joi.string()).required(),
                                type: Joi.string().only('custom').required()
                             }))
export function customTokenizerType() : Joi.AnySchema {
   return schema.customTokenizerType
}

schema.whitespaceTokenizerType = Joi.lazy(() => Joi.object().unknown().keys({
                                    type: Joi.string().only('whitespace').required()
                                 }))
export function whitespaceTokenizerType() : Joi.AnySchema {
   return schema.whitespaceTokenizerType
}

schema.productImportType = Joi.lazy(() => Joi.object().unknown().keys({
                              name: localizedStringType().required(),
                              slug: localizedStringType().required(),
                              productType: productTypeKeyReferenceType().required(),
                              key: Joi.string().required(),
                              categories: Joi.array().items(categoryKeyReferenceType()).optional(),
                              description: localizedStringType().optional(),
                              metaDescription: localizedStringType().optional(),
                              metaKeywords: localizedStringType().optional(),
                              metaTitle: localizedStringType().optional(),
                              searchKeywords: searchKeywordsType().optional(),
                              state: stateKeyReferenceType().optional(),
                              taxCategory: taxCategoryKeyReferenceType().optional()
                           }))
export function productImportType() : Joi.AnySchema {
   return schema.productImportType
}