import { UserTypeCode } from '../enums/UserTypeCode';
import { UserStatusCode } from '../enums/UserStatusCode';
import { AccountRole } from '../common/AccountRole';
import { BaseEntity } from '../entities/BaseEntity';
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
