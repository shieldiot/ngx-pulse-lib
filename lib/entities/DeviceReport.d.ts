import { BaseEntity } from '../base';
export declare class DeviceReport extends BaseEntity {
    accountId: string;
    streamId: string;
    totalDevices: number;
    activeDevices: number;
    devicesAtRisk: number;
    affectedDevices: number;
}
