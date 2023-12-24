import { RestUtil, EntityResponse, EntitiesResponse, ActionResponse } from '../../utils';
import { PulseConfig } from '../../config';
import { InsightSpec } from '../entities/InsightSpec';
import { InsightQuery } from '../entities/InsightQuery';
import * as i0 from "@angular/core";
export declare class SysInsightsService {
    private config;
    private rest;
    private baseUrl;
    constructor(config: PulseConfig, rest: RestUtil);
    /**
     * Create new insight query
     */
    createQuery(body?: InsightQuery): import("rxjs").Observable<EntityResponse<InsightQuery>>;
    /**
     * Update existing insight query
     */
    updateQuery(body?: InsightQuery): import("rxjs").Observable<EntityResponse<InsightQuery>>;
    /**
     * Delete insight query from the system
     */
    deleteQuery(id?: string): import("rxjs").Observable<ActionResponse>;
    /**
     * Get single insight query by id
     */
    getQuery(id?: string): import("rxjs").Observable<EntityResponse<InsightQuery>>;
    /**
     * Find list of insight queries
     */
    findQueries(accountId?: string, streamId?: string, search?: string, sort?: string, page?: number, size?: number): import("rxjs").Observable<EntitiesResponse<InsightQuery>>;
    /**
     * Create new insight spec
     */
    createSpec(body?: InsightSpec): import("rxjs").Observable<EntityResponse<InsightSpec>>;
    /**
     * Update existing insight spec
     */
    updateSpec(body?: InsightSpec): import("rxjs").Observable<EntityResponse<InsightSpec>>;
    /**
     * Delete insight spec from the system
     */
    deleteSpec(id?: string): import("rxjs").Observable<ActionResponse>;
    /**
     * Get single insight spec by id
     */
    getSpec(id?: string): import("rxjs").Observable<EntityResponse<InsightSpec>>;
    /**
     * Find list of insight specs
     */
    findSpecs(accountId?: string, streamId?: string, search?: string, sort?: string, page?: number, size?: number): import("rxjs").Observable<EntitiesResponse<InsightSpec>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SysInsightsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SysInsightsService>;
}
