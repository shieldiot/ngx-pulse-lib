import { TimeFrame } from '../common';
import { BaseEntity } from '../base';
import { ReportTypeCode } from '../enums';
export declare class Report extends BaseEntity {
    accountId: string;
    userId: string;
    name: string;
    cron: string;
    recipients: string[];
    reportType: ReportTypeCode;
    timeFrame: TimeFrame;
    status: boolean;
    receiveViaMail: boolean;
}
