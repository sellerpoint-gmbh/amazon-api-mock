import type { SqsResource } from './SqsResource.js';
import type { EventBridgeResourceSpecification } from './EventBridgeResourceSpecification.js';

export type DestinationResourceSpecification = {
  sqs?: SqsResource;
  eventBridge?: EventBridgeResourceSpecification;
};
