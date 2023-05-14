export declare enum AccountTypeCode {
    UNDEFINED = 0,
    DEMO = 1,
    TRIAL = 2,
    PARTNER = 3,
    CUSTOMER = 4
}
export declare function GetAccountTypeCodes(): Map<AccountTypeCode, string>;
