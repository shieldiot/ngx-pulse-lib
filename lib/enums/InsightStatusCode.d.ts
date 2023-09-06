export declare enum InsightStatusCode {
    UNDEFINED = 0,
    INACTIVE = 1,
    PENDING = 2,
    ACTIVE = 3
}
export declare function GetInsightStatusCodes(): Map<InsightStatusCode, string>;
