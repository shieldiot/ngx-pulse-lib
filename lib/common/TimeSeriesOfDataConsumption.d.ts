import { ConsumptionTimeDataPoint } from '../common';
import { TimeFrame } from '../common';
export declare class TimeSeriesOfDataConsumption {
    name: string;
    range: TimeFrame;
    values: ConsumptionTimeDataPoint[];
    constructor(name?: string, range?: TimeFrame, values?: ConsumptionTimeDataPoint[]);
}
