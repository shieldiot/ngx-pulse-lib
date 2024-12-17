import { RestUtil, EntityResponse, EntitiesResponse, ActionResponse } from '../../utils';
import { PulseConfig } from '../../config';
import { Group } from '../entities';
import { User } from '../entities';
import * as i0 from "@angular/core";
export declare class SysGroupsService {
    private config;
    private rest;
    private baseUrl;
    constructor(config: PulseConfig, rest: RestUtil);
    /**
     * Create new groups
     */
    create(body?: Group): import("rxjs").Observable<EntityResponse<Group>>;
    /**
     * Update existing group in the system
     */
    update(body?: Group): import("rxjs").Observable<EntityResponse<Group>>;
    /**
     * Delete a group from the system
     */
    delete(id?: string): import("rxjs").Observable<ActionResponse>;
    /**
     * Get single group by id
     */
    get(id?: string): import("rxjs").Observable<EntityResponse<Group>>;
    /**
     * Find list of groups by query
     */
    find(search?: string, sort?: string, page?: number, size?: number): import("rxjs").Observable<EntitiesResponse<Group>>;
    /**
     * Get list of all users in the group
     */
    getUsers(id?: string): import("rxjs").Observable<EntityResponse<User>>;
    /**
     * Add user to the group
     */
    setDefaultAccount(id?: string, userId?: string): import("rxjs").Observable<ActionResponse>;
    /**
     * Remove user from the group
     */
    getAccessToken(id?: string, userId?: string): import("rxjs").Observable<ActionResponse>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SysGroupsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SysGroupsService>;
}
