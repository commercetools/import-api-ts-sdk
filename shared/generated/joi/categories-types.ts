//Generated file, please do not change

import * as Joi from 'joi'
import { categoryKeyReferenceType } from './common-types'
import { assetType } from './common-types'
import { localizedStringType } from './common-types'
import { importResourceType } from './common-types'

const schema = {
  categoryImportType: null
}

schema.categoryImportType = Joi.lazy(() => Joi.object().unknown().keys({
                               name: localizedStringType().required(),
                               slug: localizedStringType().required(),
                               key: Joi.string().required(),
                               assets: Joi.array().items(assetType()).optional(),
                               parent: categoryKeyReferenceType().optional(),
                               description: localizedStringType().optional(),
                               metaDescription: localizedStringType().optional(),
                               metaKeywords: localizedStringType().optional(),
                               metaTitle: localizedStringType().optional(),
                               externalId: Joi.string().optional(),
                               orderHint: Joi.string().optional()
                            }))
export function categoryImportType() : Joi.AnySchema {
   return schema.categoryImportType
}