import { SessionTransform } from '../common/SessionTransform';
import { UsageTransform } from '../common/UsageTransform';
import { DataIngestion } from '../entities/DataIngestion';
export declare class StreamConfig {
    ingest: DataIngestion;
    sessionTransform: SessionTransform;
    usageTransform: UsageTransform;
    constructor(ingest?: DataIngestion, sessionTransform?: SessionTransform, usageTransform?: UsageTransform);
}
