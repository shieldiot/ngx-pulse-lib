import { RestUtil, EntityResponse, EntitiesResponse, ActionResponse } from '../../utils';
import { PulseConfig } from '../../config';
import { RuleTemplate } from '../entities/RuleTemplate';
import * as i0 from "@angular/core";
export declare class SysRuleTemplatesService {
    private config;
    private rest;
    private baseUrl;
    constructor(config: PulseConfig, rest: RestUtil);
    /**
     * Create new rule template
     */
    create(body?: RuleTemplate): import("rxjs").Observable<EntityResponse<RuleTemplate>>;
    /**
     * Update existing rule template
     */
    update(body?: RuleTemplate): import("rxjs").Observable<EntityResponse<RuleTemplate>>;
    /**
     * Delete a rule template from the system
     */
    delete(id?: string): import("rxjs").Observable<ActionResponse>;
    /**
     * Get single rule template by id
     */
    get(id?: string): import("rxjs").Observable<EntityResponse<RuleTemplate>>;
    /**
     * Find list of rule templates by query
     */
    find(search?: string, sort?: string, page?: number, size?: number): import("rxjs").Observable<EntitiesResponse<RuleTemplate>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SysRuleTemplatesService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SysRuleTemplatesService>;
}
