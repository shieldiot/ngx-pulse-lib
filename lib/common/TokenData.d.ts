import { UserTypeCode } from '../enums/UserTypeCode';
import { MemberRoleCode } from '../enums/MemberRoleCode';
import { UserStatusCode } from '../enums/UserStatusCode';
export declare class TokenData {
    accountId: string;
    subjectId: string;
    subjectType: UserTypeCode;
    role: MemberRoleCode;
    status: UserStatusCode;
    expiresIn: number;
    constructor(accountId?: string, subjectId?: string, subjectType?: UserTypeCode, role?: MemberRoleCode, status?: UserStatusCode, expiresIn?: number);
}
