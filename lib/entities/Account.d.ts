import { StringKeyValue } from '../common';
import { AccountSettings } from '../entities';
import { BaseEntity } from '../base';
import { AccountTypeCode } from '../enums';
import { AccountStatusCode } from '../enums';
export declare class Account extends BaseEntity {
    name: string;
    externalId: string;
    description: string;
    type: AccountTypeCode;
    status: AccountStatusCode;
    groups: string[];
    expiredOn: number;
    tags: string[];
    labels: StringKeyValue[];
    settings: AccountSettings;
}
