import type { OrderItemBuyerInfoList } from "./OrderItemBuyerInfoList.js";

export type OrderItemsBuyerInfoList = {
  OrderItems: OrderItemBuyerInfoList;
  NextToken?: string;
  AmazonOrderId: string;
};
