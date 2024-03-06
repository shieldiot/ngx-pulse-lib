import { BaseEntity } from '../entities/BaseEntity';
import { Condition } from '../entities/Condition';
import { DeviceTypeCode } from '../enums/DeviceTypeCode';
import { EventTypeCode } from '../enums/EventTypeCode';
import { SeverityTypeCode } from '../enums/SeverityTypeCode';
export declare class Rule extends BaseEntity {
    accountId: string;
    streamId: string;
    name: string;
    description: string;
    isSystemRule: boolean;
    isActiveRule: boolean;
    context: string;
    matchAll: Condition[];
    matchAny: Condition[];
    excludeIDs: string[];
    excludeTags: string[];
    excludeTypes: DeviceTypeCode[];
    timeWindowSec: number;
    setEventType: EventTypeCode;
    setEventSeverity: SeverityTypeCode;
}
