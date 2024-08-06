import { Thresholds } from '../common';
import { ShieldexConfig } from '../common';
import { EventSeverityConfig } from '../common';
import { DeviceConfig } from '../common';
import { BaseEntity } from '../base';
export declare class StreamAnalyticsConfig extends BaseEntity {
    accountId: string;
    thresholds: Thresholds;
    shieldexConfig: ShieldexConfig;
    eventSeverityConfig: EventSeverityConfig;
    deviceConfig: DeviceConfig;
}
