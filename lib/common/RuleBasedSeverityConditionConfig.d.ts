import { SeverityTypeCode } from '../enums';
import { RuleCountThresholdConfig } from '../common';
export declare class RuleBasedSeverityConditionConfig {
    severityType: SeverityTypeCode;
    bias: number;
    ruleCountThresholdConfigs: RuleCountThresholdConfig[];
    ruleTypesThreshold: number;
    constructor(severityType?: SeverityTypeCode, bias?: number, ruleCountThresholdConfigs?: RuleCountThresholdConfig[], ruleTypesThreshold?: number);
}
