import { HomePageViewCode } from '../enums/HomePageViewCode';
import { ComplianceReportSettings } from '../entities/ComplianceReportSettings';
import { TeaserPopUpSettings } from '../entities/TeaserPopUpSettings';
export declare class AccountSettings {
    logo: string;
    defaultHomePageView: HomePageViewCode;
    complianceReportSettings: ComplianceReportSettings;
    teaserPopUpSettings: TeaserPopUpSettings;
    constructor(logo?: string, defaultHomePageView?: HomePageViewCode, complianceReportSettings?: ComplianceReportSettings, teaserPopUpSettings?: TeaserPopUpSettings);
}
