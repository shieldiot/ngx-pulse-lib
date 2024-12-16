import { DeviceTypeCode } from '../enums';
import { Location } from '../common';
export declare class DeviceNode {
    deviceId: string;
    score: number;
    type: DeviceTypeCode;
    location: Location;
    constructor(deviceId?: string, score?: number, type?: DeviceTypeCode, location?: Location);
}
