import { Interval } from '../common';
import { SeverityTypeCode } from '../enums';
export declare class SeverityIntervalTuple {
    severity: SeverityTypeCode;
    interval: Interval;
    constructor(severity?: SeverityTypeCode, interval?: Interval);
}
