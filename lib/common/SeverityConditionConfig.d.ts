import { SeverityTypeCode } from '../enums';
import { Interval } from '../common';
export declare class SeverityConditionConfig {
    conditionSeverity: SeverityTypeCode;
    sevs: SeverityTypeCode[];
    countTH: number;
    severityFactor: number;
    severityRange: Interval;
    constructor(conditionSeverity?: SeverityTypeCode, sevs?: SeverityTypeCode[], countTH?: number, severityFactor?: number, severityRange?: Interval);
}
