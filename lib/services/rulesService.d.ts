import { RestUtil, EntityResponse, EntitiesResponse, ActionResponse } from '../../utils';
import { PulseConfig } from '../../config';
import { Rule } from '../entities/Rule';
import * as i0 from "@angular/core";
export declare class RulesService {
    private config;
    private rest;
    private baseUrl;
    constructor(config: PulseConfig, rest: RestUtil);
    /**
     * Create new rule
     */
    create(body?: Rule): import("rxjs").Observable<EntityResponse<Rule>>;
    /**
     * Update existing rule in the system
     */
    update(body?: Rule): import("rxjs").Observable<EntityResponse<Rule>>;
    /**
     * Delete a rule from the system
     */
    delete(id?: string): import("rxjs").Observable<ActionResponse>;
    /**
     * Get single rule by id
     */
    get(id?: string): import("rxjs").Observable<EntityResponse<Rule>>;
    /**
     * Find list of rules by query
     */
    find(streamId?: string, search?: string, sort?: string, page?: number, size?: number): import("rxjs").Observable<EntitiesResponse<Rule>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<RulesService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RulesService>;
}
