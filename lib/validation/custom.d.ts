export type GetOrdersQuery = {
  CreatedAfter?: string;
  CreatedBefore?: string;
  LastUpdatedAfter?: string;
  LastUpdatedBefore?: string;
  OrderStatuses?: Array<string> | string;
  MarketplaceIds: Array<string> | string;
  FulfillmentChannels?: Array<string> | string;
  PaymentMethods?: Array<string> | string;
  BuyerEmail?: string;
  SellerOrderId?: string;
  MaxResultsPerPage?: number;
  EasyShipShipmentStatuses?: Array<string> | string;
  ElectronicInvoiceStatuses?: Array<string> | string;
  NextToken?: string;
  AmazonOrderIds?: Array<string> | string;
  ActualFulfillmentSupplySourceId?: string;
  IsISPU?: boolean;
  StoreChainStoreId?: string;
  EarliestDeliveryDateBefore?: string;
  EarliestDeliveryDateAfter?: string;
  LatestDeliveryDateBefore?: string;
  LatestDeliveryDateAfter?: string;
};

export type GetOrderItemsQuery = { NextToken?: string };

export type GetOrderItemsBuyerInfoQuery = { NextToken?: string };

export type GetSubscriptionQuery = { payloadVersion?: string };
