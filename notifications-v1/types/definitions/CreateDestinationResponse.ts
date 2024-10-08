import type { Destination } from "./Destination.js";
import type { ErrorList } from "./ErrorList.js";

export type CreateDestinationResponse = {
  payload?: Destination;
  errors?: ErrorList;
};
