import { RestUtil, EntityResponse, EntitiesResponse, ActionResponse } from '../../utils';
import { PulseConfig } from '../../config';
import { StreamAnalyticsConfig } from '../entities/StreamAnalyticsConfig';
import * as i0 from "@angular/core";
export declare class SupportStreamAnalyticsConfig {
    private config;
    private rest;
    private baseUrl;
    constructor(config: PulseConfig, rest: RestUtil);
    /**
     * Create new stream analytics configuration
     */
    create(body?: StreamAnalyticsConfig): import("rxjs").Observable<EntityResponse<StreamAnalyticsConfig>>;
    /**
     * Update existing stream analytics configuration
     */
    update(body?: StreamAnalyticsConfig): import("rxjs").Observable<EntityResponse<StreamAnalyticsConfig>>;
    /**
     * Delete stream analytics configuration from the system
     */
    delete(id?: string): import("rxjs").Observable<ActionResponse>;
    /**
     * Get single stream analytics configuration by stream id
     */
    get(id?: string): import("rxjs").Observable<EntityResponse<StreamAnalyticsConfig>>;
    /**
     * Find list of stream analytics configurations by query
     */
    find(search?: string, sort?: string, page?: number, size?: number): import("rxjs").Observable<EntitiesResponse<StreamAnalyticsConfig>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SupportStreamAnalyticsConfig, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SupportStreamAnalyticsConfig>;
}
