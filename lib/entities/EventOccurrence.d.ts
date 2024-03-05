import { Indicator } from '../common/Indicator';
import { TrafficDirectionCode } from '../enums/TrafficDirectionCode';
export declare class EventOccurrence {
    timestamp: number;
    source: string;
    sourceIp: string;
    indicators: Indicator[];
    trafficDirection: TrafficDirectionCode;
    constructor(timestamp?: number, source?: string, sourceIp?: string, indicators?: Indicator[], trafficDirection?: TrafficDirectionCode);
}
