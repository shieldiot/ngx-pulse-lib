import { UserStatusCode } from '../enums';
import { StringKeyValue } from '../common';
import { BaseEntity } from '../base';
import { UserTypeCode } from '../enums';
export declare class User extends BaseEntity {
    name: string;
    externalId: string;
    email: string;
    mobile: string;
    type: UserTypeCode;
    status: UserStatusCode;
    defaultAccount: string;
    lastSignIn: number;
    labels: StringKeyValue[];
    groups: string;
}
