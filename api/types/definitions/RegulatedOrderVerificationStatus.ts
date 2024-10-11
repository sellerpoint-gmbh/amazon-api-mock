import type { VerificationStatus } from './VerificationStatus.js';
import type { RejectionReason } from './RejectionReason.js';
import type { ValidVerificationDetail } from './ValidVerificationDetail.js';

export type RegulatedOrderVerificationStatus = {
  Status: VerificationStatus;
  RequiresMerchantAction: boolean;
  ValidRejectionReasons: Array<RejectionReason>;
  RejectionReason?: RejectionReason;
  ReviewDate?: string;
  ExternalReviewerId?: string;
  ValidVerificationDetails?: Array<ValidVerificationDetail>;
};
