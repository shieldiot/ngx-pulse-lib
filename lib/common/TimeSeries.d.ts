import { TimeDataPoint } from '../common';
import { TimeFrame } from '../common';
export declare class TimeSeries {
    name: string;
    range: TimeFrame;
    values: TimeDataPoint[];
    constructor(name?: string, range?: TimeFrame, values?: TimeDataPoint[]);
}
