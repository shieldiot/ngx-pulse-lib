import { RestUtil, EntityResponse, EntitiesResponse, ActionResponse } from '../../utils';
import { PulseConfig } from '../../config';
import { Member } from '../entities/Member';
import * as i0 from "@angular/core";
export declare class SysMembersService {
    private config;
    private rest;
    private baseUrl;
    constructor(config: PulseConfig, rest: RestUtil);
    /**
     * Create new member
     */
    create(body?: Member): import("rxjs").Observable<EntityResponse<Member>>;
    /**
     * Update existing member in the system
     */
    update(body?: Member): import("rxjs").Observable<EntityResponse<Member>>;
    /**
     * Delete member from the system
     */
    delete(id?: string): import("rxjs").Observable<ActionResponse>;
    /**
     * Get single member by id
     */
    get(id?: string): import("rxjs").Observable<EntityResponse<Member>>;
    /**
     * Find list of members by query
     */
    find(): import("rxjs").Observable<EntitiesResponse<Member>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SysMembersService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SysMembersService>;
}
