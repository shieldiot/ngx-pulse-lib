import { SessionTransform } from '../common/SessionTransform';
import { UsageTransform } from '../common/UsageTransform';
import { Thresholds } from '../common/Thresholds';
import { DataIngestion } from '../entities/DataIngestion';
export declare class StreamConfig {
    ingest: DataIngestion;
    sessionTransform: SessionTransform;
    usageTransform: UsageTransform;
    thresholds: Thresholds;
    constructor(ingest?: DataIngestion, sessionTransform?: SessionTransform, usageTransform?: UsageTransform, thresholds?: Thresholds);
}
