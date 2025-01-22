export declare enum FeatureCode {
    UNDEFINED = 0,
    EVENTS_EXPORT = 1,
    EVENT_SOURCE_FILES = 2,
    EVENT_ACTION = 3,
    DEVICES_EXPORT = 4,
    DEVICE_NETWORK_MAP = 5,
    DEVICE_ACTIONS = 6,
    NETWORK_MAP = 7,
    COMPLIANCE_REPORTS = 8,
    CUSTOM_RULES = 9,
    INTEGRATIONS = 10,
    ACTIVE_DEVICES = 11
}
export declare function GetFeatureCodes(): Map<FeatureCode, string>;
