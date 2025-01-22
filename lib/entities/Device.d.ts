import { StringKeyValue } from '../common';
import { DeviceActionCode } from '../enums';
import { SIM } from '../entities';
import { GeoData } from '../common';
import { BaseEntity } from '../base';
import { DeviceTypeCode } from '../enums';
import { DeviceStatusCode } from '../enums';
export declare class Device extends BaseEntity {
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
    address: GeoData;
}
