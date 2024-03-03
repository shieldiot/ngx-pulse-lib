import { FeatureCode } from '../enums/FeatureCode';
import { AccountSettings } from '../entities/AccountSettings';
import { BaseEntity } from '../entities/BaseEntity';
import { AccountTypeCode } from '../enums/AccountTypeCode';
import { AccountStatusCode } from '../enums/AccountStatusCode';
export declare class AccountDTO extends BaseEntity {
    name: string;
    description: string;
    type: AccountTypeCode;
    status: AccountStatusCode;
    groups: string[];
    features: FeatureCode[];
    expiredOn: number;
    settings: AccountSettings;
}
