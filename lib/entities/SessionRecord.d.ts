import { BaseEntity } from '../base';
export declare class SessionRecord extends BaseEntity {
    source: string;
    sessionId: string;
    accountId: string;
    streamId: string;
    deviceId: string;
    simId: string;
    startTime: number;
    endTime: number;
    deviceIp: string;
    devicePort: number;
    dstIP: string;
    dstPort: number;
    dstDns: string;
    protocol: string;
    packetsIn: number;
    packetsOut: number;
    bytesIn: number;
    bytesOut: number;
    labels: string[];
}
