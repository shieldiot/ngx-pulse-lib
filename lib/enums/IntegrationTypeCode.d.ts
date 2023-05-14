export declare enum IntegrationTypeCode {
    UNDEFINED = 0,
    HTTP = 1,
    SMTP = 2,
    EMAIL = 3,
    SMS = 4
}
export declare function GetIntegrationTypeCodes(): Map<IntegrationTypeCode, string>;
