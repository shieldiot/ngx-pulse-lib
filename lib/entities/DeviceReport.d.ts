import { BaseEntity } from '../entities/BaseEntity';
export declare class DeviceReport extends BaseEntity {
    accountId: string;
    streamId: string;
    totalDevices: number;
    activeDevices: number;
}
