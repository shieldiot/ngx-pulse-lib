export declare enum DeviceIdentityCode {
    UNDEFINED = 0,
    AUTO = 1,
    IP = 2,
    SID = 3,
    EID = 4,
    MAC = 5
}
export declare function GetDeviceIdentityCodes(): Map<DeviceIdentityCode, string>;
