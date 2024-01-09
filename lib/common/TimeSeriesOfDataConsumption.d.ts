import { ConsumptionTimeDataPoint } from '../common/ConsumptionTimeDataPoint';
import { TimeFrame } from '../common/TimeFrame';
export declare class TimeSeriesOfDataConsumption {
    name: string;
    range: TimeFrame;
    values: ConsumptionTimeDataPoint[];
    constructor(name?: string, range?: TimeFrame, values?: ConsumptionTimeDataPoint[]);
}
