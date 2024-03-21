import { Indicator } from '../common/Indicator';
import { StringKeyValue } from '../common/StringKeyValue';
import { EventOccurrence } from '../entities/EventOccurrence';
import { TrafficDirectionCode } from '../enums/TrafficDirectionCode';
import { SeverityTypeCode } from '../enums/SeverityTypeCode';
import { EventStatusCode } from '../enums/EventStatusCode';
import { GeoData } from '../common/GeoData';
import { EventCategoryCode } from '../enums/EventCategoryCode';
import { BaseEntity } from '../entities/BaseEntity';
import { EventTypeCode } from '../enums/EventTypeCode';
import { RuleTypeCode } from '../enums/RuleTypeCode';
export declare class Event extends BaseEntity {
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
}
