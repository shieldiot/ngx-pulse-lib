import { BaseEntity } from '../entities/BaseEntity';
export declare class Checkpoint extends BaseEntity {
    accountId: string;
    streamId: string;
    checkpoint: number;
    label: string;
    description: string;
    elapsed: number;
    elapsedSent: number;
    totalFiles: number;
    totalPackets: number;
    totalUsage: number;
    totalSession: number;
    totalRadius: number;
    state: number;
    processedBy: string;
}
