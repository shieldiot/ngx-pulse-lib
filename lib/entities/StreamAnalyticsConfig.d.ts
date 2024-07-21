import { Thresholds } from '../common/Thresholds';
import { ShieldexConfig } from '../common/ShieldexConfig';
import { EventSeverityConfig } from '../common/EventSeverityConfig';
import { DeviceConfig } from '../common/DeviceConfig';
import { BaseEntity } from '../entities/BaseEntity';
export declare class StreamAnalyticsConfig extends BaseEntity {
    accountId: string;
    thresholds: Thresholds;
    shieldexConfig: ShieldexConfig;
    eventSeverityConfig: EventSeverityConfig;
    deviceConfig: DeviceConfig;
}
