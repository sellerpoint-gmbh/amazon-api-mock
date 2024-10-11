import type { Money } from './Money.js';
import type { PaymentExecutionDetailItemList } from './PaymentExecutionDetailItemList.js';
import type { PaymentMethodDetailItemList } from './PaymentMethodDetailItemList.js';
import type { EasyShipShipmentStatus } from './EasyShipShipmentStatus.js';
import type { Address } from './Address.js';
import type { BuyerTaxInformation } from './BuyerTaxInformation.js';
import type { FulfillmentInstruction } from './FulfillmentInstruction.js';
import type { MarketplaceTaxInfo } from './MarketplaceTaxInfo.js';
import type { BuyerInfo } from './BuyerInfo.js';
import type { AutomatedShippingSettings } from './AutomatedShippingSettings.js';
import type { ElectronicInvoiceStatus } from './ElectronicInvoiceStatus.js';

export type Order = {
  AmazonOrderId: string;
  SellerOrderId?: string;
  PurchaseDate: string;
  LastUpdateDate: string;
  OrderStatus:
    | 'Pending'
    | 'Unshipped'
    | 'PartiallyShipped'
    | 'Shipped'
    | 'Canceled'
    | 'Unfulfillable'
    | 'InvoiceUnconfirmed'
    | 'PendingAvailability';
  FulfillmentChannel?: 'MFN' | 'AFN';
  SalesChannel?: string;
  OrderChannel?: string;
  ShipServiceLevel?: string;
  OrderTotal?: Money;
  NumberOfItemsShipped?: number;
  NumberOfItemsUnshipped?: number;
  PaymentExecutionDetail?: PaymentExecutionDetailItemList;
  PaymentMethod?: 'COD' | 'CVS' | 'Other';
  PaymentMethodDetails?: PaymentMethodDetailItemList;
  MarketplaceId?: string;
  ShipmentServiceLevelCategory?: string;
  EasyShipShipmentStatus?: EasyShipShipmentStatus;
  CbaDisplayableShippingLabel?: string;
  OrderType?:
    | 'StandardOrder'
    | 'LongLeadTimeOrder'
    | 'Preorder'
    | 'BackOrder'
    | 'SourcingOnDemandOrder';
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
  BuyerInvoicePreference?: 'INDIVIDUAL' | 'BUSINESS';
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
