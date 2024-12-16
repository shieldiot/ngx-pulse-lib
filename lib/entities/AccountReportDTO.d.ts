import { AccountTypeCode } from '../enums';
import { AccountStatusCode } from '../enums';
import { StringKeyValue } from '../common';
import { AccountSettings } from '../entities';
import { DeviceReport } from '../entities';
import { IntDistribution } from '../entities';
import { BaseEntity } from '../base';
export declare class AccountReportDTO extends BaseEntity {
    name: string;
    externalId: string;
    description: string;
    type: AccountTypeCode;
    status: AccountStatusCode;
    groups: string[];
    expiredOn: number;
    tags: string[];
    labels: StringKeyValue[];
    settings: AccountSettings;
    healthScore: number;
    membersCount: number;
    latestDeviceReport: DeviceReport;
    deviceDistributionByStatus: IntDistribution;
}
