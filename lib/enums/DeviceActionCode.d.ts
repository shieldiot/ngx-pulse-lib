export declare enum DeviceActionCode {
    UNDEFINED = 0,
    REDIRECT = 1,
    BLOCK = 2,
    THROTTLE = 3
}
export declare function GetDeviceActionCodes(): Map<DeviceActionCode, string>;
