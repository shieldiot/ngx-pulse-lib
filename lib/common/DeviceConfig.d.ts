import { DeviceScoreConfig } from '../common/DeviceScoreConfig';
import { DevicesAtRiskConfig } from '../common/DevicesAtRiskConfig';
export declare class DeviceConfig {
    devicesAtRiskConfig: DevicesAtRiskConfig;
    deviceScoreConfig: DeviceScoreConfig;
    constructor(devicesAtRiskConfig?: DevicesAtRiskConfig, deviceScoreConfig?: DeviceScoreConfig);
}
