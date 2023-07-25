import { RuleTypeCode } from '../enums/RuleTypeCode';
import { EventOccurrence } from '../entities/EventOccurrence';
import { BaseEntity } from '../entities/BaseEntity';
import { EventStatusCode } from '../enums/EventStatusCode';
import { SeverityTypeCode } from '../enums/SeverityTypeCode';
import { Indicator } from '../common/Indicator';
import { EventCategoryCode } from '../enums/EventCategoryCode';
import { Device } from '../entities/Device';
import { EventTypeCode } from '../enums/EventTypeCode';
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
    description: string;
    tags: string[];
    category: EventCategoryCode;
    recommendedAction: string;
    device: Device;
    sources: string[];
    occurrences: EventOccurrence[];
}
