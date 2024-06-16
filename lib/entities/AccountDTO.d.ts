import { AccountSettings } from '../entities/AccountSettings';
import { BaseEntity } from '../entities/BaseEntity';
import { AccountTypeCode } from '../enums/AccountTypeCode';
import { AccountStatusCode } from '../enums/AccountStatusCode';
import { FeatureCode } from '../enums/FeatureCode';
import { StringKeyValue } from '../common/StringKeyValue';
export declare class AccountDTO extends BaseEntity {
    name: string;
    externalId: string;
    description: string;
    type: AccountTypeCode;
    status: AccountStatusCode;
    groups: string[];
    features: FeatureCode[];
    expiredOn: number;
    tags: string[];
    labels: StringKeyValue[];
    settings: AccountSettings;
}
