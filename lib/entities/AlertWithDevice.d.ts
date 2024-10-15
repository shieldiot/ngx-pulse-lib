import { EventTypeCode } from '../enums';
import { SeverityTypeCode } from '../enums';
import { EventStatusCode } from '../enums';
import { RuleTypeCode } from '../enums';
import { GeoData } from '../common';
import { StringKeyValue } from '../common';
import { Device } from '../entities';
import { EventCategoryCode } from '../enums';
import { TrafficDirectionCode } from '../enums';
import { BaseEntity } from '../base';
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
