import { RestUtil, EntityResponse, EntitiesResponse, ActionResponse } from '../../utils';
import { PulseConfig } from '../../config';
import { AccountStatusCode } from '../enums/AccountStatusCode';
import { Account } from '../entities/Account';
import { AccountSettings } from '../entities/AccountSettings';
import { AccountTypeCode } from '../enums/AccountTypeCode';
import * as i0 from "@angular/core";
export declare class SysAccountsService {
    private config;
    private rest;
    private baseUrl;
    constructor(config: PulseConfig, rest: RestUtil);
    /**
     * Create new account
     */
    create(body?: Account): import("rxjs").Observable<EntityResponse<Account>>;
    /**
     * Update existing account in the system
     */
    update(body?: Account): import("rxjs").Observable<EntityResponse<Account>>;
    /**
     * Update existing account settings in the system
     */
    updateSettings(body?: AccountSettings): import("rxjs").Observable<ActionResponse>;
    /**
     * Delete account from the system and all its related content
     */
    delete(id?: string): import("rxjs").Observable<ActionResponse>;
    /**
     * Get single account by id
     */
    get(id?: string): import("rxjs").Observable<EntityResponse<Account>>;
    /**
     * Find list of accounts by query
     */
    find(search?: string, type?: AccountTypeCode[], status?: AccountStatusCode[], sort?: string, page?: number, size?: number): import("rxjs").Observable<EntitiesResponse<Account>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SysAccountsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SysAccountsService>;
}
