import { EventTypeCode } from '../enums';
import { SeverityTypeCode } from '../enums';
import { EventStatusCode } from '../enums';
import { Indicator } from '../common';
import { RuleTypeCode } from '../enums';
import { GeoData } from '../common';
import { Device } from '../entities';
import { StringKeyValue } from '../common';
import { EventCategoryCode } from '../enums';
import { EventOccurrence } from '../entities';
import { TrafficDirectionCode } from '../enums';
import { BaseEntity } from '../base';
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
