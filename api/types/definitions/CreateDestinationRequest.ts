import type { DestinationResourceSpecification } from "./DestinationResourceSpecification.js";

export type CreateDestinationRequest = {
  resourceSpecification: DestinationResourceSpecification;
  name: string;
};
