import { Injectable, Inject } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../utils";
import * as i2 from "../../config";
// List of events related actions for the operator 
// @RequestHeader X-API-KEY The key to identify the application (console) 
// @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user 
export class UsrEventsService {
    // Class constructor
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/events';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Get single event by id
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Find list of events by query
     */
    find(streamId, deviceId, search, from, to, type, severity, category, status, ruleId, targetIp, ruleType, sort, page, size, withoutOccurrences) {
        const params = [];
        if (streamId != null) {
            params.push(`streamId=${streamId}`);
        }
        if (deviceId != null) {
            params.push(`deviceId=${deviceId}`);
        }
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        if (type != null) {
            params.push(`type=${type}`);
        }
        if (severity != null) {
            params.push(`severity=${severity}`);
        }
        if (category != null) {
            params.push(`category=${category}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (ruleId != null) {
            params.push(`ruleId=${ruleId}`);
        }
        if (targetIp != null) {
            params.push(`targetIp=${targetIp}`);
        }
        if (ruleType != null) {
            params.push(`ruleType=${ruleType}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (size != null) {
            params.push(`size=${size}`);
        }
        if (withoutOccurrences != null) {
            params.push(`withoutOccurrences=${withoutOccurrences}`);
        }
        return this.rest.get(`${this.baseUrl}`, ...params);
    }
    /**
     * Export list of events by query to a file with the specified format
     */
    exportFormat(format, streamId, deviceId, search, from, to, type, severity, category, status, ruleId, targetIp, ruleType, sort, page, size) {
        const params = [];
        if (streamId != null) {
            params.push(`streamId=${streamId}`);
        }
        if (deviceId != null) {
            params.push(`deviceId=${deviceId}`);
        }
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        if (type != null) {
            params.push(`type=${type}`);
        }
        if (severity != null) {
            params.push(`severity=${severity}`);
        }
        if (category != null) {
            params.push(`category=${category}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (ruleId != null) {
            params.push(`ruleId=${ruleId}`);
        }
        if (targetIp != null) {
            params.push(`targetIp=${targetIp}`);
        }
        if (ruleType != null) {
            params.push(`ruleType=${ruleType}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (size != null) {
            params.push(`size=${size}`);
        }
        return this.rest.download(`events`, `${this.baseUrl}/export/${format}`, ...params);
    }
    /**
     * Find top 10 events by their severity filter by query
     */
    getTop(streamId, deviceId, search, from, to, type, severity, category, status, ruleId, targetIp, ruleType, sort, page, size, withoutOccurrences) {
        const params = [];
        if (streamId != null) {
            params.push(`streamId=${streamId}`);
        }
        if (deviceId != null) {
            params.push(`deviceId=${deviceId}`);
        }
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        if (type != null) {
            params.push(`type=${type}`);
        }
        if (severity != null) {
            params.push(`severity=${severity}`);
        }
        if (category != null) {
            params.push(`category=${category}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (ruleId != null) {
            params.push(`ruleId=${ruleId}`);
        }
        if (targetIp != null) {
            params.push(`targetIp=${targetIp}`);
        }
        if (ruleType != null) {
            params.push(`ruleType=${ruleType}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (size != null) {
            params.push(`size=${size}`);
        }
        if (withoutOccurrences != null) {
            params.push(`withoutOccurrences=${withoutOccurrences}`);
        }
        return this.rest.get(`${this.baseUrl}/top`, ...params);
    }
    /**
     * Get top malicious IPs
     */
    getTopMaliciousIPs(streamId, top, from, to) {
        const params = [];
        if (streamId != null) {
            params.push(`streamId=${streamId}`);
        }
        if (top != null) {
            params.push(`top=${top}`);
        }
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        return this.rest.get(`${this.baseUrl}/top-malicious-ips`, ...params);
    }
    /**
     * Find events distribution by type filtered by query
     */
    countByType(streamId, deviceId, search, from, to, type, severity, category, status, ruleId, targetIp, ruleType, sort, page, size, withoutOccurrences) {
        const params = [];
        if (streamId != null) {
            params.push(`streamId=${streamId}`);
        }
        if (deviceId != null) {
            params.push(`deviceId=${deviceId}`);
        }
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        if (type != null) {
            params.push(`type=${type}`);
        }
        if (severity != null) {
            params.push(`severity=${severity}`);
        }
        if (category != null) {
            params.push(`category=${category}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (ruleId != null) {
            params.push(`ruleId=${ruleId}`);
        }
        if (targetIp != null) {
            params.push(`targetIp=${targetIp}`);
        }
        if (ruleType != null) {
            params.push(`ruleType=${ruleType}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (size != null) {
            params.push(`size=${size}`);
        }
        if (withoutOccurrences != null) {
            params.push(`withoutOccurrences=${withoutOccurrences}`);
        }
        return this.rest.get(`${this.baseUrl}/count/by-type`, ...params);
    }
    /**
     * Find events distribution by status filtered by query
     */
    countByStatus(streamId, deviceId, search, from, to, type, severity, category, status, ruleId, targetIp, ruleType, sort, page, size, withoutOccurrences) {
        const params = [];
        if (streamId != null) {
            params.push(`streamId=${streamId}`);
        }
        if (deviceId != null) {
            params.push(`deviceId=${deviceId}`);
        }
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        if (type != null) {
            params.push(`type=${type}`);
        }
        if (severity != null) {
            params.push(`severity=${severity}`);
        }
        if (category != null) {
            params.push(`category=${category}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (ruleId != null) {
            params.push(`ruleId=${ruleId}`);
        }
        if (targetIp != null) {
            params.push(`targetIp=${targetIp}`);
        }
        if (ruleType != null) {
            params.push(`ruleType=${ruleType}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (size != null) {
            params.push(`size=${size}`);
        }
        if (withoutOccurrences != null) {
            params.push(`withoutOccurrences=${withoutOccurrences}`);
        }
        return this.rest.get(`${this.baseUrl}/count/by-status`, ...params);
    }
    /**
     * Find events distribution by severity filtered by query
     */
    countBySeverity(streamId, deviceId, search, from, to, type, severity, category, status, ruleId, targetIp, ruleType, sort, page, size, withoutOccurrences) {
        const params = [];
        if (streamId != null) {
            params.push(`streamId=${streamId}`);
        }
        if (deviceId != null) {
            params.push(`deviceId=${deviceId}`);
        }
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        if (type != null) {
            params.push(`type=${type}`);
        }
        if (severity != null) {
            params.push(`severity=${severity}`);
        }
        if (category != null) {
            params.push(`category=${category}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (ruleId != null) {
            params.push(`ruleId=${ruleId}`);
        }
        if (targetIp != null) {
            params.push(`targetIp=${targetIp}`);
        }
        if (ruleType != null) {
            params.push(`ruleType=${ruleType}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (size != null) {
            params.push(`size=${size}`);
        }
        if (withoutOccurrences != null) {
            params.push(`withoutOccurrences=${withoutOccurrences}`);
        }
        return this.rest.get(`${this.baseUrl}/count/by-severity`, ...params);
    }
    /**
     * Find events distribution by rule filtered by query
     */
    countByRule(streamId, deviceId, search, from, to, type, severity, category, status, ruleId, targetIp, ruleType, sort, page, size, withoutOccurrences) {
        const params = [];
        if (streamId != null) {
            params.push(`streamId=${streamId}`);
        }
        if (deviceId != null) {
            params.push(`deviceId=${deviceId}`);
        }
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        if (type != null) {
            params.push(`type=${type}`);
        }
        if (severity != null) {
            params.push(`severity=${severity}`);
        }
        if (category != null) {
            params.push(`category=${category}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (ruleId != null) {
            params.push(`ruleId=${ruleId}`);
        }
        if (targetIp != null) {
            params.push(`targetIp=${targetIp}`);
        }
        if (ruleType != null) {
            params.push(`ruleType=${ruleType}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (size != null) {
            params.push(`size=${size}`);
        }
        if (withoutOccurrences != null) {
            params.push(`withoutOccurrences=${withoutOccurrences}`);
        }
        return this.rest.get(`${this.baseUrl}/count/by-rule`, ...params);
    }
    /**
     * Find events distribution by category filtered by query
     */
    countByCategory(streamId, deviceId, search, from, to, type, severity, category, status, ruleId, targetIp, ruleType, sort, page, size, withoutOccurrences) {
        const params = [];
        if (streamId != null) {
            params.push(`streamId=${streamId}`);
        }
        if (deviceId != null) {
            params.push(`deviceId=${deviceId}`);
        }
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        if (type != null) {
            params.push(`type=${type}`);
        }
        if (severity != null) {
            params.push(`severity=${severity}`);
        }
        if (category != null) {
            params.push(`category=${category}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (ruleId != null) {
            params.push(`ruleId=${ruleId}`);
        }
        if (targetIp != null) {
            params.push(`targetIp=${targetIp}`);
        }
        if (ruleType != null) {
            params.push(`ruleType=${ruleType}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (size != null) {
            params.push(`size=${size}`);
        }
        if (withoutOccurrences != null) {
            params.push(`withoutOccurrences=${withoutOccurrences}`);
        }
        return this.rest.get(`${this.baseUrl}/count/by-category`, ...params);
    }
    /**
     * Set event status
     */
    applyAction(id, status) {
        return this.rest.post(`${this.baseUrl}/${id}/status/${status}`, '');
    }
    /**
     * Get current shieldex value as ActionResponse, the Key contains the shield index and the data includes the trend
     */
    getShieldex() {
        return this.rest.get(`${this.baseUrl}/shieldex`);
    }
    /**
     * Get histogram of events over time by dimension (type | severity | status | ruleType | category)
     */
    eventsTimeline(streamId, deviceId, dimension, from, to, type, severity, category, status, ruleId, targetIp, ruleType, sort, page, size) {
        const params = [];
        if (streamId != null) {
            params.push(`streamId=${streamId}`);
        }
        if (deviceId != null) {
            params.push(`deviceId=${deviceId}`);
        }
        if (dimension != null) {
            params.push(`dimension=${dimension}`);
        }
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        if (type != null) {
            params.push(`type=${type}`);
        }
        if (severity != null) {
            params.push(`severity=${severity}`);
        }
        if (category != null) {
            params.push(`category=${category}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (ruleId != null) {
            params.push(`ruleId=${ruleId}`);
        }
        if (targetIp != null) {
            params.push(`targetIp=${targetIp}`);
        }
        if (ruleType != null) {
            params.push(`ruleType=${ruleType}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (size != null) {
            params.push(`size=${size}`);
        }
        return this.rest.get(`${this.baseUrl}/timeline`, ...params);
    }
    /**
     * Get histogram of shieldex values over time
     */
    shieldexTimeline(streamId, from, to) {
        const params = [];
        if (streamId != null) {
            params.push(`streamId=${streamId}`);
        }
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        return this.rest.get(`${this.baseUrl}/shieldex/timeline`, ...params);
    }
    /**
     * Export event source file
     */
    exportSource(id, timestamp) {
        const params = [];
        if (timestamp != null) {
            params.push(`timestamp=${timestamp}`);
        }
        return this.rest.download(`events`, `${this.baseUrl}/${id}/export_source`, ...params);
    }
    /**
     * Get total number devices at risk (affected by the events matching the query)
     */
    getTotalDevicesAtRisk(streamId, search, from, to, type, severity, category, status, ruleId, targetIp, ruleType) {
        const params = [];
        if (streamId != null) {
            params.push(`streamId=${streamId}`);
        }
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        if (type != null) {
            params.push(`type=${type}`);
        }
        if (severity != null) {
            params.push(`severity=${severity}`);
        }
        if (category != null) {
            params.push(`category=${category}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (ruleId != null) {
            params.push(`ruleId=${ruleId}`);
        }
        if (targetIp != null) {
            params.push(`targetIp=${targetIp}`);
        }
        if (ruleType != null) {
            params.push(`ruleType=${ruleType}`);
        }
        return this.rest.get(`${this.baseUrl}/devices-at-risk`, ...params);
    }
    /**
     * Get malicious IP data card for specific malicious IP
     */
    getMaliciousIpCard(streamId, targetIp, from, to) {
        const params = [];
        if (streamId != null) {
            params.push(`streamId=${streamId}`);
        }
        if (targetIp != null) {
            params.push(`targetIp=${targetIp}`);
        }
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        return this.rest.get(`${this.baseUrl}/malicious-ip-card`, ...params);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: UsrEventsService, deps: [{ token: 'config' }, { token: i1.RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: UsrEventsService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: UsrEventsService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i2.PulseConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: i1.RestUtil }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNyRXZlbnRzU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1wdWxzZS1saWIvc3JjL2xpYi9zZXJ2aWNlcy91c3JFdmVudHNTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBbUJuRCxtREFBbUQ7QUFDbkQsMEVBQTBFO0FBQzFFLDBFQUEwRTtBQUUxRSxNQUFNLE9BQU8sZ0JBQWdCO0lBSzNCLG9CQUFvQjtJQUNwQixZQUFzQyxNQUFtQixFQUFVLElBQWM7UUFBM0MsV0FBTSxHQUFOLE1BQU0sQ0FBYTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVU7UUFKakYsaUJBQWlCO1FBQ1QsWUFBTyxHQUFHLFNBQVMsQ0FBQztRQUkxQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDaEQsQ0FBQztJQUdEOztPQUVHO0lBQ0gsR0FBRyxDQUFDLEVBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUF3QixHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFJLENBQUMsUUFBaUIsRUFBRSxRQUFpQixFQUFFLE1BQWUsRUFBRSxJQUFhLEVBQUUsRUFBVyxFQUFFLElBQXNCLEVBQUUsUUFBNkIsRUFBRSxRQUE4QixFQUFFLE1BQTBCLEVBQUUsTUFBaUIsRUFBRSxRQUFpQixFQUFFLFFBQXlCLEVBQUUsSUFBYSxFQUFFLElBQWEsRUFBRSxJQUFhLEVBQUUsa0JBQTRCO1FBQ25WLE1BQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksUUFBUSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQzlELElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDOUQsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLE1BQU0sRUFBRSxDQUFDLENBQUM7U0FBRTtRQUN4RCxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQ2xELElBQUksRUFBRSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDNUMsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUM7U0FBRTtRQUNsRCxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksUUFBUSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQzlELElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDOUQsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLE1BQU0sRUFBRSxDQUFDLENBQUM7U0FBRTtRQUN4RCxJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsTUFBTSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQ3hELElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDOUQsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUM5RCxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQ2xELElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDbEQsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUM7U0FBRTtRQUNsRCxJQUFJLGtCQUFrQixJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsc0JBQXNCLGtCQUFrQixFQUFFLENBQUMsQ0FBQztTQUFFO1FBRTlGLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQTBCLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUVEOztPQUVHO0lBQ0gsWUFBWSxDQUFDLE1BQWUsRUFBRSxRQUFpQixFQUFFLFFBQWlCLEVBQUUsTUFBZSxFQUFFLElBQWEsRUFBRSxFQUFXLEVBQUUsSUFBc0IsRUFBRSxRQUE2QixFQUFFLFFBQThCLEVBQUUsTUFBMEIsRUFBRSxNQUFpQixFQUFFLFFBQWlCLEVBQUUsUUFBeUIsRUFBRSxJQUFhLEVBQUUsSUFBYSxFQUFFLElBQWE7UUFDOVUsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDOUQsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUM5RCxJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsTUFBTSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQ3hELElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDbEQsSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUM1QyxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQ2xELElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDOUQsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUM5RCxJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsTUFBTSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQ3hELElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDeEQsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUM5RCxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksUUFBUSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQzlELElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDbEQsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUM7U0FBRTtRQUNsRCxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBRXBELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sV0FBVyxNQUFNLEVBQUUsRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQ2xGLENBQUM7SUFFRDs7T0FFRztJQUNILE1BQU0sQ0FBQyxRQUFpQixFQUFFLFFBQWlCLEVBQUUsTUFBZSxFQUFFLElBQWEsRUFBRSxFQUFXLEVBQUUsSUFBc0IsRUFBRSxRQUE2QixFQUFFLFFBQThCLEVBQUUsTUFBMEIsRUFBRSxNQUFpQixFQUFFLFFBQWlCLEVBQUUsUUFBeUIsRUFBRSxJQUFhLEVBQUUsSUFBYSxFQUFFLElBQWEsRUFBRSxrQkFBNEI7UUFDclYsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDOUQsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUM5RCxJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsTUFBTSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQ3hELElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDbEQsSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUM1QyxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQ2xELElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDOUQsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUM5RCxJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsTUFBTSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQ3hELElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDeEQsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUM5RCxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksUUFBUSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQzlELElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDbEQsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUM7U0FBRTtRQUNsRCxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQ2xELElBQUksa0JBQWtCLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxzQkFBc0Isa0JBQWtCLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFFOUYsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBb0MsR0FBRyxJQUFJLENBQUMsT0FBTyxNQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUMxRixDQUFDO0lBRUQ7O09BRUc7SUFDSCxrQkFBa0IsQ0FBQyxRQUFpQixFQUFFLEdBQVksRUFBRSxJQUFhLEVBQUUsRUFBVztRQUM1RSxNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUM5RCxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQy9DLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDbEQsSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUU5QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFvQyxHQUFHLElBQUksQ0FBQyxPQUFPLG9CQUFvQixFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDeEcsQ0FBQztJQUVEOztPQUVHO0lBQ0gsV0FBVyxDQUFDLFFBQWlCLEVBQUUsUUFBaUIsRUFBRSxNQUFlLEVBQUUsSUFBYSxFQUFFLEVBQVcsRUFBRSxJQUFzQixFQUFFLFFBQTZCLEVBQUUsUUFBOEIsRUFBRSxNQUEwQixFQUFFLE1BQWlCLEVBQUUsUUFBaUIsRUFBRSxRQUF5QixFQUFFLElBQWEsRUFBRSxJQUFhLEVBQUUsSUFBYSxFQUFFLGtCQUE0QjtRQUMxVixNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUM5RCxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksUUFBUSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQzlELElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDeEQsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUM7U0FBRTtRQUNsRCxJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQzVDLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDbEQsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUM5RCxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksUUFBUSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQzlELElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDeEQsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLE1BQU0sRUFBRSxDQUFDLENBQUM7U0FBRTtRQUN4RCxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksUUFBUSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQzlELElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDOUQsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUM7U0FBRTtRQUNsRCxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQ2xELElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDbEQsSUFBSSxrQkFBa0IsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFzQixrQkFBa0IsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUU5RixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFrQyxHQUFHLElBQUksQ0FBQyxPQUFPLGdCQUFnQixFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDbEcsQ0FBQztJQUVEOztPQUVHO0lBQ0gsYUFBYSxDQUFDLFFBQWlCLEVBQUUsUUFBaUIsRUFBRSxNQUFlLEVBQUUsSUFBYSxFQUFFLEVBQVcsRUFBRSxJQUFzQixFQUFFLFFBQTZCLEVBQUUsUUFBOEIsRUFBRSxNQUEwQixFQUFFLE1BQWlCLEVBQUUsUUFBaUIsRUFBRSxRQUF5QixFQUFFLElBQWEsRUFBRSxJQUFhLEVBQUUsSUFBYSxFQUFFLGtCQUE0QjtRQUM1VixNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUM5RCxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksUUFBUSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQzlELElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDeEQsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUM7U0FBRTtRQUNsRCxJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQzVDLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDbEQsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUM5RCxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksUUFBUSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQzlELElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDeEQsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLE1BQU0sRUFBRSxDQUFDLENBQUM7U0FBRTtRQUN4RCxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksUUFBUSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQzlELElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDOUQsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUM7U0FBRTtRQUNsRCxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQ2xELElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDbEQsSUFBSSxrQkFBa0IsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFzQixrQkFBa0IsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUU5RixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFrQyxHQUFHLElBQUksQ0FBQyxPQUFPLGtCQUFrQixFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDcEcsQ0FBQztJQUVEOztPQUVHO0lBQ0gsZUFBZSxDQUFDLFFBQWlCLEVBQUUsUUFBaUIsRUFBRSxNQUFlLEVBQUUsSUFBYSxFQUFFLEVBQVcsRUFBRSxJQUFzQixFQUFFLFFBQTZCLEVBQUUsUUFBOEIsRUFBRSxNQUEwQixFQUFFLE1BQWlCLEVBQUUsUUFBaUIsRUFBRSxRQUF5QixFQUFFLElBQWEsRUFBRSxJQUFhLEVBQUUsSUFBYSxFQUFFLGtCQUE0QjtRQUM5VixNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUM5RCxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksUUFBUSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQzlELElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDeEQsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUM7U0FBRTtRQUNsRCxJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQzVDLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDbEQsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUM5RCxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksUUFBUSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQzlELElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDeEQsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLE1BQU0sRUFBRSxDQUFDLENBQUM7U0FBRTtRQUN4RCxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksUUFBUSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQzlELElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDOUQsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUM7U0FBRTtRQUNsRCxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQ2xELElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDbEQsSUFBSSxrQkFBa0IsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFzQixrQkFBa0IsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUU5RixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFrQyxHQUFHLElBQUksQ0FBQyxPQUFPLG9CQUFvQixFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDdEcsQ0FBQztJQUVEOztPQUVHO0lBQ0gsV0FBVyxDQUFDLFFBQWlCLEVBQUUsUUFBaUIsRUFBRSxNQUFlLEVBQUUsSUFBYSxFQUFFLEVBQVcsRUFBRSxJQUFzQixFQUFFLFFBQTZCLEVBQUUsUUFBOEIsRUFBRSxNQUEwQixFQUFFLE1BQWlCLEVBQUUsUUFBaUIsRUFBRSxRQUF5QixFQUFFLElBQWEsRUFBRSxJQUFhLEVBQUUsSUFBYSxFQUFFLGtCQUE0QjtRQUMxVixNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUM5RCxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksUUFBUSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQzlELElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDeEQsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUM7U0FBRTtRQUNsRCxJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQzVDLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDbEQsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUM5RCxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksUUFBUSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQzlELElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDeEQsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLE1BQU0sRUFBRSxDQUFDLENBQUM7U0FBRTtRQUN4RCxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksUUFBUSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQzlELElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDOUQsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUM7U0FBRTtRQUNsRCxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQ2xELElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDbEQsSUFBSSxrQkFBa0IsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFzQixrQkFBa0IsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUU5RixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFrQyxHQUFHLElBQUksQ0FBQyxPQUFPLGdCQUFnQixFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDbEcsQ0FBQztJQUVEOztPQUVHO0lBQ0gsZUFBZSxDQUFDLFFBQWlCLEVBQUUsUUFBaUIsRUFBRSxNQUFlLEVBQUUsSUFBYSxFQUFFLEVBQVcsRUFBRSxJQUFzQixFQUFFLFFBQTZCLEVBQUUsUUFBOEIsRUFBRSxNQUEwQixFQUFFLE1BQWlCLEVBQUUsUUFBaUIsRUFBRSxRQUF5QixFQUFFLElBQWEsRUFBRSxJQUFhLEVBQUUsSUFBYSxFQUFFLGtCQUE0QjtRQUM5VixNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUM5RCxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksUUFBUSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQzlELElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDeEQsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUM7U0FBRTtRQUNsRCxJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQzVDLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDbEQsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUM5RCxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksUUFBUSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQzlELElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDeEQsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLE1BQU0sRUFBRSxDQUFDLENBQUM7U0FBRTtRQUN4RCxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksUUFBUSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQzlELElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDOUQsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUM7U0FBRTtRQUNsRCxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQ2xELElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDbEQsSUFBSSxrQkFBa0IsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFzQixrQkFBa0IsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUU5RixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFrQyxHQUFHLElBQUksQ0FBQyxPQUFPLG9CQUFvQixFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDdEcsQ0FBQztJQUVEOztPQUVHO0lBQ0gsV0FBVyxDQUFDLEVBQVcsRUFBRSxNQUF3QjtRQUMvQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFpQixHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksRUFBRSxXQUFXLE1BQU0sRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3RGLENBQUM7SUFFRDs7T0FFRztJQUNILFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFpQixHQUFHLElBQUksQ0FBQyxPQUFPLFdBQVcsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRDs7T0FFRztJQUNILGNBQWMsQ0FBQyxRQUFpQixFQUFFLFFBQWlCLEVBQUUsU0FBa0IsRUFBRSxJQUFhLEVBQUUsRUFBVyxFQUFFLElBQXNCLEVBQUUsUUFBNkIsRUFBRSxRQUE4QixFQUFFLE1BQTBCLEVBQUUsTUFBaUIsRUFBRSxRQUFpQixFQUFFLFFBQXlCLEVBQUUsSUFBYSxFQUFFLElBQWEsRUFBRSxJQUFhO1FBQ2xVLE1BQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksUUFBUSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQzlELElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDOUQsSUFBSSxTQUFTLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLFNBQVMsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUNqRSxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQ2xELElBQUksRUFBRSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDNUMsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUM7U0FBRTtRQUNsRCxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksUUFBUSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQzlELElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDOUQsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLE1BQU0sRUFBRSxDQUFDLENBQUM7U0FBRTtRQUN4RCxJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsTUFBTSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQ3hELElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQUU7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WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQ2xELElBQUksRUFBRSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFFOUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBa0MsR0FBRyxJQUFJLENBQUMsT0FBTyxvQkFBb0IsRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQ3RHLENBQUM7K0dBalVVLGdCQUFnQixrQkFNUCxRQUFRO21IQU5qQixnQkFBZ0I7OzRGQUFoQixnQkFBZ0I7a0JBRDVCLFVBQVU7OzBCQU9JLE1BQU07MkJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzdFV0aWwsIEVudGl0eVJlc3BvbnNlLCBFbnRpdGllc1Jlc3BvbnNlLCBBY3Rpb25SZXNwb25zZSB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IFB1bHNlQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcblxuaW1wb3J0IHsgRXZlbnRUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL0V2ZW50VHlwZUNvZGUnO1xuaW1wb3J0IHsgU2V2ZXJpdHlUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL1NldmVyaXR5VHlwZUNvZGUnO1xuaW1wb3J0IHsgRXZlbnRDYXRlZ29yeUNvZGUgfSBmcm9tICcuLi9lbnVtcy9FdmVudENhdGVnb3J5Q29kZSc7XG5pbXBvcnQgeyBSdWxlVHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9SdWxlVHlwZUNvZGUnO1xuaW1wb3J0IHsgRXZlbnRXaXRoRGV2aWNlIH0gZnJvbSAnLi4vZW50aXRpZXMvRXZlbnRXaXRoRGV2aWNlJztcbmltcG9ydCB7IFRpbWVTZXJpZXNPZkZsb2F0IH0gZnJvbSAnLi4vY29tbW9uL1RpbWVTZXJpZXNPZkZsb2F0JztcbmltcG9ydCB7IEV2ZW50IH0gZnJvbSAnLi4vZW50aXRpZXMvRXZlbnQnO1xuaW1wb3J0IHsgRXZlbnRTdGF0dXNDb2RlIH0gZnJvbSAnLi4vZW51bXMvRXZlbnRTdGF0dXNDb2RlJztcbmltcG9ydCB7IE1hbGljaW91c0lQRGF0YSB9IGZyb20gJy4uL2NvbW1vbi9NYWxpY2lvdXNJUERhdGEnO1xuaW1wb3J0IHsgSW50RGlzdHJpYnV0aW9uIH0gZnJvbSAnLi4vZW50aXRpZXMvSW50RGlzdHJpYnV0aW9uJztcbmltcG9ydCB7IFRpbWVTZXJpZXNPZjJEIH0gZnJvbSAnLi4vY29tbW9uL1RpbWVTZXJpZXNPZjJEJztcbmltcG9ydCB7IE1hbGljaW91c0lQQ2FyZCB9IGZyb20gJy4uL2NvbW1vbi9NYWxpY2lvdXNJUENhcmQnO1xuXG5cblxuLy8gTGlzdCBvZiBldmVudHMgcmVsYXRlZCBhY3Rpb25zIGZvciB0aGUgb3BlcmF0b3IgXG4vLyBAUmVxdWVzdEhlYWRlciBYLUFQSS1LRVkgVGhlIGtleSB0byBpZGVudGlmeSB0aGUgYXBwbGljYXRpb24gKGNvbnNvbGUpIFxuLy8gQFJlcXVlc3RIZWFkZXIgWC1BQ0NFU1MtVE9LRU4gVGhlIHRva2VuIHRvIGlkZW50aWZ5IHRoZSBsb2dnZWQtaW4gdXNlciBcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc3JFdmVudHNTZXJ2aWNlIHtcblxuICAvLyBVUkwgdG8gd2ViIGFwaVxuICBwcml2YXRlIGJhc2VVcmwgPSAnL2V2ZW50cyc7XG5cbiAgLy8gQ2xhc3MgY29uc3RydWN0b3JcbiAgY29uc3RydWN0b3IoQEluamVjdCgnY29uZmlnJykgcHJpdmF0ZSBjb25maWc6IFB1bHNlQ29uZmlnLCBwcml2YXRlIHJlc3Q6IFJlc3RVdGlsKSB7XG4gICAgdGhpcy5iYXNlVXJsID0gdGhpcy5jb25maWcuYXBpICsgdGhpcy5iYXNlVXJsO1xuICB9XG5cblxuICAvKipcbiAgICogR2V0IHNpbmdsZSBldmVudCBieSBpZFxuICAgKi9cbiAgZ2V0KGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQ8RW50aXR5UmVzcG9uc2U8RXZlbnQ+PihgJHt0aGlzLmJhc2VVcmx9LyR7aWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogRmluZCBsaXN0IG9mIGV2ZW50cyBieSBxdWVyeVxuICAgKi9cbiAgZmluZChzdHJlYW1JZD86IHN0cmluZywgZGV2aWNlSWQ/OiBzdHJpbmcsIHNlYXJjaD86IHN0cmluZywgZnJvbT86IG51bWJlciwgdG8/OiBudW1iZXIsIHR5cGU/OiBFdmVudFR5cGVDb2RlW10sIHNldmVyaXR5PzogU2V2ZXJpdHlUeXBlQ29kZVtdLCBjYXRlZ29yeT86IEV2ZW50Q2F0ZWdvcnlDb2RlW10sIHN0YXR1cz86IEV2ZW50U3RhdHVzQ29kZVtdLCBydWxlSWQ/OiBzdHJpbmdbXSwgdGFyZ2V0SXA/OiBzdHJpbmcsIHJ1bGVUeXBlPzogUnVsZVR5cGVDb2RlW10sIHNvcnQ/OiBzdHJpbmcsIHBhZ2U/OiBudW1iZXIsIHNpemU/OiBudW1iZXIsIHdpdGhvdXRPY2N1cnJlbmNlcz86IGJvb2xlYW4pIHtcbiAgICBjb25zdCBwYXJhbXMgPSBbXTtcdFx0XG4gICAgaWYgKHN0cmVhbUlkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHN0cmVhbUlkPSR7c3RyZWFtSWR9YCk7IH1cbiAgICBpZiAoZGV2aWNlSWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZGV2aWNlSWQ9JHtkZXZpY2VJZH1gKTsgfVxuICAgIGlmIChzZWFyY2ggIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2VhcmNoPSR7c2VhcmNofWApOyB9XG4gICAgaWYgKGZyb20gIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZnJvbT0ke2Zyb219YCk7IH1cbiAgICBpZiAodG8gIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgdG89JHt0b31gKTsgfVxuICAgIGlmICh0eXBlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHR5cGU9JHt0eXBlfWApOyB9XG4gICAgaWYgKHNldmVyaXR5ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNldmVyaXR5PSR7c2V2ZXJpdHl9YCk7IH1cbiAgICBpZiAoY2F0ZWdvcnkgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgY2F0ZWdvcnk9JHtjYXRlZ29yeX1gKTsgfVxuICAgIGlmIChzdGF0dXMgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc3RhdHVzPSR7c3RhdHVzfWApOyB9XG4gICAgaWYgKHJ1bGVJZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBydWxlSWQ9JHtydWxlSWR9YCk7IH1cbiAgICBpZiAodGFyZ2V0SXAgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgdGFyZ2V0SXA9JHt0YXJnZXRJcH1gKTsgfVxuICAgIGlmIChydWxlVHlwZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBydWxlVHlwZT0ke3J1bGVUeXBlfWApOyB9XG4gICAgaWYgKHNvcnQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc29ydD0ke3NvcnR9YCk7IH1cbiAgICBpZiAocGFnZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYWdlPSR7cGFnZX1gKTsgfVxuICAgIGlmIChzaXplICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNpemU9JHtzaXplfWApOyB9XG4gICAgaWYgKHdpdGhvdXRPY2N1cnJlbmNlcyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB3aXRob3V0T2NjdXJyZW5jZXM9JHt3aXRob3V0T2NjdXJyZW5jZXN9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0PEVudGl0aWVzUmVzcG9uc2U8RXZlbnQ+PihgJHt0aGlzLmJhc2VVcmx9YCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHBvcnQgbGlzdCBvZiBldmVudHMgYnkgcXVlcnkgdG8gYSBmaWxlIHdpdGggdGhlIHNwZWNpZmllZCBmb3JtYXRcbiAgICovXG4gIGV4cG9ydEZvcm1hdChmb3JtYXQ/OiBzdHJpbmcsIHN0cmVhbUlkPzogc3RyaW5nLCBkZXZpY2VJZD86IHN0cmluZywgc2VhcmNoPzogc3RyaW5nLCBmcm9tPzogbnVtYmVyLCB0bz86IG51bWJlciwgdHlwZT86IEV2ZW50VHlwZUNvZGVbXSwgc2V2ZXJpdHk/OiBTZXZlcml0eVR5cGVDb2RlW10sIGNhdGVnb3J5PzogRXZlbnRDYXRlZ29yeUNvZGVbXSwgc3RhdHVzPzogRXZlbnRTdGF0dXNDb2RlW10sIHJ1bGVJZD86IHN0cmluZ1tdLCB0YXJnZXRJcD86IHN0cmluZywgcnVsZVR5cGU/OiBSdWxlVHlwZUNvZGVbXSwgc29ydD86IHN0cmluZywgcGFnZT86IG51bWJlciwgc2l6ZT86IG51bWJlcikge1xuICAgIGNvbnN0IHBhcmFtcyA9IFtdO1x0XHRcbiAgICBpZiAoc3RyZWFtSWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc3RyZWFtSWQ9JHtzdHJlYW1JZH1gKTsgfVxuICAgIGlmIChkZXZpY2VJZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBkZXZpY2VJZD0ke2RldmljZUlkfWApOyB9XG4gICAgaWYgKHNlYXJjaCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzZWFyY2g9JHtzZWFyY2h9YCk7IH1cbiAgICBpZiAoZnJvbSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmcm9tPSR7ZnJvbX1gKTsgfVxuICAgIGlmICh0byAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0bz0ke3RvfWApOyB9XG4gICAgaWYgKHR5cGUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgdHlwZT0ke3R5cGV9YCk7IH1cbiAgICBpZiAoc2V2ZXJpdHkgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2V2ZXJpdHk9JHtzZXZlcml0eX1gKTsgfVxuICAgIGlmIChjYXRlZ29yeSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBjYXRlZ29yeT0ke2NhdGVnb3J5fWApOyB9XG4gICAgaWYgKHN0YXR1cyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdGF0dXM9JHtzdGF0dXN9YCk7IH1cbiAgICBpZiAocnVsZUlkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHJ1bGVJZD0ke3J1bGVJZH1gKTsgfVxuICAgIGlmICh0YXJnZXRJcCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0YXJnZXRJcD0ke3RhcmdldElwfWApOyB9XG4gICAgaWYgKHJ1bGVUeXBlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHJ1bGVUeXBlPSR7cnVsZVR5cGV9YCk7IH1cbiAgICBpZiAoc29ydCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzb3J0PSR7c29ydH1gKTsgfVxuICAgIGlmIChwYWdlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2U9JHtwYWdlfWApOyB9XG4gICAgaWYgKHNpemUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2l6ZT0ke3NpemV9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZG93bmxvYWQoYGV2ZW50c2AsYCR7dGhpcy5iYXNlVXJsfS9leHBvcnQvJHtmb3JtYXR9YCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIHRvcCAxMCBldmVudHMgYnkgdGhlaXIgc2V2ZXJpdHkgZmlsdGVyIGJ5IHF1ZXJ5XG4gICAqL1xuICBnZXRUb3Aoc3RyZWFtSWQ/OiBzdHJpbmcsIGRldmljZUlkPzogc3RyaW5nLCBzZWFyY2g/OiBzdHJpbmcsIGZyb20/OiBudW1iZXIsIHRvPzogbnVtYmVyLCB0eXBlPzogRXZlbnRUeXBlQ29kZVtdLCBzZXZlcml0eT86IFNldmVyaXR5VHlwZUNvZGVbXSwgY2F0ZWdvcnk/OiBFdmVudENhdGVnb3J5Q29kZVtdLCBzdGF0dXM/OiBFdmVudFN0YXR1c0NvZGVbXSwgcnVsZUlkPzogc3RyaW5nW10sIHRhcmdldElwPzogc3RyaW5nLCBydWxlVHlwZT86IFJ1bGVUeXBlQ29kZVtdLCBzb3J0Pzogc3RyaW5nLCBwYWdlPzogbnVtYmVyLCBzaXplPzogbnVtYmVyLCB3aXRob3V0T2NjdXJyZW5jZXM/OiBib29sZWFuKSB7XG4gICAgY29uc3QgcGFyYW1zID0gW107XHRcdFxuICAgIGlmIChzdHJlYW1JZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdHJlYW1JZD0ke3N0cmVhbUlkfWApOyB9XG4gICAgaWYgKGRldmljZUlkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGRldmljZUlkPSR7ZGV2aWNlSWR9YCk7IH1cbiAgICBpZiAoc2VhcmNoICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNlYXJjaD0ke3NlYXJjaH1gKTsgfVxuICAgIGlmIChmcm9tICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZyb209JHtmcm9tfWApOyB9XG4gICAgaWYgKHRvICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHRvPSR7dG99YCk7IH1cbiAgICBpZiAodHlwZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0eXBlPSR7dHlwZX1gKTsgfVxuICAgIGlmIChzZXZlcml0eSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzZXZlcml0eT0ke3NldmVyaXR5fWApOyB9XG4gICAgaWYgKGNhdGVnb3J5ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGNhdGVnb3J5PSR7Y2F0ZWdvcnl9YCk7IH1cbiAgICBpZiAoc3RhdHVzICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHN0YXR1cz0ke3N0YXR1c31gKTsgfVxuICAgIGlmIChydWxlSWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcnVsZUlkPSR7cnVsZUlkfWApOyB9XG4gICAgaWYgKHRhcmdldElwICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHRhcmdldElwPSR7dGFyZ2V0SXB9YCk7IH1cbiAgICBpZiAocnVsZVR5cGUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcnVsZVR5cGU9JHtydWxlVHlwZX1gKTsgfVxuICAgIGlmIChzb3J0ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNvcnQ9JHtzb3J0fWApOyB9XG4gICAgaWYgKHBhZ2UgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcGFnZT0ke3BhZ2V9YCk7IH1cbiAgICBpZiAoc2l6ZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzaXplPSR7c2l6ZX1gKTsgfVxuICAgIGlmICh3aXRob3V0T2NjdXJyZW5jZXMgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgd2l0aG91dE9jY3VycmVuY2VzPSR7d2l0aG91dE9jY3VycmVuY2VzfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldDxFbnRpdGllc1Jlc3BvbnNlPEV2ZW50V2l0aERldmljZT4+KGAke3RoaXMuYmFzZVVybH0vdG9wYCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdG9wIG1hbGljaW91cyBJUHNcbiAgICovXG4gIGdldFRvcE1hbGljaW91c0lQcyhzdHJlYW1JZD86IHN0cmluZywgdG9wPzogbnVtYmVyLCBmcm9tPzogbnVtYmVyLCB0bz86IG51bWJlcikge1xuICAgIGNvbnN0IHBhcmFtcyA9IFtdO1x0XHRcbiAgICBpZiAoc3RyZWFtSWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc3RyZWFtSWQ9JHtzdHJlYW1JZH1gKTsgfVxuICAgIGlmICh0b3AgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgdG9wPSR7dG9wfWApOyB9XG4gICAgaWYgKGZyb20gIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZnJvbT0ke2Zyb219YCk7IH1cbiAgICBpZiAodG8gIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgdG89JHt0b31gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQ8RW50aXRpZXNSZXNwb25zZTxNYWxpY2lvdXNJUERhdGE+PihgJHt0aGlzLmJhc2VVcmx9L3RvcC1tYWxpY2lvdXMtaXBzYCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIGV2ZW50cyBkaXN0cmlidXRpb24gYnkgdHlwZSBmaWx0ZXJlZCBieSBxdWVyeVxuICAgKi9cbiAgY291bnRCeVR5cGUoc3RyZWFtSWQ/OiBzdHJpbmcsIGRldmljZUlkPzogc3RyaW5nLCBzZWFyY2g/OiBzdHJpbmcsIGZyb20/OiBudW1iZXIsIHRvPzogbnVtYmVyLCB0eXBlPzogRXZlbnRUeXBlQ29kZVtdLCBzZXZlcml0eT86IFNldmVyaXR5VHlwZUNvZGVbXSwgY2F0ZWdvcnk/OiBFdmVudENhdGVnb3J5Q29kZVtdLCBzdGF0dXM/OiBFdmVudFN0YXR1c0NvZGVbXSwgcnVsZUlkPzogc3RyaW5nW10sIHRhcmdldElwPzogc3RyaW5nLCBydWxlVHlwZT86IFJ1bGVUeXBlQ29kZVtdLCBzb3J0Pzogc3RyaW5nLCBwYWdlPzogbnVtYmVyLCBzaXplPzogbnVtYmVyLCB3aXRob3V0T2NjdXJyZW5jZXM/OiBib29sZWFuKSB7XG4gICAgY29uc3QgcGFyYW1zID0gW107XHRcdFxuICAgIGlmIChzdHJlYW1JZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdHJlYW1JZD0ke3N0cmVhbUlkfWApOyB9XG4gICAgaWYgKGRldmljZUlkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGRldmljZUlkPSR7ZGV2aWNlSWR9YCk7IH1cbiAgICBpZiAoc2VhcmNoICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNlYXJjaD0ke3NlYXJjaH1gKTsgfVxuICAgIGlmIChmcm9tICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZyb209JHtmcm9tfWApOyB9XG4gICAgaWYgKHRvICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHRvPSR7dG99YCk7IH1cbiAgICBpZiAodHlwZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0eXBlPSR7dHlwZX1gKTsgfVxuICAgIGlmIChzZXZlcml0eSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzZXZlcml0eT0ke3NldmVyaXR5fWApOyB9XG4gICAgaWYgKGNhdGVnb3J5ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGNhdGVnb3J5PSR7Y2F0ZWdvcnl9YCk7IH1cbiAgICBpZiAoc3RhdHVzICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHN0YXR1cz0ke3N0YXR1c31gKTsgfVxuICAgIGlmIChydWxlSWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcnVsZUlkPSR7cnVsZUlkfWApOyB9XG4gICAgaWYgKHRhcmdldElwICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHRhcmdldElwPSR7dGFyZ2V0SXB9YCk7IH1cbiAgICBpZiAocnVsZVR5cGUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcnVsZVR5cGU9JHtydWxlVHlwZX1gKTsgfVxuICAgIGlmIChzb3J0ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNvcnQ9JHtzb3J0fWApOyB9XG4gICAgaWYgKHBhZ2UgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcGFnZT0ke3BhZ2V9YCk7IH1cbiAgICBpZiAoc2l6ZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzaXplPSR7c2l6ZX1gKTsgfVxuICAgIGlmICh3aXRob3V0T2NjdXJyZW5jZXMgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgd2l0aG91dE9jY3VycmVuY2VzPSR7d2l0aG91dE9jY3VycmVuY2VzfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldDxFbnRpdHlSZXNwb25zZTxJbnREaXN0cmlidXRpb24+PihgJHt0aGlzLmJhc2VVcmx9L2NvdW50L2J5LXR5cGVgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgZXZlbnRzIGRpc3RyaWJ1dGlvbiBieSBzdGF0dXMgZmlsdGVyZWQgYnkgcXVlcnlcbiAgICovXG4gIGNvdW50QnlTdGF0dXMoc3RyZWFtSWQ/OiBzdHJpbmcsIGRldmljZUlkPzogc3RyaW5nLCBzZWFyY2g/OiBzdHJpbmcsIGZyb20/OiBudW1iZXIsIHRvPzogbnVtYmVyLCB0eXBlPzogRXZlbnRUeXBlQ29kZVtdLCBzZXZlcml0eT86IFNldmVyaXR5VHlwZUNvZGVbXSwgY2F0ZWdvcnk/OiBFdmVudENhdGVnb3J5Q29kZVtdLCBzdGF0dXM/OiBFdmVudFN0YXR1c0NvZGVbXSwgcnVsZUlkPzogc3RyaW5nW10sIHRhcmdldElwPzogc3RyaW5nLCBydWxlVHlwZT86IFJ1bGVUeXBlQ29kZVtdLCBzb3J0Pzogc3RyaW5nLCBwYWdlPzogbnVtYmVyLCBzaXplPzogbnVtYmVyLCB3aXRob3V0T2NjdXJyZW5jZXM/OiBib29sZWFuKSB7XG4gICAgY29uc3QgcGFyYW1zID0gW107XHRcdFxuICAgIGlmIChzdHJlYW1JZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdHJlYW1JZD0ke3N0cmVhbUlkfWApOyB9XG4gICAgaWYgKGRldmljZUlkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGRldmljZUlkPSR7ZGV2aWNlSWR9YCk7IH1cbiAgICBpZiAoc2VhcmNoICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNlYXJjaD0ke3NlYXJjaH1gKTsgfVxuICAgIGlmIChmcm9tICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZyb209JHtmcm9tfWApOyB9XG4gICAgaWYgKHRvICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHRvPSR7dG99YCk7IH1cbiAgICBpZiAodHlwZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0eXBlPSR7dHlwZX1gKTsgfVxuICAgIGlmIChzZXZlcml0eSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzZXZlcml0eT0ke3NldmVyaXR5fWApOyB9XG4gICAgaWYgKGNhdGVnb3J5ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGNhdGVnb3J5PSR7Y2F0ZWdvcnl9YCk7IH1cbiAgICBpZiAoc3RhdHVzICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHN0YXR1cz0ke3N0YXR1c31gKTsgfVxuICAgIGlmIChydWxlSWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcnVsZUlkPSR7cnVsZUlkfWApOyB9XG4gICAgaWYgKHRhcmdldElwICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHRhcmdldElwPSR7dGFyZ2V0SXB9YCk7IH1cbiAgICBpZiAocnVsZVR5cGUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcnVsZVR5cGU9JHtydWxlVHlwZX1gKTsgfVxuICAgIGlmIChzb3J0ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNvcnQ9JHtzb3J0fWApOyB9XG4gICAgaWYgKHBhZ2UgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcGFnZT0ke3BhZ2V9YCk7IH1cbiAgICBpZiAoc2l6ZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzaXplPSR7c2l6ZX1gKTsgfVxuICAgIGlmICh3aXRob3V0T2NjdXJyZW5jZXMgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgd2l0aG91dE9jY3VycmVuY2VzPSR7d2l0aG91dE9jY3VycmVuY2VzfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldDxFbnRpdHlSZXNwb25zZTxJbnREaXN0cmlidXRpb24+PihgJHt0aGlzLmJhc2VVcmx9L2NvdW50L2J5LXN0YXR1c2AsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogRmluZCBldmVudHMgZGlzdHJpYnV0aW9uIGJ5IHNldmVyaXR5IGZpbHRlcmVkIGJ5IHF1ZXJ5XG4gICAqL1xuICBjb3VudEJ5U2V2ZXJpdHkoc3RyZWFtSWQ/OiBzdHJpbmcsIGRldmljZUlkPzogc3RyaW5nLCBzZWFyY2g/OiBzdHJpbmcsIGZyb20/OiBudW1iZXIsIHRvPzogbnVtYmVyLCB0eXBlPzogRXZlbnRUeXBlQ29kZVtdLCBzZXZlcml0eT86IFNldmVyaXR5VHlwZUNvZGVbXSwgY2F0ZWdvcnk/OiBFdmVudENhdGVnb3J5Q29kZVtdLCBzdGF0dXM/OiBFdmVudFN0YXR1c0NvZGVbXSwgcnVsZUlkPzogc3RyaW5nW10sIHRhcmdldElwPzogc3RyaW5nLCBydWxlVHlwZT86IFJ1bGVUeXBlQ29kZVtdLCBzb3J0Pzogc3RyaW5nLCBwYWdlPzogbnVtYmVyLCBzaXplPzogbnVtYmVyLCB3aXRob3V0T2NjdXJyZW5jZXM/OiBib29sZWFuKSB7XG4gICAgY29uc3QgcGFyYW1zID0gW107XHRcdFxuICAgIGlmIChzdHJlYW1JZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdHJlYW1JZD0ke3N0cmVhbUlkfWApOyB9XG4gICAgaWYgKGRldmljZUlkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGRldmljZUlkPSR7ZGV2aWNlSWR9YCk7IH1cbiAgICBpZiAoc2VhcmNoICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNlYXJjaD0ke3NlYXJjaH1gKTsgfVxuICAgIGlmIChmcm9tICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZyb209JHtmcm9tfWApOyB9XG4gICAgaWYgKHRvICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHRvPSR7dG99YCk7IH1cbiAgICBpZiAodHlwZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0eXBlPSR7dHlwZX1gKTsgfVxuICAgIGlmIChzZXZlcml0eSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzZXZlcml0eT0ke3NldmVyaXR5fWApOyB9XG4gICAgaWYgKGNhdGVnb3J5ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGNhdGVnb3J5PSR7Y2F0ZWdvcnl9YCk7IH1cbiAgICBpZiAoc3RhdHVzICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHN0YXR1cz0ke3N0YXR1c31gKTsgfVxuICAgIGlmIChydWxlSWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcnVsZUlkPSR7cnVsZUlkfWApOyB9XG4gICAgaWYgKHRhcmdldElwICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHRhcmdldElwPSR7dGFyZ2V0SXB9YCk7IH1cbiAgICBpZiAocnVsZVR5cGUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcnVsZVR5cGU9JHtydWxlVHlwZX1gKTsgfVxuICAgIGlmIChzb3J0ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNvcnQ9JHtzb3J0fWApOyB9XG4gICAgaWYgKHBhZ2UgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcGFnZT0ke3BhZ2V9YCk7IH1cbiAgICBpZiAoc2l6ZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzaXplPSR7c2l6ZX1gKTsgfVxuICAgIGlmICh3aXRob3V0T2NjdXJyZW5jZXMgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgd2l0aG91dE9jY3VycmVuY2VzPSR7d2l0aG91dE9jY3VycmVuY2VzfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldDxFbnRpdHlSZXNwb25zZTxJbnREaXN0cmlidXRpb24+PihgJHt0aGlzLmJhc2VVcmx9L2NvdW50L2J5LXNldmVyaXR5YCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIGV2ZW50cyBkaXN0cmlidXRpb24gYnkgcnVsZSBmaWx0ZXJlZCBieSBxdWVyeVxuICAgKi9cbiAgY291bnRCeVJ1bGUoc3RyZWFtSWQ/OiBzdHJpbmcsIGRldmljZUlkPzogc3RyaW5nLCBzZWFyY2g/OiBzdHJpbmcsIGZyb20/OiBudW1iZXIsIHRvPzogbnVtYmVyLCB0eXBlPzogRXZlbnRUeXBlQ29kZVtdLCBzZXZlcml0eT86IFNldmVyaXR5VHlwZUNvZGVbXSwgY2F0ZWdvcnk/OiBFdmVudENhdGVnb3J5Q29kZVtdLCBzdGF0dXM/OiBFdmVudFN0YXR1c0NvZGVbXSwgcnVsZUlkPzogc3RyaW5nW10sIHRhcmdldElwPzogc3RyaW5nLCBydWxlVHlwZT86IFJ1bGVUeXBlQ29kZVtdLCBzb3J0Pzogc3RyaW5nLCBwYWdlPzogbnVtYmVyLCBzaXplPzogbnVtYmVyLCB3aXRob3V0T2NjdXJyZW5jZXM/OiBib29sZWFuKSB7XG4gICAgY29uc3QgcGFyYW1zID0gW107XHRcdFxuICAgIGlmIChzdHJlYW1JZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdHJlYW1JZD0ke3N0cmVhbUlkfWApOyB9XG4gICAgaWYgKGRldmljZUlkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGRldmljZUlkPSR7ZGV2aWNlSWR9YCk7IH1cbiAgICBpZiAoc2VhcmNoICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNlYXJjaD0ke3NlYXJjaH1gKTsgfVxuICAgIGlmIChmcm9tICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZyb209JHtmcm9tfWApOyB9XG4gICAgaWYgKHRvICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHRvPSR7dG99YCk7IH1cbiAgICBpZiAodHlwZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0eXBlPSR7dHlwZX1gKTsgfVxuICAgIGlmIChzZXZlcml0eSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzZXZlcml0eT0ke3NldmVyaXR5fWApOyB9XG4gICAgaWYgKGNhdGVnb3J5ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGNhdGVnb3J5PSR7Y2F0ZWdvcnl9YCk7IH1cbiAgICBpZiAoc3RhdHVzICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHN0YXR1cz0ke3N0YXR1c31gKTsgfVxuICAgIGlmIChydWxlSWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcnVsZUlkPSR7cnVsZUlkfWApOyB9XG4gICAgaWYgKHRhcmdldElwICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHRhcmdldElwPSR7dGFyZ2V0SXB9YCk7IH1cbiAgICBpZiAocnVsZVR5cGUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcnVsZVR5cGU9JHtydWxlVHlwZX1gKTsgfVxuICAgIGlmIChzb3J0ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNvcnQ9JHtzb3J0fWApOyB9XG4gICAgaWYgKHBhZ2UgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcGFnZT0ke3BhZ2V9YCk7IH1cbiAgICBpZiAoc2l6ZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzaXplPSR7c2l6ZX1gKTsgfVxuICAgIGlmICh3aXRob3V0T2NjdXJyZW5jZXMgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgd2l0aG91dE9jY3VycmVuY2VzPSR7d2l0aG91dE9jY3VycmVuY2VzfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldDxFbnRpdHlSZXNwb25zZTxJbnREaXN0cmlidXRpb24+PihgJHt0aGlzLmJhc2VVcmx9L2NvdW50L2J5LXJ1bGVgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgZXZlbnRzIGRpc3RyaWJ1dGlvbiBieSBjYXRlZ29yeSBmaWx0ZXJlZCBieSBxdWVyeVxuICAgKi9cbiAgY291bnRCeUNhdGVnb3J5KHN0cmVhbUlkPzogc3RyaW5nLCBkZXZpY2VJZD86IHN0cmluZywgc2VhcmNoPzogc3RyaW5nLCBmcm9tPzogbnVtYmVyLCB0bz86IG51bWJlciwgdHlwZT86IEV2ZW50VHlwZUNvZGVbXSwgc2V2ZXJpdHk/OiBTZXZlcml0eVR5cGVDb2RlW10sIGNhdGVnb3J5PzogRXZlbnRDYXRlZ29yeUNvZGVbXSwgc3RhdHVzPzogRXZlbnRTdGF0dXNDb2RlW10sIHJ1bGVJZD86IHN0cmluZ1tdLCB0YXJnZXRJcD86IHN0cmluZywgcnVsZVR5cGU/OiBSdWxlVHlwZUNvZGVbXSwgc29ydD86IHN0cmluZywgcGFnZT86IG51bWJlciwgc2l6ZT86IG51bWJlciwgd2l0aG91dE9jY3VycmVuY2VzPzogYm9vbGVhbikge1xuICAgIGNvbnN0IHBhcmFtcyA9IFtdO1x0XHRcbiAgICBpZiAoc3RyZWFtSWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc3RyZWFtSWQ9JHtzdHJlYW1JZH1gKTsgfVxuICAgIGlmIChkZXZpY2VJZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBkZXZpY2VJZD0ke2RldmljZUlkfWApOyB9XG4gICAgaWYgKHNlYXJjaCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzZWFyY2g9JHtzZWFyY2h9YCk7IH1cbiAgICBpZiAoZnJvbSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmcm9tPSR7ZnJvbX1gKTsgfVxuICAgIGlmICh0byAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0bz0ke3RvfWApOyB9XG4gICAgaWYgKHR5cGUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgdHlwZT0ke3R5cGV9YCk7IH1cbiAgICBpZiAoc2V2ZXJpdHkgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2V2ZXJpdHk9JHtzZXZlcml0eX1gKTsgfVxuICAgIGlmIChjYXRlZ29yeSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBjYXRlZ29yeT0ke2NhdGVnb3J5fWApOyB9XG4gICAgaWYgKHN0YXR1cyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdGF0dXM9JHtzdGF0dXN9YCk7IH1cbiAgICBpZiAocnVsZUlkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHJ1bGVJZD0ke3J1bGVJZH1gKTsgfVxuICAgIGlmICh0YXJnZXRJcCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0YXJnZXRJcD0ke3RhcmdldElwfWApOyB9XG4gICAgaWYgKHJ1bGVUeXBlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHJ1bGVUeXBlPSR7cnVsZVR5cGV9YCk7IH1cbiAgICBpZiAoc29ydCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzb3J0PSR7c29ydH1gKTsgfVxuICAgIGlmIChwYWdlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2U9JHtwYWdlfWApOyB9XG4gICAgaWYgKHNpemUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2l6ZT0ke3NpemV9YCk7IH1cbiAgICBpZiAod2l0aG91dE9jY3VycmVuY2VzICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHdpdGhvdXRPY2N1cnJlbmNlcz0ke3dpdGhvdXRPY2N1cnJlbmNlc31gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQ8RW50aXR5UmVzcG9uc2U8SW50RGlzdHJpYnV0aW9uPj4oYCR7dGhpcy5iYXNlVXJsfS9jb3VudC9ieS1jYXRlZ29yeWAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGV2ZW50IHN0YXR1c1xuICAgKi9cbiAgYXBwbHlBY3Rpb24oaWQ/OiBzdHJpbmcsIHN0YXR1cz86IEV2ZW50U3RhdHVzQ29kZSkge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdDxBY3Rpb25SZXNwb25zZT4oYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9zdGF0dXMvJHtzdGF0dXN9YCwgJycpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjdXJyZW50IHNoaWVsZGV4IHZhbHVlIGFzIEFjdGlvblJlc3BvbnNlLCB0aGUgS2V5IGNvbnRhaW5zIHRoZSBzaGllbGQgaW5kZXggYW5kIHRoZSBkYXRhIGluY2x1ZGVzIHRoZSB0cmVuZFxuICAgKi9cbiAgZ2V0U2hpZWxkZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQ8QWN0aW9uUmVzcG9uc2U+KGAke3RoaXMuYmFzZVVybH0vc2hpZWxkZXhgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgaGlzdG9ncmFtIG9mIGV2ZW50cyBvdmVyIHRpbWUgYnkgZGltZW5zaW9uICh0eXBlIHwgc2V2ZXJpdHkgfCBzdGF0dXMgfCBydWxlVHlwZSB8IGNhdGVnb3J5KVxuICAgKi9cbiAgZXZlbnRzVGltZWxpbmUoc3RyZWFtSWQ/OiBzdHJpbmcsIGRldmljZUlkPzogc3RyaW5nLCBkaW1lbnNpb24/OiBzdHJpbmcsIGZyb20/OiBudW1iZXIsIHRvPzogbnVtYmVyLCB0eXBlPzogRXZlbnRUeXBlQ29kZVtdLCBzZXZlcml0eT86IFNldmVyaXR5VHlwZUNvZGVbXSwgY2F0ZWdvcnk/OiBFdmVudENhdGVnb3J5Q29kZVtdLCBzdGF0dXM/OiBFdmVudFN0YXR1c0NvZGVbXSwgcnVsZUlkPzogc3RyaW5nW10sIHRhcmdldElwPzogc3RyaW5nLCBydWxlVHlwZT86IFJ1bGVUeXBlQ29kZVtdLCBzb3J0Pzogc3RyaW5nLCBwYWdlPzogbnVtYmVyLCBzaXplPzogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFyYW1zID0gW107XHRcdFxuICAgIGlmIChzdHJlYW1JZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdHJlYW1JZD0ke3N0cmVhbUlkfWApOyB9XG4gICAgaWYgKGRldmljZUlkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGRldmljZUlkPSR7ZGV2aWNlSWR9YCk7IH1cbiAgICBpZiAoZGltZW5zaW9uICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGRpbWVuc2lvbj0ke2RpbWVuc2lvbn1gKTsgfVxuICAgIGlmIChmcm9tICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZyb209JHtmcm9tfWApOyB9XG4gICAgaWYgKHRvICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHRvPSR7dG99YCk7IH1cbiAgICBpZiAodHlwZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0eXBlPSR7dHlwZX1gKTsgfVxuICAgIGlmIChzZXZlcml0eSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzZXZlcml0eT0ke3NldmVyaXR5fWApOyB9XG4gICAgaWYgKGNhdGVnb3J5ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGNhdGVnb3J5PSR7Y2F0ZWdvcnl9YCk7IH1cbiAgICBpZiAoc3RhdHVzICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHN0YXR1cz0ke3N0YXR1c31gKTsgfVxuICAgIGlmIChydWxlSWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcnVsZUlkPSR7cnVsZUlkfWApOyB9XG4gICAgaWYgKHRhcmdldElwICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHRhcmdldElwPSR7dGFyZ2V0SXB9YCk7IH1cbiAgICBpZiAocnVsZVR5cGUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcnVsZVR5cGU9JHtydWxlVHlwZX1gKTsgfVxuICAgIGlmIChzb3J0ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNvcnQ9JHtzb3J0fWApOyB9XG4gICAgaWYgKHBhZ2UgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcGFnZT0ke3BhZ2V9YCk7IH1cbiAgICBpZiAoc2l6ZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzaXplPSR7c2l6ZX1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQ8RW50aXR5UmVzcG9uc2U8VGltZVNlcmllc09mMkQ+PihgJHt0aGlzLmJhc2VVcmx9L3RpbWVsaW5lYCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgaGlzdG9ncmFtIG9mIHNoaWVsZGV4IHZhbHVlcyBvdmVyIHRpbWVcbiAgICovXG4gIHNoaWVsZGV4VGltZWxpbmUoc3RyZWFtSWQ/OiBzdHJpbmcsIGZyb20/OiBudW1iZXIsIHRvPzogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFyYW1zID0gW107XHRcdFxuICAgIGlmIChzdHJlYW1JZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdHJlYW1JZD0ke3N0cmVhbUlkfWApOyB9XG4gICAgaWYgKGZyb20gIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZnJvbT0ke2Zyb219YCk7IH1cbiAgICBpZiAodG8gIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgdG89JHt0b31gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQ8RW50aXR5UmVzcG9uc2U8VGltZVNlcmllc09mRmxvYXQ+PihgJHt0aGlzLmJhc2VVcmx9L3NoaWVsZGV4L3RpbWVsaW5lYCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHBvcnQgZXZlbnQgc291cmNlIGZpbGVcbiAgICovXG4gIGV4cG9ydFNvdXJjZShpZD86IHN0cmluZywgdGltZXN0YW1wPzogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFyYW1zID0gW107XHRcdFxuICAgIGlmICh0aW1lc3RhbXAgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgdGltZXN0YW1wPSR7dGltZXN0YW1wfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmRvd25sb2FkKGBldmVudHNgLGAke3RoaXMuYmFzZVVybH0vJHtpZH0vZXhwb3J0X3NvdXJjZWAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRvdGFsIG51bWJlciBkZXZpY2VzIGF0IHJpc2sgKGFmZmVjdGVkIGJ5IHRoZSBldmVudHMgbWF0Y2hpbmcgdGhlIHF1ZXJ5KVxuICAgKi9cbiAgZ2V0VG90YWxEZXZpY2VzQXRSaXNrKHN0cmVhbUlkPzogc3RyaW5nLCBzZWFyY2g/OiBzdHJpbmcsIGZyb20/OiBudW1iZXIsIHRvPzogbnVtYmVyLCB0eXBlPzogRXZlbnRUeXBlQ29kZVtdLCBzZXZlcml0eT86IFNldmVyaXR5VHlwZUNvZGVbXSwgY2F0ZWdvcnk/OiBFdmVudENhdGVnb3J5Q29kZVtdLCBzdGF0dXM/OiBFdmVudFN0YXR1c0NvZGVbXSwgcnVsZUlkPzogc3RyaW5nW10sIHRhcmdldElwPzogc3RyaW5nLCBydWxlVHlwZT86IFJ1bGVUeXBlQ29kZVtdKSB7XG4gICAgY29uc3QgcGFyYW1zID0gW107XHRcdFxuICAgIGlmIChzdHJlYW1JZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdHJlYW1JZD0ke3N0cmVhbUlkfWApOyB9XG4gICAgaWYgKHNlYXJjaCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzZWFyY2g9JHtzZWFyY2h9YCk7IH1cbiAgICBpZiAoZnJvbSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmcm9tPSR7ZnJvbX1gKTsgfVxuICAgIGlmICh0byAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0bz0ke3RvfWApOyB9XG4gICAgaWYgKHR5cGUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgdHlwZT0ke3R5cGV9YCk7IH1cbiAgICBpZiAoc2V2ZXJpdHkgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2V2ZXJpdHk9JHtzZXZlcml0eX1gKTsgfVxuICAgIGlmIChjYXRlZ29yeSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBjYXRlZ29yeT0ke2NhdGVnb3J5fWApOyB9XG4gICAgaWYgKHN0YXR1cyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdGF0dXM9JHtzdGF0dXN9YCk7IH1cbiAgICBpZiAocnVsZUlkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHJ1bGVJZD0ke3J1bGVJZH1gKTsgfVxuICAgIGlmICh0YXJnZXRJcCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0YXJnZXRJcD0ke3RhcmdldElwfWApOyB9XG4gICAgaWYgKHJ1bGVUeXBlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHJ1bGVUeXBlPSR7cnVsZVR5cGV9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0PEFjdGlvblJlc3BvbnNlPihgJHt0aGlzLmJhc2VVcmx9L2RldmljZXMtYXQtcmlza2AsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IG1hbGljaW91cyBJUCBkYXRhIGNhcmQgZm9yIHNwZWNpZmljIG1hbGljaW91cyBJUFxuICAgKi9cbiAgZ2V0TWFsaWNpb3VzSXBDYXJkKHN0cmVhbUlkPzogc3RyaW5nLCB0YXJnZXRJcD86IHN0cmluZywgZnJvbT86IG51bWJlciwgdG8/OiBudW1iZXIpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBbXTtcdFx0XG4gICAgaWYgKHN0cmVhbUlkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHN0cmVhbUlkPSR7c3RyZWFtSWR9YCk7IH1cbiAgICBpZiAodGFyZ2V0SXAgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgdGFyZ2V0SXA9JHt0YXJnZXRJcH1gKTsgfVxuICAgIGlmIChmcm9tICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZyb209JHtmcm9tfWApOyB9XG4gICAgaWYgKHRvICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHRvPSR7dG99YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0PEVudGl0eVJlc3BvbnNlPE1hbGljaW91c0lQQ2FyZD4+KGAke3RoaXMuYmFzZVVybH0vbWFsaWNpb3VzLWlwLWNhcmRgLCAuLi5wYXJhbXMpO1xuICB9XG5cbn1cbiJdfQ==