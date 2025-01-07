import { RestUtil, EntityResponse, EntitiesResponse, ActionResponse } from '../../utils';
import { PulseConfig } from '../../config';
import { ReportInstance } from '../entities';
import * as i0 from "@angular/core";
export declare class UsrReportsInstanceService {
    private config;
    private rest;
    private baseUrl;
    constructor(config: PulseConfig, rest: RestUtil);
    /**
     * Update existing report instance in the system
     */
    update(body?: ReportInstance): import("rxjs").Observable<EntityResponse<ReportInstance>>;
    /**
     * Delete a report instance from the system
     */
    delete(id?: string): import("rxjs").Observable<ActionResponse>;
    /**
     * Get single report instance by id
     */
    get(id?: string): import("rxjs").Observable<EntityResponse<ReportInstance>>;
    /**
     * Find list of reports instance by query
     */
    find(accountId?: string, search?: string, sort?: string, page?: number, size?: number): import("rxjs").Observable<EntitiesResponse<ReportInstance>>;
    /**
     * Download report file
     */
    downloadReport(id?: string): import("rxjs").Observable<import("@angular/common/http").HttpEvent<Blob>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<UsrReportsInstanceService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UsrReportsInstanceService>;
}
