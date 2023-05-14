export declare enum UserStatusCode {
    UNDEFINED = 0,
    PENDING = 1,
    ACTIVE = 2,
    BLOCKED = 3,
    SUSPENDED = 4
}
export declare function GetUserStatusCodes(): Map<UserStatusCode, string>;
