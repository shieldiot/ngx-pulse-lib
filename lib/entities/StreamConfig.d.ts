import { ShieldexConfig } from '../common/ShieldexConfig';
import { EventSeverityConfig } from '../common/EventSeverityConfig';
import { ActionTypeCode } from '../enums/ActionTypeCode';
import { DataIngestion } from '../entities/DataIngestion';
import { SessionTransform } from '../common/SessionTransform';
import { UsageTransform } from '../common/UsageTransform';
import { Thresholds } from '../common/Thresholds';
export declare class StreamConfig {
    ingest: DataIngestion;
    sessionTransform: SessionTransform;
    usageTransform: UsageTransform;
    thresholds: Thresholds;
    shieldexConfig: ShieldexConfig;
    eventSeverityConfig: EventSeverityConfig;
    preventiveActions: ActionTypeCode[];
    constructor(ingest?: DataIngestion, sessionTransform?: SessionTransform, usageTransform?: UsageTransform, thresholds?: Thresholds, shieldexConfig?: ShieldexConfig, eventSeverityConfig?: EventSeverityConfig, preventiveActions?: ActionTypeCode[]);
}
