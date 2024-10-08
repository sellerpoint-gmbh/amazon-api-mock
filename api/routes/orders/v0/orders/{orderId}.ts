import type { HTTP_GET } from "../../../../types/paths/orders/v0/orders/{orderId}.types.js";

export const GET: HTTP_GET = ($) => {
  return $.response[200].random();
};
