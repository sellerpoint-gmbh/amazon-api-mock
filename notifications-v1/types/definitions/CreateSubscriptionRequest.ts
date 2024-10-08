import type { ProcessingDirective } from "./ProcessingDirective.js";

export type CreateSubscriptionRequest = {
  payloadVersion: string;
  destinationId: string;
  processingDirective?: ProcessingDirective;
};
