import { TimeFrame } from '../common';
import { ConsumptionTimeDataPoint } from '../common';
export declare class TimeSeriesOfDataConsumption {
    name: string;
    range: TimeFrame;
    values: ConsumptionTimeDataPoint[];
    constructor(name?: string, range?: TimeFrame, values?: ConsumptionTimeDataPoint[]);
}
