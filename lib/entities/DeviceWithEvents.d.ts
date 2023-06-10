import { Event } from '../entities/Event';
import { BaseEntity } from '../entities/BaseEntity';
import { DeviceTypeCode } from '../enums/DeviceTypeCode';
import { DeviceStatusCode } from '../enums/DeviceStatusCode';
import { StringKeyValue } from '../common/StringKeyValue';
import { DeviceActionCode } from '../enums/DeviceActionCode';
export declare class DeviceWithEvents extends BaseEntity {
    accountId: string;
    streamId: string;
    name: string;
    description: string;
    type: DeviceTypeCode;
    status: DeviceStatusCode;
    lastActivity: number;
    mac: string;
    ip: string;
    sid: string;
    eid: string;
    score: number;
    tags: string[];
    labels: StringKeyValue[];
    eventCount: number;
    actionApplied: DeviceActionCode;
    actionAppliedBy: string;
    actionAppliedOn: number;
    events: Event[];
}
