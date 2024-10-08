import type { HTTP_GET } from "../../../types/paths/notifications/v1/destinations.types.js";
import type { HTTP_POST } from "../../../types/paths/notifications/v1/destinations.types.js";

export const GET: HTTP_GET = ($) => {
  return $.response[200].random();
};

export const POST: HTTP_POST = ($) => {
  return $.response[200].random();
};
