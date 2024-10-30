import { TrafficDirectionCode } from '../enums';
import { Indicator } from '../common';
export declare class EventOccurrence {
    timestamp: number;
    source: string;
    sourceIp: string;
    indicators: Indicator[];
    trafficDirection: TrafficDirectionCode;
    constructor(timestamp?: number, source?: string, sourceIp?: string, indicators?: Indicator[], trafficDirection?: TrafficDirectionCode);
}
