import { ZScore } from '../common';
export declare class UsageTransform {
    packetsIn: ZScore;
    packetsOut: ZScore;
    bytesIn: ZScore;
    bytesOut: ZScore;
    endpointsCount: ZScore;
    portsCount: ZScore;
    constructor(packetsIn?: ZScore, packetsOut?: ZScore, bytesIn?: ZScore, bytesOut?: ZScore, endpointsCount?: ZScore, portsCount?: ZScore);
}
