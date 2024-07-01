export declare enum MemberRoleCode {
    UNDEFINED = 0,
    ADMIN = 1,
    SUPERVISOR = 2,
    OPERATOR = 3,
    VIEWER = 4
}
export declare function GetMemberRoleCodes(): Map<MemberRoleCode, string>;
