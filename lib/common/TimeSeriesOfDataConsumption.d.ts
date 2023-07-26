import { TimeFrame } from '../common/TimeFrame';
import { ConsumptionTimeDataPoint } from '../common/ConsumptionTimeDataPoint';
export declare class TimeSeriesOfDataConsumption {
    name: string;
    range: TimeFrame;
    values: ConsumptionTimeDataPoint[];
    constructor(name?: string, range?: TimeFrame, values?: ConsumptionTimeDataPoint[]);
}
