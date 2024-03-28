import { MemberRoleCode } from '../enums/MemberRoleCode';
import { BaseEntity } from '../entities/BaseEntity';
export declare class Member extends BaseEntity {
    userId: string;
    accountId: string;
    role: MemberRoleCode;
}
