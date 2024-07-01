import { SeverityTypeCode } from '../enums/SeverityTypeCode';
import { Interval } from '../common/Interval';
export declare class SeverityIntervalTuple {
    severity: SeverityTypeCode;
    interval: Interval;
    constructor(severity?: SeverityTypeCode, interval?: Interval);
}
