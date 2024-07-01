import { RestUtil, EntityResponse, EntitiesResponse } from '../../utils';
import { PulseConfig } from '../../config';
import { TimeSeriesOfFloat } from '../common/TimeSeriesOfFloat';
import { AuditLog } from '../entities/AuditLog';
import * as i0 from "@angular/core";
export declare class SysAuditLogService {
    private config;
    private rest;
    private baseUrl;
    constructor(config: PulseConfig, rest: RestUtil);
    /**
     * Get single log entry by id
     */
    get(id?: string): import("rxjs").Observable<EntityResponse<AuditLog>>;
    /**
     * Find list of log entries by query
     */
    find(from?: number, to?: number, accountId?: string, userId?: string, action?: string, itemType?: string, itemId?: string, itemName?: string, search?: string, sort?: string, page?: number, size?: number): import("rxjs").Observable<EntitiesResponse<AuditLog>>;
    /**
     * Get histogram of audit log entries over time
     */
    getTimeline(from?: number, to?: number, accountId?: string, userId?: string, action?: string, itemType?: string, itemId?: string, itemName?: string, search?: string, sort?: string, page?: number, size?: number): import("rxjs").Observable<EntityResponse<TimeSeriesOfFloat>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SysAuditLogService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SysAuditLogService>;
}
