import type { DestinationResource } from "./DestinationResource.js";

export type Destination = {
  name: string;
  destinationId: string;
  resource: DestinationResource;
};
