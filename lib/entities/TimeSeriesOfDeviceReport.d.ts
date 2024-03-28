import { TimeFrame } from '../common/TimeFrame';
import { DataPointOfDeviceReport } from '../entities/DataPointOfDeviceReport';
export declare class TimeSeriesOfDeviceReport {
    name: string;
    range: TimeFrame;
    values: DataPointOfDeviceReport[];
    constructor(name?: string, range?: TimeFrame, values?: DataPointOfDeviceReport[]);
}
