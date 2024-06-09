import { BaseEntity } from '../entities/BaseEntity';
import { InsightStatusCode } from '../enums/InsightStatusCode';
export declare class InsightSpec extends BaseEntity {
    accountId: string;
    streamId: string;
    queryId: string;
    enabled: boolean;
    status: InsightStatusCode;
}
