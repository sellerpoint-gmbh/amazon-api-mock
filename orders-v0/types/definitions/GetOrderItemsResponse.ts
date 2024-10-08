import type { OrderItemsList } from "./OrderItemsList.js";
import type { ErrorList } from "./ErrorList.js";

export type GetOrderItemsResponse = {
  payload?: OrderItemsList;
  errors?: ErrorList;
};
