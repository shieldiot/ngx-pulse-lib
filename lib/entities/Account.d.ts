import { AccountTypeCode } from '../enums/AccountTypeCode';
import { AccountStatusCode } from '../enums/AccountStatusCode';
import { StringKeyValue } from '../common/StringKeyValue';
import { AccountSettings } from '../entities/AccountSettings';
import { BaseEntity } from '../entities/BaseEntity';
export declare class Account extends BaseEntity {
    name: string;
    description: string;
    type: AccountTypeCode;
    status: AccountStatusCode;
    groups: string[];
    expiredOn: number;
    tags: string[];
    labels: StringKeyValue[];
    settings: AccountSettings;
}
