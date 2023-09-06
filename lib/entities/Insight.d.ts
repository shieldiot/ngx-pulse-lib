import { InsightTypeCode } from '../enums/InsightTypeCode';
import { InsightStatusCode } from '../enums/InsightStatusCode';
import { BaseEntity } from '../entities/BaseEntity';
export declare class Insight extends BaseEntity {
    accountId: string;
    streamId: string;
    specId: string;
    type: InsightTypeCode;
    status: InsightStatusCode;
    description: string;
    links: string[];
}
