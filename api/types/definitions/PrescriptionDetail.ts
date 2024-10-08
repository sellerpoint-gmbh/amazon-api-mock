export type PrescriptionDetail = {
  prescriptionId: string;
  expirationDate: string;
  writtenQuantity: number;
  totalRefillsAuthorized: number;
  refillsRemaining: number;
  clinicId: string;
  usageInstructions: string;
};
