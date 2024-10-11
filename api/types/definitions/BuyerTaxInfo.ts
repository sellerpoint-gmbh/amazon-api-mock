import type { TaxClassification } from './TaxClassification.js';

export type BuyerTaxInfo = {
  CompanyLegalName?: string;
  TaxingRegion?: string;
  TaxClassifications?: Array<TaxClassification>;
};
