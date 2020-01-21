//Generated file, please do not change

import { CategoryImport } from './categories'
import { ImportResourceType } from './common'
import { ImportOperation } from './importoperations'
import { OrderImport } from './orders'
import { PriceImport } from './prices'
import { ProductImport } from './products'
import { ProductTypeImport } from './producttypes'
import { ProductVariantImport, ProductVariantPatch } from './productvariants'

/**
*	Abstract base type for requesting the import of operations.
*/
export type ImportRequest =
  CategoryImportRequest |
  OrderImportRequest |
  ProductImportRequest |
  ProductTypeImportRequest |
  ProductVariantImportRequest |
  PriceImportRequest |
  ProductVariantPatchRequest
;
/**
*	Allows to retrieve the state of an ImportRequest.
*/
export interface ImportRequestState {
  readonly operations: ImportOperation[]
}
export interface CategoryImportRequest {
  readonly type: "category";
  /**
  *	The individual categories to import.
  */
  readonly resources: CategoryImport[]
}
/**
*	An import request for multiple order import resources.
*	
*/
export interface OrderImportRequest {
  readonly type: "order";
  /**
  *	The order import resources of this request.
  *	
  */
  readonly resources: OrderImport[]
}
export interface ProductImportRequest {
  readonly type: "product";
  /**
  *	The individual products to import.
  */
  readonly resources: ProductImport[]
}
export interface ProductTypeImportRequest {
  readonly type: "product-type";
  /**
  *	The individual product types to import.
  */
  readonly resources: ProductTypeImport[]
}
export interface ProductVariantImportRequest {
  readonly type: "product-variant";
  /**
  *	The individual product variants to import.
  */
  readonly resources: ProductVariantImport[]
}
export interface PriceImportRequest {
  readonly type: "price";
  /**
  *	The individual prices to import.
  */
  readonly resources: PriceImport[]
}
export interface ProductVariantPatchRequest {
  readonly type: "product-variant-patch";
  /**
  *	The individual product variant patches.
  */
  readonly patches: ProductVariantPatch[]
}