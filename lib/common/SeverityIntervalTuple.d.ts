import { Interval } from '../common/Interval';
import { SeverityTypeCode } from '../enums/SeverityTypeCode';
export declare class SeverityIntervalTuple {
    severity: SeverityTypeCode;
    interval: Interval;
    constructor(severity?: SeverityTypeCode, interval?: Interval);
}
