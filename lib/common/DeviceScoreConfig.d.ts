import { Interval } from '../common';
import { SeverityConditionConfig } from '../common';
import { RuleCountThresholdConfig } from '../common';
import { RuleBasedSeverityConditionConfig } from '../common';
export declare class DeviceScoreConfig {
    deviceScoreAlphaFactor: number;
    occurrenceThreshold: number;
    ruleCountThreshold: number;
    lowWeightAlphaFactor: number;
    mediumWeightAlphaFactor: number;
    highWeightAlphaFactor: number;
    highVolumeWeightAlphaFactor: number;
    abnormalOutPortsAlphaFactor: number;
    abnormalOutEndpointsAlphaFactor: number;
    suspiciousIpAlphaFactor: number;
    defaultSeverityRange: Interval;
    defaultSeverityFactor: number;
    severityConditionConfigs: SeverityConditionConfig[];
    ruleCountThresholdConfigs: RuleCountThresholdConfig[];
    ruleBasedSeverityConditionConfigs: RuleBasedSeverityConditionConfig[];
    isSeverityBased: boolean;
    isAlertBased: boolean;
    constructor(deviceScoreAlphaFactor?: number, occurrenceThreshold?: number, ruleCountThreshold?: number, lowWeightAlphaFactor?: number, mediumWeightAlphaFactor?: number, highWeightAlphaFactor?: number, highVolumeWeightAlphaFactor?: number, abnormalOutPortsAlphaFactor?: number, abnormalOutEndpointsAlphaFactor?: number, suspiciousIpAlphaFactor?: number, defaultSeverityRange?: Interval, defaultSeverityFactor?: number, severityConditionConfigs?: SeverityConditionConfig[], ruleCountThresholdConfigs?: RuleCountThresholdConfig[], ruleBasedSeverityConditionConfigs?: RuleBasedSeverityConditionConfig[], isSeverityBased?: boolean, isAlertBased?: boolean);
}
