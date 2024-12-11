import { ReportTypeCode } from '../enums';
import { TimeFrame } from '../common';
import { BaseEntity } from '../base';
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
