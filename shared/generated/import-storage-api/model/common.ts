//Generated file, please do not change

import { OrderImport } from './orders'
import { ProductImport } from './products'

export interface Asset {
  /**
  *	User-defined identifier for the asset.
  *	Asset keys are unique inside their container (a product variant or a category).
  *	
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
*	An import resource is identified by a key. This type is the base type of all import resources.
*/
export interface ImportResource {
  readonly key: string
}
/**
*	References a resource by its key.
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
*	References a cart discount by its key.
*/
export interface CartDiscountKeyReference {
  readonly typeId: "cart-discount";
  readonly key: string
}
/**
*	References a category by its key.
*/
export interface CategoryKeyReference {
  readonly typeId: "category";
  readonly key: string
}
/**
*	References a channel by its key.
*/
export interface ChannelKeyReference {
  readonly typeId: "channel";
  readonly key: string
}
/**
*	References a customer by its key.
*/
export interface CustomerKeyReference {
  readonly typeId: "customer";
  readonly key: string
}
/**
*	References a customer group by its key.
*/
export interface CustomerGroupKeyReference {
  readonly typeId: "customer-group";
  readonly key: string
}
/**
*	References a price by its key.
*/
export interface PriceKeyReference {
  readonly typeId: "price";
  readonly key: string
}
/**
*	References a product by its key.
*/
export interface ProductKeyReference {
  readonly typeId: "product";
  readonly key: string
}
/**
*	References a product type by its key.
*/
export interface ProductTypeKeyReference {
  readonly typeId: "product-type";
  readonly key: string
}
/**
*	References a product variant by its key.
*/
export interface ProductVariantKeyReference {
  readonly typeId: "product-variant";
  readonly key: string
}
/**
*	References a shipping method by its key.
*/
export interface ShippingMethodKeyReference {
  readonly typeId: "shipping-method";
  readonly key: string
}
/**
*	References a state by its key.
*/
export interface StateKeyReference {
  readonly typeId: "state";
  readonly key: string
}
/**
*	References a tax category by its key.
*/
export interface TaxCategoryKeyReference {
  readonly typeId: "tax-category";
  readonly key: string
}
export interface Money {
  readonly centAmount: number;
  /**
  *	The currency code compliant to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
  *	
  */
  readonly currencyCode: string
}
/**
*	The type of the import resource.
*	
*/
export type ImportResourceType =
   'category' |
   'order' |
   'price' |
   'product' |
   'product-type' |
   'product-variant' |
   'product-variant-patch';
/**
*	The type of the referenced resource.
*	
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
*	This enumeration describes the processing state of an import operation.
*	
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
  *	A two-digit country code as per [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
  *	
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