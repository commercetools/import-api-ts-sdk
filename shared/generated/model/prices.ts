//Generated file, please do not change

import { ChannelKeyReference, CustomerGroupKeyReference, ImportResource, Money, ProductKeyReference, ProductVariantKeyReference } from './common'


export interface SubRate {
  
  readonly name: string;
  
  readonly amount: number
}

export interface TaxRate {
  
  readonly id?: string;
  
  readonly name: string;
  
  readonly amount: number;
  
  readonly includedInPrice: boolean;
  /**
  	<p>A two-digit country code as per <a href="https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2">ISO 3166-1 alpha-2</a>.</p>
  */
  readonly country: string;
  
  readonly state?: string;
  
  readonly subRates?: SubRate[]
}
/**
	<p>Imports a product variant's prices.</p>
*/
export interface PriceImport extends ImportResource {
  /**
  	<p>Maps to <code>Price.value</code>.</p>
  	<p>The Import API <strong>only</strong> supports <code>centPrecision</code> prices.</p>
  */
  readonly value: Money;
  /**
  	<p>Maps to <code>Price.county</code>.</p>
  */
  readonly country?: string;
  /**
  	<p>Maps to <code>Price.validFrom</code>.</p>
  */
  readonly validFrom?: string;
  /**
  	<p>Maps to <code>Price.validUntil</code>.</p>
  */
  readonly validUntil?: string;
  /**
  	<p>References a customer group by its key.</p>
  	<p>The customer group referenced
  	must already exist in the commercetools project, or the
  	import operation state is set to <code>Unresolved</code>.</p>
  */
  readonly customerGroup?: CustomerGroupKeyReference;
  /**
  	<p>References a channel by its key.</p>
  	<p>The channel referenced
  	must already exist in the commercetools project, or the
  	import operation state is set to <code>Unresolved</code>.</p>
  */
  readonly channel?: ChannelKeyReference;
  /**
  	<p>The product variant in which this price is contained.</p>
  	<p>The product variant referenced
  	must already exist in the commercetools project, or the
  	import operation state is set to <code>Unresolved</code>.</p>
  */
  readonly productVariant: ProductVariantKeyReference;
  /**
  	<p>The product in which this product variant containong the price is contained. Maps to <code>ProductVariant.product</code>.</p>
  	<p>The product referenced
  	must already exist in the commercetools project, or the
  	import operation state is set to <code>Unresolved</code>.</p>
  */
  readonly product: ProductKeyReference
}