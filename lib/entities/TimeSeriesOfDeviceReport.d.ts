import { TimeFrame } from '../common';
import { DataPointOfDeviceReport } from '../entities';
export declare class TimeSeriesOfDeviceReport {
    name: string;
    range: TimeFrame;
    values: DataPointOfDeviceReport[];
    constructor(name?: string, range?: TimeFrame, values?: DataPointOfDeviceReport[]);
}
