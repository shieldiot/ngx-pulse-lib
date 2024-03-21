import { TrafficDirectionCode } from '../enums/TrafficDirectionCode';
import { Indicator } from '../common/Indicator';
export declare class EventOccurrence {
    timestamp: number;
    source: string;
    sourceIp: string;
    indicators: Indicator[];
    trafficDirection: TrafficDirectionCode;
    constructor(timestamp?: number, source?: string, sourceIp?: string, indicators?: Indicator[], trafficDirection?: TrafficDirectionCode);
}
