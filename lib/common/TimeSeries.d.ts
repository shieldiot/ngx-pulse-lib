import { TimeDataPoint } from '../common/TimeDataPoint';
import { TimeFrame } from '../common/TimeFrame';
export declare class TimeSeries {
    name: string;
    range: TimeFrame;
    values: TimeDataPoint[];
    constructor(name?: string, range?: TimeFrame, values?: TimeDataPoint[]);
}
