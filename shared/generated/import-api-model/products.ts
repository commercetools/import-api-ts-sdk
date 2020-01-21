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
	<p>Import representation for a prduct.</p>
	<p>The import representation for a product is the most minimal representation required
	for creating a product in commercetools.</p>
*/
export interface ProductImport extends ImportResource {
  /**
  	<p>Maps to <code>Product.name</code>.</p>
  */
  readonly name: LocalizedString;
  /**
  	<p>The product's product type. Maps to <code>Product.productType</code>.</p>
  	<p>The product type referenced
  	must already exist in the commercetools project, or the
  	import operation state is set to <code>Unresolved</code>.</p>
  */
  readonly productType: ProductTypeKeyReference;
  /**
  	<p>Human-readable identifiers usually used as deep-link URL to the related product. Each slug must be unique across a project,
  	but a product can have the same slug for different languages. Allowed are alphabetic, numeric, underscore (_) and hyphen (-) characters.</p>
  */
  readonly slug: LocalizedString;
  /**
  	<p>Maps to <code>Product.description</code>.</p>
  */
  readonly description?: LocalizedString;
  /**
  	<p>An array of references to a categories by their keys. Maps to <code>Product.categories</code>.</p>
  	<p>The categories referenced
  	must already exist in the commercetools project, or the
  	import operation state is set to <code>Unresolved</code>.</p>
  */
  readonly categories?: CategoryKeyReference[];
  
  readonly metaTitle?: LocalizedString;
  
  readonly metaDescription?: LocalizedString;
  
  readonly metaKeywords?: LocalizedString;
  /**
  	<p>References a tax category by its key.</p>
  	<p>The tax category referenced must already exist
  	in the commercetools project, or the
  	import operation state is set to <code>Unresolved</code>.</p>
  */
  readonly taxCategory?: TaxCategoryKeyReference;
  
  readonly searchKeywords?: SearchKeywords;
  /**
  	<p>References a state by its key.</p>
  	<p>The tax category referenced must already exist
  	in the commercetools project, or the
  	import operation state is set to <code>Unresolved</code>.</p>
  */
  readonly state?: StateKeyReference
}