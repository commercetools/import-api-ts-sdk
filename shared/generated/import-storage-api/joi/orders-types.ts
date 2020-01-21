//Generated file, please do not change

import * as Joi from 'joi'
import { stateKeyReferenceType } from './common-types'
import { taxRateType } from './prices-types'
import { priceImportType } from './prices-types'
import { productVariantKeyReferenceType } from './common-types'
import { localizedStringType } from './common-types'
import { channelKeyReferenceType } from './common-types'
import { moneyType } from './common-types'
import { addressType } from './common-types'
import { cartDiscountKeyReferenceType } from './common-types'
import { shippingMethodKeyReferenceType } from './common-types'
import { taxCategoryKeyReferenceType } from './common-types'
import { customerGroupKeyReferenceType } from './common-types'
import { customerKeyReferenceType } from './common-types'
import { importResourceType } from './common-types'

const schema = {
  itemStateType: null,
  itemShippingTargetType: null,
  itemShippingDetailsDraftType: null,
  lineItemImportDraftType: null,
  shippingRateTierTypeType: null,
  shippingRatePriceTierType: null,
  cartClassificationTierType: null,
  shippingRateDraftType: null,
  parcelMeasurementsType: null,
  trackingDataType: null,
  deliveryItemType: null,
  parcelType: null,
  deliveryType: null,
  discountedLineItemPortionType: null,
  discountedLineItemPriceDraftType: null,
  shippingMethodStateType: null,
  shippingInfoImportDraftType: null,
  subRateType: null,
  externalTaxRateDraftType: null,
  customLineItemDraftType: null,
  taxPortionType: null,
  taxedPriceType: null,
  orderStateType: null,
  shipmentStateType: null,
  paymentStateType: null,
  inventoryModeType: null,
  roundingModeType: null,
  taxCalculationModeType: null,
  cartOriginType: null,
  orderImportType: null
}

schema.itemStateType = Joi.lazy(() => Joi.object().unknown().keys({
                          state: stateKeyReferenceType().required(),
                          quantity: Joi.number().required()
                       }))
export function itemStateType() : Joi.AnySchema {
   return schema.itemStateType
}

schema.itemShippingTargetType = Joi.lazy(() => Joi.object().unknown().keys({
                                   quantity: Joi.number().required(),
                                   addressKey: Joi.string().required()
                                }))
export function itemShippingTargetType() : Joi.AnySchema {
   return schema.itemShippingTargetType
}

schema.itemShippingDetailsDraftType = Joi.lazy(() => Joi.object().unknown().keys({
                                         targets: Joi.array().items(itemShippingTargetType()).required()
                                      }))
export function itemShippingDetailsDraftType() : Joi.AnySchema {
   return schema.itemShippingDetailsDraftType
}

schema.lineItemImportDraftType = Joi.lazy(() => Joi.object().unknown().keys({
                                    name: localizedStringType().required(),
                                    price: priceImportType().required(),
                                    variant: productVariantKeyReferenceType().required(),
                                    quantity: Joi.number().required(),
                                    state: Joi.array().items(itemStateType()).optional(),
                                    distributionChannel: channelKeyReferenceType().optional(),
                                    supplyChannel: channelKeyReferenceType().optional(),
                                    shippingDetails: itemShippingDetailsDraftType().optional(),
                                    taxRate: taxRateType().optional()
                                 }))
export function lineItemImportDraftType() : Joi.AnySchema {
   return schema.lineItemImportDraftType
}

const shippingRateTierTypeTypeValues = [
   'CartValue',
   'CartClassification',
   'CartScore'
]

export function shippingRateTierTypeType(): Joi.AnySchema {
   return Joi.string().only(shippingRateTierTypeTypeValues)
}

schema.shippingRatePriceTierType = Joi.lazy(() => Joi.alternatives([cartClassificationTierType()]))
export function shippingRatePriceTierType() : Joi.AnySchema {
   return schema.shippingRatePriceTierType
}

schema.cartClassificationTierType = Joi.lazy(() => Joi.object().unknown().keys({
                                       price: moneyType().required(),
                                       type: shippingRateTierTypeType().only('CartClassification').required(),
                                       value: Joi.string().required(),
                                       isMatching: Joi.boolean().optional()
                                    }))
export function cartClassificationTierType() : Joi.AnySchema {
   return schema.cartClassificationTierType
}

schema.shippingRateDraftType = Joi.lazy(() => Joi.object().unknown().keys({
                                  price: moneyType().required(),
                                  tiers: Joi.array().items(shippingRatePriceTierType()).optional(),
                                  freeAbove: moneyType().optional()
                               }))
export function shippingRateDraftType() : Joi.AnySchema {
   return schema.shippingRateDraftType
}

schema.parcelMeasurementsType = Joi.lazy(() => Joi.object().unknown().keys({
                                   heightInMillimeter: Joi.number().optional(),
                                   lengthInMillimeter: Joi.number().optional(),
                                   weightInGram: Joi.number().optional(),
                                   widthInMillimeter: Joi.number().optional()
                                }))
export function parcelMeasurementsType() : Joi.AnySchema {
   return schema.parcelMeasurementsType
}

schema.trackingDataType = Joi.lazy(() => Joi.object().unknown().keys({
                             isReturn: Joi.boolean().optional(),
                             carrier: Joi.string().optional(),
                             provider: Joi.string().optional(),
                             providerTransaction: Joi.string().optional(),
                             trackingId: Joi.string().optional()
                          }))
export function trackingDataType() : Joi.AnySchema {
   return schema.trackingDataType
}

schema.deliveryItemType = Joi.lazy(() => Joi.object().unknown().keys({
                             quantity: Joi.number().required(),
                             id: Joi.string().required()
                          }))
export function deliveryItemType() : Joi.AnySchema {
   return schema.deliveryItemType
}

schema.parcelType = Joi.lazy(() => Joi.object().unknown().keys({
                       createdAt: Joi.date().iso().required(),
                       id: Joi.string().required(),
                       items: Joi.array().items(deliveryItemType()).optional(),
                       measurements: parcelMeasurementsType().optional(),
                       trackingData: trackingDataType().optional()
                    }))
export function parcelType() : Joi.AnySchema {
   return schema.parcelType
}

schema.deliveryType = Joi.lazy(() => Joi.object().unknown().keys({
                         items: Joi.array().items(deliveryItemType()).required(),
                         parcels: Joi.array().items(parcelType()).required(),
                         createdAt: Joi.date().iso().required(),
                         id: Joi.string().required(),
                         address: addressType().optional()
                      }))
export function deliveryType() : Joi.AnySchema {
   return schema.deliveryType
}

schema.discountedLineItemPortionType = Joi.lazy(() => Joi.object().unknown().keys({
                                          discount: cartDiscountKeyReferenceType().required(),
                                          discountedAmount: moneyType().required()
                                       }))
export function discountedLineItemPortionType() : Joi.AnySchema {
   return schema.discountedLineItemPortionType
}

schema.discountedLineItemPriceDraftType = Joi.lazy(() => Joi.object().unknown().keys({
                                             includedDiscounts: Joi.array().items(discountedLineItemPortionType()).required(),
                                             value: moneyType().required()
                                          }))
export function discountedLineItemPriceDraftType() : Joi.AnySchema {
   return schema.discountedLineItemPriceDraftType
}

const shippingMethodStateTypeValues = [
   'DoesNotMatchCart',
   'MatchesCart'
]

export function shippingMethodStateType(): Joi.AnySchema {
   return Joi.string().only(shippingMethodStateTypeValues)
}

schema.shippingInfoImportDraftType = Joi.lazy(() => Joi.object().unknown().keys({
                                        price: moneyType().required(),
                                        shippingRate: shippingRateDraftType().required(),
                                        shippingMethodName: Joi.string().required(),
                                        deliveries: Joi.array().items(deliveryType()).optional(),
                                        discountedPrice: discountedLineItemPriceDraftType().optional(),
                                        shippingMethod: shippingMethodKeyReferenceType().optional(),
                                        shippingMethodState: shippingMethodStateType().optional(),
                                        taxCategory: taxCategoryKeyReferenceType().optional(),
                                        taxRate: taxRateType().optional()
                                     }))
export function shippingInfoImportDraftType() : Joi.AnySchema {
   return schema.shippingInfoImportDraftType
}

schema.subRateType = Joi.lazy(() => Joi.object().unknown().keys({
                        amount: Joi.number().required(),
                        name: Joi.string().required()
                     }))
export function subRateType() : Joi.AnySchema {
   return schema.subRateType
}

schema.externalTaxRateDraftType = Joi.lazy(() => Joi.object().unknown().keys({
                                     country: Joi.string().required(),
                                     name: Joi.string().required(),
                                     subRates: Joi.array().items(subRateType()).optional(),
                                     includedInPrice: Joi.boolean().optional(),
                                     amount: Joi.number().optional(),
                                     state: Joi.string().optional()
                                  }))
export function externalTaxRateDraftType() : Joi.AnySchema {
   return schema.externalTaxRateDraftType
}

schema.customLineItemDraftType = Joi.lazy(() => Joi.object().unknown().keys({
                                    name: localizedStringType().required(),
                                    money: moneyType().required(),
                                    quantity: Joi.number().required(),
                                    slug: Joi.string().required(),
                                    externalTaxRate: externalTaxRateDraftType().optional(),
                                    shippingDetails: itemShippingDetailsDraftType().optional(),
                                    taxCategory: taxCategoryKeyReferenceType().optional()
                                 }))
export function customLineItemDraftType() : Joi.AnySchema {
   return schema.customLineItemDraftType
}

schema.taxPortionType = Joi.lazy(() => Joi.object().unknown().keys({
                           amount: moneyType().required(),
                           rate: Joi.number().required(),
                           name: Joi.string().optional()
                        }))
export function taxPortionType() : Joi.AnySchema {
   return schema.taxPortionType
}

schema.taxedPriceType = Joi.lazy(() => Joi.object().unknown().keys({
                           taxPortions: Joi.array().items(taxPortionType()).required(),
                           totalGross: moneyType().required(),
                           totalNet: moneyType().required()
                        }))
export function taxedPriceType() : Joi.AnySchema {
   return schema.taxedPriceType
}

const orderStateTypeValues = [
   'Open',
   'Confirmed',
   'Complete',
   'Cancelled'
]

export function orderStateType(): Joi.AnySchema {
   return Joi.string().only(orderStateTypeValues)
}

const shipmentStateTypeValues = [
   'Shipped',
   'Ready',
   'Pending',
   'Delayed',
   'Partial',
   'Backorder'
]

export function shipmentStateType(): Joi.AnySchema {
   return Joi.string().only(shipmentStateTypeValues)
}

const paymentStateTypeValues = [
   'BalanceDue',
   'Failed',
   'Pending',
   'CreditOwed',
   'Paid'
]

export function paymentStateType(): Joi.AnySchema {
   return Joi.string().only(paymentStateTypeValues)
}

const inventoryModeTypeValues = [
   'TrackOnly',
   'ReserveOnOrder'
]

export function inventoryModeType(): Joi.AnySchema {
   return Joi.string().only(inventoryModeTypeValues)
}

const roundingModeTypeValues = [
   'HalfEven',
   'HalfUp',
   'HalfDown'
]

export function roundingModeType(): Joi.AnySchema {
   return Joi.string().only(roundingModeTypeValues)
}

const taxCalculationModeTypeValues = [
   'LineItemLevel',
   'UnitPriceLevel'
]

export function taxCalculationModeType(): Joi.AnySchema {
   return Joi.string().only(taxCalculationModeTypeValues)
}

const cartOriginTypeValues = [
   'Customer',
   'Merchant'
]

export function cartOriginType(): Joi.AnySchema {
   return Joi.string().only(cartOriginTypeValues)
}

schema.orderImportType = Joi.lazy(() => Joi.object().unknown().keys({
                            customer: customerKeyReferenceType().required(),
                            totalPrice: moneyType().required(),
                            key: Joi.string().required(),
                            customLineItems: Joi.array().items(customLineItemDraftType()).optional(),
                            itemShippingAddresses: Joi.array().items(addressType()).optional(),
                            lineItems: Joi.array().items(lineItemImportDraftType()).optional(),
                            billingAddress: addressType().optional(),
                            shippingAddress: addressType().optional(),
                            origin: cartOriginType().optional(),
                            customerGroup: customerGroupKeyReferenceType().optional(),
                            inventoryMode: inventoryModeType().optional(),
                            orderState: orderStateType().optional(),
                            paymentState: paymentStateType().optional(),
                            taxRoundingMode: roundingModeType().optional(),
                            shipmentState: shipmentStateType().optional(),
                            shippingInfo: shippingInfoImportDraftType().optional(),
                            taxCalculationMode: taxCalculationModeType().optional(),
                            taxedPrice: taxedPriceType().optional(),
                            completedAt: Joi.date().iso().optional(),
                            country: Joi.string().optional(),
                            orderNumber: Joi.string().optional()
                         }))
export function orderImportType() : Joi.AnySchema {
   return schema.orderImportType
}