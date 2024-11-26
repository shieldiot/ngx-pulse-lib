import { BaseEntity } from '../base';
import { MemberRoleCode } from '../enums';
export declare class Member extends BaseEntity {
    userId: string;
    accountId: string;
    role: MemberRoleCode;
}
