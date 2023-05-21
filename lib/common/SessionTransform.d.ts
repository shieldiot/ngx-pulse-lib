import { ZScore } from '../common/ZScore';
export declare class SessionTransform {
    packetsIn: ZScore;
    packetsOut: ZScore;
    bytesIn: ZScore;
    bytesOut: ZScore;
    constructor(packetsIn?: ZScore, packetsOut?: ZScore, bytesIn?: ZScore, bytesOut?: ZScore);
}
