import { BaseEntity } from '../entities/BaseEntity';
import { MemberRoleCode } from '../enums/MemberRoleCode';
export declare class Member extends BaseEntity {
    userId: string;
    accountId: string;
    role: MemberRoleCode;
}
