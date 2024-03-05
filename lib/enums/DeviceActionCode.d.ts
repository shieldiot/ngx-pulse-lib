export declare enum DeviceActionCode {
    UNDEFINED = 0,
    REDIRECT = 1,
    SUSPEND = 2,
    THROTTLE = 3,
    BLOCK_IP = 4
}
export declare function GetDeviceActionCodes(): Map<DeviceActionCode, string>;
