import { RestUtil, EntityResponse, EntitiesResponse, ActionResponse } from '../../utils';
import { PulseConfig } from '../../config';
import { Integration } from '../entities';
import * as i0 from "@angular/core";
export declare class UsrIntegrationsService {
    private config;
    private rest;
    private baseUrl;
    constructor(config: PulseConfig, rest: RestUtil);
    /**
     * Create new integration
     */
    create(body?: Integration): import("rxjs").Observable<EntityResponse<Integration>>;
    /**
     * Update existing integration
     */
    update(body?: Integration): import("rxjs").Observable<EntityResponse<Integration>>;
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
    /**
     * Validate format of the templates in the fields
     */
    validate(body?: Integration): import("rxjs").Observable<EntityResponse<Integration>>;
    /**
     * Test the integration with pseudo data
     */
    test(body?: Integration): import("rxjs").Observable<EntityResponse<Integration>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<UsrIntegrationsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UsrIntegrationsService>;
}
