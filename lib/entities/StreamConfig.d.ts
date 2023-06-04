import { UsageTransform } from '../common/UsageTransform';
import { DataIngestion } from '../entities/DataIngestion';
import { SessionTransform } from '../common/SessionTransform';
export declare class StreamConfig {
    ingest: DataIngestion;
    sessionTransform: SessionTransform;
    usageTransform: UsageTransform;
    constructor(ingest?: DataIngestion, sessionTransform?: SessionTransform, usageTransform?: UsageTransform);
}
