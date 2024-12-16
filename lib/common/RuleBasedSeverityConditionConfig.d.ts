import { RuleCountThresholdConfig } from '../common';
import { SeverityTypeCode } from '../enums';
export declare class RuleBasedSeverityConditionConfig {
    severityType: SeverityTypeCode;
    bias: number;
    ruleConditionThresholdConfig: RuleCountThresholdConfig[];
    ruleTypesThreshold: number;
    constructor(severityType?: SeverityTypeCode, bias?: number, ruleConditionThresholdConfig?: RuleCountThresholdConfig[], ruleTypesThreshold?: number);
}
