export declare enum DirectionContextCode {
    UNDEFINED = 0,
    EVENT_LIST = 1,
    DEVICE_LIST = 2,
    EVENT_DETAILS = 3,
    DEVICE_DETAILS = 4
}
export declare function GetDirectionContextCodes(): Map<DirectionContextCode, string>;
