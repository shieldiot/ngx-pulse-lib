import { DataPointOfDeviceReport } from '../entities';
import { TimeFrame } from '../common';
export declare class TimeSeriesOfDeviceReport {
    name: string;
    range: TimeFrame;
    values: DataPointOfDeviceReport[];
    constructor(name?: string, range?: TimeFrame, values?: DataPointOfDeviceReport[]);
}
