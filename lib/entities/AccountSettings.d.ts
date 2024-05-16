import { HomePageViewCode } from '../enums/HomePageViewCode';
import { ComplianceReportSettings } from '../entities/ComplianceReportSettings';
export declare class AccountSettings {
    logo: string;
    defaultHomePageView: HomePageViewCode;
    complianceReportSettings: ComplianceReportSettings;
    constructor(logo?: string, defaultHomePageView?: HomePageViewCode, complianceReportSettings?: ComplianceReportSettings);
}
