import { StringKeyValue } from '../common/StringKeyValue';
import { BaseEntity } from '../entities/BaseEntity';
export declare class ApiKey extends BaseEntity {
    name: string;
    ttl: number;
    acl: StringKeyValue[];
    version: number;
    systemKey: boolean;
    enabled: boolean;
    key: string;
}
