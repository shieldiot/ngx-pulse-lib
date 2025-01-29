import { RestUtil, EntityResponse, EntitiesResponse, ActionResponse } from '../../utils';
import { PulseConfig } from '../../config';
import { Rule } from '../entities';
import { SeverityTypeCode } from '../enums';
import { RuleActivityStatusCode } from '../enums';
import { EventTypeCode } from '../enums';
import { TimeSeriesOfFloat } from '../common';
import { IntDistribution } from '../entities';
import { Distribution } from '../entities';
import * as i0 from "@angular/core";
export declare class UsrRulesService {
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
    find(streamId?: string, search?: string, from?: number, to?: number, eventSeverity?: SeverityTypeCode[], activityStatus?: RuleActivityStatusCode[], eventType?: EventTypeCode[], includeSysRules?: boolean, sort?: string, page?: number, size?: number): import("rxjs").Observable<EntitiesResponse<Rule>>;
    /**
     * Analyze rule configuration against historic data
     */
    analyze(from?: number, to?: number, interval?: number, size?: number, body?: Rule): import("rxjs").Observable<EntityResponse<TimeSeriesOfFloat>>;
    /**
     * Find rule distribution by severity filtered by query
     */
    countBySeverity(streamId?: string, search?: string, from?: number, to?: number, eventSeverity?: SeverityTypeCode[], activityStatus?: RuleActivityStatusCode[], eventType?: EventTypeCode[], includeSysRules?: boolean, sort?: string, page?: number, size?: number): import("rxjs").Observable<EntityResponse<IntDistribution>>;
    /**
     * Find alerts count distribution by rule filtered by query
     */
    countAlertsByRule(streamId?: string, search?: string, from?: number, to?: number, eventSeverity?: SeverityTypeCode[], activityStatus?: RuleActivityStatusCode[], eventType?: EventTypeCode[], includeSysRules?: boolean, sort?: string, page?: number, size?: number): import("rxjs").Observable<EntityResponse<Distribution>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<UsrRulesService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UsrRulesService>;
}
