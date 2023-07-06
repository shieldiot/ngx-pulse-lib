import { DeviceTypeCode } from '../enums/DeviceTypeCode';
import { DeviceCreationCode } from '../enums/DeviceCreationCode';
export declare class DataIngestion {
    inputURI: string;
    archiveURI: string;
    inputFilesExt: string[];
    subNets: string[];
    usageTimeWindowSec: number;
    sessionTimeWindowSec: number;
    schedule: string;
    defaultDeviceType: DeviceTypeCode;
    deviceCreationPolicy: DeviceCreationCode;
    constructor(inputURI?: string, archiveURI?: string, inputFilesExt?: string[], subNets?: string[], usageTimeWindowSec?: number, sessionTimeWindowSec?: number, schedule?: string, defaultDeviceType?: DeviceTypeCode, deviceCreationPolicy?: DeviceCreationCode);
}
