import { SeverityTypeCode } from '../enums/SeverityTypeCode';
import { DirectionContextCode } from '../enums/DirectionContextCode';
import { BaseEntity } from '../entities/BaseEntity';
import { InsightTypeCode } from '../enums/InsightTypeCode';
import { InsightStatusCode } from '../enums/InsightStatusCode';
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
