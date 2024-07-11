import { TrafficDirectionCode } from '../enums/TrafficDirectionCode';
import { SeverityTypeCode } from '../enums/SeverityTypeCode';
import { EventStatusCode } from '../enums/EventStatusCode';
import { GeoData } from '../common/GeoData';
import { StringKeyValue } from '../common/StringKeyValue';
import { EventCategoryCode } from '../enums/EventCategoryCode';
import { EventTypeCode } from '../enums/EventTypeCode';
import { RuleTypeCode } from '../enums/RuleTypeCode';
import { Device } from '../entities/Device';
import { BaseEntity } from '../entities/BaseEntity';
export declare class AlertWithDevice extends BaseEntity {
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
    device: Device;
}
