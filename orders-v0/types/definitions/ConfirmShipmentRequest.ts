import type { PackageDetail } from "./PackageDetail.js";
import type { MarketplaceId } from "./MarketplaceId.js";

export type ConfirmShipmentRequest = {
  packageDetail: PackageDetail;
  codCollectionMethod?: "DirectPayment";
  marketplaceId: MarketplaceId;
};
