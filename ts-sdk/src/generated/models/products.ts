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
/**
*	Import representation for a prduct.
*	
*	The import representation for a product is the most minimal representation required
*	for creating a product in commercetools. 
*	
*/
export interface ProductImport extends ImportResource {
  /**
  *	Maps to `Product.name`.
  *	
  */
  readonly name: LocalizedString;
  /**
  *	The product's product type. Maps to `Product.productType`.
  *	
  *	The product type referenced
  *	must already exist in the commercetools project, or the 
  *	import operation state is set to `Unresolved`.
  *	
  */
  readonly productType: ProductTypeKeyReference;
  /**
  *	Human-readable identifiers usually used as deep-link URL to the related product. Each slug must be unique across a project,
  *	but a product can have the same slug for different languages. Allowed are alphabetic, numeric, underscore (_) and hyphen (-) characters.
  *	
  */
  readonly slug: LocalizedString;
  /**
  *	Maps to `Product.description`.
  *	
  */
  readonly description?: LocalizedString;
  /**
  *	An array of references to a categories by their keys. Maps to `Product.categories`. 
  *	
  *	The categories referenced
  *	must already exist in the commercetools project, or the 
  *	import operation state is set to `Unresolved`.
  *	
  */
  readonly categories?: CategoryKeyReference[];
  readonly metaTitle?: LocalizedString;
  readonly metaDescription?: LocalizedString;
  readonly metaKeywords?: LocalizedString;
  /**
  *	References a tax category by its key.
  *	
  *	The tax category referenced must already exist 
  *	in the commercetools project, or the 
  *	import operation state is set to `Unresolved`.
  *	
  */
  readonly taxCategory?: TaxCategoryKeyReference;
  readonly searchKeywords?: SearchKeywords;
  /**
  *	References a state by its key.
  *	
  *	The tax category referenced must already exist 
  *	in the commercetools project, or the 
  *	import operation state is set to `Unresolved`.
  *	
  */
  readonly state?: StateKeyReference
}