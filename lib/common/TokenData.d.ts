import { MemberRoleCode } from '../enums/MemberRoleCode';
import { UserStatusCode } from '../enums/UserStatusCode';
import { UserTypeCode } from '../enums/UserTypeCode';
export declare class TokenData {
    accountId: string;
    subjectId: string;
    subjectType: UserTypeCode;
    role: MemberRoleCode;
    status: UserStatusCode;
    expiresIn: number;
    constructor(accountId?: string, subjectId?: string, subjectType?: UserTypeCode, role?: MemberRoleCode, status?: UserStatusCode, expiresIn?: number);
}
