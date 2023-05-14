export declare enum MemberRoleCode {
    UNDEFINED = 0,
    ADMIN = 1,
    OPERATOR = 2,
    VIEWER = 3
}
export declare function GetMemberRoleCodes(): Map<MemberRoleCode, string>;
