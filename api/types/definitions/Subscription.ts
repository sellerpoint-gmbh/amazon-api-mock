import type { ProcessingDirective } from './ProcessingDirective.js';

export type Subscription = {
  subscriptionId: string;
  payloadVersion: string;
  destinationId: string;
  processingDirective?: ProcessingDirective;
};
