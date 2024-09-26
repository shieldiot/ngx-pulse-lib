import { ComplianceReportSettings } from '../entities';
import { TeaserPopUpSettings } from '../entities';
import { HomePageViewCode } from '../enums';
export declare class AccountSettings {
    logo: string;
    defaultHomePageView: HomePageViewCode;
    complianceReportSettings: ComplianceReportSettings;
    teaserPopUpSettings: TeaserPopUpSettings;
    constructor(logo?: string, defaultHomePageView?: HomePageViewCode, complianceReportSettings?: ComplianceReportSettings, teaserPopUpSettings?: TeaserPopUpSettings);
}
