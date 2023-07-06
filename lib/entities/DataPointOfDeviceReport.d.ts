import { DeviceReport } from '../entities/DeviceReport';
export declare class DataPointOfDeviceReport {
    timestamp: number;
    value: DeviceReport[];
    constructor(timestamp?: number, value?: DeviceReport[]);
}
