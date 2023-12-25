import { AccountRole } from '../common/AccountRole';
import { BaseEntity } from '../entities/BaseEntity';
import { UserTypeCode } from '../enums/UserTypeCode';
import { UserStatusCode } from '../enums/UserStatusCode';
export declare class UserMemberships extends BaseEntity {
    name: string;
    email: string;
    mobile: string;
    type: UserTypeCode;
    status: UserStatusCode;
    defaultAccount: string;
    accountRoles: AccountRole[];
}
