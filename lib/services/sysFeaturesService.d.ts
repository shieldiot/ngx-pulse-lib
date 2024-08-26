import { RestUtil, EntityResponse, EntitiesResponse, ActionResponse } from '../../utils';
import { PulseConfig } from '../../config';
import { FeaturesGroup } from '../entities';
import { Feature } from '../entities';
import * as i0 from "@angular/core";
export declare class SysFeaturesService {
    private config;
    private rest;
    private baseUrl;
    constructor(config: PulseConfig, rest: RestUtil);
    /**
     * Find list of feature
     */
    findFeatures(search?: string, sort?: string, page?: number, size?: number): import("rxjs").Observable<EntitiesResponse<Feature>>;
    /**
     * Create new features group
     */
    createFeaturesGroup(body?: FeaturesGroup): import("rxjs").Observable<EntityResponse<FeaturesGroup>>;
    /**
     * Update existing features group
     */
    updateFeaturesGroup(body?: FeaturesGroup): import("rxjs").Observable<EntityResponse<FeaturesGroup>>;
    /**
     * Delete features group from the system
     */
    deleteFeaturesGroup(id?: string): import("rxjs").Observable<ActionResponse>;
    /**
     * Get single features group by id
     */
    getFeaturesGroup(id?: string): import("rxjs").Observable<EntityResponse<FeaturesGroup>>;
    /**
     * Find list of features groups
     */
    findFeaturesGroups(search?: string, sort?: string, page?: number, size?: number): import("rxjs").Observable<EntitiesResponse<FeaturesGroup>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SysFeaturesService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SysFeaturesService>;
}
