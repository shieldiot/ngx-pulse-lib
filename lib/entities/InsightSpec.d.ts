import { BaseEntity } from '../base';
import { InsightStatusCode } from '../enums';
export declare class InsightSpec extends BaseEntity {
    accountId: string;
    streamId: string;
    queryId: string;
    enabled: boolean;
    status: InsightStatusCode;
}
