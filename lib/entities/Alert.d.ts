import { EventTypeCode } from '../enums/EventTypeCode';
import { SeverityTypeCode } from '../enums/SeverityTypeCode';
import { RuleTypeCode } from '../enums/RuleTypeCode';
import { TrafficDirectionCode } from '../enums/TrafficDirectionCode';
import { EventStatusCode } from '../enums/EventStatusCode';
import { GeoData } from '../common/GeoData';
import { StringKeyValue } from '../common/StringKeyValue';
import { EventCategoryCode } from '../enums/EventCategoryCode';
import { BaseEntity } from '../entities/BaseEntity';
export declare class Alert extends BaseEntity {
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
    trafficDirection: TrafficDirectionCode;
    confidenceScore: number;
    occurrencesCount: boolean;
}