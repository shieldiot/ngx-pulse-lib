import { DeviceIdentityCode } from '../enums';
import { DeviceTypeCode } from '../enums';
import { DeviceCreationCode } from '../enums';
export declare class DataIngestion {
    inputURI: string;
    format: string;
    archiveURI: string;
    inputFilesExt: string[];
    subNets: string[];
    exclude: string[];
    usageTimeWindowSec: number;
    sessionTimeWindowSec: number;
    schedule: string;
    defaultDeviceType: DeviceTypeCode;
    deviceCreationPolicy: DeviceCreationCode;
    deviceIdentityPolicy: DeviceIdentityCode;
    constructor(inputURI?: string, format?: string, archiveURI?: string, inputFilesExt?: string[], subNets?: string[], exclude?: string[], usageTimeWindowSec?: number, sessionTimeWindowSec?: number, schedule?: string, defaultDeviceType?: DeviceTypeCode, deviceCreationPolicy?: DeviceCreationCode, deviceIdentityPolicy?: DeviceIdentityCode);
}
