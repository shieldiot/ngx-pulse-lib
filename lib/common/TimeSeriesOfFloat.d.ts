import { TimeDataPointFloat } from '../common/TimeDataPointFloat';
import { TimeFrame } from '../common/TimeFrame';
export declare class TimeSeriesOfFloat {
    name: string;
    range: TimeFrame;
    values: TimeDataPointFloat[];
    constructor(name?: string, range?: TimeFrame, values?: TimeDataPointFloat[]);
}
