//Generated file, please do not change

import { CategoryImport } from './categories'
import { PriceImport } from './prices'
import { ProductImport } from './products'
import { ProductTypeImport } from './producttypes'
import { ProductVariantImport } from './productvariants'


export interface Asset {
  /**
  	<p>User-defined identifier for the asset.
  	Asset keys are unique inside their container (a product variant or a category).</p>
  */
  readonly key: string;
  
  readonly sources: AssetSource[];
  
  readonly name: LocalizedString;
  
  readonly description?: LocalizedString;
  
  readonly tags?: string[]
}

export interface AssetDimensions {
  
  readonly w: number;
  
  readonly h: number
}

export interface AssetSource {
  
  readonly uri: string;
  
  readonly key?: string;
  
  readonly dimensions?: AssetDimensions;
  
  readonly contentType?: string
}

export interface Image {
  
  readonly url: string;
  
  readonly dimensions: AssetDimensions;
  
  readonly label?: string
}

export interface EnumValue {
  
  readonly key: string;
  
  readonly label: string
}

export interface LocalizedEnumValue {
  
  readonly key: string;
  
  readonly label: LocalizedString
}

export interface LocalizedString {
  [key:string]: string
}
/**
	<p>A representation of the resource to import.
	Import resources are similar to commercetools draft types, but they only support key references.
	In general, import resources are more granular then the normal commercetools resource.
	They are optimized for incremental updates and therefore have a slightly different structure.</p>
*/
export interface ImportResource {
  
  readonly key: string
}
/**
	<p>References a resource by its key.</p>
*/
export type KeyReference =
  CartDiscountKeyReference |
  CategoryKeyReference |
  ChannelKeyReference |
  CustomerKeyReference |
  CustomerGroupKeyReference |
  PriceKeyReference |
  ProductKeyReference |
  ProductTypeKeyReference |
  ProductVariantKeyReference |
  ShippingMethodKeyReference |
  StateKeyReference |
  TaxCategoryKeyReference
;
/**
	<p>References a cart discount by its key.</p>
*/
export interface CartDiscountKeyReference {
  readonly typeId: "cart-discount";
  
  readonly key: string
}
/**
	<p>References a category by its key.</p>
*/
export interface CategoryKeyReference {
  readonly typeId: "category";
  
  readonly key: string
}
/**
	<p>References a channel by its key.</p>
*/
export interface ChannelKeyReference {
  readonly typeId: "channel";
  
  readonly key: string
}
/**
	<p>References a customer by its key.</p>
*/
export interface CustomerKeyReference {
  readonly typeId: "customer";
  
  readonly key: string
}
/**
	<p>References a customer group by its key.</p>
*/
export interface CustomerGroupKeyReference {
  readonly typeId: "customer-group";
  
  readonly key: string
}
/**
	<p>References a price by its key.</p>
*/
export interface PriceKeyReference {
  readonly typeId: "price";
  
  readonly key: string
}
/**
	<p>References a product by its key.</p>
*/
export interface ProductKeyReference {
  readonly typeId: "product";
  
  readonly key: string
}
/**
	<p>References a product type by its key.</p>
*/
export interface ProductTypeKeyReference {
  readonly typeId: "product-type";
  
  readonly key: string
}
/**
	<p>References a product variant by its key.</p>
*/
export interface ProductVariantKeyReference {
  readonly typeId: "product-variant";
  
  readonly key: string
}
/**
	<p>References a shipping method by its key.</p>
*/
export interface ShippingMethodKeyReference {
  readonly typeId: "shipping-method";
  
  readonly key: string
}
/**
	<p>References a state by its key.</p>
*/
export interface StateKeyReference {
  readonly typeId: "state";
  
  readonly key: string
}
/**
	<p>References a tax category by its key.</p>
*/
export interface TaxCategoryKeyReference {
  readonly typeId: "tax-category";
  
  readonly key: string
}

export interface Money {
  
  readonly centAmount: number;
  /**
  	<p>The currency code compliant to <a href="https://en.wikipedia.org/wiki/ISO_4217">ISO 4217</a>.</p>
  */
  readonly currencyCode: string
}
/**
	<p>The type of the import resource.</p>
*/
export type ImportResourceType =
   'category' |
   'price' |
   'product' |
   'product-type' |
   'product-variant' |
   'product-variant-patch';
/**
	<p>The type of the referenced resource.</p>
*/
export type ReferenceType =
   'cart-discount' |
   'category' |
   'channel' |
   'customer' |
   'customer-group' |
   'price' |
   'product' |
   'product-type' |
   'product-variant' |
   'shipping-method' |
   'state' |
   'tax-category';
/**
	<p>This enumeration describes the processing state of an import operation.</p>
*/
export type ProcessingState =
   'Accepted' |
   'ValidationFailed' |
   'Unresolved' |
   'Resolved' |
   'WaitForMasterVariant' |
   'Imported' |
   'Deleted' |
   'Rejected' |
   'Skipped' |
   'Expired';

export interface Address {
  
  readonly id?: string;
  
  readonly key?: string;
  
  readonly title?: string;
  
  readonly salutation?: string;
  
  readonly firstName?: string;
  
  readonly lastName?: string;
  
  readonly streetName?: string;
  
  readonly streetNumber?: string;
  
  readonly additionalStreetInfo?: string;
  
  readonly postalCode?: string;
  
  readonly city?: string;
  
  readonly region?: string;
  
  readonly state?: string;
  /**
  	<p>A two-digit country code as per <a href="https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2">ISO 3166-1 alpha-2</a>.</p>
  */
  readonly country: string;
  
  readonly company?: string;
  
  readonly department?: string;
  
  readonly building?: string;
  
  readonly apartment?: string;
  
  readonly pOBox?: string;
  
  readonly phone?: string;
  
  readonly mobile?: string;
  
  readonly email?: string;
  
  readonly fax?: string;
  
  readonly additionalAddressInfo?: string;
  
  readonly externalId?: string
}