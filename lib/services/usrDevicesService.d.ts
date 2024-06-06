import { RestUtil, EntityResponse, EntitiesResponse, ActionResponse } from '../../utils';
import { PulseConfig } from '../../config';
import { DeviceStatusCode } from '../enums/DeviceStatusCode';
import { DeviceWithEvents } from '../entities/DeviceWithEvents';
import { DeviceActionCode } from '../enums/DeviceActionCode';
import { NetworkMapTypeCode } from '../enums/NetworkMapTypeCode';
import { TimeSeriesOfDataConsumption } from '../common/TimeSeriesOfDataConsumption';
import { Device } from '../entities/Device';
import { DeviceTypeCode } from '../enums/DeviceTypeCode';
import { SeverityTypeCode } from '../enums/SeverityTypeCode';
import { IntDistribution } from '../entities/IntDistribution';
import { NetworkMap } from '../common/NetworkMap';
import { TimeSeriesOfDeviceReport } from '../entities/TimeSeriesOfDeviceReport';
import { DeviceReport } from '../entities/DeviceReport';
import * as i0 from "@angular/core";
export declare class UsrDevicesService {
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
    find(streamId?: string, search?: string, type?: DeviceTypeCode[], status?: DeviceStatusCode[], risk?: SeverityTypeCode[], scoreRange?: number[], sort?: string, page?: number, size?: number): import("rxjs").Observable<EntitiesResponse<Device>>;
    /**
     * Export list of devices by query to a file with the specified format
     */
    exportFormat(format?: string, streamId?: string, search?: string, type?: DeviceTypeCode[], status?: DeviceStatusCode[], risk?: SeverityTypeCode[], sort?: string, page?: number, size?: number): import("rxjs").Observable<import("@angular/common/http").HttpEvent<Blob>>;
    /**
     * Find top 10 devices by their score filter by query
     */
    findTop(streamId?: string, search?: string, type?: DeviceTypeCode[], status?: DeviceStatusCode[], risk?: SeverityTypeCode[], scoreRange?: number[], sort?: string, page?: number, size?: number): import("rxjs").Observable<EntitiesResponse<DeviceWithEvents>>;
    /**
     * Find device distribution by type filtered by query
     */
    countByType(streamId?: string, search?: string, type?: DeviceTypeCode[], status?: DeviceStatusCode[], risk?: SeverityTypeCode[], scoreRange?: number[], sort?: string, page?: number, size?: number): import("rxjs").Observable<EntityResponse<IntDistribution>>;
    /**
     * Find device distribution by status filtered by query
     */
    countByStatus(streamId?: string, search?: string, type?: DeviceTypeCode[], status?: DeviceStatusCode[], risk?: SeverityTypeCode[], scoreRange?: number[], sort?: string, page?: number, size?: number): import("rxjs").Observable<EntityResponse<IntDistribution>>;
    /**
     * Find device distribution by action filtered by query
     */
    countByAction(streamId?: string, search?: string, type?: DeviceTypeCode[], status?: DeviceStatusCode[], risk?: SeverityTypeCode[], scoreRange?: number[], sort?: string, page?: number, size?: number): import("rxjs").Observable<EntityResponse<IntDistribution>>;
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
    /**
     * Get network map of devices
     */
    getNetworkMap(streamId?: string, from?: number, to?: number, type?: DeviceTypeCode[], tag?: string[], id?: string[], mapType?: NetworkMapTypeCode, ips?: string[]): import("rxjs").Observable<EntityResponse<NetworkMap>>;
    /**
     * Get daily device report over time (daily device report includes: total devices, active devices, devices at risk)
     */
    getDeviceReportTimeline(streamId?: string, from?: number, to?: number): import("rxjs").Observable<EntityResponse<TimeSeriesOfDeviceReport>>;
    /**
     * Get latest device report, the Key contains latest devices at risk number (works in account level)
     */
    getLatestDeviceReport(): import("rxjs").Observable<EntityResponse<DeviceReport>>;
    /**
     * Get device / group of devices consumption over time
     */
    getConsumptionTimeline(streamId?: string, from?: number, to?: number, type?: DeviceTypeCode[], tag?: string[], id?: string[]): import("rxjs").Observable<EntityResponse<TimeSeriesOfDataConsumption>>;
    /**
     * Get device / group of devices consumption over time
     */
    getConsumptionTrend(streamId?: string, from?: number, to?: number, type?: DeviceTypeCode[], tag?: string[], id?: string[]): import("rxjs").Observable<ActionResponse>;
    /**
     * Upload list of devices
     */
    uploadDevices(file: File, streamId?: string, ip?: number, iccid?: number, imsi?: number, msisdn?: number, imei?: number, name?: number, operator?: number, label?: number[], tag?: number[]): import("rxjs").Observable<import("@angular/common/http").HttpEvent<unknown>>;
    /**
     * Find list of devices by Insight id query
     */
    findByInsightContext(streamId?: string, insightId?: string, sort?: string, page?: number, size?: number): import("rxjs").Observable<EntitiesResponse<Device>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<UsrDevicesService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UsrDevicesService>;
}
