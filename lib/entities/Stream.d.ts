import { StringKeyValue } from '../common';
import { StreamConfig } from '../entities';
import { BaseEntity } from '../base';
export declare class Stream extends BaseEntity {
    accountId: string;
    name: string;
    description: string;
    enabled: boolean;
    labels: StringKeyValue[];
    config: StreamConfig;
}
