import type { OrderItemsBuyerInfoList } from "./OrderItemsBuyerInfoList.js";
import type { ErrorList } from "./ErrorList.js";

export type GetOrderItemsBuyerInfoResponse = {
  payload?: OrderItemsBuyerInfoList;
  errors?: ErrorList;
};
