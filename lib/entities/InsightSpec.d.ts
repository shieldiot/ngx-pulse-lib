import { InsightStatusCode } from '../enums';
import { BaseEntity } from '../base';
export declare class InsightSpec extends BaseEntity {
    accountId: string;
    streamId: string;
    queryId: string;
    enabled: boolean;
    status: InsightStatusCode;
}
