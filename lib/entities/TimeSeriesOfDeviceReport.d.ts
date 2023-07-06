import { DataPointOfDeviceReport } from '../entities/DataPointOfDeviceReport';
import { TimeFrame } from '../common/TimeFrame';
export declare class TimeSeriesOfDeviceReport {
    name: string;
    range: TimeFrame;
    values: DataPointOfDeviceReport[];
    constructor(name?: string, range?: TimeFrame, values?: DataPointOfDeviceReport[]);
}
