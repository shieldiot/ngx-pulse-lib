import { StreamConfig } from '../entities/StreamConfig';
import { BaseEntity } from '../entities/BaseEntity';
export declare class Stream extends BaseEntity {
    accountId: string;
    name: string;
    description: string;
    enabled: boolean;
    config: StreamConfig;
}
