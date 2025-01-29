import { DirectionContextCode } from '../enums';
import { BaseEntity } from '../base';
import { InsightTypeCode } from '../enums';
export declare class InsightQuery extends BaseEntity {
    type: InsightTypeCode;
    description: string;
    query: string;
    insightDirectionContext: DirectionContextCode;
    uIQuery: string;
    isDefault: boolean;
}
