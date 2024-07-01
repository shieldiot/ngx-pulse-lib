import { BaseEntity } from '../entities/BaseEntity';
import { DeviceActionCode } from '../enums/DeviceActionCode';
export declare class Action extends BaseEntity {
    accountId: string;
    streamId: string;
    eventId: string;
    deviceId: string;
    action: DeviceActionCode;
    userId: string;
}
