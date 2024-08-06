import { AccountSettings } from '../entities';
import { BaseEntity } from '../base';
import { AccountTypeCode } from '../enums';
import { AccountStatusCode } from '../enums';
import { FeatureCode } from '../enums';
import { StringKeyValue } from '../common';
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
