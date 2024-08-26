import { EventTypeCode } from '../enums';
export declare class RuleCountThresholdConfig {
    eventType: EventTypeCode;
    threshold: number;
    constructor(eventType?: EventTypeCode, threshold?: number);
}
