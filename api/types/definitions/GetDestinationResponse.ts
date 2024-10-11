import type { Destination } from './Destination.js';
import type { ErrorList } from './ErrorList.js';

export type GetDestinationResponse = {
  payload?: Destination;
  errors?: ErrorList;
};
