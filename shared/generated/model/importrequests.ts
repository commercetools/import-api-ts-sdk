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
	<p>Abstract base type for requesting the import of operations.</p>
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
	<p>Allows to retrieve the state of an ImportRequest.</p>
*/
export interface ImportRequestState {
  
  readonly operations: ImportOperation[]
}

export interface CategoryImportRequest {
  readonly type: "category";
  /**
  	<p>The individual categories to import.</p>
  */
  readonly resources: CategoryImport[]
}
/**
	<p>An import request for multiple order import resources.</p>
*/
export interface OrderImportRequest {
  readonly type: "order";
  /**
  	<p>The order import resources of this request.</p>
  */
  readonly resources: OrderImport[]
}

export interface ProductImportRequest {
  readonly type: "product";
  /**
  	<p>The individual products to import.</p>
  */
  readonly resources: ProductImport[]
}

export interface ProductTypeImportRequest {
  readonly type: "product-type";
  /**
  	<p>The individual product types to import.</p>
  */
  readonly resources: ProductTypeImport[]
}

export interface ProductVariantImportRequest {
  readonly type: "product-variant";
  /**
  	<p>The individual product variants to import.</p>
  */
  readonly resources: ProductVariantImport[]
}

export interface PriceImportRequest {
  readonly type: "price";
  /**
  	<p>The individual prices to import.</p>
  */
  readonly resources: PriceImport[]
}

export interface ProductVariantPatchRequest {
  readonly type: "product-variant-patch";
  /**
  	<p>The individual product variant patches.</p>
  */
  readonly patches: ProductVariantPatch[]
}