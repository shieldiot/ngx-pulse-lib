import { InsightTypeCode } from '../enums/InsightTypeCode';
import { DirectionContextCode } from '../enums/DirectionContextCode';
import { BaseEntity } from '../entities/BaseEntity';
export declare class InsightQuery extends BaseEntity {
    type: InsightTypeCode;
    description: string;
    query: string;
    insightDirectionContext: DirectionContextCode;
}
