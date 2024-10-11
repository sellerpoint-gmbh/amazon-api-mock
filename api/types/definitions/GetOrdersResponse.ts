import type { OrdersList } from './OrdersList.js';
import type { ErrorList } from './ErrorList.js';

export type GetOrdersResponse = { payload?: OrdersList; errors?: ErrorList };
