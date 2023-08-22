import { RestUtil, EntityResponse, EntitiesResponse, ActionResponse } from '../../utils';
import { PulseConfig } from '../../config';
import { EventTypeCode } from '../enums/EventTypeCode';
import { EventStatusCode } from '../enums/EventStatusCode';
import { EventWithDevice } from '../entities/EventWithDevice';
import { MaliciousIPData } from '../common/MaliciousIPData';
import { Event } from '../entities/Event';
import { SeverityTypeCode } from '../enums/SeverityTypeCode';
import { EventCategoryCode } from '../enums/EventCategoryCode';
import { RuleTypeCode } from '../enums/RuleTypeCode';
import { IntDistribution } from '../entities/IntDistribution';
import { TimeSeriesOf2D } from '../common/TimeSeriesOf2D';
import { TimeSeriesOfFloat } from '../common/TimeSeriesOfFloat';
import * as i0 from "@angular/core";
export declare class EventsService {
    private config;
    private rest;
    private baseUrl;
    constructor(config: PulseConfig, rest: RestUtil);
    /**
     * Get single event by id
     */
    get(id?: string): import("rxjs").Observable<EntityResponse<Event>>;
    /**
     * Find list of events by query
     */
    find(streamId?: string, deviceId?: string, search?: string, from?: number, to?: number, type?: EventTypeCode[], severity?: SeverityTypeCode[], category?: EventCategoryCode[], status?: EventStatusCode[], ruleId?: string[], ruleType?: RuleTypeCode[], sort?: string, page?: number, size?: number): import("rxjs").Observable<EntitiesResponse<Event>>;
    /**
     * Export list of events by query to a file with the specified format
     */
    exportFormat(format?: string, streamId?: string, deviceId?: string, search?: string, from?: number, to?: number, type?: EventTypeCode[], severity?: SeverityTypeCode[], category?: EventCategoryCode[], status?: EventStatusCode[], ruleId?: string[], ruleType?: RuleTypeCode[], sort?: string, page?: number, size?: number): import("rxjs").Observable<import("@angular/common/http").HttpEvent<Blob>>;
    /**
     * Find top 10 events by their severity filter by query
     */
    getTop(streamId?: string, deviceId?: string, search?: string, from?: number, to?: number, type?: EventTypeCode[], severity?: SeverityTypeCode[], category?: EventCategoryCode[], status?: EventStatusCode[], ruleId?: string[], ruleType?: RuleTypeCode[], sort?: string, page?: number, size?: number): import("rxjs").Observable<EntitiesResponse<EventWithDevice>>;
    /**
     * Get top malicious IPs
     */
    getTopMaliciousIPs(streamId?: string, top?: number): import("rxjs").Observable<EntitiesResponse<MaliciousIPData>>;
    /**
     * Find events distribution by type filtered by query
     */
    countByType(streamId?: string, deviceId?: string, search?: string, from?: number, to?: number, type?: EventTypeCode[], severity?: SeverityTypeCode[], category?: EventCategoryCode[], status?: EventStatusCode[], ruleId?: string[], ruleType?: RuleTypeCode[], sort?: string, page?: number, size?: number): import("rxjs").Observable<EntityResponse<IntDistribution>>;
    /**
     * Find events distribution by status filtered by query
     */
    countByStatus(streamId?: string, deviceId?: string, search?: string, from?: number, to?: number, type?: EventTypeCode[], severity?: SeverityTypeCode[], category?: EventCategoryCode[], status?: EventStatusCode[], ruleId?: string[], ruleType?: RuleTypeCode[], sort?: string, page?: number, size?: number): import("rxjs").Observable<EntityResponse<IntDistribution>>;
    /**
     * Find events distribution by severity filtered by query
     */
    countBySeverity(streamId?: string, deviceId?: string, search?: string, from?: number, to?: number, type?: EventTypeCode[], severity?: SeverityTypeCode[], category?: EventCategoryCode[], status?: EventStatusCode[], ruleId?: string[], ruleType?: RuleTypeCode[], sort?: string, page?: number, size?: number): import("rxjs").Observable<EntityResponse<IntDistribution>>;
    /**
     * Find events distribution by rule filtered by query
     */
    countByRule(streamId?: string, deviceId?: string, search?: string, from?: number, to?: number, type?: EventTypeCode[], severity?: SeverityTypeCode[], category?: EventCategoryCode[], status?: EventStatusCode[], ruleId?: string[], ruleType?: RuleTypeCode[], sort?: string, page?: number, size?: number): import("rxjs").Observable<EntityResponse<IntDistribution>>;
    /**
     * Find events distribution by category filtered by query
     */
    countByCategory(streamId?: string, deviceId?: string, search?: string, from?: number, to?: number, type?: EventTypeCode[], severity?: SeverityTypeCode[], category?: EventCategoryCode[], status?: EventStatusCode[], ruleId?: string[], ruleType?: RuleTypeCode[], sort?: string, page?: number, size?: number): import("rxjs").Observable<EntityResponse<IntDistribution>>;
    /**
     * Set event status
     */
    applyAction(id?: string, status?: EventStatusCode): import("rxjs").Observable<ActionResponse>;
    /**
     * Get current shieldex value as ActionResponse, the Key contains the shield index and the data includes the trend
     */
    getShieldex(): import("rxjs").Observable<ActionResponse>;
    /**
     * Get histogram of events over time by dimension (type | severity | status | ruleType | category)
     */
    eventsTimeline(streamId?: string, deviceId?: string, dimension?: string, from?: number, to?: number, type?: EventTypeCode[], severity?: SeverityTypeCode[], category?: EventCategoryCode[], status?: EventStatusCode[], ruleId?: string[], ruleType?: RuleTypeCode[], sort?: string, page?: number, size?: number): import("rxjs").Observable<EntityResponse<TimeSeriesOf2D>>;
    /**
     * Get histogram of shieldex values over time
     */
    shieldexTimeline(streamId?: string, from?: number, to?: number): import("rxjs").Observable<EntityResponse<TimeSeriesOfFloat>>;
    /**
     * Export event source file
     */
    exportSource(id?: string, timestamp?: number): import("rxjs").Observable<import("@angular/common/http").HttpEvent<Blob>>;
    /**
     * Get total number devices at risk (affected by the events matching the query)
     */
    getTotalDevicesAtRisk(streamId?: string, search?: string, from?: number, to?: number, type?: EventTypeCode[], severity?: SeverityTypeCode[], category?: EventCategoryCode[], status?: EventStatusCode[], ruleId?: string[], ruleType?: RuleTypeCode[]): import("rxjs").Observable<ActionResponse>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EventsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EventsService>;
}
