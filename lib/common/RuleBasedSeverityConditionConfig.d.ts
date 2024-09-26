import { RuleCountThresholdConfig } from '../common';
import { SeverityTypeCode } from '../enums';
export declare class RuleBasedSeverityConditionConfig {
    severityType: SeverityTypeCode;
    bias: number;
    ruleCountThresholdConfigs: RuleCountThresholdConfig[];
    ruleTypesThreshold: number;
    constructor(severityType?: SeverityTypeCode, bias?: number, ruleCountThresholdConfigs?: RuleCountThresholdConfig[], ruleTypesThreshold?: number);
}
