import { BaseEntity } from '../entities/BaseEntity';
import { StringKeyIntValue } from '../common/StringKeyIntValue';
export declare class ApiKey extends BaseEntity {
    name: string;
    ttl: number;
    acl: StringKeyIntValue[];
    version: number;
    systemKey: boolean;
    enabled: boolean;
    key: string;
}
