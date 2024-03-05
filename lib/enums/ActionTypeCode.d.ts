export declare enum ActionTypeCode {
    UNDEFINED = 0,
    SUSPEND = 1,
    REDIRECT = 2,
    THROTTLE = 3,
    BLOCK_IP = 4
}
export declare function GetActionTypeCodes(): Map<ActionTypeCode, string>;
