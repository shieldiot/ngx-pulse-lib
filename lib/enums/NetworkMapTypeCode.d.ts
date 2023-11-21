export declare enum NetworkMapTypeCode {
    UNDEFINED = 0,
    TOP_DEVICES = 1,
    TOP_MALICIOUS_IPS = 2,
    NETWORK = 3
}
export declare function GetNetworkMapTypeCodes(): Map<NetworkMapTypeCode, string>;
