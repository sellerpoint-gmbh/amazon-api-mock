import type { OpenInterval } from './OpenInterval.js';

export type BusinessHours = {
  DayOfWeek?: 'SUN' | 'MON' | 'TUE' | 'WED' | 'THU' | 'FRI' | 'SAT';
  OpenIntervals?: Array<OpenInterval>;
};
