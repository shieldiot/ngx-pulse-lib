import { InsightTypeCode } from '../enums';
import { DirectionContextCode } from '../enums';
import { BaseEntity } from '../base';
export declare class InsightQuery extends BaseEntity {
    type: InsightTypeCode;
    description: string;
    query: string;
    insightDirectionContext: DirectionContextCode;
    uIQuery: string;
    isDefault: boolean;
}
