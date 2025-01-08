import { IntDistribution } from '../entities';
import { DeviceReport } from '../entities';
import { ReportTypeCode } from '../enums';
import { BaseEntity } from '../base';
export declare class ReportInstance extends BaseEntity {
    accountId: string;
    from: number;
    to: number;
    score: number;
    devicesDistributionByStatus: IntDistribution;
    deviceReport: DeviceReport;
    alertsDistributionBySeverity: IntDistribution;
    downloadLink: string;
    reportTriggerSource: ReportTypeCode;
    triggeredByUser: string;
}
