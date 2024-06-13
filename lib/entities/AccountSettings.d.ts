import { TeaserPopUpSettings } from '../entities/TeaserPopUpSettings';
import { HomePageViewCode } from '../enums/HomePageViewCode';
import { ComplianceReportSettings } from '../entities/ComplianceReportSettings';
export declare class AccountSettings {
    logo: string;
    defaultHomePageView: HomePageViewCode;
    complianceReportSettings: ComplianceReportSettings;
    teaserPopUpSettings: TeaserPopUpSettings;
    constructor(logo?: string, defaultHomePageView?: HomePageViewCode, complianceReportSettings?: ComplianceReportSettings, teaserPopUpSettings?: TeaserPopUpSettings);
}
