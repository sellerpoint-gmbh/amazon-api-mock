import type { RestrictedResource } from './RestrictedResource.js';

export type CreateRestrictedDataTokenRequest = {
  targetApplication?: string;
  restrictedResources: Array<RestrictedResource>;
};
