import { StreamConfig } from '../entities/StreamConfig';
import { BaseEntity } from '../entities/BaseEntity';
import { StringKeyValue } from '../common/StringKeyValue';
export declare class Stream extends BaseEntity {
    accountId: string;
    name: string;
    description: string;
    enabled: boolean;
    labels: StringKeyValue[];
    config: StreamConfig;
}
