export declare enum DeviceCreationCode {
    UNDEFINED = 0,
    NONE = 1,
    IP = 2,
    SID = 3,
    EID = 4
}
export declare function GetDeviceCreationCodes(): Map<DeviceCreationCode, string>;
