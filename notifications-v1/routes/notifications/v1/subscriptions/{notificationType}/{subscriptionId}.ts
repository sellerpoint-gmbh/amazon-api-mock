import type { HTTP_GET } from "../../../../../types/paths/notifications/v1/subscriptions/{notificationType}/{subscriptionId}.types.js";
import type { HTTP_DELETE } from "../../../../../types/paths/notifications/v1/subscriptions/{notificationType}/{subscriptionId}.types.js";

export const GET: HTTP_GET = ($) => {
  return $.response[200].random();
};

export const DELETE: HTTP_DELETE = ($) => {
  return $.response[200].random();
};
