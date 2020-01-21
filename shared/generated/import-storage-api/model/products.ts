//Generated file, please do not change

import { CategoryKeyReference, ImportResource, LocalizedString, ProductTypeKeyReference, StateKeyReference, TaxCategoryKeyReference } from './common'

export interface SearchKeywords {
  [key:string]: SearchKeyword[]
}
export interface SearchKeyword {
  readonly text: string;
  readonly suggestTokenizer?: SuggestTokenizer
}
export type SuggestTokenizer =
  CustomTokenizer |
  WhitespaceTokenizer
;
export interface CustomTokenizer {
  readonly type: "custom";
  readonly inputs: string[]
}
export interface WhitespaceTokenizer {
  readonly type: "whitespace";
}
export interface CategoryOrderHints {
  [key:string]: string
}
/**
*	For now we just import the attributes that are required by the CTP product draft.
*	Later we will add more attributes, but overall the goal is to create a separate
*	product data model targeting the special needs of an import client.
*	
*/
export interface ProductImport extends ImportResource {
  /**
  *	The human readable name of the product.
  */
  readonly name: LocalizedString;
  /**
  *	References a product type by its key.
  */
  readonly productType: ProductTypeKeyReference;
  /**
  *	Human-readable identifiers usually used as deep-link URL to the related product. Each slug must be unique across a project,
  *	but a product can have the same slug for different languages. Allowed are alphabetic, numeric, underscore (_) and hyphen (-) characters.
  *	
  */
  readonly slug: LocalizedString;
  readonly description?: LocalizedString;
  readonly categories?: CategoryKeyReference[];
  readonly categoryOrderHints?: CategoryOrderHints;
  readonly metaTitle?: LocalizedString;
  readonly metaDescription?: LocalizedString;
  readonly metaKeywords?: LocalizedString;
  /**
  *	References a tax category by its key.
  */
  readonly taxCategory?: TaxCategoryKeyReference;
  readonly searchKeywords?: SearchKeywords;
  /**
  *	References a state by its key.
  */
  readonly state?: StateKeyReference
}