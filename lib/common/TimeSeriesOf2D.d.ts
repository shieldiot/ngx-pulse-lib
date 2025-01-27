import { TimeDataPoint2D } from '../common';
import { TimeFrame } from '../common';
export declare class TimeSeriesOf2D {
    name: string;
    range: TimeFrame;
    values: TimeDataPoint2D[];
    constructor(name?: string, range?: TimeFrame, values?: TimeDataPoint2D[]);
}
