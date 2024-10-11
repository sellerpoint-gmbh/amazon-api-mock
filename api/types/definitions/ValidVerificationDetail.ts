import type { VerificationStatus } from './VerificationStatus.js';

export type ValidVerificationDetail = {
  VerificationDetailType: string;
  ValidVerificationStatuses: Array<VerificationStatus>;
};
