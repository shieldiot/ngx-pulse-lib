import { RestUtil, EntityResponse, EntitiesResponse } from '../../utils';
import { PulseConfig } from '../../config';
import { Checkpoint } from '../entities/Checkpoint';
import * as i0 from "@angular/core";
export declare class SysCheckpointsService {
    private config;
    private rest;
    private baseUrl;
    constructor(config: PulseConfig, rest: RestUtil);
    /**
     * Get single checkpoint entry by id
     */
    get(id?: string): import("rxjs").Observable<EntityResponse<Checkpoint>>;
    /**
     * Find list of checkpoint entries by query
     */
    find(from?: number, to?: number, accountId?: string, streamId?: string, search?: string, sort?: string, page?: number, size?: number): import("rxjs").Observable<EntitiesResponse<Checkpoint>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SysCheckpointsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SysCheckpointsService>;
}
