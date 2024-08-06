import { TimeFrame } from '../common';
import { TimeDataPointFloat } from '../common';
export declare class TimeSeriesOfFloat {
    name: string;
    range: TimeFrame;
    values: TimeDataPointFloat[];
    constructor(name?: string, range?: TimeFrame, values?: TimeDataPointFloat[]);
}
