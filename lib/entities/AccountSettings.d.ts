import { ComplianceReportSettings } from '../entities/ComplianceReportSettings';
import { HomePageViewCode } from '../enums/HomePageViewCode';
export declare class AccountSettings {
    logo: string;
    defaultHomePageView: HomePageViewCode;
    complianceReportSettings: ComplianceReportSettings;
    constructor(logo?: string, defaultHomePageView?: HomePageViewCode, complianceReportSettings?: ComplianceReportSettings);
}
