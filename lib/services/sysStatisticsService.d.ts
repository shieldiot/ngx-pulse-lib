import { RestUtil, EntityResponse } from '../../utils';
import { PulseConfig } from '../../config';
import { Distribution } from '../entities';
import * as i0 from "@angular/core";
export declare class SysStatisticsService {
    private config;
    private rest;
    private baseUrl;
    constructor(config: PulseConfig, rest: RestUtil);
    /**
     * Get accounts distribution by field
     */
    getAccountsCount(field?: string): import("rxjs").Observable<EntityResponse<Distribution>>;
    /**
     * Get streams distribution by field
     */
    getStreamsCount(field?: string): import("rxjs").Observable<EntityResponse<Distribution>>;
    /**
     * Get devices distribution by field
     */
    getDevicesCount(field?: string): import("rxjs").Observable<EntityResponse<Distribution>>;
    /**
     * Get users distribution by field
     */
    getUsersCount(field?: string): import("rxjs").Observable<EntityResponse<Distribution>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SysStatisticsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SysStatisticsService>;
}
