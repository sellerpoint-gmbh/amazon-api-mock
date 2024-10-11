import type { BuyerCustomizedInfoDetail } from './BuyerCustomizedInfoDetail.js';
import type { Money } from './Money.js';

export type OrderItemBuyerInfo = {
  OrderItemId: string;
  BuyerCustomizedInfo?: BuyerCustomizedInfoDetail;
  GiftWrapPrice?: Money;
  GiftWrapTax?: Money;
  GiftMessageText?: string;
  GiftWrapLevel?: string;
};
