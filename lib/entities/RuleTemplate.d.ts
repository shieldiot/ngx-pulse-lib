import { SeverityTypeCode } from '../enums/SeverityTypeCode';
import { BaseEntity } from '../entities/BaseEntity';
import { DataSourceCode } from '../enums/DataSourceCode';
import { EventTypeCode } from '../enums/EventTypeCode';
export declare class RuleTemplate extends BaseEntity {
    name: string;
    description: string;
    context: DataSourceCode;
    matchAll: string[];
    matchAny: string[];
    timeWindowSec: number;
    setEventType: EventTypeCode;
    setEventSeverity: SeverityTypeCode;
}
