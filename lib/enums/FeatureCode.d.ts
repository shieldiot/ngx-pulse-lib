export declare enum FeatureCode {
    UNDEFINED = 0,
    NETWORK_MAP_VIEW = 1,
    NETWORK_MAP_MODULE = 2,
    HOME_PAGE_V2 = 3,
    COMPLIANCE_REPORT = 4
}
export declare function GetFeatureCodes(): Map<FeatureCode, string>;
