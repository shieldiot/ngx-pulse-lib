import { RuleTypeCode } from '../enums';
import { DataSourceCode } from '../enums';
import { Condition } from '../entities';
import { DeviceTypeCode } from '../enums';
import { EventTypeCode } from '../enums';
import { SeverityTypeCode } from '../enums';
import { BaseEntity } from '../base';
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
