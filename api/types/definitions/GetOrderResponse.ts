import type { Order } from './Order.js';
import type { ErrorList } from './ErrorList.js';

export type GetOrderResponse = { payload?: Order; errors?: ErrorList };
