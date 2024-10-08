import type { OrderBuyerInfo } from "./OrderBuyerInfo.js";
import type { ErrorList } from "./ErrorList.js";

export type GetOrderBuyerInfoResponse = {
  payload?: OrderBuyerInfo;
  errors?: ErrorList;
};
