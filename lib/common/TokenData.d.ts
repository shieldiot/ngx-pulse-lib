import { UserTypeCode } from '../enums';
import { MemberRoleCode } from '../enums';
import { UserStatusCode } from '../enums';
export declare class TokenData {
    accountId: string;
    subjectId: string;
    subjectType: UserTypeCode;
    role: MemberRoleCode;
    status: UserStatusCode;
    expiresIn: number;
    constructor(accountId?: string, subjectId?: string, subjectType?: UserTypeCode, role?: MemberRoleCode, status?: UserStatusCode, expiresIn?: number);
}
