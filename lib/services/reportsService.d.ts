import { RestUtil, EntityResponse } from '../../utils';
import { PulseConfig } from '../../config';
import { TimeSeries } from '../common/TimeSeries';
import { GraphSeries } from '../common/GraphSeries';
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
    /**
     * Get histogram of network activity over time
     */
    getNetworkActivityOverTime(streamId?: string, from?: number, to?: number): import("rxjs").Observable<EntityResponse<TimeSeries>>;
    /**
     * Get histogram of device distribution by number of destinations
     */
    getDeviceDistributionByNumberOfDestinations(streamId?: string, from?: number, to?: number): import("rxjs").Observable<EntityResponse<GraphSeries>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ReportsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ReportsService>;
}
