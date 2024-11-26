import { SeverityTypeCode } from '../enums';
import { Interval } from '../common';
export declare class SeverityIntervalTuple {
    severity: SeverityTypeCode;
    interval: Interval;
    constructor(severity?: SeverityTypeCode, interval?: Interval);
}
