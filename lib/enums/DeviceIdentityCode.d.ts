export declare enum DeviceIdentityCode {
    UNDEFINED = 0,
    AUTO = 1,
    IP = 2,
    IMSI = 3,
    ICCID = 4,
    MSISDN = 5,
    IMEI = 6,
    MAC = 7
}
export declare function GetDeviceIdentityCodes(): Map<DeviceIdentityCode, string>;
