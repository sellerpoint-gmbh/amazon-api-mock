import type { Money } from "./Money.js";

export type PaymentExecutionDetailItem = {
  Payment: Money;
  PaymentMethod: string;
};
