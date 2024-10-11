import type { PackageReferenceId } from './PackageReferenceId.js';
import type { ConfirmShipmentOrderItemsList } from './ConfirmShipmentOrderItemsList.js';

export type PackageDetail = {
  packageReferenceId: PackageReferenceId;
  carrierCode: string;
  carrierName?: string;
  shippingMethod?: string;
  trackingNumber: string;
  shipDate: string;
  shipFromSupplySourceId?: string;
  orderItems: ConfirmShipmentOrderItemsList;
};
