import { RestUtil } from '../../utils';
import { PulseConfig } from '../../config';
import * as i0 from "@angular/core";
export declare class ReportsService {
    private config;
    private rest;
    private baseUrl;
    constructor(config: PulseConfig, rest: RestUtil);
    /**
     * Get compliance report
     */
    getComplianceReport(streamId?: string, from?: number, to?: number): import("rxjs").Observable<import("@angular/common/http").HttpEvent<Blob>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ReportsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ReportsService>;
}
