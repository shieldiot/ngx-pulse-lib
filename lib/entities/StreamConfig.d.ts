import { DataIngestion } from '../entities/DataIngestion';
import { SessionTransform } from '../common/SessionTransform';
import { UsageTransform } from '../common/UsageTransform';
import { Thresholds } from '../common/Thresholds';
import { ShieldexConfig } from '../common/ShieldexConfig';
import { EventSeverityConfig } from '../common/EventSeverityConfig';
import { DeviceActionCode } from '../enums/DeviceActionCode';
import { DeviceConfig } from '../common/DeviceConfig';
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
