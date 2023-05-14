import { RestUtil, EntityResponse, EntitiesResponse, ActionResponse } from '../../utils';
import { PulseConfig } from '../../config';
import { Rule } from '../entities/Rule';
import { Integration } from '../entities/Integration';
import * as i0 from "@angular/core";
export declare class UsrIntegrationsService {
    private config;
    private rest;
    private baseUrl;
    constructor(config: PulseConfig, rest: RestUtil);
    /**
     * Create new integration
     */
    create(body?: Rule): import("rxjs").Observable<EntityResponse<Integration>>;
    /**
     * Update existing integration
     */
    update(body?: Rule): import("rxjs").Observable<EntityResponse<Integration>>;
    /**
     * Delete integration from the system
     */
    delete(id?: string): import("rxjs").Observable<ActionResponse>;
    /**
     * Get single integration by id
     */
    get(id?: string): import("rxjs").Observable<EntityResponse<Integration>>;
    /**
     * Find list of integrations by query
     */
    find(accountId?: string, streamId?: string, search?: string, sort?: string, page?: number, size?: number): import("rxjs").Observable<EntitiesResponse<Integration>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<UsrIntegrationsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UsrIntegrationsService>;
}
