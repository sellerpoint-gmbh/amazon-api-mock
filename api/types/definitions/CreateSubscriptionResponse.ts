import type { Subscription } from "./Subscription.js";
import type { ErrorList } from "./ErrorList.js";

export type CreateSubscriptionResponse = {
  payload?: Subscription;
  errors?: ErrorList;
};
