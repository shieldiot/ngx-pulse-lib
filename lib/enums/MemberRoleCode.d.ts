export declare enum MemberRoleCode {
    UNDEFINED = 0,
    ADMIN = 1,
    OPERATOR = 2,
    VIEWER = 3,
    REGULATORY = 4
}
export declare function GetMemberRoleCodes(): Map<MemberRoleCode, string>;
