import { BaseEntity } from '../entities/BaseEntity';
export declare class Checkpoint extends BaseEntity {
    accountId: string;
    streamId: string;
    checkpoint: number;
    label: string;
    totalFiles: number;
    totalPackets: number;
    totalUsage: number;
    totalSession: number;
}
