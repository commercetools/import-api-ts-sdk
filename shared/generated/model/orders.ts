//Generated file, please do not change

import { Address, CartDiscountKeyReference, ChannelKeyReference, CustomerGroupKeyReference, CustomerKeyReference, ImportResource, LocalizedString, Money, ProductVariantKeyReference, ShippingMethodKeyReference, StateKeyReference, TaxCategoryKeyReference } from './common'
import { PriceImport, TaxRate } from './prices'

/**
	<p>The item's state.</p>
*/
export interface ItemState {
  
  readonly quantity: number;
  /**
  	<p>References a state by its key.</p>
  	<p>The state referenced must already exist in the commercetools project, or the
  	import operation state is set to <code>Unresolved</code>.</p>
  */
  readonly state: StateKeyReference
}
/**
	<p>Each item shipping target determines the address (as a reference to an address in <code>itemShippingAddresses</code>)
	and the quantity that should be shipped to this address. Should multiple shipping addresses be needed
	for one (custom) line item, sub-quantities are specified. Thus, an array of addresses and sub-quantities
	is stored per (custom) line item. Upon order creation, the sum of sub-quantities must add up to the
	total quantity of the (custom) line item.</p>
*/
export interface ItemShippingTarget {
  /**
  	<p>The key of the address in the cart’s <code>itemShippingAddresses</code></p>
  */
  readonly addressKey: string;
  /**
  	<p>The quantity of operations that should go to the address with the specified <code>addressKey</code>.
  	Only positive values are allowed. Using <code>0</code> as quantity is also possible in a draft object,
  	but the element will not be present in the resulting
  	<a href="https://docs.commercetools.com/http-api-projects-carts.html#itemshippingdetails">ItemShippingDetails</a>.</p>
  */
  readonly quantity: number
}

export interface ItemShippingDetailsDraft {
  /**
  	<p>Used to capture one or more (custom) line item specific shipping addresses. By specifying
  	sub-quantities, it is possible to set multiple shipping addresses for one line item.</p>
  */
  readonly targets: ItemShippingTarget[]
}
/**
	<p>Represents an individual line item in an Order. A line item is a snapshot of a product at the time it was added to the order.</p>
	<p>You cannot create an order which includes line operations that do not exist in the project or have been deleted.
	Products and variants referenced by a line item must already exist in the commercetools project.</p>
*/
export interface LineItemImportDraft {
  /**
  	<p>Maps to <code>LineItem.name</code>.</p>
  */
  readonly name: LocalizedString;
  /**
  	<p>References a product variant. Maps to <code>LineItem.variant</code>.</p>
  	<p>The product variant referenced (and therefore, the product)
  	must already exist in the commercetools project, or the
  	import operation state is set to <code>Unresolved</code>.</p>
  */
  readonly variant: ProductVariantKeyReference;
  /**
  	<p>Maps to <code>LineItem.price</code>.</p>
  */
  readonly price: PriceImport;
  /**
  	<p>Maps to <code>LineItem.quantity</code>.</p>
  */
  readonly quantity: number;
  
  readonly state?: ItemState[];
  /**
  	<p>References a supply channel. Maps to <code>LineItem.supplyChannel</code>.</p>
  	<p>The supply channel referenced must already exist
  	in the commercetools project, or the
  	import operation state is set to <code>Unresolved</code>.</p>
  */
  readonly supplyChannel?: ChannelKeyReference;
  /**
  	<p>References a distribution channel. Maps to <code>LineItem.distributionChannel</code>.</p>
  	<p>The distribution channel referenced must already exist
  	in the commercetools project, or the
  	import operation state is set to <code>Unresolved</code>.</p>
  */
  readonly distributionChannel?: ChannelKeyReference;
  /**
  	<p>Maps to <code>LineItem.taxRate</code>.</p>
  */
  readonly taxRate?: TaxRate;
  /**
  	<p>Maps to LineItem.shippingDetails.</p>
  */
  readonly shippingDetails?: ItemShippingDetailsDraft
}

export type ShippingRateTierType =
   'CartValue' |
   'CartClassification' |
   'CartScore';

export type ShippingRatePriceTier =
  CartClassificationTier
;

export interface CartClassificationTier {
  readonly type: "CartClassification";
  
  readonly price: Money;
  
  readonly isMatching?: boolean;
  
  readonly value: string
}

export interface ShippingRateDraft {
  
  readonly price: Money;
  
  readonly freeAbove?: Money;
  
  readonly tiers?: ShippingRatePriceTier[]
}

export interface ParcelMeasurements {
  
  readonly heightInMillimeter?: number;
  
  readonly lengthInMillimeter?: number;
  
  readonly widthInMillimeter?: number;
  
  readonly weightInGram?: number
}

export interface TrackingData {
  
  readonly trackingId?: string;
  
  readonly carrier?: string;
  
  readonly provider?: string;
  
  readonly providerTransaction?: string;
  
  readonly isReturn?: boolean
}

export interface DeliveryItem {
  
  readonly id: string;
  
  readonly quantity: number
}

export interface Parcel {
  
  readonly id: string;
  
  readonly createdAt: string;
  
  readonly measurements?: ParcelMeasurements;
  
  readonly trackingData?: TrackingData;
  
  readonly items?: DeliveryItem[]
}

export interface Delivery {
  
  readonly id: string;
  
  readonly createdAt: string;
  
  readonly items: DeliveryItem[];
  
  readonly parcels: Parcel[];
  
  readonly address?: Address
}

export interface DiscountedLineItemPortion {
  /**
  	<p>References a cart discount by its key.</p>
  */
  readonly discount: CartDiscountKeyReference;
  
  readonly discountedAmount: Money
}

export interface DiscountedLineItemPriceDraft {
  
  readonly value: Money;
  
  readonly includedDiscounts: DiscountedLineItemPortion[]
}

export type ShippingMethodState =
   'DoesNotMatchCart' |
   'MatchesCart';
/**
	<p>Maps to an order's <code>shippingInfo</code> property. This field is usually populated by the cart assosciated with
	the order, but when importing orders you must provide a draft representation as a part of the OrderImport.</p>
*/
export interface ShippingInfoImportDraft {
  
  readonly shippingMethodName: string;
  
  readonly price: Money;
  /**
  	<p>The shipping rate used to determine the price.</p>
  */
  readonly shippingRate: ShippingRateDraft;
  
  readonly taxRate?: TaxRate;
  /**
  	<p>The tax category referenced must already exist
  	in the commercetools project, or the
  	import operation state is set to <code>Unresolved</code>.</p>
  */
  readonly taxCategory?: TaxCategoryKeyReference;
  /**
  	<p>Not set if a custom shipping method is used.</p>
  	<p>The shipping method referenced must already exist
  	in the commercetools project, or the
  	import operation state is set to <code>Unresolved</code>.</p>
  */
  readonly shippingMethod?: ShippingMethodKeyReference;
  /**
  	<p>Deliveries are compilations of information on how the articles are being delivered to the customers.</p>
  */
  readonly deliveries?: Delivery[];
  
  readonly discountedPrice?: DiscountedLineItemPriceDraft;
  /**
  	<p>Indicates whether the
  	<a href="https://docs.commercetools.com/http-api-projects-shippingMethods.html#shippingmethod">ShippingMethod</a>
  	referenced is allowed for the cart or not.</p>
  */
  readonly shippingMethodState?: ShippingMethodState
}

export interface SubRate {
  
  readonly name: string;
  
  readonly amount: number
}

export interface ExternalTaxRateDraft {
  
  readonly name: string;
  
  readonly amount?: number;
  
  readonly country: string;
  
  readonly state?: string;
  
  readonly subRates?: SubRate[];
  
  readonly includedInPrice?: boolean
}

export interface CustomLineItemDraft {
  
  readonly name: LocalizedString;
  
  readonly quantity: number;
  
  readonly money: Money;
  
  readonly slug: string;
  /**
  	<p>References a tax category by its key.</p>
  */
  readonly taxCategory?: TaxCategoryKeyReference;
  
  readonly externalTaxRate?: ExternalTaxRateDraft;
  
  readonly shippingDetails?: ItemShippingDetailsDraft
}

export interface TaxPortion {
  
  readonly name?: string;
  
  readonly rate: number;
  
  readonly amount: Money
}

export interface TaxedPrice {
  
  readonly totalNet: Money;
  
  readonly totalGross: Money;
  
  readonly taxPortions: TaxPortion[]
}

export type OrderState =
   'Open' |
   'Confirmed' |
   'Complete' |
   'Cancelled';

export type ShipmentState =
   'Shipped' |
   'Ready' |
   'Pending' |
   'Delayed' |
   'Partial' |
   'Backorder';

export type PaymentState =
   'BalanceDue' |
   'Failed' |
   'Pending' |
   'CreditOwed' |
   'Paid';

export type InventoryMode =
   'TrackOnly' |
   'ReserveOnOrder';

export type RoundingMode =
   'HalfEven' |
   'HalfUp' |
   'HalfDown';

export type TaxCalculationMode =
   'LineItemLevel' |
   'UnitPriceLevel';

export type CartOrigin =
   'Customer' |
   'Merchant';
/**
	<p>Import representation for an order.</p>
	<p>In commercetools, the only way to create an order is using the
	<a href="https://docs.commercetools.com/http-api-projects-orders#create-order-from-cart">Create Order from Cart</a> endpoint.
	method. Unlike the Create Order from Cart endpoint, when importing an order
	using the Import API, you must provide all non-optional fields required for creating
	an order, rather than just a cart ID.</p>
	<p>The OrderImport type also contains draft subtypes. These types are normally populated
	by the Cart the order is created from, but in this case must be populated as a part of the import request.</p>
*/
export interface OrderImport extends ImportResource {
  /**
  	<p>Maps to <code>Order.orderNumber</code>.
  	<strong>Note:</strong> The <code>orderNumber</code> must be the same as the <code>key</code>.</p>
  */
  readonly orderNumber?: string;
  /**
  	<p>Takes the <code>id</code> and <code>email</code> fields from the referenced customer and maps them to
  	<code>Order.customerId</code> and <code>Order.customerEmail</code>.</p>
  	<p>The customer referenced must already exist in the commercetools project, or the
  	import operation state is set to <code>Unresolved</code>.</p>
  */
  readonly customer: CustomerKeyReference;
  /**
  	<p>Maps to <code>Order.lineItems</code>.
  	If empty, <code>customLineItems</code> <strong>must not</strong> be empty, or the import operation state is set toTODO.</p>
  */
  readonly lineItems?: LineItemImportDraft[];
  /**
  	<p>Maps to <code>Order.customLineItems</code>
  	If empty, <code>lineItems</code> <strong>must not</strong> be empty, or the import operation state is set to TODO.</p>
  */
  readonly customLineItems?: CustomLineItemDraft[];
  /**
  	<p>Maps to <code>Order.totalPrice</code>.
  	<strong>Note:</strong> At this time, you cannot import tiered or high-precision prices.</p>
  */
  readonly totalPrice: Money;
  /**
  	<p>TODO – so is this required or not?
  	Order Import does not support calculation of taxes. When setting the
  	draft the <code>taxedPrice</code> is to be provided.</p>
  */
  readonly taxedPrice?: TaxedPrice;
  /**
  	<p>Maps to <code>Order.shippingAddress</code>.</p>
  */
  readonly shippingAddress?: Address;
  /**
  	<p>Maps to <code>Order.billingAddress</code>.</p>
  */
  readonly billingAddress?: Address;
  /**
  	<p>TODO – Is this information extrapolated via the referenced Customer too?
  	Set when the customer is set and the customer is a member of a customer group.
  	Used for product variant price selection.</p>
  */
  readonly customerGroup?: CustomerGroupKeyReference;
  /**
  	<p>A two-digit <a href="https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2">ISO 3166-1 alpha-2</a> country code.
  	Maps to <code>Order.country</code>.</p>
  */
  readonly country?: string;
  /**
  	<p>Maps to <code>Order.orderState</code>. If not provided, the <code>Open</code> state is assigned.</p>
  */
  readonly orderState?: OrderState;
  /**
  	<p>Maps to <code>Order.shipmentState</code>.</p>
  */
  readonly shipmentState?: ShipmentState;
  /**
  	<p>Maps to <code>Order.paymentState</code>.</p>
  */
  readonly paymentState?: PaymentState;
  /**
  	<p>Contains fields which map to the order's shipment information.
  	The fields map to each field in <code>Order.shipmentInfo</code>.</p>
  */
  readonly shippingInfo?: ShippingInfoImportDraft;
  /**
  	<p>TODO: what does this field do? The current API desc doesn't say much.</p>
  */
  readonly completedAt?: string;
  /**
  	<p>Maps to <code>Order.inventoryMode</code>.
  	If not given, assigns <code>None</code> by default.</p>
  */
  readonly inventoryMode?: InventoryMode;
  /**
  	<p>Maps to <code>Order.taxRoundingMode</code>.
  	If not given the tax rounding mode HalfEven will be assigned by default.</p>
  */
  readonly taxRoundingMode?: RoundingMode;
  /**
  	<p>Maps to <code>Order.taxCalculationMode</code>.
  	The default tax calculation mode is LineItemLevel.</p>
  */
  readonly taxCalculationMode?: TaxCalculationMode;
  /**
  	<p>Maps to <code>Order.origin</code>.
  	The default origin is <code>Customer</code>.</p>
  */
  readonly origin?: CartOrigin;
  /**
  	<p>Maps to <code>Order.itemShippingAddresses</code>.</p>
  */
  readonly itemShippingAddresses?: Address[]
}