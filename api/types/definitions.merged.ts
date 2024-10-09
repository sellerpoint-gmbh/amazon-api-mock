export type Address = {
  Name: string;
  CompanyName?: string;
  AddressLine1?: string;
  AddressLine2?: string;
  AddressLine3?: string;
  City?: string;
  County?: string;
  District?: string;
  StateOrRegion?: string;
  Municipality?: string;
  PostalCode?: string;
  CountryCode?: string;
  Phone?: string;
  ExtendedFields?: AddressExtendedFields;
  AddressType?: "Residential" | "Commercial";
};
export type AddressExtendedFields = {
  StreetName?: string;
  StreetNumber?: string;
  Complement?: string;
  Neighborhood?: string;
};

export type AggregationFilter = { aggregationSettings?: AggregationSettings };

export type AggregationSettings = {
  aggregationTimePeriod: AggregationTimePeriod;
};
export type AggregationTimePeriod = "FiveMinutes" | "TenMinutes";
export type AmazonPrograms = { Programs: Array<string> };

export type AssociatedItem = {
  OrderId?: string;
  OrderItemId?: string;
  AssociationType?: AssociationType;
};
export type AssociationType = "VALUE_ADD_SERVICE";
export type AutomatedShippingSettings = {
  HasAutomatedShippingSettings?: boolean;
  AutomatedCarrier?: string;
  AutomatedShipMethod?: string;
};

export type BusinessHours = {
  DayOfWeek?: "SUN" | "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT";
  OpenIntervals?: Array<OpenInterval>;
};
export type BuyerCustomizedInfoDetail = { CustomizedURL?: string };

export type BuyerInfo = {
  BuyerEmail?: string;
  BuyerName?: string;
  BuyerCounty?: string;
  BuyerTaxInfo?: BuyerTaxInfo;
  PurchaseOrderNumber?: string;
};
export type BuyerRequestedCancel = {
  IsBuyerRequestedCancel?: string;
  BuyerCancelReason?: string;
};

export type BuyerTaxInfo = {
  CompanyLegalName?: string;
  TaxingRegion?: string;
  TaxClassifications?: Array<TaxClassification>;
};
export type BuyerTaxInformation = {
  BuyerLegalCompanyName?: string;
  BuyerBusinessAddress?: string;
  BuyerTaxRegistrationId?: string;
  BuyerTaxOffice?: string;
};

export type ConfirmShipmentErrorResponse = { errors?: ErrorList };

export type ConfirmShipmentOrderItem = {
  orderItemId: string;
  quantity: number;
  transparencyCodes?: TransparencyCodeList;
};

export type ConfirmShipmentOrderItemsList = Array<ConfirmShipmentOrderItem>;

export type ConfirmShipmentRequest = {
  packageDetail: PackageDetail;
  codCollectionMethod?: "DirectPayment";
  marketplaceId: MarketplaceId;
};
export type ConstraintType = "MANDATORY";

export type CreateDestinationRequest = {
  resourceSpecification: DestinationResourceSpecification;
  name: string;
};

export type CreateDestinationResponse = {
  payload?: Destination;
  errors?: ErrorList;
};

export type CreateSubscriptionRequest = {
  payloadVersion: string;
  destinationId: string;
  processingDirective?: ProcessingDirective;
};

export type CreateSubscriptionResponse = {
  payload?: Subscription;
  errors?: ErrorList;
};

export type DeleteDestinationResponse = { errors?: ErrorList };

export type DeliveryPreferences = {
  DropOffLocation?: string;
  PreferredDeliveryTime?: PreferredDeliveryTime;
  OtherAttributes?: Array<OtherDeliveryAttributes>;
  AddressInstructions?: string;
};

export type Destination = {
  name: string;
  destinationId: string;
  resource: DestinationResource;
};

export type DestinationList = Array<Destination>;

export type DestinationResource = {
  sqs?: SqsResource;
  eventBridge?: EventBridgeResource;
};

export type DestinationResourceSpecification = {
  sqs?: SqsResource;
  eventBridge?: EventBridgeResourceSpecification;
};
export type EasyShipShipmentStatus =
  | "PendingSchedule"
  | "PendingPickUp"
  | "PendingDropOff"
  | "LabelCanceled"
  | "PickedUp"
  | "DroppedOff"
  | "AtOriginFC"
  | "AtDestinationFC"
  | "Delivered"
  | "RejectedByBuyer"
  | "Undeliverable"
  | "ReturningToSeller"
  | "ReturnedToSeller"
  | "Lost"
  | "OutForDelivery"
  | "Damaged";
export type ElectronicInvoiceStatus =
  | "NotRequired"
  | "NotFound"
  | "Processing"
  | "Errored"
  | "Accepted";
export type Error = { code: string; message: string; details?: string };

export type ErrorList = Array<Error>;
export type EventBridgeResource = {
  name: string;
  region: string;
  accountId: string;
};
export type EventBridgeResourceSpecification = {
  region: string;
  accountId: string;
};

export type EventFilter = AggregationFilter &
  MarketplaceFilter &
  OrderChangeTypeFilter & {
    eventFilterType: "ANY_OFFER_CHANGED" | "ORDER_CHANGE";
  };

export type ExceptionDates = {
  ExceptionDate?: string;
  IsOpen?: boolean;
  OpenIntervals?: Array<OpenInterval>;
};
export type FulfillmentInstruction = { FulfillmentSupplySourceId?: string };

export type GetDestinationResponse = {
  payload?: Destination;
  errors?: ErrorList;
};

export type GetDestinationsResponse = {
  payload?: DestinationList;
  errors?: ErrorList;
};

export type GetOrderAddressResponse = {
  payload?: OrderAddress;
  errors?: ErrorList;
};

export type GetOrderBuyerInfoResponse = {
  payload?: OrderBuyerInfo;
  errors?: ErrorList;
};

export type GetOrderItemsBuyerInfoResponse = {
  payload?: OrderItemsBuyerInfoList;
  errors?: ErrorList;
};

export type GetOrderItemsResponse = {
  payload?: OrderItemsList;
  errors?: ErrorList;
};

export type GetOrderRegulatedInfoResponse = {
  payload?: OrderRegulatedInfo;
  errors?: ErrorList;
};

export type GetOrderResponse = { payload?: Order; errors?: ErrorList };

export type GetOrdersResponse = { payload?: OrdersList; errors?: ErrorList };

export type ItemBuyerInfo = {
  BuyerCustomizedInfo?: BuyerCustomizedInfoDetail;
  GiftWrapPrice?: Money;
  GiftWrapTax?: Money;
  GiftMessageText?: string;
  GiftWrapLevel?: string;
};

export type MarketplaceFilter = { marketplaceIds?: MarketplaceIds };
export type MarketplaceId = string;
export type MarketplaceIds = Array<string>;

export type MarketplaceTaxInfo = {
  TaxClassifications?: Array<TaxClassification>;
};
export type Measurement = {
  Unit:
    | "OUNCES"
    | "POUNDS"
    | "KILOGRAMS"
    | "GRAMS"
    | "MILLIGRAMS"
    | "INCHES"
    | "FEET"
    | "METERS"
    | "CENTIMETERS"
    | "MILLIMETERS"
    | "SQUARE_METERS"
    | "SQUARE_CENTIMETERS"
    | "SQUARE_FEET"
    | "SQUARE_INCHES"
    | "GALLONS"
    | "PINTS"
    | "QUARTS"
    | "FLUID_OUNCES"
    | "LITERS"
    | "CUBIC_METERS"
    | "CUBIC_FEET"
    | "CUBIC_INCHES"
    | "CUBIC_CENTIMETERS"
    | "COUNT";
  Value: number;
};
export type Money = { CurrencyCode?: string; Amount?: string };

export type OpenInterval = {
  StartTime?: OpenTimeInterval;
  EndTime?: OpenTimeInterval;
};
export type OpenTimeInterval = { Hour?: number; Minute?: number };

export type Order = {
  AmazonOrderId: string;
  SellerOrderId?: string;
  PurchaseDate: string;
  LastUpdateDate: string;
  OrderStatus:
    | "Pending"
    | "Unshipped"
    | "PartiallyShipped"
    | "Shipped"
    | "Canceled"
    | "Unfulfillable"
    | "InvoiceUnconfirmed"
    | "PendingAvailability";
  FulfillmentChannel?: "MFN" | "AFN";
  SalesChannel?: string;
  OrderChannel?: string;
  ShipServiceLevel?: string;
  OrderTotal?: Money;
  NumberOfItemsShipped?: number;
  NumberOfItemsUnshipped?: number;
  PaymentExecutionDetail?: PaymentExecutionDetailItemList;
  PaymentMethod?: "COD" | "CVS" | "Other";
  PaymentMethodDetails?: PaymentMethodDetailItemList;
  MarketplaceId?: string;
  ShipmentServiceLevelCategory?: string;
  EasyShipShipmentStatus?: EasyShipShipmentStatus;
  CbaDisplayableShippingLabel?: string;
  OrderType?:
    | "StandardOrder"
    | "LongLeadTimeOrder"
    | "Preorder"
    | "BackOrder"
    | "SourcingOnDemandOrder";
  EarliestShipDate?: string;
  LatestShipDate?: string;
  EarliestDeliveryDate?: string;
  LatestDeliveryDate?: string;
  IsBusinessOrder?: boolean;
  IsPrime?: boolean;
  IsPremiumOrder?: boolean;
  IsGlobalExpressEnabled?: boolean;
  ReplacedOrderId?: string;
  IsReplacementOrder?: boolean;
  PromiseResponseDueDate?: string;
  IsEstimatedShipDateSet?: boolean;
  IsSoldByAB?: boolean;
  IsIBA?: boolean;
  DefaultShipFromLocationAddress?: Address;
  BuyerInvoicePreference?: "INDIVIDUAL" | "BUSINESS";
  BuyerTaxInformation?: BuyerTaxInformation;
  FulfillmentInstruction?: FulfillmentInstruction;
  IsISPU?: boolean;
  IsAccessPointOrder?: boolean;
  MarketplaceTaxInfo?: MarketplaceTaxInfo;
  SellerDisplayName?: string;
  ShippingAddress?: Address;
  BuyerInfo?: BuyerInfo;
  AutomatedShippingSettings?: AutomatedShippingSettings;
  HasRegulatedItems?: boolean;
  ElectronicInvoiceStatus?: ElectronicInvoiceStatus;
};

export type OrderAddress = {
  AmazonOrderId: string;
  BuyerCompanyName?: string;
  ShippingAddress?: Address;
  DeliveryPreferences?: DeliveryPreferences;
};

export type OrderBuyerInfo = {
  AmazonOrderId: string;
  BuyerEmail?: string;
  BuyerName?: string;
  BuyerCounty?: string;
  BuyerTaxInfo?: BuyerTaxInfo;
  PurchaseOrderNumber?: string;
};
export type OrderChangeTypeEnum = "OrderStatusChange" | "BuyerRequestedChange";

export type OrderChangeTypeFilter = { orderChangeTypes?: OrderChangeTypes };

export type OrderChangeTypes = Array<OrderChangeTypeEnum>;

export type OrderItem = {
  ASIN: string;
  SellerSKU?: string;
  OrderItemId: string;
  AssociatedItems?: Array<AssociatedItem>;
  Title?: string;
  QuantityOrdered: number;
  QuantityShipped?: number;
  ProductInfo?: ProductInfoDetail;
  PointsGranted?: PointsGrantedDetail;
  ItemPrice?: Money;
  ShippingPrice?: Money;
  ItemTax?: Money;
  ShippingTax?: Money;
  ShippingDiscount?: Money;
  ShippingDiscountTax?: Money;
  PromotionDiscount?: Money;
  PromotionDiscountTax?: Money;
  PromotionIds?: PromotionIdList;
  CODFee?: Money;
  CODFeeDiscount?: Money;
  IsGift?: string;
  ConditionNote?: string;
  ConditionId?: string;
  ConditionSubtypeId?: string;
  ScheduledDeliveryStartDate?: string;
  ScheduledDeliveryEndDate?: string;
  PriceDesignation?: string;
  TaxCollection?: TaxCollection;
  SerialNumberRequired?: boolean;
  IsTransparency?: boolean;
  IossNumber?: string;
  StoreChainStoreId?: string;
  DeemedResellerCategory?: "IOSS" | "UOSS";
  BuyerInfo?: ItemBuyerInfo;
  BuyerRequestedCancel?: BuyerRequestedCancel;
  SerialNumbers?: Array<string>;
  SubstitutionPreferences?: SubstitutionPreferences;
  Measurement?: Measurement;
  ShippingConstraints?: ShippingConstraints;
  AmazonPrograms?: AmazonPrograms;
};

export type OrderItemBuyerInfo = {
  OrderItemId: string;
  BuyerCustomizedInfo?: BuyerCustomizedInfoDetail;
  GiftWrapPrice?: Money;
  GiftWrapTax?: Money;
  GiftMessageText?: string;
  GiftWrapLevel?: string;
};

export type OrderItemBuyerInfoList = Array<OrderItemBuyerInfo>;

export type OrderItemList = Array<OrderItem>;
export type OrderItems = Array<{ orderItemId?: string; quantity?: number }>;

export type OrderItemsBuyerInfoList = {
  OrderItems: OrderItemBuyerInfoList;
  NextToken?: string;
  AmazonOrderId: string;
};

export type OrderItemsList = {
  OrderItems: OrderItemList;
  NextToken?: string;
  AmazonOrderId: string;
};

export type OrderList = Array<Order>;

export type OrderRegulatedInfo = {
  AmazonOrderId: string;
  RegulatedInformation: RegulatedInformation;
  RequiresDosageLabel: boolean;
  RegulatedOrderVerificationStatus: RegulatedOrderVerificationStatus;
};

export type OrdersList = {
  Orders: OrderList;
  NextToken?: string;
  LastUpdatedBefore?: string;
  CreatedBefore?: string;
};
export type OtherDeliveryAttributes =
  | "HAS_ACCESS_POINT"
  | "PALLET_ENABLED"
  | "PALLET_DISABLED";

export type PackageDetail = {
  packageReferenceId: PackageReferenceId;
  carrierCode: string;
  carrierName?: string;
  shippingMethod?: string;
  trackingNumber: string;
  shipDate: string;
  shipFromSupplySourceId?: string;
  orderItems: ConfirmShipmentOrderItemsList;
};
export type PackageReferenceId = string;

export type PaymentExecutionDetailItem = {
  Payment: Money;
  PaymentMethod: string;
};

export type PaymentExecutionDetailItemList = Array<PaymentExecutionDetailItem>;
export type PaymentMethodDetailItemList = Array<string>;

export type PointsGrantedDetail = {
  PointsNumber?: number;
  PointsMonetaryValue?: Money;
};

export type PreferredDeliveryTime = {
  BusinessHours?: Array<BusinessHours>;
  ExceptionDates?: Array<ExceptionDates>;
};
export type PrescriptionDetail = {
  prescriptionId: string;
  expirationDate: string;
  writtenQuantity: number;
  totalRefillsAuthorized: number;
  refillsRemaining: number;
  clinicId: string;
  usageInstructions: string;
};

export type ProcessingDirective = { eventFilter?: EventFilter };
export type ProductInfoDetail = { NumberOfItems?: string };
export type PromotionIdList = Array<string>;

export type RegulatedInformation = { Fields: Array<RegulatedInformationField> };
export type RegulatedInformationField = {
  FieldId: string;
  FieldLabel: string;
  FieldType: "Text" | "FileAttachment";
  FieldValue: string;
};

export type RegulatedOrderVerificationStatus = {
  Status: VerificationStatus;
  RequiresMerchantAction: boolean;
  ValidRejectionReasons: Array<RejectionReason>;
  RejectionReason?: RejectionReason;
  ReviewDate?: string;
  ExternalReviewerId?: string;
  ValidVerificationDetails?: Array<ValidVerificationDetail>;
};
export type RejectionReason = {
  RejectionReasonId: string;
  RejectionReasonDescription: string;
};
export type ShipmentStatus = "ReadyForPickup" | "PickedUp" | "RefusedPickup";

export type ShippingConstraints = {
  PalletDelivery?: ConstraintType;
  SignatureConfirmation?: ConstraintType;
  RecipientIdentityVerification?: ConstraintType;
  RecipientAgeVerification?: ConstraintType;
};
export type SqsResource = { arn: string };

export type Subscription = {
  subscriptionId: string;
  payloadVersion: string;
  destinationId: string;
  processingDirective?: ProcessingDirective;
};

export type SubstitutionOption = {
  ASIN?: string;
  QuantityOrdered?: number;
  SellerSKU?: string;
  Title?: string;
  Measurement?: Measurement;
};

export type SubstitutionOptionList = Array<SubstitutionOption>;

export type SubstitutionPreferences = {
  SubstitutionType:
    | "CUSTOMER_PREFERENCE"
    | "AMAZON_RECOMMENDED"
    | "DO_NOT_SUBSTITUTE";
  SubstitutionOptions?: SubstitutionOptionList;
};
export type TaxClassification = { Name?: string; Value?: string };
export type TaxCollection = {
  Model?: "MarketplaceFacilitator";
  ResponsibleParty?: "Amazon Services, Inc.";
};
export type TransparencyCode = string;

export type TransparencyCodeList = Array<TransparencyCode>;

export type UpdateShipmentStatusErrorResponse = { errors?: ErrorList };

export type UpdateShipmentStatusRequest = {
  marketplaceId: MarketplaceId;
  shipmentStatus: ShipmentStatus;
  orderItems?: OrderItems;
};

export type UpdateVerificationStatusErrorResponse = { errors?: ErrorList };

export type UpdateVerificationStatusRequest = {
  regulatedOrderVerificationStatus: UpdateVerificationStatusRequestBody;
};

export type UpdateVerificationStatusRequestBody = {
  status?: VerificationStatus;
  externalReviewerId: string;
  rejectionReasonId?: string;
  verificationDetails?: VerificationDetails;
};

export type ValidVerificationDetail = {
  VerificationDetailType: string;
  ValidVerificationStatuses: Array<VerificationStatus>;
};

export type VerificationDetails = { prescriptionDetail?: PrescriptionDetail };
export type VerificationStatus =
  | "Pending"
  | "Approved"
  | "Rejected"
  | "Expired"
  | "Cancelled";
