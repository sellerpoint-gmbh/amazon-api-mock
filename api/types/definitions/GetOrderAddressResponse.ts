import type { OrderAddress } from './OrderAddress.js';
import type { ErrorList } from './ErrorList.js';

export type GetOrderAddressResponse = {
  payload?: OrderAddress;
  errors?: ErrorList;
};
