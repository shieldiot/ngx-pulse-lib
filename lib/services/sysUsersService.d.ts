import { RestUtil, EntityResponse, EntitiesResponse, ActionResponse } from '../../utils';
import { PulseConfig } from '../../config';
import { UserStatusCode } from '../enums/UserStatusCode';
import { UserMemberships } from '../entities/UserMemberships';
import { User } from '../entities/User';
import { UserTypeCode } from '../enums/UserTypeCode';
import * as i0 from "@angular/core";
export declare class SysUsersService {
    private config;
    private rest;
    private baseUrl;
    constructor(config: PulseConfig, rest: RestUtil);
    /**
     * Create new user
     */
    create(body?: User): import("rxjs").Observable<EntityResponse<User>>;
    /**
     * Update existing user in the system
     */
    update(body?: User): import("rxjs").Observable<EntityResponse<User>>;
    /**
     * Delete a user from the system
     */
    delete(id?: string): import("rxjs").Observable<ActionResponse>;
    /**
     * Get single user by id
     */
    get(id?: string): import("rxjs").Observable<EntityResponse<User>>;
    /**
     * Find list of users by query
     */
    find(search?: string, type?: UserTypeCode[], status?: UserStatusCode[], sort?: string, page?: number, size?: number): import("rxjs").Observable<EntitiesResponse<User>>;
    /**
     * Create new user with all its accounts memberships
     */
    createMembership(body?: UserMemberships): import("rxjs").Observable<EntityResponse<UserMemberships>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SysUsersService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SysUsersService>;
}
