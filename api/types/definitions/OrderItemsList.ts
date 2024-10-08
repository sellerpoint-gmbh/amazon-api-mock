import type { OrderItemList } from "./OrderItemList.js";

export type OrderItemsList = {
  OrderItems: OrderItemList;
  NextToken?: string;
  AmazonOrderId: string;
};
