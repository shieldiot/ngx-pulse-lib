import { EventStatusCode } from '../enums';
import { Indicator } from '../common';
import { GeoData } from '../common';
import { TrafficDirectionCode } from '../enums';
import { EventTypeCode } from '../enums';
import { SeverityTypeCode } from '../enums';
import { RuleTypeCode } from '../enums';
import { StringKeyValue } from '../common';
import { EventCategoryCode } from '../enums';
import { EventOccurrence } from '../entities';
import { BaseEntity } from '../base';
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
    sourceIp: string;
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
