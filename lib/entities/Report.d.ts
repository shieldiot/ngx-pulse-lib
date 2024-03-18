import { TimeFrame } from '../common/TimeFrame';
import { BaseEntity } from '../entities/BaseEntity';
import { ReportTypeCode } from '../enums/ReportTypeCode';
export declare class Report extends BaseEntity {
    accountId: string;
    userId: string;
    name: string;
    cron: string;
    recipients: string[];
    subject: string;
    reportType: ReportTypeCode;
    timeFrame: TimeFrame;
}
