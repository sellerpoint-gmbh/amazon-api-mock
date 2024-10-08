import type { HTTP_GET } from "../../../../../types/paths/orders/v0/orders/{orderId}/regulatedInfo.types.js";
import type { HTTP_PATCH } from "../../../../../types/paths/orders/v0/orders/{orderId}/regulatedInfo.types.js";

export const GET: HTTP_GET = ($) => {
  return $.response[200].random();
};

export const PATCH: HTTP_PATCH = ($) => {
  return $.response[204];
};
