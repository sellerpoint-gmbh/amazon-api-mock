import type { BusinessHours } from "./BusinessHours.js";
import type { ExceptionDates } from "./ExceptionDates.js";

export type PreferredDeliveryTime = {
  BusinessHours?: Array<BusinessHours>;
  ExceptionDates?: Array<ExceptionDates>;
};
