import type { TransparencyCodeList } from "./TransparencyCodeList.js";

export type ConfirmShipmentOrderItem = {
  orderItemId: string;
  quantity: number;
  transparencyCodes?: TransparencyCodeList;
};
