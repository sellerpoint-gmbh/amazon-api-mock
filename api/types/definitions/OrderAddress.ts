import type { Address } from './Address.js';
import type { DeliveryPreferences } from './DeliveryPreferences.js';

export type OrderAddress = {
  AmazonOrderId: string;
  BuyerCompanyName?: string;
  ShippingAddress?: Address;
  DeliveryPreferences?: DeliveryPreferences;
};
