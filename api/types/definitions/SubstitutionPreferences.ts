import type { SubstitutionOptionList } from './SubstitutionOptionList.js';

export type SubstitutionPreferences = {
  SubstitutionType:
    | 'CUSTOMER_PREFERENCE'
    | 'AMAZON_RECOMMENDED'
    | 'DO_NOT_SUBSTITUTE';
  SubstitutionOptions?: SubstitutionOptionList;
};
