import { Indicator } from '../common/Indicator';
import { RuleTypeCode } from '../enums/RuleTypeCode';
import { EventCategoryCode } from '../enums/EventCategoryCode';
import { Device } from '../entities/Device';
import { BaseEntity } from '../entities/BaseEntity';
import { EventTypeCode } from '../enums/EventTypeCode';
import { SeverityTypeCode } from '../enums/SeverityTypeCode';
import { EventStatusCode } from '../enums/EventStatusCode';
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
}
