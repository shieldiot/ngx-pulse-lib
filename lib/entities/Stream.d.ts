import { StreamConfig } from '../entities';
import { BaseEntity } from '../base';
import { StringKeyValue } from '../common';
export declare class Stream extends BaseEntity {
    accountId: string;
    name: string;
    description: string;
    enabled: boolean;
    labels: StringKeyValue[];
    config: StreamConfig;
}
