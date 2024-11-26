import { BaseEntity } from '../base';
import { InsightTypeCode } from '../enums';
import { DirectionContextCode } from '../enums';
export declare class InsightQuery extends BaseEntity {
    type: InsightTypeCode;
    description: string;
    query: string;
    insightDirectionContext: DirectionContextCode;
    uIQuery: string;
}
