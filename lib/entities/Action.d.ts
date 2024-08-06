import { DeviceActionCode } from '../enums';
import { BaseEntity } from '../base';
export declare class Action extends BaseEntity {
    accountId: string;
    streamId: string;
    eventId: string;
    deviceId: string;
    action: DeviceActionCode;
    userId: string;
}
