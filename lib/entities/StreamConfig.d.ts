import { SessionTransform } from '../common';
import { UsageTransform } from '../common';
import { Thresholds } from '../common';
import { ShieldexConfig } from '../common';
import { EventSeverityConfig } from '../common';
import { DeviceActionCode } from '../enums';
import { DeviceConfig } from '../common';
import { DataIngestion } from '../entities';
export declare class StreamConfig {
    ingest: DataIngestion;
    sessionTransform: SessionTransform;
    usageTransform: UsageTransform;
    thresholds: Thresholds;
    shieldexConfig: ShieldexConfig;
    eventSeverityConfig: EventSeverityConfig;
    preventiveActions: DeviceActionCode[];
    deviceConfig: DeviceConfig;
    constructor(ingest?: DataIngestion, sessionTransform?: SessionTransform, usageTransform?: UsageTransform, thresholds?: Thresholds, shieldexConfig?: ShieldexConfig, eventSeverityConfig?: EventSeverityConfig, preventiveActions?: DeviceActionCode[], deviceConfig?: DeviceConfig);
}
