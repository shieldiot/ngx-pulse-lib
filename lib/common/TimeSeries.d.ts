import { TimeFrame } from '../common';
import { TimeDataPoint } from '../common';
export declare class TimeSeries {
    name: string;
    range: TimeFrame;
    values: TimeDataPoint[];
    constructor(name?: string, range?: TimeFrame, values?: TimeDataPoint[]);
}
