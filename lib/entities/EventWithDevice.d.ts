import { StringKeyValue } from '../common/StringKeyValue';
import { EventCategoryCode } from '../enums/EventCategoryCode';
import { EventOccurrence } from '../entities/EventOccurrence';
import { Device } from '../entities/Device';
import { EventTypeCode } from '../enums/EventTypeCode';
import { Indicator } from '../common/Indicator';
import { GeoData } from '../common/GeoData';
import { TrafficDirectionCode } from '../enums/TrafficDirectionCode';
import { BaseEntity } from '../entities/BaseEntity';
import { SeverityTypeCode } from '../enums/SeverityTypeCode';
import { EventStatusCode } from '../enums/EventStatusCode';
import { RuleTypeCode } from '../enums/RuleTypeCode';
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
