import { BaseEntity } from '../base';
import { ReportTypeCode } from '../enums';
import { TimeFrame } from '../common';
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
