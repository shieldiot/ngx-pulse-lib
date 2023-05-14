export declare enum AccountStatusCode {
    UNDEFINED = 0,
    ACTIVE = 1,
    SUSPENDED = 2,
    DELETED = 3
}
export declare function GetAccountStatusCodes(): Map<AccountStatusCode, string>;
