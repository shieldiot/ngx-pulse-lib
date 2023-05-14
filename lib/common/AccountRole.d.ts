import { MemberRoleCode } from '../enums/MemberRoleCode';
export declare class AccountRole {
    accountId: string;
    accountName: string;
    role: MemberRoleCode;
    constructor(accountId?: string, accountName?: string, role?: MemberRoleCode);
}
