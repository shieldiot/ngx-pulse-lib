export declare enum RuleTypeCode {
    UNDEFINED = 0,
    SUSPICIOUS_IP = 1,
    STATIC = 2,
    ANOMALY = 3
}
export declare function GetRuleTypeCodes(): Map<RuleTypeCode, string>;
