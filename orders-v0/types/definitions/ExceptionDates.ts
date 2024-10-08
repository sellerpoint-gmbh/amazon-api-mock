import type { OpenInterval } from "./OpenInterval.js";

export type ExceptionDates = {
  ExceptionDate?: string;
  IsOpen?: boolean;
  OpenIntervals?: Array<OpenInterval>;
};
