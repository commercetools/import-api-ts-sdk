//Generated file, please do not change

import { Asset, Image, ImportResource, KeyReference, LocalizedString, Money, ProductKeyReference, ProductVariantKeyReference } from './common'

/**
	<p>This type represents the value of an attribute of a product variant.
	The name and type property must match the name and type property of an attribute definition of the product type.</p>
*/
export type Attribute =
  BooleanAttribute |
  BooleanSetAttribute |
  DateAttribute |
  DateSetAttribute |
  DateTimeAttribute |
  DateTimeSetAttribute |
  EnumAttribute |
  EnumSetAttribute |
  LocalizableEnumAttribute |
  LocalizableEnumSetAttribute |
  LocalizableTextAttribute |
  LocalizableTextSetAttribute |
  MoneyAttribute |
  MoneySetAttribute |
  NumberAttribute |
  NumberSetAttribute |
  ReferenceAttribute |
  ReferenceSetAttribute |
  TextAttribute |
  TextSetAttribute |
  TimeAttribute |
  TimeSetAttribute
;
/**
	<p>This type represents an attribute which value is either &quot;true&quot; or &quot;false&quot;.</p>
*/
export interface BooleanAttribute {
  readonly type: "boolean";
  /**
  	<p>The name of this attribute must match a name of the product types attribute definitions.
  	The name is required if this type is used in a product variant and must not be set when
  	used in a product variant patch.</p>
  */
  readonly name?: string;
  
  readonly value: boolean
}
/**
	<p>This type represents an attribute which value is set of boolean values.</p>
*/
export interface BooleanSetAttribute {
  readonly type: "boolean-set";
  /**
  	<p>The name of this attribute must match a name of the product types attribute definitions.
  	The name is required if this type is used in a product variant and must not be set when
  	used in a product variant patch.</p>
  */
  readonly name?: string;
  
  readonly value: boolean[]
}
/**
	<p>This type represents an attribute which value is a date.</p>
*/
export interface DateAttribute {
  readonly type: "date";
  /**
  	<p>The name of this attribute must match a name of the product types attribute definitions.
  	The name is required if this type is used in a product variant and must not be set when
  	used in a product variant patch.</p>
  */
  readonly name?: string;
  
  readonly value: string
}
/**
	<p>This type represents an attribute which value is a set of dates.</p>
*/
export interface DateSetAttribute {
  readonly type: "date-set";
  /**
  	<p>The name of this attribute must match a name of the product types attribute definitions.
  	The name is required if this type is used in a product variant and must not be set when
  	used in a product variant patch.</p>
  */
  readonly name?: string;
  
  readonly value: string[]
}
/**
	<p>This type represents an attribute which value is a date with time.</p>
*/
export interface DateTimeAttribute {
  readonly type: "datetime";
  /**
  	<p>The name of this attribute must match a name of the product types attribute definitions.
  	The name is required if this type is used in a product variant and must not be set when
  	used in a product variant patch.</p>
  */
  readonly name?: string;
  
  readonly value: string
}
/**
	<p>This type represents an attribute which value is a set of dates with time.</p>
*/
export interface DateTimeSetAttribute {
  readonly type: "datetime-set";
  /**
  	<p>The name of this attribute must match a name of the product types attribute definitions.
  	The name is required if this type is used in a product variant and must not be set when
  	used in a product variant patch.</p>
  */
  readonly name?: string;
  
  readonly value: string[]
}
/**
	<p>This type represents an attribute which value is an enum.
	The attribute value refers to the key of the enum value.</p>
*/
export interface EnumAttribute {
  readonly type: "enum";
  /**
  	<p>The name of this attribute must match a name of the product types attribute definitions.
  	The name is required if this type is used in a product variant and must not be set when
  	used in a product variant patch.</p>
  */
  readonly name?: string;
  
  readonly value: string
}
/**
	<p>This type represents an attribute which value is an enum.
	The attribute value refers to the key of the enum value.</p>
*/
export interface EnumSetAttribute {
  readonly type: "enum-set";
  /**
  	<p>The name of this attribute must match a name of the product types attribute definitions.
  	The name is required if this type is used in a product variant and must not be set when
  	used in a product variant patch.</p>
  */
  readonly name?: string;
  
  readonly value: string[]
}
/**
	<p>This type represents an attribute which value is a localized enum.
	The attribute value refers to the key of the enum value.</p>
*/
export interface LocalizableEnumAttribute {
  readonly type: "lenum";
  /**
  	<p>The name of this attribute must match a name of the product types attribute definitions.
  	The name is required if this type is used in a product variant and must not be set when
  	used in a product variant patch.</p>
  */
  readonly name?: string;
  
  readonly value: string
}
/**
	<p>This type represents an attribute which value is a localized enum.
	The attribute value refers to the key of the enum value.</p>
*/
export interface LocalizableEnumSetAttribute {
  readonly type: "lenum-set";
  /**
  	<p>The name of this attribute must match a name of the product types attribute definitions.
  	The name is required if this type is used in a product variant and must not be set when
  	used in a product variant patch.</p>
  */
  readonly name?: string;
  
  readonly value: string[]
}
/**
	<p>This type represents an attribute which value is a localized text.</p>
*/
export interface LocalizableTextAttribute {
  readonly type: "ltext";
  /**
  	<p>The name of this attribute must match a name of the product types attribute definitions.
  	The name is required if this type is used in a product variant and must not be set when
  	used in a product variant patch.</p>
  */
  readonly name?: string;
  
  readonly value: LocalizedString
}
/**
	<p>This type represents an attribute which value is a localized text.</p>
*/
export interface LocalizableTextSetAttribute {
  readonly type: "ltext-set";
  /**
  	<p>The name of this attribute must match a name of the product types attribute definitions.
  	The name is required if this type is used in a product variant and must not be set when
  	used in a product variant patch.</p>
  */
  readonly name?: string;
  
  readonly value: LocalizedString[]
}
/**
	<p>This type represents an attribute which value is a money object.</p>
*/
export interface MoneyAttribute {
  readonly type: "money";
  /**
  	<p>The name of this attribute must match a name of the product types attribute definitions.
  	The name is required if this type is used in a product variant and must not be set when
  	used in a product variant patch.</p>
  */
  readonly name?: string;
  
  readonly value: Money
}
/**
	<p>This type represents an attribute which value is a set of money objects.</p>
*/
export interface MoneySetAttribute {
  readonly type: "money-set";
  /**
  	<p>The name of this attribute must match a name of the product types attribute definitions.
  	The name is required if this type is used in a product variant and must not be set when
  	used in a product variant patch.</p>
  */
  readonly name?: string;
  
  readonly value: Money[]
}
/**
	<p>This type represents an attribute which value is a number.</p>
*/
export interface NumberAttribute {
  readonly type: "number";
  /**
  	<p>The name of this attribute must match a name of the product types attribute definitions.
  	The name is required if this type is used in a product variant and must not be set when
  	used in a product variant patch.</p>
  */
  readonly name?: string;
  
  readonly value: number
}
/**
	<p>This type represents an attribute which value is a set of numbers.</p>
*/
export interface NumberSetAttribute {
  readonly type: "number-set";
  /**
  	<p>The name of this attribute must match a name of the product types attribute definitions.
  	The name is required if this type is used in a product variant and must not be set when
  	used in a product variant patch.</p>
  */
  readonly name?: string;
  
  readonly value: number[]
}
/**
	<p>This type represents an attribute which value is a key reference.</p>
*/
export interface ReferenceAttribute {
  readonly type: "reference";
  /**
  	<p>The name of this attribute must match a name of the product types attribute definitions.
  	The name is required if this type is used in a product variant and must not be set when
  	used in a product variant patch.</p>
  */
  readonly name?: string;
  /**
  	<p>References a resource by its key.</p>
  */
  readonly value: KeyReference
}
/**
	<p>This type represents an attribute which value is a set of references.</p>
*/
export interface ReferenceSetAttribute {
  readonly type: "reference-set";
  /**
  	<p>The name of this attribute must match a name of the product types attribute definitions.
  	The name is required if this type is used in a product variant and must not be set when
  	used in a product variant patch.</p>
  */
  readonly name?: string;
  
  readonly value: KeyReference[]
}
/**
	<p>This type represents an attribute which value is a string.</p>
*/
export interface TextAttribute {
  readonly type: "text";
  /**
  	<p>The name of this attribute must match a name of the product types attribute definitions.
  	The name is required if this type is used in a product variant and must not be set when
  	used in a product variant patch.</p>
  */
  readonly name?: string;
  
  readonly value: string
}
/**
	<p>This type represents an attribute which value is a set of strings.</p>
*/
export interface TextSetAttribute {
  readonly type: "text-set";
  /**
  	<p>The name of this attribute must match a name of the product types attribute definitions.
  	The name is required if this type is used in a product variant and must not be set when
  	used in a product variant patch.</p>
  */
  readonly name?: string;
  
  readonly value: string[]
}
/**
	<p>This type represents an attribute which value is a time.</p>
*/
export interface TimeAttribute {
  readonly type: "time";
  /**
  	<p>The name of this attribute must match a name of the product types attribute definitions.
  	The name is required if this type is used in a product variant and must not be set when
  	used in a product variant patch.</p>
  */
  readonly name?: string;
  
  readonly value: string
}
/**
	<p>This type represents an attribute which value is a set of times.</p>
*/
export interface TimeSetAttribute {
  readonly type: "time-set";
  /**
  	<p>The name of this attribute must match a name of the product types attribute definitions.
  	The name is required if this type is used in a product variant and must not be set when
  	used in a product variant patch.</p>
  */
  readonly name?: string;
  
  readonly value: string[]
}
/**
	<p>Import representation for a product variant. Use this type for importing new product variants
	into a commercetools project.</p>
*/
export interface ProductVariantImport extends ImportResource {
  /**
  	<p>Maps to <code>ProductVariant.sku</code>.</p>
  */
  readonly sku?: string;
  /**
  	<p>Maps to <code>ProductVariant.isMasterVariant</code>.</p>
  */
  readonly isMasterVariant: boolean;
  /**
  	<p>Maps to <code>ProductVariant.attributes</code>.</p>
  	<p>Each attribute referenced must be defined
  	in an already existing product type in the commercetools project, or the import
  	operation state is set to <code>Unresolved</code>.</p>
  */
  readonly attributes?: Attribute[];
  /**
  	<p>Maps to <code>ProductVariant.images</code>.</p>
  */
  readonly images?: Image[];
  /**
  	<p>Maps to <code>ProductVariant.assets</code>.</p>
  */
  readonly assets?: Asset[];
  /**
  	<p>The product in which this product variant is contained. Maps to <code>ProductVariant.product</code>.</p>
  	<p>The product referenced
  	must already exist in the commercetools project, or the
  	import operation state is set to <code>Unresolved</code>.</p>
  */
  readonly product: ProductKeyReference
}
/**
	<p>Import representation for an update to a product variant. Use this type for importing updates to existing
	product variants into a commercetools project.</p>
*/
export interface ProductVariantPatch {
  /**
  	<p>The product variant to which this patch is applied.</p>
  	<p>The product variant referenced
  	must already exist in the commercetools project, or the
  	import operation state is set to <code>Unresolved</code>.</p>
  */
  readonly productVariant: ProductVariantKeyReference;
  /**
  	<p>The product in which the patched product variant resides. Maps to <code>ProductVariant.product</code>.</p>
  	<p>The product referenced
  	must already exist in the commercetools project, or the
  	import operation state is set to <code>Unresolved</code>.</p>
  */
  readonly product: ProductKeyReference;
  /**
  	<p>Maps to <code>ProductVariant.attributes</code>.</p>
  	<p>Each attribute referenced must be defined
  	in an already existing product type in the commercetools project, or the import
  	operation state is set to <code>Unresolved</code>.</p>
  */
  readonly attributes?: Attributes
}

export interface Attributes {
  [key:string]: Attribute | null
}