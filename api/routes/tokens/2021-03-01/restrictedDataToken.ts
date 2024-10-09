import type { HTTP_POST } from "../../../types/paths/tokens/2021-03-01/restrictedDataToken.types.js";

export const POST: HTTP_POST = ($) => {
  return $.response[200].random();
};
