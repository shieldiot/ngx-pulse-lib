import { RestUtil, EntityResponse, EntitiesResponse, ActionResponse } from '../../utils';
import { PulseConfig } from '../../config';
import { StringIntValue } from '../common';
import { ApiKey } from '../entities';
import * as i0 from "@angular/core";
export declare class SysKeysService {
    private config;
    private rest;
    private baseUrl;
    constructor(config: PulseConfig, rest: RestUtil);
    /**
     * Create new API key
     */
    create(body?: ApiKey): import("rxjs").Observable<EntityResponse<ApiKey>>;
    /**
     * Update existing API key in the system
     */
    update(body?: ApiKey): import("rxjs").Observable<EntityResponse<ApiKey>>;
    /**
     * Delete API key from the system
     */
    delete(id?: string): import("rxjs").Observable<ActionResponse>;
    /**
     * Get single API key by id
     */
    get(id?: string): import("rxjs").Observable<EntityResponse<ApiKey>>;
    /**
     * Find list of API keys by free test search
     */
    find(search?: string, sort?: string, page?: number, size?: number): import("rxjs").Observable<EntitiesResponse<ApiKey>>;
    /**
     * Get list of services for the ACL
     */
    listServices(): import("rxjs").Observable<EntitiesResponse<StringIntValue>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SysKeysService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SysKeysService>;
}
