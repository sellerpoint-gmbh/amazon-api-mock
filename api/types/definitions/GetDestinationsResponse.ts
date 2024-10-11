import type { DestinationList } from './DestinationList.js';
import type { ErrorList } from './ErrorList.js';

export type GetDestinationsResponse = {
  payload?: DestinationList;
  errors?: ErrorList;
};
