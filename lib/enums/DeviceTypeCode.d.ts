export declare enum DeviceTypeCode {
    UNDEFINED = 0,
    OTHER = 1,
    CONTROLLER = 2,
    METER = 3,
    SENSOR = 4,
    CAMERA = 5,
    POS = 6,
    PUMP = 7,
    CHARGING_STATION = 8,
    LIGHTNING = 9,
    TEMPERATURE_SENSOR = 10,
    AIR_QUALITY_SENSOR = 11,
    VALVE = 12,
    GATEWAY = 13
}
export declare function GetDeviceTypeCodes(): Map<DeviceTypeCode, string>;
