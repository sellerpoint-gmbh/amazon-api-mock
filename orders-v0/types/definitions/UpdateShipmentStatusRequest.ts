import type { MarketplaceId } from "./MarketplaceId.js";
import type { ShipmentStatus } from "./ShipmentStatus.js";
import type { OrderItems } from "./OrderItems.js";

export type UpdateShipmentStatusRequest = {
  marketplaceId: MarketplaceId;
  shipmentStatus: ShipmentStatus;
  orderItems?: OrderItems;
};
