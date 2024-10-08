import type { RegulatedInformation } from "./RegulatedInformation.js";
import type { RegulatedOrderVerificationStatus } from "./RegulatedOrderVerificationStatus.js";

export type OrderRegulatedInfo = {
  AmazonOrderId: string;
  RegulatedInformation: RegulatedInformation;
  RequiresDosageLabel: boolean;
  RegulatedOrderVerificationStatus: RegulatedOrderVerificationStatus;
};
