import { BaseEntity } from '../entities/BaseEntity';
export declare class SessionRecord extends BaseEntity {
    source: string;
    sessionId: string;
    accountId: string;
    streamId: string;
    deviceId: string;
    deviceIp: string;
    startTime: number;
    endTime: number;
    srcIP: string;
    srcPort: number;
    dstIP: string;
    dstPort: number;
    protocol: string;
    packetsIn: number;
    packetsOut: number;
    bytesIn: number;
    bytesOut: number;
    labels: string[];
    zPacketsIn: number;
    zPacketsOut: number;
    zBytesIn: number;
    zBytesOut: number;
}
