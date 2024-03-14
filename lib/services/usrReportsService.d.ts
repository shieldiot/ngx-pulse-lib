import { RestUtil, EntityResponse, EntitiesResponse, ActionResponse } from '../../utils';
import { PulseConfig } from '../../config';
import { Report } from '../entities/Report';
import { TimeSeries } from '../common/TimeSeries';
import { GraphSeries } from '../common/GraphSeries';
import * as i0 from "@angular/core";
export declare class UsrReportsService {
    private config;
    private rest;
    private baseUrl;
    constructor(config: PulseConfig, rest: RestUtil);
    /**
     * Create new report
     */
    create(body?: Report): import("rxjs").Observable<EntityResponse<Report>>;
    /**
     * Update existing report in the system
     */
    update(body?: Report): import("rxjs").Observable<EntityResponse<Report>>;
    /**
     * Delete a report from the system
     */
    delete(id?: string): import("rxjs").Observable<ActionResponse>;
    /**
     * Get single report by id
     */
    get(id?: string): import("rxjs").Observable<EntityResponse<Report>>;
    /**
     * Find list of reports by query
     */
    find(accountId?: string, search?: string, sort?: string, page?: number, size?: number): import("rxjs").Observable<EntitiesResponse<Report>>;
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
