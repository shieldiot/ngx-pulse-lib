import { Interval } from '../common';
import { SeverityTypeCode } from '../enums';
export declare class SeverityConditionConfig {
    conditionSeverity: SeverityTypeCode;
    sevs: SeverityTypeCode[];
    countTH: number;
    severityFactor: number;
    severityRange: Interval;
    constructor(conditionSeverity?: SeverityTypeCode, sevs?: SeverityTypeCode[], countTH?: number, severityFactor?: number, severityRange?: Interval);
}
