import { BaseEntity } from '../base';
import { DeviceTypeCode } from '../enums';
import { DeviceStatusCode } from '../enums';
import { StringKeyValue } from '../common';
import { DeviceActionCode } from '../enums';
import { SIM } from '../entities';
import { Event } from '../entities';
import { GeoData } from '../common';
export declare class DeviceWithEvents extends BaseEntity {
    accountId: string;
    streamId: string;
    externalId: string;
    name: string;
    description: string;
    country: string;
    operator: string;
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
    simCards: SIM[];
    events: Event[];
    address: GeoData;
}
