import { SeverityTypeCode } from '../enums/SeverityTypeCode';
import { BaseEntity } from '../entities/BaseEntity';
import { RuleTypeCode } from '../enums/RuleTypeCode';
import { DataSourceCode } from '../enums/DataSourceCode';
import { Condition } from '../entities/Condition';
import { DeviceTypeCode } from '../enums/DeviceTypeCode';
import { EventTypeCode } from '../enums/EventTypeCode';
export declare class Rule extends BaseEntity {
    accountId: string;
    streamId: string;
    name: string;
    type: RuleTypeCode;
    description: string;
    isSystemRule: boolean;
    isActiveRule: boolean;
    context: DataSourceCode;
    matchAll: Condition[];
    matchAny: Condition[];
    excludeIDs: string[];
    excludeTags: string[];
    excludeTypes: DeviceTypeCode[];
    timeWindowSec: number;
    setEventType: EventTypeCode;
    setEventSeverity: SeverityTypeCode;
}
