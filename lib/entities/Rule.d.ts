import { DeviceTypeCode } from '../enums/DeviceTypeCode';
import { EventTypeCode } from '../enums/EventTypeCode';
import { SeverityTypeCode } from '../enums/SeverityTypeCode';
import { BaseEntity } from '../entities/BaseEntity';
export declare class Rule extends BaseEntity {
    accountId: string;
    streamId: string;
    name: string;
    description: string;
    isSystemRule: boolean;
    isActiveRule: boolean;
    context: string;
    matchAll: string[];
    matchAny: string[];
    excludeIDs: string[];
    excludeTags: string[];
    excludeTypes: DeviceTypeCode[];
    timeWindowSec: number;
    setEventType: EventTypeCode;
    setEventSeverity: SeverityTypeCode;
}
