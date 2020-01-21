//Generated file, please do not change

import { CategoryImport } from './categories'
import { ImportResourceType } from './common'
import { ImportOperationStatus } from './importoperations'
import { PriceImport } from './prices'
import { ProductImport } from './products'
import { ProductTypeImport } from './producttypes'
import { ProductVariantImport, ProductVariantPatch } from './productvariants'

/**
	<p>An import request batches multiple import resources of the same import resource type for processing by an import sink.</p>
*/
export type ImportRequest =
  CategoryImportRequest |
  ProductImportRequest |
  ProductTypeImportRequest |
  ProductVariantImportRequest |
  PriceImportRequest |
  ProductVariantPatchRequest
;
/**
	<p>The import response contains an import operation for each import resource sent with an import request. Use it for tracking the progress of imports to a commercetools project.</p>
	<p>This is a generic parent type. In practice, send a specific import request type (<code>CategoryImportRequest</code>, <code>OrderImportRequest</code>, etc.) to an import sink with a matching import type.</p>
*/
export interface ImportResponse {
  
  readonly operationStatus: ImportOperationStatus[]
}
/**
	<p>An import request for multiple category import resources.</p>
*/
export interface CategoryImportRequest {
  readonly type: "category";
  /**
  	<p>The category import resources of this request.</p>
  */
  readonly resources: CategoryImport[]
}
/**
	<p>An import request for multiple product import resources.</p>
*/
export interface ProductImportRequest {
  readonly type: "product";
  /**
  	<p>The product import resources of this request.</p>
  */
  readonly resources: ProductImport[]
}
/**
	<p>An import request for multiple product type import resources.</p>
*/
export interface ProductTypeImportRequest {
  readonly type: "product-type";
  /**
  	<p>The product type import resources of this request.</p>
  */
  readonly resources: ProductTypeImport[]
}
/**
	<p>An import request for multiple product variant import resources.</p>
*/
export interface ProductVariantImportRequest {
  readonly type: "product-variant";
  /**
  	<p>The product variant import resources of this request.</p>
  */
  readonly resources: ProductVariantImport[]
}
/**
	<p>An import request for multiple price import resources.</p>
*/
export interface PriceImportRequest {
  readonly type: "price";
  /**
  	<p>The price import resources of this request.</p>
  */
  readonly resources: PriceImport[]
}
/**
	<p>An import request for multiple product variant patch resources.</p>
*/
export interface ProductVariantPatchRequest {
  readonly type: "product-variant-patch";
  /**
  	<p>The product variant patches of this request.</p>
  */
  readonly patches: ProductVariantPatch[]
}