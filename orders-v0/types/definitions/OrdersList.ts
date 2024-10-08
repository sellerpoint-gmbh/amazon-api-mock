import type { OrderList } from "./OrderList.js";

export type OrdersList = {
  Orders: OrderList;
  NextToken?: string;
  LastUpdatedBefore?: string;
  CreatedBefore?: string;
};
