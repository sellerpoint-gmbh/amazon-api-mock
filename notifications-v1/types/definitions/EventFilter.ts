import type { AggregationFilter } from "./AggregationFilter.js";
import type { MarketplaceFilter } from "./MarketplaceFilter.js";
import type { OrderChangeTypeFilter } from "./OrderChangeTypeFilter.js";

export type EventFilter = AggregationFilter &
  MarketplaceFilter &
  OrderChangeTypeFilter & {
    eventFilterType: "ANY_OFFER_CHANGED" | "ORDER_CHANGE";
  };
