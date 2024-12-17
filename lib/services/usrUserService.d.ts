import { RestUtil, EntityResponse, EntitiesResponse, ActionResponse } from '../../utils';
import { PulseConfig } from '../../config';
import { FeatureCode } from '../enums';
import { LoginParams } from '../common';
import { User } from '../entities';
import { Image } from '../entities';
import { Stream } from '../entities';
import { UserMemberships } from '../entities';
import { AccountDTO } from '../entities';
import { Feature } from '../entities';
import { ConfigParam } from '../entities';
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
    authorize(body?: LoginParams): import("rxjs").Observable<EntityResponse<User>>;
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
     * Get user's current account logo
     */
    getAccountLogo(): import("rxjs").Observable<EntityResponse<Image>>;
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
    /**
     * Save user's avatar image
     */
    saveAvatar(body?: Image): import("rxjs").Observable<ActionResponse>;
    /**
     * Get user's avatar image
     */
    getAvatar(): import("rxjs").Observable<EntityResponse<Image>>;
    /**
     * Get arbitrary image by Id
     */
    getImage(id?: string): import("rxjs").Observable<EntityResponse<Image>>;
    /**
     * Get arbitrary image by Id as stream of bytes
     */
    getImageBytes(id?: string): import("rxjs").Observable<import("@angular/common/http").HttpEvent<Blob>>;
    /**
     * Get personal access token
     */
    getAccessToken(): import("rxjs").Observable<ActionResponse>;
    /**
     * Ask for premium request
     */
    premiumRequest(featureCode?: FeatureCode): import("rxjs").Observable<ActionResponse>;
    /**
     * Get system configuration parameters
     */
    getSysConfig(): import("rxjs").Observable<EntitiesResponse<ConfigParam>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<UsrUserService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UsrUserService>;
}
