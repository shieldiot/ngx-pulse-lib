import { RestUtil, EntityResponse } from '../../utils';
import { PulseConfig } from '../../config';
import { GraphSeries } from '../common/GraphSeries';
import { TimeSeries } from '../common/TimeSeries';
import * as i0 from "@angular/core";
export declare class UsrReportsService {
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
    /**
     * Get histogram of device distribution by communication frequency
     */
    getDeviceGroupsByCommunicationFrequency(streamId?: string, from?: number, to?: number): import("rxjs").Observable<EntityResponse<GraphSeries>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<UsrReportsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UsrReportsService>;
}
