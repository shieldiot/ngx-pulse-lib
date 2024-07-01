import { RestUtil, EntityResponse, EntitiesResponse, ActionResponse } from '../../utils';
import { PulseConfig } from '../../config';
import { ConfigParam } from '../entities/ConfigParam';
import * as i0 from "@angular/core";
export declare class SysConfigService {
    private config;
    private rest;
    private baseUrl;
    constructor(config: PulseConfig, rest: RestUtil);
    /**
     * Create new configuration parameter
     */
    create(body?: ConfigParam): import("rxjs").Observable<EntityResponse<ConfigParam>>;
    /**
     * Update existing configuration parameter in the system
     */
    update(body?: ConfigParam): import("rxjs").Observable<EntityResponse<ConfigParam>>;
    /**
     * Delete a configuration parameter from the system
     */
    delete(id?: string): import("rxjs").Observable<ActionResponse>;
    /**
     * Get single configuration parameter by id
     */
    get(id?: string): import("rxjs").Observable<EntityResponse<ConfigParam>>;
    /**
     * Find list of configuration parameters by query
     */
    find(search?: string, sort?: string, page?: number, size?: number): import("rxjs").Observable<EntitiesResponse<ConfigParam>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SysConfigService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SysConfigService>;
}
