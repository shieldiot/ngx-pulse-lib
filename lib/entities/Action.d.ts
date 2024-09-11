import { BaseEntity } from '../base';
import { DeviceActionCode } from '../enums';
export declare class Action extends BaseEntity {
    accountId: string;
    streamId: string;
    eventId: string;
    deviceId: string;
    action: DeviceActionCode;
    userId: string;
}
