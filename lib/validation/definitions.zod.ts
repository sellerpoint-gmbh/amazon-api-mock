// Generated by ts-to-zod
import { z } from 'zod';

export const addressExtendedFieldsSchema = z.object({
  StreetName: z.string().optional(),
  StreetNumber: z.string().optional(),
  Complement: z.string().optional(),
  Neighborhood: z.string().optional(),
});

export const aggregationTimePeriodSchema = z.union([
  z.literal('FiveMinutes'),
  z.literal('TenMinutes'),
]);

export const amazonProgramsSchema = z.object({
  Programs: z.array(z.string()),
});

export const associationTypeSchema = z.literal('VALUE_ADD_SERVICE');

export const automatedShippingSettingsSchema = z.object({
  HasAutomatedShippingSettings: z.boolean().optional(),
  AutomatedCarrier: z.string().optional(),
  AutomatedShipMethod: z.string().optional(),
});

export const buyerCustomizedInfoDetailSchema = z.object({
  CustomizedURL: z.string().optional(),
});

export const buyerRequestedCancelSchema = z.object({
  IsBuyerRequestedCancel: z.string().optional(),
  BuyerCancelReason: z.string().optional(),
});

export const taxClassificationSchema = z.object({
  Name: z.string().optional(),
  Value: z.string().optional(),
});

export const buyerTaxInformationSchema = z.object({
  BuyerLegalCompanyName: z.string().optional(),
  BuyerBusinessAddress: z.string().optional(),
  BuyerTaxRegistrationId: z.string().optional(),
  BuyerTaxOffice: z.string().optional(),
});

export const marketplaceIdSchema = z.string();

export const constraintTypeSchema = z.literal('MANDATORY');

export const restrictedResourceSchema = z.object({
  method: z.union([
    z.literal('GET'),
    z.literal('PUT'),
    z.literal('POST'),
    z.literal('DELETE'),
  ]),
  path: z.string(),
  dataElements: z.array(z.string()),
});

export const createRestrictedDataTokenResponseSchema = z.object({
  restrictedDataToken: z.string().optional(),
  expiresIn: z.number().optional(),
});

export const otherDeliveryAttributesSchema = z.union([
  z.literal('HAS_ACCESS_POINT'),
  z.literal('PALLET_ENABLED'),
  z.literal('PALLET_DISABLED'),
]);

export const sqsResourceSchema = z.object({
  arn: z.string(),
});

export const eventBridgeResourceSchema = z.object({
  name: z.string(),
  region: z.string(),
  accountId: z.string(),
});

export const eventBridgeResourceSpecificationSchema = z.object({
  region: z.string(),
  accountId: z.string(),
});

export const easyShipShipmentStatusSchema = z.union([
  z.literal('PendingSchedule'),
  z.literal('PendingPickUp'),
  z.literal('PendingDropOff'),
  z.literal('LabelCanceled'),
  z.literal('PickedUp'),
  z.literal('DroppedOff'),
  z.literal('AtOriginFC'),
  z.literal('AtDestinationFC'),
  z.literal('Delivered'),
  z.literal('RejectedByBuyer'),
  z.literal('Undeliverable'),
  z.literal('ReturningToSeller'),
  z.literal('ReturnedToSeller'),
  z.literal('Lost'),
  z.literal('OutForDelivery'),
  z.literal('Damaged'),
]);

export const electronicInvoiceStatusSchema = z.union([
  z.literal('NotRequired'),
  z.literal('NotFound'),
  z.literal('Processing'),
  z.literal('Errored'),
  z.literal('Accepted'),
]);

export const errorSchema = z.object({
  code: z.string(),
  message: z.string(),
  details: z.string().optional(),
});

export const errorListSchema = z.array(errorSchema);

export const fulfillmentInstructionSchema = z.object({
  FulfillmentSupplySourceId: z.string().optional(),
});

export const moneySchema = z.object({
  CurrencyCode: z.string().optional(),
  Amount: z.string().optional(),
});

export const marketplaceIdsSchema = z.array(z.string());

export const marketplaceTaxInfoSchema = z.object({
  TaxClassifications: z.array(taxClassificationSchema).optional(),
});

export const measurementSchema = z.object({
  Unit: z.union([
    z.literal('OUNCES'),
    z.literal('POUNDS'),
    z.literal('KILOGRAMS'),
    z.literal('GRAMS'),
    z.literal('MILLIGRAMS'),
    z.literal('INCHES'),
    z.literal('FEET'),
    z.literal('METERS'),
    z.literal('CENTIMETERS'),
    z.literal('MILLIMETERS'),
    z.literal('SQUARE_METERS'),
    z.literal('SQUARE_CENTIMETERS'),
    z.literal('SQUARE_FEET'),
    z.literal('SQUARE_INCHES'),
    z.literal('GALLONS'),
    z.literal('PINTS'),
    z.literal('QUARTS'),
    z.literal('FLUID_OUNCES'),
    z.literal('LITERS'),
    z.literal('CUBIC_METERS'),
    z.literal('CUBIC_FEET'),
    z.literal('CUBIC_INCHES'),
    z.literal('CUBIC_CENTIMETERS'),
    z.literal('COUNT'),
  ]),
  Value: z.number(),
});

export const openTimeIntervalSchema = z.object({
  Hour: z.number().optional(),
  Minute: z.number().optional(),
});

export const paymentMethodDetailItemListSchema = z.array(z.string());

export const addressSchema = z.object({
  Name: z.string(),
  CompanyName: z.string().optional(),
  AddressLine1: z.string().optional(),
  AddressLine2: z.string().optional(),
  AddressLine3: z.string().optional(),
  City: z.string().optional(),
  County: z.string().optional(),
  District: z.string().optional(),
  StateOrRegion: z.string().optional(),
  Municipality: z.string().optional(),
  PostalCode: z.string().optional(),
  CountryCode: z.string().optional(),
  Phone: z.string().optional(),
  ExtendedFields: addressExtendedFieldsSchema.optional(),
  AddressType: z
    .union([z.literal('Residential'), z.literal('Commercial')])
    .optional(),
});

export const buyerTaxInfoSchema = z.object({
  CompanyLegalName: z.string().optional(),
  TaxingRegion: z.string().optional(),
  TaxClassifications: z.array(taxClassificationSchema).optional(),
});

export const orderChangeTypeEnumSchema = z.union([
  z.literal('OrderStatusChange'),
  z.literal('BuyerRequestedChange'),
]);

export const orderChangeTypesSchema = z.array(orderChangeTypeEnumSchema);

export const associatedItemSchema = z.object({
  OrderId: z.string().optional(),
  OrderItemId: z.string().optional(),
  AssociationType: associationTypeSchema.optional(),
});

export const productInfoDetailSchema = z.object({
  NumberOfItems: z.string().optional(),
});

export const pointsGrantedDetailSchema = z.object({
  PointsNumber: z.number().optional(),
  PointsMonetaryValue: moneySchema.optional(),
});

export const promotionIdListSchema = z.array(z.string());

export const taxCollectionSchema = z.object({
  Model: z.literal('MarketplaceFacilitator').optional(),
  ResponsibleParty: z.literal('Amazon Services, Inc.').optional(),
});

export const itemBuyerInfoSchema = z.object({
  BuyerCustomizedInfo: buyerCustomizedInfoDetailSchema.optional(),
  GiftWrapPrice: moneySchema.optional(),
  GiftWrapTax: moneySchema.optional(),
  GiftMessageText: z.string().optional(),
  GiftWrapLevel: z.string().optional(),
});

export const shippingConstraintsSchema = z.object({
  PalletDelivery: constraintTypeSchema.optional(),
  SignatureConfirmation: constraintTypeSchema.optional(),
  RecipientIdentityVerification: constraintTypeSchema.optional(),
  RecipientAgeVerification: constraintTypeSchema.optional(),
});

export const orderItemBuyerInfoSchema = z.object({
  OrderItemId: z.string(),
  BuyerCustomizedInfo: buyerCustomizedInfoDetailSchema.optional(),
  GiftWrapPrice: moneySchema.optional(),
  GiftWrapTax: moneySchema.optional(),
  GiftMessageText: z.string().optional(),
  GiftWrapLevel: z.string().optional(),
});

export const orderItemBuyerInfoListSchema = z.array(orderItemBuyerInfoSchema);

export const orderItemsSchema = z.array(
  z.object({
    orderItemId: z.string().optional(),
    quantity: z.number().optional(),
  })
);

export const orderItemsBuyerInfoListSchema = z.object({
  OrderItems: orderItemBuyerInfoListSchema,
  NextToken: z.string().optional(),
  AmazonOrderId: z.string(),
});

export const packageReferenceIdSchema = z.string();

export const paymentExecutionDetailItemSchema = z.object({
  Payment: moneySchema,
  PaymentMethod: z.string(),
});

export const paymentExecutionDetailItemListSchema = z.array(
  paymentExecutionDetailItemSchema
);

export const prescriptionDetailSchema = z.object({
  prescriptionId: z.string(),
  expirationDate: z.string(),
  writtenQuantity: z.number(),
  totalRefillsAuthorized: z.number(),
  refillsRemaining: z.number(),
  clinicId: z.string(),
  usageInstructions: z.string(),
});

export const regulatedInformationFieldSchema = z.object({
  FieldId: z.string(),
  FieldLabel: z.string(),
  FieldType: z.union([z.literal('Text'), z.literal('FileAttachment')]),
  FieldValue: z.string(),
});

export const verificationStatusSchema = z.union([
  z.literal('Pending'),
  z.literal('Approved'),
  z.literal('Rejected'),
  z.literal('Expired'),
  z.literal('Cancelled'),
]);

export const rejectionReasonSchema = z.object({
  RejectionReasonId: z.string(),
  RejectionReasonDescription: z.string(),
});

export const validVerificationDetailSchema = z.object({
  VerificationDetailType: z.string(),
  ValidVerificationStatuses: z.array(verificationStatusSchema),
});

export const shipmentStatusSchema = z.union([
  z.literal('ReadyForPickup'),
  z.literal('PickedUp'),
  z.literal('RefusedPickup'),
]);

export const substitutionOptionSchema = z.object({
  ASIN: z.string().optional(),
  QuantityOrdered: z.number().optional(),
  SellerSKU: z.string().optional(),
  Title: z.string().optional(),
  Measurement: measurementSchema.optional(),
});

export const substitutionOptionListSchema = z.array(substitutionOptionSchema);

export const substitutionPreferencesSchema = z.object({
  SubstitutionType: z.union([
    z.literal('CUSTOMER_PREFERENCE'),
    z.literal('AMAZON_RECOMMENDED'),
    z.literal('DO_NOT_SUBSTITUTE'),
  ]),
  SubstitutionOptions: substitutionOptionListSchema.optional(),
});

export const transparencyCodeSchema = z.string();

export const transparencyCodeListSchema = z.array(transparencyCodeSchema);

export const updateShipmentStatusErrorResponseSchema = z.object({
  errors: errorListSchema.optional(),
});

export const updateShipmentStatusRequestSchema = z.object({
  marketplaceId: marketplaceIdSchema,
  shipmentStatus: shipmentStatusSchema,
  orderItems: orderItemsSchema.optional(),
});

export const updateVerificationStatusErrorResponseSchema = z.object({
  errors: errorListSchema.optional(),
});

export const verificationDetailsSchema = z.object({
  prescriptionDetail: prescriptionDetailSchema.optional(),
});

export const aggregationSettingsSchema = z.object({
  aggregationTimePeriod: aggregationTimePeriodSchema,
});

export const openIntervalSchema = z.object({
  StartTime: openTimeIntervalSchema.optional(),
  EndTime: openTimeIntervalSchema.optional(),
});

export const buyerInfoSchema = z.object({
  BuyerEmail: z.string().optional(),
  BuyerName: z.string().optional(),
  BuyerCounty: z.string().optional(),
  BuyerTaxInfo: buyerTaxInfoSchema.optional(),
  PurchaseOrderNumber: z.string().optional(),
});

export const confirmShipmentErrorResponseSchema = z.object({
  errors: errorListSchema.optional(),
});

export const confirmShipmentOrderItemSchema = z.object({
  orderItemId: z.string(),
  quantity: z.number(),
  transparencyCodes: transparencyCodeListSchema.optional(),
});

export const confirmShipmentOrderItemsListSchema = z.array(
  confirmShipmentOrderItemSchema
);

export const packageDetailSchema = z.object({
  packageReferenceId: packageReferenceIdSchema,
  carrierCode: z.string(),
  carrierName: z.string().optional(),
  shippingMethod: z.string().optional(),
  trackingNumber: z.string(),
  shipDate: z.string(),
  shipFromSupplySourceId: z.string().optional(),
  orderItems: confirmShipmentOrderItemsListSchema,
});

export const destinationResourceSpecificationSchema = z.object({
  sqs: sqsResourceSchema.optional(),
  eventBridge: eventBridgeResourceSpecificationSchema.optional(),
});

export const createRestrictedDataTokenRequestSchema = z.object({
  targetApplication: z.string().optional(),
  restrictedResources: z.array(restrictedResourceSchema),
});

export const deleteDestinationResponseSchema = z.object({
  errors: errorListSchema.optional(),
});

export const destinationResourceSchema = z.object({
  sqs: sqsResourceSchema.optional(),
  eventBridge: eventBridgeResourceSchema.optional(),
});

export const destinationSchema = z.object({
  name: z.string(),
  destinationId: z.string(),
  resource: destinationResourceSchema,
});

export const aggregationFilterSchema = z.object({
  aggregationSettings: aggregationSettingsSchema.optional(),
});

export const marketplaceFilterSchema = z.object({
  marketplaceIds: marketplaceIdsSchema.optional(),
});

export const orderChangeTypeFilterSchema = z.object({
  orderChangeTypes: orderChangeTypesSchema.optional(),
});

export const exceptionDatesSchema = z.object({
  ExceptionDate: z.string().optional(),
  IsOpen: z.boolean().optional(),
  OpenIntervals: z.array(openIntervalSchema).optional(),
});

export const getDestinationResponseSchema = z.object({
  payload: destinationSchema.optional(),
  errors: errorListSchema.optional(),
});

export const destinationListSchema = z.array(destinationSchema);

export const orderBuyerInfoSchema = z.object({
  AmazonOrderId: z.string(),
  BuyerEmail: z.string().optional(),
  BuyerName: z.string().optional(),
  BuyerCounty: z.string().optional(),
  BuyerTaxInfo: buyerTaxInfoSchema.optional(),
  PurchaseOrderNumber: z.string().optional(),
});

export const getOrderItemsBuyerInfoResponseSchema = z.object({
  payload: orderItemsBuyerInfoListSchema.optional(),
  errors: errorListSchema.optional(),
});

export const orderSchema = z.object({
  AmazonOrderId: z.string(),
  SellerOrderId: z.string().optional(),
  PurchaseDate: z.string(),
  LastUpdateDate: z.string(),
  OrderStatus: z.union([
    z.literal('Pending'),
    z.literal('Unshipped'),
    z.literal('PartiallyShipped'),
    z.literal('Shipped'),
    z.literal('Canceled'),
    z.literal('Unfulfillable'),
    z.literal('InvoiceUnconfirmed'),
    z.literal('PendingAvailability'),
  ]),
  FulfillmentChannel: z.union([z.literal('MFN'), z.literal('AFN')]).optional(),
  SalesChannel: z.string().optional(),
  OrderChannel: z.string().optional(),
  ShipServiceLevel: z.string().optional(),
  OrderTotal: moneySchema.optional(),
  NumberOfItemsShipped: z.number().optional(),
  NumberOfItemsUnshipped: z.number().optional(),
  PaymentExecutionDetail: paymentExecutionDetailItemListSchema.optional(),
  PaymentMethod: z
    .union([z.literal('COD'), z.literal('CVS'), z.literal('Other')])
    .optional(),
  PaymentMethodDetails: paymentMethodDetailItemListSchema.optional(),
  MarketplaceId: z.string().optional(),
  ShipmentServiceLevelCategory: z.string().optional(),
  EasyShipShipmentStatus: easyShipShipmentStatusSchema.optional(),
  CbaDisplayableShippingLabel: z.string().optional(),
  OrderType: z
    .union([
      z.literal('StandardOrder'),
      z.literal('LongLeadTimeOrder'),
      z.literal('Preorder'),
      z.literal('BackOrder'),
      z.literal('SourcingOnDemandOrder'),
    ])
    .optional(),
  EarliestShipDate: z.string().optional(),
  LatestShipDate: z.string().optional(),
  EarliestDeliveryDate: z.string().optional(),
  LatestDeliveryDate: z.string().optional(),
  IsBusinessOrder: z.boolean().optional(),
  IsPrime: z.boolean().optional(),
  IsPremiumOrder: z.boolean().optional(),
  IsGlobalExpressEnabled: z.boolean().optional(),
  ReplacedOrderId: z.string().optional(),
  IsReplacementOrder: z.boolean().optional(),
  PromiseResponseDueDate: z.string().optional(),
  IsEstimatedShipDateSet: z.boolean().optional(),
  IsSoldByAB: z.boolean().optional(),
  IsIBA: z.boolean().optional(),
  DefaultShipFromLocationAddress: addressSchema.optional(),
  BuyerInvoicePreference: z
    .union([z.literal('INDIVIDUAL'), z.literal('BUSINESS')])
    .optional(),
  BuyerTaxInformation: buyerTaxInformationSchema.optional(),
  FulfillmentInstruction: fulfillmentInstructionSchema.optional(),
  IsISPU: z.boolean().optional(),
  IsAccessPointOrder: z.boolean().optional(),
  MarketplaceTaxInfo: marketplaceTaxInfoSchema.optional(),
  SellerDisplayName: z.string().optional(),
  ShippingAddress: addressSchema.optional(),
  BuyerInfo: buyerInfoSchema.optional(),
  AutomatedShippingSettings: automatedShippingSettingsSchema.optional(),
  HasRegulatedItems: z.boolean().optional(),
  ElectronicInvoiceStatus: electronicInvoiceStatusSchema.optional(),
});

export const orderItemSchema = z.object({
  ASIN: z.string(),
  SellerSKU: z.string().optional(),
  OrderItemId: z.string(),
  AssociatedItems: z.array(associatedItemSchema).optional(),
  Title: z.string().optional(),
  QuantityOrdered: z.number(),
  QuantityShipped: z.number().optional(),
  ProductInfo: productInfoDetailSchema.optional(),
  PointsGranted: pointsGrantedDetailSchema.optional(),
  ItemPrice: moneySchema.optional(),
  ShippingPrice: moneySchema.optional(),
  ItemTax: moneySchema.optional(),
  ShippingTax: moneySchema.optional(),
  ShippingDiscount: moneySchema.optional(),
  ShippingDiscountTax: moneySchema.optional(),
  PromotionDiscount: moneySchema.optional(),
  PromotionDiscountTax: moneySchema.optional(),
  PromotionIds: promotionIdListSchema.optional(),
  CODFee: moneySchema.optional(),
  CODFeeDiscount: moneySchema.optional(),
  IsGift: z.string().optional(),
  ConditionNote: z.string().optional(),
  ConditionId: z.string().optional(),
  ConditionSubtypeId: z.string().optional(),
  ScheduledDeliveryStartDate: z.string().optional(),
  ScheduledDeliveryEndDate: z.string().optional(),
  PriceDesignation: z.string().optional(),
  TaxCollection: taxCollectionSchema.optional(),
  SerialNumberRequired: z.boolean().optional(),
  IsTransparency: z.boolean().optional(),
  IossNumber: z.string().optional(),
  StoreChainStoreId: z.string().optional(),
  DeemedResellerCategory: z
    .union([z.literal('IOSS'), z.literal('UOSS')])
    .optional(),
  BuyerInfo: itemBuyerInfoSchema.optional(),
  BuyerRequestedCancel: buyerRequestedCancelSchema.optional(),
  SerialNumbers: z.array(z.string()).optional(),
  SubstitutionPreferences: substitutionPreferencesSchema.optional(),
  Measurement: measurementSchema.optional(),
  ShippingConstraints: shippingConstraintsSchema.optional(),
  AmazonPrograms: amazonProgramsSchema.optional(),
});

export const orderItemListSchema = z.array(orderItemSchema);

export const orderItemsListSchema = z.object({
  OrderItems: orderItemListSchema,
  NextToken: z.string().optional(),
  AmazonOrderId: z.string(),
});

export const orderListSchema = z.array(orderSchema);

export const regulatedInformationSchema = z.object({
  Fields: z.array(regulatedInformationFieldSchema),
});

export const regulatedOrderVerificationStatusSchema = z.object({
  Status: verificationStatusSchema,
  RequiresMerchantAction: z.boolean(),
  ValidRejectionReasons: z.array(rejectionReasonSchema),
  RejectionReason: rejectionReasonSchema.optional(),
  ReviewDate: z.string().optional(),
  ExternalReviewerId: z.string().optional(),
  ValidVerificationDetails: z.array(validVerificationDetailSchema).optional(),
});

export const ordersListSchema = z.object({
  Orders: orderListSchema,
  NextToken: z.string().optional(),
  LastUpdatedBefore: z.string().optional(),
  CreatedBefore: z.string().optional(),
});

export const businessHoursSchema = z.object({
  DayOfWeek: z
    .union([
      z.literal('SUN'),
      z.literal('MON'),
      z.literal('TUE'),
      z.literal('WED'),
      z.literal('THU'),
      z.literal('FRI'),
      z.literal('SAT'),
    ])
    .optional(),
  OpenIntervals: z.array(openIntervalSchema).optional(),
});

export const eventFilterSchema = aggregationFilterSchema
  .and(marketplaceFilterSchema)
  .and(orderChangeTypeFilterSchema)
  .and(
    z.object({
      eventFilterType: z.union([
        z.literal('ANY_OFFER_CHANGED'),
        z.literal('ORDER_CHANGE'),
      ]),
    })
  );

export const processingDirectiveSchema = z.object({
  eventFilter: eventFilterSchema.optional(),
});

export const updateVerificationStatusRequestBodySchema = z.object({
  status: verificationStatusSchema.optional(),
  externalReviewerId: z.string(),
  rejectionReasonId: z.string().optional(),
  verificationDetails: verificationDetailsSchema.optional(),
});

export const confirmShipmentRequestSchema = z.object({
  packageDetail: packageDetailSchema,
  codCollectionMethod: z.literal('DirectPayment').optional(),
  marketplaceId: marketplaceIdSchema,
});

export const createDestinationRequestSchema = z.object({
  resourceSpecification: destinationResourceSpecificationSchema,
  name: z.string(),
});

export const createDestinationResponseSchema = z.object({
  payload: destinationSchema.optional(),
  errors: errorListSchema.optional(),
});

export const createSubscriptionRequestSchema = z.object({
  payloadVersion: z.string(),
  destinationId: z.string(),
  processingDirective: processingDirectiveSchema.optional(),
});

export const subscriptionSchema = z.object({
  subscriptionId: z.string(),
  payloadVersion: z.string(),
  destinationId: z.string(),
  processingDirective: processingDirectiveSchema.optional(),
});

export const preferredDeliveryTimeSchema = z.object({
  BusinessHours: z.array(businessHoursSchema).optional(),
  ExceptionDates: z.array(exceptionDatesSchema).optional(),
});

export const getDestinationsResponseSchema = z.object({
  payload: destinationListSchema.optional(),
  errors: errorListSchema.optional(),
});

export const getOrderBuyerInfoResponseSchema = z.object({
  payload: orderBuyerInfoSchema.optional(),
  errors: errorListSchema.optional(),
});

export const getOrderItemsResponseSchema = z.object({
  payload: orderItemsListSchema.optional(),
  errors: errorListSchema.optional(),
});

export const orderRegulatedInfoSchema = z.object({
  AmazonOrderId: z.string(),
  RegulatedInformation: regulatedInformationSchema,
  RequiresDosageLabel: z.boolean(),
  RegulatedOrderVerificationStatus: regulatedOrderVerificationStatusSchema,
});

export const getOrderResponseSchema = z.object({
  payload: orderSchema.optional(),
  errors: errorListSchema.optional(),
});

export const getOrdersResponseSchema = z.object({
  payload: ordersListSchema.optional(),
  errors: errorListSchema.optional(),
});

export const deliveryPreferencesSchema = z.object({
  DropOffLocation: z.string().optional(),
  PreferredDeliveryTime: preferredDeliveryTimeSchema.optional(),
  OtherAttributes: z.array(otherDeliveryAttributesSchema).optional(),
  AddressInstructions: z.string().optional(),
});

export const updateVerificationStatusRequestSchema = z.object({
  regulatedOrderVerificationStatus: updateVerificationStatusRequestBodySchema,
});

export const createSubscriptionResponseSchema = z.object({
  payload: subscriptionSchema.optional(),
  errors: errorListSchema.optional(),
});

export const orderAddressSchema = z.object({
  AmazonOrderId: z.string(),
  BuyerCompanyName: z.string().optional(),
  ShippingAddress: addressSchema.optional(),
  DeliveryPreferences: deliveryPreferencesSchema.optional(),
});

export const getOrderRegulatedInfoResponseSchema = z.object({
  payload: orderRegulatedInfoSchema.optional(),
  errors: errorListSchema.optional(),
});

export const getOrderAddressResponseSchema = z.object({
  payload: orderAddressSchema.optional(),
  errors: errorListSchema.optional(),
});
