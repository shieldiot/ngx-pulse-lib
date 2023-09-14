import { RestUtil, EntitiesResponse } from '../../utils';
import { PulseConfig } from '../../config';
import { Insight } from '../entities/Insight';
import * as i0 from "@angular/core";
export declare class UsrInsightsService {
    private config;
    private rest;
    private baseUrl;
    constructor(config: PulseConfig, rest: RestUtil);
    /**
     * Find list of insights by day
     */
    getDailyInsights(dayId?: string): import("rxjs").Observable<EntitiesResponse<Insight>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<UsrInsightsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UsrInsightsService>;
}
