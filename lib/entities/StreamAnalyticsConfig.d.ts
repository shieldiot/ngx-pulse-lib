import { EventSeverityConfig } from '../common';
import { DeviceConfig } from '../common';
import { BaseEntity } from '../base';
import { Thresholds } from '../common';
import { ShieldexConfig } from '../common';
export declare class StreamAnalyticsConfig extends BaseEntity {
    accountId: string;
    thresholds: Thresholds;
    shieldexConfig: ShieldexConfig;
    eventSeverityConfig: EventSeverityConfig;
    deviceConfig: DeviceConfig;
}
