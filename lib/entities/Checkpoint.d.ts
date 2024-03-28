import { BaseEntity } from '../entities/BaseEntity';
export declare class Checkpoint extends BaseEntity {
    accountId: string;
    streamId: string;
    checkpoint: number;
    firstPacketTime: number;
    lastPacketTime: number;
    label: string;
    description: string;
    elapsed: number;
    totalFiles: number;
    totalPackets: number;
    totalUsage: number;
    totalSession: number;
    totalRadius: number;
    overlappedPackets: number;
    failedPackets: number;
    irrelevantPackets: number;
    unmappedPackets: number;
    processedPackets: number;
    state: number;
    processedBy: string;
}
