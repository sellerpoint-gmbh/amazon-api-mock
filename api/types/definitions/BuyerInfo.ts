import type { BuyerTaxInfo } from './BuyerTaxInfo.js';

export type BuyerInfo = {
  BuyerEmail?: string;
  BuyerName?: string;
  BuyerCounty?: string;
  BuyerTaxInfo?: BuyerTaxInfo;
  PurchaseOrderNumber?: string;
};
