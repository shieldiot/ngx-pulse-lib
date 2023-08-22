import { Indicator } from '../common/Indicator';
export declare class EventOccurrence {
    timestamp: number;
    source: string;
    sourceIp: string;
    indicators: Indicator[];
    constructor(timestamp?: number, source?: string, sourceIp?: string, indicators?: Indicator[]);
}
