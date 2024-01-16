export declare enum TrafficDirectionCode {
    UNDEFINED = 0,
    INBOUND = 1,
    OUTBOUND = 2,
    INOUT = 3
}
export declare function GetTrafficDirectionCodes(): Map<TrafficDirectionCode, string>;
