import { RestUtil, EntitiesResponse } from '../../utils';
import { PulseConfig } from '../../config';
import { UsageRecord } from '../entities/UsageRecord';
import { SessionRecord } from '../entities/SessionRecord';
import * as i0 from "@angular/core";
export declare class UsrNetworkService {
    private config;
    private rest;
    private baseUrl;
    constructor(config: PulseConfig, rest: RestUtil);
    /**
     * Find list of usage records by query
     */
    findUsage(streamId?: string, deviceId?: string, simId?: string, from?: number, to?: number, include?: number, sort?: string, page?: number, size?: number): import("rxjs").Observable<EntitiesResponse<UsageRecord>>;
    /**
     * Find list of session records by query
     */
    findSession(streamId?: string, deviceId?: string, simId?: string, from?: number, to?: number, include?: number, sort?: string, page?: number, size?: number): import("rxjs").Observable<EntitiesResponse<SessionRecord>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<UsrNetworkService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UsrNetworkService>;
}
