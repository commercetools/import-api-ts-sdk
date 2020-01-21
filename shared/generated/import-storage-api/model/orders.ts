//Generated file, please do not change

import { Address, CartDiscountKeyReference, ChannelKeyReference, CustomerGroupKeyReference, CustomerKeyReference, ImportResource, LocalizedString, Money, ProductVariantKeyReference, ShippingMethodKeyReference, StateKeyReference, TaxCategoryKeyReference } from './common'
import { PriceImport, TaxRate } from './prices'

/**
*	The item's state.
*	
*/
export interface ItemState {
  readonly quantity: number;
  /**
  *	References a state by its key.
  *	
  *	The state referenced must already exist in the commercetools project, or the 
  *	import operation state is set to `Unresolved`.
  *	
  */
  readonly state: StateKeyReference
}
/**
*	Each item shipping target determines the address (as a reference to an address in `itemShippingAddresses`) 
*	and the quantity that should be shipped to this address. Should multiple shipping addresses be needed 
*	for one (custom) line item, sub-quantities are specified. Thus, an array of addresses and sub-quantities 
*	is stored per (custom) line item. Upon order creation, the sum of sub-quantities must add up to the 
*	total quantity of the (custom) line item.
*	
*/
export interface ItemShippingTarget {
  /**
  *	The key of the address in the cart’s `itemShippingAddresses`
  */
  readonly addressKey: string;
  /**
  *	The quantity of operations that should go to the address with the specified `addressKey`. 
  *	Only positive values are allowed. Using `0` as quantity is also possible in a draft object, 
  *	but the element will not be present in the resulting 
  *	[ItemShippingDetails](https://docs.commercetools.com/http-api-projects-carts.html#itemshippingdetails).
  *	
  */
  readonly quantity: number
}
export interface ItemShippingDetailsDraft {
  /**
  *	Used to capture one or more (custom) line item specific shipping addresses. By specifying 
  *	sub-quantities, it is possible to set multiple shipping addresses for one line item.
  *	
  */
  readonly targets: ItemShippingTarget[]
}
/**
*	Represents an individual line item in an Order. A line item is a snapshot of a product at the time it was added to the order. 
*	
*	You cannot create an order which includes line operations that do not exist in the project or have been deleted. 
*	Products and variants referenced by a line item must already exist in the commercetools project.
*	
*/
export interface LineItemImportDraft {
  /**
  *	Maps to `LineItem.name`. 
  *	
  */
  readonly name: LocalizedString;
  /**
  *	References a product variant. Maps to `LineItem.variant`.
  *	
  *	The product variant referenced (and therefore, the product)
  *	must already exist in the commercetools project, or the 
  *	import operation state is set to `Unresolved`.
  *	
  */
  readonly variant: ProductVariantKeyReference;
  /**
  *	Maps to `LineItem.price`. 
  *	
  */
  readonly price: PriceImport;
  /**
  *	Maps to `LineItem.quantity`.
  *	
  */
  readonly quantity: number;
  readonly state?: ItemState[];
  /**
  *	References a supply channel. Maps to `LineItem.supplyChannel`.
  *	
  *	The supply channel referenced must already exist 
  *	in the commercetools project, or the 
  *	import operation state is set to `Unresolved`.
  *	
  */
  readonly supplyChannel?: ChannelKeyReference;
  /**
  *	References a distribution channel. Maps to `LineItem.distributionChannel`.
  *	
  *	The distribution channel referenced must already exist 
  *	in the commercetools project, or the 
  *	import operation state is set to `Unresolved`.
  *	
  */
  readonly distributionChannel?: ChannelKeyReference;
  /**
  *	Maps to `LineItem.taxRate`.
  *	
  */
  readonly taxRate?: TaxRate;
  /**
  *	Maps to LineItem.shippingDetails.
  *	
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
  *	References a cart discount by its key.
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
*	Maps to an order's `shippingInfo` property. This field is usually populated by the cart assosciated with
*	the order, but when importing orders you must provide a draft representation as a part of the OrderImport.
*	
*/
export interface ShippingInfoImportDraft {
  readonly shippingMethodName: string;
  readonly price: Money;
  /**
  *	The shipping rate used to determine the price.
  */
  readonly shippingRate: ShippingRateDraft;
  readonly taxRate?: TaxRate;
  /**
  *	The tax category referenced must already exist
  *	in the commercetools project, or the
  *	import operation state is set to `Unresolved`.
  *	
  */
  readonly taxCategory?: TaxCategoryKeyReference;
  /**
  *	Not set if a custom shipping method is used.
  *	
  *	The shipping method referenced must already exist 
  *	in the commercetools project, or the 
  *	import operation state is set to `Unresolved`.
  *	
  */
  readonly shippingMethod?: ShippingMethodKeyReference;
  /**
  *	Deliveries are compilations of information on how the articles are being delivered to the customers.
  */
  readonly deliveries?: Delivery[];
  readonly discountedPrice?: DiscountedLineItemPriceDraft;
  /**
  *	Indicates whether the 
  *	[ShippingMethod](https://docs.commercetools.com/http-api-projects-shippingMethods.html#shippingmethod) 
  *	referenced is allowed for the cart or not.
  *	
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
  *	References a tax category by its key.
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
*	Import representation for an order. 
*	
*	In commercetools, the only way to create an order is using the 
*	[Create Order from Cart](https://docs.commercetools.com/http-api-projects-orders#create-order-from-cart) endpoint.
*	method. Unlike the Create Order from Cart endpoint, when importing an order
*	using the Import API, you must provide all non-optional fields required for creating
*	an order, rather than just a cart ID. 
*	
*	The OrderImport type also contains draft subtypes. These types are normally populated 
*	by the Cart the order is created from, but in this case must be populated as a part of the import request.
*	
*/
export interface OrderImport extends ImportResource {
  /**
  *	Maps to `Order.orderNumber`.
  *	**Note:** The `orderNumber` must be the same as the `key`.
  *	
  */
  readonly orderNumber?: string;
  /**
  *	Takes the `id` and `email` fields from the referenced customer and maps them to 
  *	`Order.customerId` and `Order.customerEmail`.
  *	
  *	The customer referenced must already exist in the commercetools project, or the 
  *	import operation state is set to `Unresolved`.
  *	
  */
  readonly customer: CustomerKeyReference;
  /**
  *	Maps to `Order.lineItems`. 
  *	If empty, `customLineItems` **must not** be empty, or the import operation state is set toTODO.
  *	
  */
  readonly lineItems?: LineItemImportDraft[];
  /**
  *	Maps to `Order.customLineItems`
  *	If empty, `lineItems` **must not** be empty, or the import operation state is set to TODO.
  *	
  */
  readonly customLineItems?: CustomLineItemDraft[];
  /**
  *	Maps to `Order.totalPrice`.
  *	**Note:** At this time, you cannot import tiered or high-precision prices.
  *	
  */
  readonly totalPrice: Money;
  /**
  *	TODO – so is this required or not? 
  *	Order Import does not support calculation of taxes. When setting the 
  *	draft the `taxedPrice` is to be provided.
  *	
  */
  readonly taxedPrice?: TaxedPrice;
  /**
  *	Maps to `Order.shippingAddress`.
  *	
  */
  readonly shippingAddress?: Address;
  /**
  *	Maps to `Order.billingAddress`.
  *	
  */
  readonly billingAddress?: Address;
  /**
  *	TODO – Is this information extrapolated via the referenced Customer too?
  *	Set when the customer is set and the customer is a member of a customer group. 
  *	Used for product variant price selection.
  *	
  */
  readonly customerGroup?: CustomerGroupKeyReference;
  /**
  *	A two-digit [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code. 
  *	Maps to `Order.country`.
  *	
  */
  readonly country?: string;
  /**
  *	Maps to `Order.orderState`. If not provided, the `Open` state is assigned.
  *	
  */
  readonly orderState?: OrderState;
  /**
  *	Maps to `Order.shipmentState`.
  *	
  */
  readonly shipmentState?: ShipmentState;
  /**
  *	Maps to `Order.paymentState`.
  *	
  */
  readonly paymentState?: PaymentState;
  /**
  *	Contains fields which map to the order's shipment information. 
  *	The fields map to each field in `Order.shipmentInfo`.
  *	
  */
  readonly shippingInfo?: ShippingInfoImportDraft;
  /**
  *	TODO: what does this field do? The current API desc doesn't say much.
  *	
  */
  readonly completedAt?: string;
  /**
  *	Maps to `Order.inventoryMode`.
  *	If not given, assigns `None` by default.
  *	
  */
  readonly inventoryMode?: InventoryMode;
  /**
  *	Maps to `Order.taxRoundingMode`.
  *	If not given the tax rounding mode HalfEven will be assigned by default.
  *	
  */
  readonly taxRoundingMode?: RoundingMode;
  /**
  *	Maps to `Order.taxCalculationMode`.
  *	The default tax calculation mode is LineItemLevel.
  *	
  */
  readonly taxCalculationMode?: TaxCalculationMode;
  /**
  *	Maps to `Order.origin`.
  *	The default origin is `Customer`.
  *	
  */
  readonly origin?: CartOrigin;
  /**
  *	Maps to `Order.itemShippingAddresses`.
  *	
  */
  readonly itemShippingAddresses?: Address[]
}