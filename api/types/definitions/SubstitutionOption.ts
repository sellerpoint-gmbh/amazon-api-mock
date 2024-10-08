import type { Measurement } from "./Measurement.js";

export type SubstitutionOption = {
  ASIN?: string;
  QuantityOrdered?: number;
  SellerSKU?: string;
  Title?: string;
  Measurement?: Measurement;
};
