import { SeverityTypeCode } from '../enums';
import { EventStatusCode } from '../enums';
import { Indicator } from '../common';
import { TrafficDirectionCode } from '../enums';
import { BaseEntity } from '../base';
import { EventTypeCode } from '../enums';
import { RuleTypeCode } from '../enums';
import { GeoData } from '../common';
import { StringKeyValue } from '../common';
import { EventCategoryCode } from '../enums';
import { EventOccurrence } from '../entities';
import { Device } from '../entities';
export declare class EventWithDevice extends BaseEntity {
    accountId: string;
    streamId: string;
    deviceId: string;
    startTime: number;
    endTime: number;
    type: EventTypeCode;
    severity: SeverityTypeCode;
    score: number;
    probability: number;
    status: EventStatusCode;
    indicators: Indicator[];
    ruleType: RuleTypeCode;
    ruleId: string;
    targetIp: string;
    targetLocation: GeoData;
    description: string;
    tags: string[];
    labels: StringKeyValue[];
    category: EventCategoryCode;
    recommendedAction: string;
    occurrences: EventOccurrence[];
    trafficDirection: TrafficDirectionCode;
    confidenceScore: number;
    occurrencesCount: boolean;
    device: Device;
}
