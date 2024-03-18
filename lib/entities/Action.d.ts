import { DeviceActionCode } from '../enums/DeviceActionCode';
import { BaseEntity } from '../entities/BaseEntity';
export declare class Action extends BaseEntity {
    accountId: string;
    streamId: string;
    eventId: string;
    deviceId: string;
    action: DeviceActionCode;
    userId: string;
}
