import { RestUtil, EntityResponse, EntitiesResponse, ActionResponse } from '../../utils';
import { PulseConfig } from '../../config';
import { ConfigParam } from '../entities';
import { ConfigParams } from '../entities';
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
     * Update group of configuration parameters in the system in a bulk
     */
    updateGroup(body?: ConfigParams): import("rxjs").Observable<EntityResponse<ConfigParams>>;
    /**
     * Delete a configuration parameter from the system
     */
    delete(id?: string): import("rxjs").Observable<ActionResponse>;
    /**
     * Get single configuration parameter by id
     */
    get(id?: string): import("rxjs").Observable<EntityResponse<ConfigParam>>;
    /**
     * Get list of configuration parameters keys and their description
     */
    keys(search?: string, sort?: string, page?: number, size?: number): import("rxjs").Observable<EntitiesResponse<ConfigParam>>;
    /**
     * Find list of configuration parameters by query
     */
    find(search?: string, sort?: string, page?: number, size?: number): import("rxjs").Observable<EntitiesResponse<ConfigParam>>;
    /**
     * Test email template by configId
     */
    testEmailTemplate(configId?: string, addresses?: string[]): import("rxjs").Observable<ActionResponse>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SysConfigService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SysConfigService>;
}
