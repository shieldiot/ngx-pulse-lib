import { EventSeverityConfig } from '../common/EventSeverityConfig';
import { DataIngestion } from '../entities/DataIngestion';
import { SessionTransform } from '../common/SessionTransform';
import { UsageTransform } from '../common/UsageTransform';
import { Thresholds } from '../common/Thresholds';
import { ShieldexConfig } from '../common/ShieldexConfig';
export declare class StreamConfig {
    ingest: DataIngestion;
    sessionTransform: SessionTransform;
    usageTransform: UsageTransform;
    thresholds: Thresholds;
    shieldexConfig: ShieldexConfig;
    eventSeverityConfig: EventSeverityConfig;
    constructor(ingest?: DataIngestion, sessionTransform?: SessionTransform, usageTransform?: UsageTransform, thresholds?: Thresholds, shieldexConfig?: ShieldexConfig, eventSeverityConfig?: EventSeverityConfig);
}
