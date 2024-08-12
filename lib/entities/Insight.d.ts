import { SeverityTypeCode } from '../enums';
import { DirectionContextCode } from '../enums';
import { BaseEntity } from '../base';
import { InsightTypeCode } from '../enums';
import { InsightStatusCode } from '../enums';
export declare class Insight extends BaseEntity {
    accountId: string;
    streamId: string;
    specId: string;
    dayId: number;
    type: InsightTypeCode;
    status: InsightStatusCode;
    description: string;
    links: string[];
    severity: SeverityTypeCode;
    title: string;
    insightDirectionContext: DirectionContextCode;
}
