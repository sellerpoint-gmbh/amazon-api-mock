import type { VerificationStatus } from "./VerificationStatus.js";
import type { VerificationDetails } from "./VerificationDetails.js";

export type UpdateVerificationStatusRequestBody = {
  status?: VerificationStatus;
  externalReviewerId: string;
  rejectionReasonId?: string;
  verificationDetails?: VerificationDetails;
};
