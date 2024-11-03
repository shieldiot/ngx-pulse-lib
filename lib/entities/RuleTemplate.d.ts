import { BaseEntity } from '../base';
import { DataSourceCode } from '../enums';
import { EventTypeCode } from '../enums';
import { SeverityTypeCode } from '../enums';
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
