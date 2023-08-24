import { BaseEntity } from '../entities/BaseEntity';
import { StreamConfig } from '../entities/StreamConfig';
export declare class Stream extends BaseEntity {
    accountId: string;
    name: string;
    description: string;
    config: StreamConfig;
}
