import { DeviceTypeCode } from '../enums/DeviceTypeCode';
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
}
