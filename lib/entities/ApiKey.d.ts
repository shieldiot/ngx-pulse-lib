import { BaseEntity } from '../base';
import { StringKeyIntValue } from '../common';
export declare class ApiKey extends BaseEntity {
    name: string;
    ttl: number;
    acl: StringKeyIntValue[];
    version: number;
    systemKey: boolean;
    enabled: boolean;
    key: string;
}
