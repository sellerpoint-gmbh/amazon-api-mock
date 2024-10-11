import type { BuyerTaxInfo } from './BuyerTaxInfo.js';

export type OrderBuyerInfo = {
  AmazonOrderId: string;
  BuyerEmail?: string;
  BuyerName?: string;
  BuyerCounty?: string;
  BuyerTaxInfo?: BuyerTaxInfo;
  PurchaseOrderNumber?: string;
};
