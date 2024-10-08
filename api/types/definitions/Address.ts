import type { AddressExtendedFields } from "./AddressExtendedFields.js";

export type Address = {
  Name: string;
  CompanyName?: string;
  AddressLine1?: string;
  AddressLine2?: string;
  AddressLine3?: string;
  City?: string;
  County?: string;
  District?: string;
  StateOrRegion?: string;
  Municipality?: string;
  PostalCode?: string;
  CountryCode?: string;
  Phone?: string;
  ExtendedFields?: AddressExtendedFields;
  AddressType?: "Residential" | "Commercial";
};
