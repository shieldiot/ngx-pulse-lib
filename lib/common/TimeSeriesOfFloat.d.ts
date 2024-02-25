import { TimeFrame } from '../common/TimeFrame';
import { TimeDataPointFloat } from '../common/TimeDataPointFloat';
export declare class TimeSeriesOfFloat {
    name: string;
    range: TimeFrame;
    values: TimeDataPointFloat[];
    constructor(name?: string, range?: TimeFrame, values?: TimeDataPointFloat[]);
}
