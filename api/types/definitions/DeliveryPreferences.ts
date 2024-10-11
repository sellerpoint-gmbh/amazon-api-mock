import type { PreferredDeliveryTime } from './PreferredDeliveryTime.js';
import type { OtherDeliveryAttributes } from './OtherDeliveryAttributes.js';

export type DeliveryPreferences = {
  DropOffLocation?: string;
  PreferredDeliveryTime?: PreferredDeliveryTime;
  OtherAttributes?: Array<OtherDeliveryAttributes>;
  AddressInstructions?: string;
};
