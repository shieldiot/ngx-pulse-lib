import { TimeFrame } from '../common/TimeFrame';
import { TimeDataPoint2D } from '../common/TimeDataPoint2D';
export declare class TimeSeriesOf2D {
    name: string;
    range: TimeFrame;
    values: TimeDataPoint2D[];
    constructor(name?: string, range?: TimeFrame, values?: TimeDataPoint2D[]);
}
