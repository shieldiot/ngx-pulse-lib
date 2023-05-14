import { TimeFrame } from '../common/TimeFrame';
import { TimeDataPoint } from '../common/TimeDataPoint';
export declare class TimeSeries {
    name: string;
    range: TimeFrame;
    values: TimeDataPoint[];
    constructor(name?: string, range?: TimeFrame, values?: TimeDataPoint[]);
}
