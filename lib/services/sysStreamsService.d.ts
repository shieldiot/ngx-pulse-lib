import { RestUtil, EntityResponse, EntitiesResponse, ActionResponse } from '../../utils';
import { PulseConfig } from '../../config';
import { Stream } from '../entities/Stream';
import * as i0 from "@angular/core";
export declare class SysStreamsService {
    private config;
    private rest;
    private baseUrl;
    constructor(config: PulseConfig, rest: RestUtil);
    /**
     * Create new stream
     */
    create(body?: Stream): import("rxjs").Observable<EntityResponse<Stream>>;
    /**
     * Update existing stream in the system
     */
    update(body?: Stream): import("rxjs").Observable<EntityResponse<Stream>>;
    /**
     * Delete a stream from the system
     */
    delete(id?: string): import("rxjs").Observable<ActionResponse>;
    /**
     * Get single stream by id
     */
    get(id?: string): import("rxjs").Observable<EntityResponse<Stream>>;
    /**
     * Find list of streams by query
     */
    find(accountId?: string, search?: string, sort?: string, page?: number, size?: number): import("rxjs").Observable<EntitiesResponse<Stream>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SysStreamsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SysStreamsService>;
}
