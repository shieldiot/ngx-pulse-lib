import { MemberRoleCode } from '../enums';
import { BaseEntity } from '../base';
export declare class Member extends BaseEntity {
    userId: string;
    accountId: string;
    role: MemberRoleCode;
}
