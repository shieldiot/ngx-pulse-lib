import { StringKeyIntValue } from '../common';
import { BaseEntity } from '../base';
export declare class ApiKey extends BaseEntity {
    name: string;
    ttl: number;
    acl: StringKeyIntValue[];
    version: number;
    systemKey: boolean;
    enabled: boolean;
    key: string;
}
