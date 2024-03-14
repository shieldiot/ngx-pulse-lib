import { BaseEntity } from '../entities/BaseEntity';
import { InsightTypeCode } from '../enums/InsightTypeCode';
export declare class InsightQuery extends BaseEntity {
    type: InsightTypeCode;
    description: string;
    query: string;
}
