import { TimeDataPointFloat } from '../common';
import { TimeFrame } from '../common';
export declare class TimeSeriesOfFloat {
    name: string;
    range: TimeFrame;
    values: TimeDataPointFloat[];
    constructor(name?: string, range?: TimeFrame, values?: TimeDataPointFloat[]);
}
