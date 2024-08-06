import { Indicator } from '../common';
import { TrafficDirectionCode } from '../enums';
export declare class EventOccurrence {
    timestamp: number;
    source: string;
    sourceIp: string;
    indicators: Indicator[];
    trafficDirection: TrafficDirectionCode;
    constructor(timestamp?: number, source?: string, sourceIp?: string, indicators?: Indicator[], trafficDirection?: TrafficDirectionCode);
}
