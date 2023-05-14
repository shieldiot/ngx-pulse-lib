export declare enum DeviceStatusCode {
    UNDEFINED = 0,
    PENDING = 1,
    ACTIVE = 2,
    INACTIVE = 3,
    BLOCKED = 4
}
export declare function GetDeviceStatusCodes(): Map<DeviceStatusCode, string>;
