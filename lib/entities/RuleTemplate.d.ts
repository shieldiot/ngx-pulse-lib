import { SeverityTypeCode } from '../enums/SeverityTypeCode';
import { BaseEntity } from '../entities/BaseEntity';
import { EventTypeCode } from '../enums/EventTypeCode';
export declare class RuleTemplate extends BaseEntity {
    name: string;
    description: string;
    context: string;
    matchAll: string[];
    matchAny: string[];
    timeWindowSec: number;
    setEventType: EventTypeCode;
    setEventSeverity: SeverityTypeCode;
}
