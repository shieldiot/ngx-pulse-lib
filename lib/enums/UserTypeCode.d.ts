export declare enum UserTypeCode {
    UNDEFINED = 0,
    SYSADMIN = 1,
    SUPPORT = 2,
    USER = 3,
    SERVICE = 4
}
export declare function GetUserTypeCodes(): Map<UserTypeCode, string>;
