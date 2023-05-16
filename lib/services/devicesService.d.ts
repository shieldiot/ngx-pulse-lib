import { RestUtil, EntityResponse, EntitiesResponse, ActionResponse } from '../../utils';
import { PulseConfig } from '../../config';
import { DeviceTypeCode } from '../enums/DeviceTypeCode';
import { DeviceStatusCode } from '../enums/DeviceStatusCode';
import { DeviceWithEvents } from '../entities/DeviceWithEvents';
import { IntDistribution } from '../entities/IntDistribution';
import { DeviceActionCode } from '../enums/DeviceActionCode';
import { Device } from '../entities/Device';
import * as i0 from "@angular/core";
export declare class DevicesService {
    private config;
    private rest;
    private baseUrl;
    constructor(config: PulseConfig, rest: RestUtil);
    /**
     * Create new device
     */
    create(): import("rxjs").Observable<EntityResponse<Device>>;
    /**
     * Update existing device in the system
     */
    update(body?: Device): import("rxjs").Observable<EntityResponse<Device>>;
    /**
     * Delete device from the system
     */
    delete(id?: string): import("rxjs").Observable<ActionResponse>;
    /**
     * Get single device by id
     */
    get(id?: string): import("rxjs").Observable<EntityResponse<Device>>;
    /**
     * Find list of devices by query
     */
    find(streamId?: string, search?: string, type?: DeviceTypeCode[], status?: DeviceStatusCode[], risk?: number, sort?: string, page?: number, size?: number): import("rxjs").Observable<EntitiesResponse<Device>>;
    /**
     * Export list of devices by query to a file with the specified format
     */
    exportFormat(format?: string, streamId?: string, search?: string, type?: DeviceTypeCode[], status?: DeviceStatusCode[], risk?: number, sort?: string, page?: number, size?: number): import("rxjs").Observable<import("@angular/common/http").HttpEvent<Blob>>;
    /**
     * Find top 10 devices by their score filter by query
     */
    findTop(streamId?: string, search?: string, type?: DeviceTypeCode[], status?: DeviceStatusCode[], risk?: number, sort?: string, page?: number, size?: number): import("rxjs").Observable<EntitiesResponse<DeviceWithEvents>>;
    /**
     * Find device distribution by type filtered by query
     */
    countByType(streamId?: string, search?: string, type?: DeviceTypeCode[], status?: DeviceStatusCode[], risk?: number, sort?: string, page?: number, size?: number): import("rxjs").Observable<EntityResponse<IntDistribution>>;
    /**
     * Find device distribution by status filtered by query
     */
    countByStatus(streamId?: string, search?: string, type?: DeviceTypeCode[], status?: DeviceStatusCode[], risk?: number, sort?: string, page?: number, size?: number): import("rxjs").Observable<EntityResponse<IntDistribution>>;
    /**
     * Find device distribution by action filtered by query
     */
    countByAction(streamId?: string, search?: string, type?: DeviceTypeCode[], status?: DeviceStatusCode[], risk?: number, sort?: string, page?: number, size?: number): import("rxjs").Observable<EntityResponse<IntDistribution>>;
    /**
     * Add tag to a device
     */
    addTag(id?: string, tag?: string): import("rxjs").Observable<EntityResponse<Device>>;
    /**
     * Delete a tag from the device
     */
    deleteTag(id?: string, tag?: string): import("rxjs").Observable<EntityResponse<Device>>;
    /**
     * Apply action on a device
     */
    applyAction(id?: string, action?: DeviceActionCode): import("rxjs").Observable<ActionResponse>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DevicesService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DevicesService>;
}
