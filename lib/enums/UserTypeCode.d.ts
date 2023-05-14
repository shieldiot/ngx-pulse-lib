export declare enum UserTypeCode {
    UNDEFINED = 0,
    SYSADMIN = 1,
    SUPPORT = 2,
    USER = 4,
    SERVICE = 5
}
export declare function GetUserTypeCodes(): Map<UserTypeCode, string>;
