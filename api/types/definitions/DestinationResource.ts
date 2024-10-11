import type { SqsResource } from './SqsResource.js';
import type { EventBridgeResource } from './EventBridgeResource.js';

export type DestinationResource = {
  sqs?: SqsResource;
  eventBridge?: EventBridgeResource;
};
