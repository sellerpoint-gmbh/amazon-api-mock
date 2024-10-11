import type { OrderRegulatedInfo } from './OrderRegulatedInfo.js';
import type { ErrorList } from './ErrorList.js';

export type GetOrderRegulatedInfoResponse = {
  payload?: OrderRegulatedInfo;
  errors?: ErrorList;
};
