import { BaseEntity } from '../entities/BaseEntity';
import { UserTypeCode } from '../enums/UserTypeCode';
import { UserStatusCode } from '../enums/UserStatusCode';
import { StringKeyValue } from '../common/StringKeyValue';
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
}
