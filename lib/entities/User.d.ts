import { UserStatusCode } from '../enums/UserStatusCode';
import { StringKeyValue } from '../common/StringKeyValue';
import { BaseEntity } from '../entities/BaseEntity';
import { UserTypeCode } from '../enums/UserTypeCode';
export declare class User extends BaseEntity {
    name: string;
    email: string;
    mobile: string;
    type: UserTypeCode;
    status: UserStatusCode;
    defaultAccount: string;
    lastSignIn: number;
    labels: StringKeyValue[];
}
