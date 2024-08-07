import { AccountRole } from '../common';
import { BaseEntity } from '../base';
import { UserTypeCode } from '../enums';
import { UserStatusCode } from '../enums';
export declare class UserMembership extends BaseEntity {
    name: string;
    email: string;
    mobile: string;
    type: UserTypeCode;
    status: UserStatusCode;
    defaultAccount: string;
    lastSignIn: number;
    accountRole: AccountRole;
}
