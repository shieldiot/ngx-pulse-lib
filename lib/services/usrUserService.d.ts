import { RestUtil, EntityResponse, EntitiesResponse, ActionResponse } from '../../utils';
import { PulseConfig } from '../../config';
import { UserMemberships } from '../entities/UserMemberships';
import { LoginParams } from '../common/LoginParams';
import { AccountDTO } from '../entities/AccountDTO';
import { Feature } from '../entities/Feature';
import { Stream } from '../entities/Stream';
import * as i0 from "@angular/core";
export declare class UsrUserService {
    private config;
    private rest;
    private baseUrl;
    constructor(config: PulseConfig, rest: RestUtil);
    /**
     * Authorize user, verify user exists in the system (user was already authenticated by OAuth provider)
     * The response includes access token valid for 20 minutes. The client side should renew the token before expiration using refresh-token method
     */
    authorize(body?: LoginParams): import("rxjs").Observable<ActionResponse>;
    /**
     * Refresh token (set new expiration time) and associate with new account if required
     * The response includes the account details and the newly refreshed token in the HTTP header X-ACCESS-TOKEN
     */
    setAccount(id?: string): import("rxjs").Observable<EntityResponse<AccountDTO>>;
    /**
     * Get the user's current account details
     */
    getAccount(): import("rxjs").Observable<EntityResponse<AccountDTO>>;
    /**
     * Get the user's current account features (aggregated list of all features in all the account's features groups)
     */
    getAccountFeatures(): import("rxjs").Observable<EntitiesResponse<Feature>>;
    /**
     * Get the user's current account streams (accessible by the user)
     */
    getAccountStreams(): import("rxjs").Observable<EntitiesResponse<Stream>>;
    /**
     * Get all the user memberships (all accounts that the current user has access to)
     */
    getMemberships(): import("rxjs").Observable<EntityResponse<UserMemberships>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<UsrUserService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UsrUserService>;
}
