import { RestUtil, EntityResponse, EntitiesResponse, ActionResponse } from '../../utils';
import { PulseConfig } from '../../config';
import { DeviceActionCode } from '../enums';
import { StringKeyValue } from '../common';
import { EventTypeCode } from '../enums';
import { RuleTypeCode } from '../enums';
import { TimeSeriesOfFloat } from '../common';
import { MaliciousIPCard } from '../common';
import { EventStatusCode } from '../enums';
import { MaliciousIPData } from '../common';
import { Alert } from '../entities';
import { SeverityTypeCode } from '../enums';
import { EventCategoryCode } from '../enums';
import { AlertWithDevice } from '../entities';
import { IntDistribution } from '../entities';
import { TimeSeriesOf2D } from '../common';
import * as i0 from "@angular/core";
export declare class UsrAlertsService {
    private config;
    private rest;
    private baseUrl;
    constructor(config: PulseConfig, rest: RestUtil);
    /**
     * Get single alert by id
     */
    get(id?: string): import("rxjs").Observable<EntityResponse<Alert>>;
    /**
     * Find list of alerts by query
     */
    find(streamId?: string, deviceId?: string, search?: string, from?: number, to?: number, type?: EventTypeCode[], severity?: SeverityTypeCode[], category?: EventCategoryCode[], status?: EventStatusCode[], ruleId?: string[], targetIp?: string, ruleType?: RuleTypeCode[], sort?: string, page?: number, size?: number, withoutOccurrences?: boolean): import("rxjs").Observable<EntitiesResponse<Alert>>;
    /**
     * Export list of alerts by query to a file with the specified format
     */
    exportFormat(format?: string, streamId?: string, deviceId?: string, search?: string, from?: number, to?: number, type?: EventTypeCode[], severity?: SeverityTypeCode[], category?: EventCategoryCode[], status?: EventStatusCode[], ruleId?: string[], targetIp?: string, ruleType?: RuleTypeCode[], sort?: string, page?: number, size?: number): import("rxjs").Observable<import("@angular/common/http").HttpEvent<Blob>>;
    /**
     * Find top 10 alerts by their severity filter by query
     */
    getTop(streamId?: string, deviceId?: string, search?: string, from?: number, to?: number, type?: EventTypeCode[], severity?: SeverityTypeCode[], category?: EventCategoryCode[], status?: EventStatusCode[], ruleId?: string[], targetIp?: string, ruleType?: RuleTypeCode[], sort?: string, page?: number, size?: number, withoutOccurrences?: boolean): import("rxjs").Observable<EntitiesResponse<AlertWithDevice>>;
    /**
     * Get top malicious IPs
     */
    getTopMaliciousIPs(streamId?: string, top?: number, from?: number, to?: number): import("rxjs").Observable<EntitiesResponse<MaliciousIPData>>;
    /**
     * Find alerts distribution by type filtered by query
     */
    countByType(streamId?: string, deviceId?: string, search?: string, from?: number, to?: number, type?: EventTypeCode[], severity?: SeverityTypeCode[], category?: EventCategoryCode[], status?: EventStatusCode[], ruleId?: string[], targetIp?: string, ruleType?: RuleTypeCode[], sort?: string, page?: number, size?: number, withoutOccurrences?: boolean): import("rxjs").Observable<EntityResponse<IntDistribution>>;
    /**
     * Find alerts distribution by status filtered by query
     */
    countByStatus(streamId?: string, deviceId?: string, search?: string, from?: number, to?: number, type?: EventTypeCode[], severity?: SeverityTypeCode[], category?: EventCategoryCode[], status?: EventStatusCode[], ruleId?: string[], targetIp?: string, ruleType?: RuleTypeCode[], sort?: string, page?: number, size?: number, withoutOccurrences?: boolean): import("rxjs").Observable<EntityResponse<IntDistribution>>;
    /**
     * Find alerts distribution by severity filtered by query
     */
    countBySeverity(streamId?: string, deviceId?: string, search?: string, from?: number, to?: number, type?: EventTypeCode[], severity?: SeverityTypeCode[], category?: EventCategoryCode[], status?: EventStatusCode[], ruleId?: string[], targetIp?: string, ruleType?: RuleTypeCode[], sort?: string, page?: number, size?: number, withoutOccurrences?: boolean): import("rxjs").Observable<EntityResponse<IntDistribution>>;
    /**
     * Find alerts distribution by rule filtered by query
     */
    countByRule(streamId?: string, deviceId?: string, search?: string, from?: number, to?: number, type?: EventTypeCode[], severity?: SeverityTypeCode[], category?: EventCategoryCode[], status?: EventStatusCode[], ruleId?: string[], targetIp?: string, ruleType?: RuleTypeCode[], sort?: string, page?: number, size?: number, withoutOccurrences?: boolean): import("rxjs").Observable<EntityResponse<IntDistribution>>;
    /**
     * Find alerts distribution by category filtered by query
     */
    countByCategory(streamId?: string, deviceId?: string, search?: string, from?: number, to?: number, type?: EventTypeCode[], severity?: SeverityTypeCode[], category?: EventCategoryCode[], status?: EventStatusCode[], ruleId?: string[], targetIp?: string, ruleType?: RuleTypeCode[], sort?: string, page?: number, size?: number, withoutOccurrences?: boolean): import("rxjs").Observable<EntityResponse<IntDistribution>>;
    /**
     * Add tag to an alert
     */
    addTag(id?: string, tag?: string): import("rxjs").Observable<EntityResponse<Alert>>;
    /**
     * Delete a tag from the alert
     */
    deleteTag(id?: string, tag?: string): import("rxjs").Observable<EntityResponse<Alert>>;
    /**
     * Apply action on an alert
     */
    applyAction(id?: string, action?: DeviceActionCode): import("rxjs").Observable<ActionResponse>;
    /**
     * Set alert status
     */
    setStatus(id?: string, status?: EventStatusCode): import("rxjs").Observable<ActionResponse>;
    /**
     * Get current shieldex value as ActionResponse, the Key contains the shield index and the data includes the trend
     */
    getShieldex(): import("rxjs").Observable<ActionResponse>;
    /**
     * Get histogram of alerts over time by dimension (type | severity | status | ruleType | category)
     */
    alertsTimeline(streamId?: string, deviceId?: string, dimension?: string, from?: number, to?: number, type?: EventTypeCode[], severity?: SeverityTypeCode[], category?: EventCategoryCode[], status?: EventStatusCode[], ruleId?: string[], targetIp?: string, ruleType?: RuleTypeCode[], sort?: string, page?: number, size?: number): import("rxjs").Observable<EntityResponse<TimeSeriesOf2D>>;
    /**
     * Get histogram of shieldex values over time
     */
    shieldexTimeline(streamId?: string, from?: number, to?: number): import("rxjs").Observable<EntityResponse<TimeSeriesOfFloat>>;
    /**
     * Export alert source file
     */
    exportSource(id?: string): import("rxjs").Observable<import("@angular/common/http").HttpEvent<Blob>>;
    /**
     * Get total number devices at risk (affected by the alerts matching the query)
     */
    getTotalDevicesAtRisk(streamId?: string, search?: string, from?: number, to?: number, type?: EventTypeCode[], severity?: SeverityTypeCode[], category?: EventCategoryCode[], status?: EventStatusCode[], ruleId?: string[], targetIp?: string, ruleType?: RuleTypeCode[]): import("rxjs").Observable<ActionResponse>;
    /**
     * Get malicious IP data card for specific malicious IP
     */
    getMaliciousIpCard(streamId?: string, targetIp?: string, from?: number, to?: number): import("rxjs").Observable<EntityResponse<MaliciousIPCard>>;
    /**
     * Apply DNS lookup for each IP in the list
     */
    getIpLookup(ip?: string[]): import("rxjs").Observable<EntitiesResponse<StringKeyValue>>;
    /**
     * Find list of alerts by insight id query
     */
    findByInsightContext(): import("rxjs").Observable<EntitiesResponse<Alert>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<UsrAlertsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UsrAlertsService>;
}
