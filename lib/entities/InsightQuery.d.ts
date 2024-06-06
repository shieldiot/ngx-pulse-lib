import { BaseEntity } from '../entities/BaseEntity';
import { InsightTypeCode } from '../enums/InsightTypeCode';
import { DirectionContextCode } from '../enums/DirectionContextCode';
export declare class InsightQuery extends BaseEntity {
    type: InsightTypeCode;
    description: string;
    query: string;
    insightDirectionContext: DirectionContextCode;
    uIQuery: string;
}
