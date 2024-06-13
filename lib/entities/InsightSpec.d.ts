import { InsightStatusCode } from '../enums/InsightStatusCode';
import { BaseEntity } from '../entities/BaseEntity';
export declare class InsightSpec extends BaseEntity {
    accountId: string;
    streamId: string;
    queryId: string;
    enabled: boolean;
    status: InsightStatusCode;
}
