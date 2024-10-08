import type { ConstraintType } from "./ConstraintType.js";

export type ShippingConstraints = {
  PalletDelivery?: ConstraintType;
  SignatureConfirmation?: ConstraintType;
  RecipientIdentityVerification?: ConstraintType;
  RecipientAgeVerification?: ConstraintType;
};
