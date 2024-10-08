import type { AssociationType } from "./AssociationType.js";

export type AssociatedItem = {
  OrderId?: string;
  OrderItemId?: string;
  AssociationType?: AssociationType;
};
