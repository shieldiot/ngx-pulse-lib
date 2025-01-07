import { RestUtil, EntityResponse, EntitiesResponse, ActionResponse } from '../../utils';
import { PulseConfig } from '../../config';
import { Image } from '../entities';
import { AccountReportDTO } from '../entities';
import { Account } from '../entities';
import { AccountSettings } from '../entities';
import { AccountTypeCode } from '../enums';
import { AccountStatusCode } from '../enums';
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
    /**
     * Save account's logo image
     */
    saveLogo(): import("rxjs").Observable<ActionResponse>;
    /**
     * Get account's logo image
     */
    getLogo(id?: string): import("rxjs").Observable<EntityResponse<Image>>;
    /**
     * Find list of account reports by query
     */
    findAccountReports(search?: string, type?: AccountTypeCode[], status?: AccountStatusCode[], sort?: string, page?: number, size?: number): import("rxjs").Observable<EntitiesResponse<AccountReportDTO>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SysAccountsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SysAccountsService>;
}
