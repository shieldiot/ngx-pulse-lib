import { Location } from '../common';
import { DeviceTypeCode } from '../enums';
export declare class DeviceNode {
    deviceId: string;
    score: number;
    type: DeviceTypeCode;
    location: Location;
    constructor(deviceId?: string, score?: number, type?: DeviceTypeCode, location?: Location);
}
