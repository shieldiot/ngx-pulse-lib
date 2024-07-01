import { StringKeyIntValue } from '../common/StringKeyIntValue';
import { BaseEntity } from '../entities/BaseEntity';
export declare class ApiKey extends BaseEntity {
    name: string;
    ttl: number;
    acl: StringKeyIntValue[];
    version: number;
    systemKey: boolean;
    enabled: boolean;
    key: string;
}
