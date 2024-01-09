import { Injectable, Inject } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../utils";
import * as i2 from "../../config";
// List of events related actions for the operator 
// @RequestHeader X-API-KEY The key to identify the application (console) 
// @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user 
export class EventsService {
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
    find(streamId, deviceId, search, from, to, type, severity, category, status, ruleId, targetIp, ruleType, sort, page, size) {
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
    getTop(streamId, deviceId, search, from, to, type, severity, category, status, ruleId, targetIp, ruleType, sort, page, size) {
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
    countByType(streamId, deviceId, search, from, to, type, severity, category, status, ruleId, targetIp, ruleType, sort, page, size) {
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
        return this.rest.get(`${this.baseUrl}/count/by-type`, ...params);
    }
    /**
     * Find events distribution by status filtered by query
     */
    countByStatus(streamId, deviceId, search, from, to, type, severity, category, status, ruleId, targetIp, ruleType, sort, page, size) {
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
        return this.rest.get(`${this.baseUrl}/count/by-status`, ...params);
    }
    /**
     * Find events distribution by severity filtered by query
     */
    countBySeverity(streamId, deviceId, search, from, to, type, severity, category, status, ruleId, targetIp, ruleType, sort, page, size) {
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
        return this.rest.get(`${this.baseUrl}/count/by-severity`, ...params);
    }
    /**
     * Find events distribution by rule filtered by query
     */
    countByRule(streamId, deviceId, search, from, to, type, severity, category, status, ruleId, targetIp, ruleType, sort, page, size) {
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
        return this.rest.get(`${this.baseUrl}/count/by-rule`, ...params);
    }
    /**
     * Find events distribution by category filtered by query
     */
    countByCategory(streamId, deviceId, search, from, to, type, severity, category, status, ruleId, targetIp, ruleType, sort, page, size) {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: EventsService, deps: [{ token: 'config' }, { token: i1.RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: EventsService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: EventsService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i2.PulseConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: i1.RestUtil }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRzU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1wdWxzZS1saWIvc3JjL2xpYi9zZXJ2aWNlcy9ldmVudHNTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBa0JuRCxtREFBbUQ7QUFDbkQsMEVBQTBFO0FBQzFFLDBFQUEwRTtBQUUxRSxNQUFNLE9BQU8sYUFBYTtJQUt4QixvQkFBb0I7SUFDcEIsWUFBc0MsTUFBbUIsRUFBVSxJQUFjO1FBQTNDLFdBQU0sR0FBTixNQUFNLENBQWE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFVO1FBSmpGLGlCQUFpQjtRQUNULFlBQU8sR0FBRyxTQUFTLENBQUM7UUFJMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ2hELENBQUM7SUFHRDs7T0FFRztJQUNILEdBQUcsQ0FBQyxFQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBd0IsR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBSSxDQUFDLFFBQWlCLEVBQUUsUUFBaUIsRUFBRSxNQUFlLEVBQUUsSUFBYSxFQUFFLEVBQVcsRUFBRSxJQUFzQixFQUFFLFFBQTZCLEVBQUUsUUFBOEIsRUFBRSxNQUEwQixFQUFFLE1BQWlCLEVBQUUsUUFBaUIsRUFBRSxRQUF5QixFQUFFLElBQWEsRUFBRSxJQUFhLEVBQUUsSUFBYTtRQUNyVCxNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUM5RCxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksUUFBUSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQzlELElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDeEQsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUM7U0FBRTtRQUNsRCxJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQzVDLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDbEQsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUM5RCxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksUUFBUSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQzlELElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDeEQsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLE1BQU0sRUFBRSxDQUFDLENBQUM7U0FBRTtRQUN4RCxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksUUFBUSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQzlELElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDOUQsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUM7U0FBRTtRQUNsRCxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQ2xELElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFFcEQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBMEIsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRUQ7O09BRUc7SUFDSCxZQUFZLENBQUMsTUFBZSxFQUFFLFFBQWlCLEVBQUUsUUFBaUIsRUFBRSxNQUFlLEVBQUUsSUFBYSxFQUFFLEVBQVcsRUFBRSxJQUFzQixFQUFFLFFBQTZCLEVBQUUsUUFBOEIsRUFBRSxNQUEwQixFQUFFLE1BQWlCLEVBQUUsUUFBaUIsRUFBRSxRQUF5QixFQUFFLElBQWEsRUFBRSxJQUFhLEVBQUUsSUFBYTtRQUM5VSxNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUM5RCxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksUUFBUSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQzlELElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDeEQsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUM7U0FBRTtRQUNsRCxJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQzVDLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDbEQsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUM5RCxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksUUFBUSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQzlELElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDeEQsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLE1BQU0sRUFBRSxDQUFDLENBQUM7U0FBRTtRQUN4RCxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksUUFBUSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQzlELElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDOUQsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUM7U0FBRTtRQUNsRCxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQ2xELElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFFcEQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxXQUFXLE1BQU0sRUFBRSxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDbEYsQ0FBQztJQUVEOztPQUVHO0lBQ0gsTUFBTSxDQUFDLFFBQWlCLEVBQUUsUUFBaUIsRUFBRSxNQUFlLEVBQUUsSUFBYSxFQUFFLEVBQVcsRUFBRSxJQUFzQixFQUFFLFFBQTZCLEVBQUUsUUFBOEIsRUFBRSxNQUEwQixFQUFFLE1BQWlCLEVBQUUsUUFBaUIsRUFBRSxRQUF5QixFQUFFLElBQWEsRUFBRSxJQUFhLEVBQUUsSUFBYTtRQUN2VCxNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUM5RCxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksUUFBUSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQzlELElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDeEQsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUM7U0FBRTtRQUNsRCxJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQzVDLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDbEQsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUM5RCxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksUUFBUSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQzlELElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDeEQsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLE1BQU0sRUFBRSxDQUFDLENBQUM7U0FBRTtRQUN4RCxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksUUFBUSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQzlELElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDOUQsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUM7U0FBRTtRQUNsRCxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQ2xELElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFFcEQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBb0MsR0FBRyxJQUFJLENBQUMsT0FBTyxNQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUMxRixDQUFDO0lBRUQ7O09BRUc7SUFDSCxrQkFBa0IsQ0FBQyxRQUFpQixFQUFFLEdBQVksRUFBRSxJQUFhLEVBQUUsRUFBVztRQUM1RSxNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUM5RCxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQy9DLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDbEQsSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUU5QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFvQyxHQUFHLElBQUksQ0FBQyxPQUFPLG9CQUFvQixFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDeEcsQ0FBQztJQUVEOztPQUVHO0lBQ0gsV0FBVyxDQUFDLFFBQWlCLEVBQUUsUUFBaUIsRUFBRSxNQUFlLEVBQUUsSUFBYSxFQUFFLEVBQVcsRUFBRSxJQUFzQixFQUFFLFFBQTZCLEVBQUUsUUFBOEIsRUFBRSxNQUEwQixFQUFFLE1BQWlCLEVBQUUsUUFBaUIsRUFBRSxRQUF5QixFQUFFLElBQWEsRUFBRSxJQUFhLEVBQUUsSUFBYTtRQUM1VCxNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUM5RCxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksUUFBUSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQzlELElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDeEQsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUM7U0FBRTtRQUNsRCxJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQzVDLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDbEQsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUM5RCxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksUUFBUSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQzlELElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDeEQsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLE1BQU0sRUFBRSxDQUFDLENBQUM7U0FBRTtRQUN4RCxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksUUFBUSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQzlELElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDOUQsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUM7U0FBRTtRQUNsRCxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQ2xELElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFFcEQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBa0MsR0FBRyxJQUFJLENBQUMsT0FBTyxnQkFBZ0IsRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQ2xHLENBQUM7SUFFRDs7T0FFRztJQUNILGFBQWEsQ0FBQyxRQUFpQixFQUFFLFFBQWlCLEVBQUUsTUFBZSxFQUFFLElBQWEsRUFBRSxFQUFXLEVBQUUsSUFBc0IsRUFBRSxRQUE2QixFQUFFLFFBQThCLEVBQUUsTUFBMEIsRUFBRSxNQUFpQixFQUFFLFFBQWlCLEVBQUUsUUFBeUIsRUFBRSxJQUFhLEVBQUUsSUFBYSxFQUFFLElBQWE7UUFDOVQsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDOUQsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUM5RCxJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsTUFBTSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQ3hELElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDbEQsSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUM1QyxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQ2xELElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDOUQsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUM5RCxJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsTUFBTSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQ3hELElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDeEQsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUM5RCxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksUUFBUSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQzlELElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDbEQsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxR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YSxFQUFFLElBQWE7UUFDaFUsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDOUQsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUM5RCxJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsTUFBTSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQ3hELElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDbEQsSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUM1QyxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQ2xELElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDOUQsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUM5RCxJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsTUFBTSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQ3hELElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NB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TSxDQUFDLElBQUksQ0FBQyxZQUFZLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUM5RCxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksUUFBUSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQzlELElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDbEQsSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUU5QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFpQixHQUFHLElBQUksQ0FBQyxPQUFPLG9CQUFvQixFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDckYsQ0FBQzs4R0ExVFUsYUFBYSxrQkFNSixRQUFRO2tIQU5qQixhQUFhOzsyRkFBYixhQUFhO2tCQUR6QixVQUFVOzswQkFPSSxNQUFNOzJCQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc3RVdGlsLCBFbnRpdHlSZXNwb25zZSwgRW50aXRpZXNSZXNwb25zZSwgQWN0aW9uUmVzcG9uc2UgfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgeyBQdWxzZUNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XG5cbmltcG9ydCB7IFJ1bGVUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL1J1bGVUeXBlQ29kZSc7XG5pbXBvcnQgeyBFdmVudFdpdGhEZXZpY2UgfSBmcm9tICcuLi9lbnRpdGllcy9FdmVudFdpdGhEZXZpY2UnO1xuaW1wb3J0IHsgVGltZVNlcmllc09mMkQgfSBmcm9tICcuLi9jb21tb24vVGltZVNlcmllc09mMkQnO1xuaW1wb3J0IHsgRXZlbnQgfSBmcm9tICcuLi9lbnRpdGllcy9FdmVudCc7XG5pbXBvcnQgeyBFdmVudFR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvRXZlbnRUeXBlQ29kZSc7XG5pbXBvcnQgeyBTZXZlcml0eVR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvU2V2ZXJpdHlUeXBlQ29kZSc7XG5pbXBvcnQgeyBJbnREaXN0cmlidXRpb24gfSBmcm9tICcuLi9lbnRpdGllcy9JbnREaXN0cmlidXRpb24nO1xuaW1wb3J0IHsgVGltZVNlcmllc09mRmxvYXQgfSBmcm9tICcuLi9jb21tb24vVGltZVNlcmllc09mRmxvYXQnO1xuaW1wb3J0IHsgRXZlbnRDYXRlZ29yeUNvZGUgfSBmcm9tICcuLi9lbnVtcy9FdmVudENhdGVnb3J5Q29kZSc7XG5pbXBvcnQgeyBFdmVudFN0YXR1c0NvZGUgfSBmcm9tICcuLi9lbnVtcy9FdmVudFN0YXR1c0NvZGUnO1xuaW1wb3J0IHsgTWFsaWNpb3VzSVBEYXRhIH0gZnJvbSAnLi4vY29tbW9uL01hbGljaW91c0lQRGF0YSc7XG5cblxuXG4vLyBMaXN0IG9mIGV2ZW50cyByZWxhdGVkIGFjdGlvbnMgZm9yIHRoZSBvcGVyYXRvciBcbi8vIEBSZXF1ZXN0SGVhZGVyIFgtQVBJLUtFWSBUaGUga2V5IHRvIGlkZW50aWZ5IHRoZSBhcHBsaWNhdGlvbiAoY29uc29sZSkgXG4vLyBAUmVxdWVzdEhlYWRlciBYLUFDQ0VTUy1UT0tFTiBUaGUgdG9rZW4gdG8gaWRlbnRpZnkgdGhlIGxvZ2dlZC1pbiB1c2VyIFxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEV2ZW50c1NlcnZpY2Uge1xuXG4gIC8vIFVSTCB0byB3ZWIgYXBpXG4gIHByaXZhdGUgYmFzZVVybCA9ICcvZXZlbnRzJztcblxuICAvLyBDbGFzcyBjb25zdHJ1Y3RvclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdjb25maWcnKSBwcml2YXRlIGNvbmZpZzogUHVsc2VDb25maWcsIHByaXZhdGUgcmVzdDogUmVzdFV0aWwpIHtcbiAgICB0aGlzLmJhc2VVcmwgPSB0aGlzLmNvbmZpZy5hcGkgKyB0aGlzLmJhc2VVcmw7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBHZXQgc2luZ2xlIGV2ZW50IGJ5IGlkXG4gICAqL1xuICBnZXQoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldDxFbnRpdHlSZXNwb25zZTxFdmVudD4+KGAke3RoaXMuYmFzZVVybH0vJHtpZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIGxpc3Qgb2YgZXZlbnRzIGJ5IHF1ZXJ5XG4gICAqL1xuICBmaW5kKHN0cmVhbUlkPzogc3RyaW5nLCBkZXZpY2VJZD86IHN0cmluZywgc2VhcmNoPzogc3RyaW5nLCBmcm9tPzogbnVtYmVyLCB0bz86IG51bWJlciwgdHlwZT86IEV2ZW50VHlwZUNvZGVbXSwgc2V2ZXJpdHk/OiBTZXZlcml0eVR5cGVDb2RlW10sIGNhdGVnb3J5PzogRXZlbnRDYXRlZ29yeUNvZGVbXSwgc3RhdHVzPzogRXZlbnRTdGF0dXNDb2RlW10sIHJ1bGVJZD86IHN0cmluZ1tdLCB0YXJnZXRJcD86IHN0cmluZywgcnVsZVR5cGU/OiBSdWxlVHlwZUNvZGVbXSwgc29ydD86IHN0cmluZywgcGFnZT86IG51bWJlciwgc2l6ZT86IG51bWJlcikge1xuICAgIGNvbnN0IHBhcmFtcyA9IFtdO1x0XHRcbiAgICBpZiAoc3RyZWFtSWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc3RyZWFtSWQ9JHtzdHJlYW1JZH1gKTsgfVxuICAgIGlmIChkZXZpY2VJZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBkZXZpY2VJZD0ke2RldmljZUlkfWApOyB9XG4gICAgaWYgKHNlYXJjaCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzZWFyY2g9JHtzZWFyY2h9YCk7IH1cbiAgICBpZiAoZnJvbSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmcm9tPSR7ZnJvbX1gKTsgfVxuICAgIGlmICh0byAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0bz0ke3RvfWApOyB9XG4gICAgaWYgKHR5cGUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgdHlwZT0ke3R5cGV9YCk7IH1cbiAgICBpZiAoc2V2ZXJpdHkgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2V2ZXJpdHk9JHtzZXZlcml0eX1gKTsgfVxuICAgIGlmIChjYXRlZ29yeSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBjYXRlZ29yeT0ke2NhdGVnb3J5fWApOyB9XG4gICAgaWYgKHN0YXR1cyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdGF0dXM9JHtzdGF0dXN9YCk7IH1cbiAgICBpZiAocnVsZUlkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHJ1bGVJZD0ke3J1bGVJZH1gKTsgfVxuICAgIGlmICh0YXJnZXRJcCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0YXJnZXRJcD0ke3RhcmdldElwfWApOyB9XG4gICAgaWYgKHJ1bGVUeXBlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHJ1bGVUeXBlPSR7cnVsZVR5cGV9YCk7IH1cbiAgICBpZiAoc29ydCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzb3J0PSR7c29ydH1gKTsgfVxuICAgIGlmIChwYWdlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2U9JHtwYWdlfWApOyB9XG4gICAgaWYgKHNpemUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2l6ZT0ke3NpemV9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0PEVudGl0aWVzUmVzcG9uc2U8RXZlbnQ+PihgJHt0aGlzLmJhc2VVcmx9YCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHBvcnQgbGlzdCBvZiBldmVudHMgYnkgcXVlcnkgdG8gYSBmaWxlIHdpdGggdGhlIHNwZWNpZmllZCBmb3JtYXRcbiAgICovXG4gIGV4cG9ydEZvcm1hdChmb3JtYXQ/OiBzdHJpbmcsIHN0cmVhbUlkPzogc3RyaW5nLCBkZXZpY2VJZD86IHN0cmluZywgc2VhcmNoPzogc3RyaW5nLCBmcm9tPzogbnVtYmVyLCB0bz86IG51bWJlciwgdHlwZT86IEV2ZW50VHlwZUNvZGVbXSwgc2V2ZXJpdHk/OiBTZXZlcml0eVR5cGVDb2RlW10sIGNhdGVnb3J5PzogRXZlbnRDYXRlZ29yeUNvZGVbXSwgc3RhdHVzPzogRXZlbnRTdGF0dXNDb2RlW10sIHJ1bGVJZD86IHN0cmluZ1tdLCB0YXJnZXRJcD86IHN0cmluZywgcnVsZVR5cGU/OiBSdWxlVHlwZUNvZGVbXSwgc29ydD86IHN0cmluZywgcGFnZT86IG51bWJlciwgc2l6ZT86IG51bWJlcikge1xuICAgIGNvbnN0IHBhcmFtcyA9IFtdO1x0XHRcbiAgICBpZiAoc3RyZWFtSWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc3RyZWFtSWQ9JHtzdHJlYW1JZH1gKTsgfVxuICAgIGlmIChkZXZpY2VJZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBkZXZpY2VJZD0ke2RldmljZUlkfWApOyB9XG4gICAgaWYgKHNlYXJjaCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzZWFyY2g9JHtzZWFyY2h9YCk7IH1cbiAgICBpZiAoZnJvbSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmcm9tPSR7ZnJvbX1gKTsgfVxuICAgIGlmICh0byAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0bz0ke3RvfWApOyB9XG4gICAgaWYgKHR5cGUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgdHlwZT0ke3R5cGV9YCk7IH1cbiAgICBpZiAoc2V2ZXJpdHkgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2V2ZXJpdHk9JHtzZXZlcml0eX1gKTsgfVxuICAgIGlmIChjYXRlZ29yeSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBjYXRlZ29yeT0ke2NhdGVnb3J5fWApOyB9XG4gICAgaWYgKHN0YXR1cyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdGF0dXM9JHtzdGF0dXN9YCk7IH1cbiAgICBpZiAocnVsZUlkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHJ1bGVJZD0ke3J1bGVJZH1gKTsgfVxuICAgIGlmICh0YXJnZXRJcCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0YXJnZXRJcD0ke3RhcmdldElwfWApOyB9XG4gICAgaWYgKHJ1bGVUeXBlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHJ1bGVUeXBlPSR7cnVsZVR5cGV9YCk7IH1cbiAgICBpZiAoc29ydCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzb3J0PSR7c29ydH1gKTsgfVxuICAgIGlmIChwYWdlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2U9JHtwYWdlfWApOyB9XG4gICAgaWYgKHNpemUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2l6ZT0ke3NpemV9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZG93bmxvYWQoYGV2ZW50c2AsYCR7dGhpcy5iYXNlVXJsfS9leHBvcnQvJHtmb3JtYXR9YCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIHRvcCAxMCBldmVudHMgYnkgdGhlaXIgc2V2ZXJpdHkgZmlsdGVyIGJ5IHF1ZXJ5XG4gICAqL1xuICBnZXRUb3Aoc3RyZWFtSWQ/OiBzdHJpbmcsIGRldmljZUlkPzogc3RyaW5nLCBzZWFyY2g/OiBzdHJpbmcsIGZyb20/OiBudW1iZXIsIHRvPzogbnVtYmVyLCB0eXBlPzogRXZlbnRUeXBlQ29kZVtdLCBzZXZlcml0eT86IFNldmVyaXR5VHlwZUNvZGVbXSwgY2F0ZWdvcnk/OiBFdmVudENhdGVnb3J5Q29kZVtdLCBzdGF0dXM/OiBFdmVudFN0YXR1c0NvZGVbXSwgcnVsZUlkPzogc3RyaW5nW10sIHRhcmdldElwPzogc3RyaW5nLCBydWxlVHlwZT86IFJ1bGVUeXBlQ29kZVtdLCBzb3J0Pzogc3RyaW5nLCBwYWdlPzogbnVtYmVyLCBzaXplPzogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFyYW1zID0gW107XHRcdFxuICAgIGlmIChzdHJlYW1JZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdHJlYW1JZD0ke3N0cmVhbUlkfWApOyB9XG4gICAgaWYgKGRldmljZUlkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGRldmljZUlkPSR7ZGV2aWNlSWR9YCk7IH1cbiAgICBpZiAoc2VhcmNoICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNlYXJjaD0ke3NlYXJjaH1gKTsgfVxuICAgIGlmIChmcm9tICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZyb209JHtmcm9tfWApOyB9XG4gICAgaWYgKHRvICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHRvPSR7dG99YCk7IH1cbiAgICBpZiAodHlwZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0eXBlPSR7dHlwZX1gKTsgfVxuICAgIGlmIChzZXZlcml0eSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzZXZlcml0eT0ke3NldmVyaXR5fWApOyB9XG4gICAgaWYgKGNhdGVnb3J5ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGNhdGVnb3J5PSR7Y2F0ZWdvcnl9YCk7IH1cbiAgICBpZiAoc3RhdHVzICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHN0YXR1cz0ke3N0YXR1c31gKTsgfVxuICAgIGlmIChydWxlSWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcnVsZUlkPSR7cnVsZUlkfWApOyB9XG4gICAgaWYgKHRhcmdldElwICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHRhcmdldElwPSR7dGFyZ2V0SXB9YCk7IH1cbiAgICBpZiAocnVsZVR5cGUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcnVsZVR5cGU9JHtydWxlVHlwZX1gKTsgfVxuICAgIGlmIChzb3J0ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNvcnQ9JHtzb3J0fWApOyB9XG4gICAgaWYgKHBhZ2UgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcGFnZT0ke3BhZ2V9YCk7IH1cbiAgICBpZiAoc2l6ZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzaXplPSR7c2l6ZX1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQ8RW50aXRpZXNSZXNwb25zZTxFdmVudFdpdGhEZXZpY2U+PihgJHt0aGlzLmJhc2VVcmx9L3RvcGAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRvcCBtYWxpY2lvdXMgSVBzXG4gICAqL1xuICBnZXRUb3BNYWxpY2lvdXNJUHMoc3RyZWFtSWQ/OiBzdHJpbmcsIHRvcD86IG51bWJlciwgZnJvbT86IG51bWJlciwgdG8/OiBudW1iZXIpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBbXTtcdFx0XG4gICAgaWYgKHN0cmVhbUlkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHN0cmVhbUlkPSR7c3RyZWFtSWR9YCk7IH1cbiAgICBpZiAodG9wICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHRvcD0ke3RvcH1gKTsgfVxuICAgIGlmIChmcm9tICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZyb209JHtmcm9tfWApOyB9XG4gICAgaWYgKHRvICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHRvPSR7dG99YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0PEVudGl0aWVzUmVzcG9uc2U8TWFsaWNpb3VzSVBEYXRhPj4oYCR7dGhpcy5iYXNlVXJsfS90b3AtbWFsaWNpb3VzLWlwc2AsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogRmluZCBldmVudHMgZGlzdHJpYnV0aW9uIGJ5IHR5cGUgZmlsdGVyZWQgYnkgcXVlcnlcbiAgICovXG4gIGNvdW50QnlUeXBlKHN0cmVhbUlkPzogc3RyaW5nLCBkZXZpY2VJZD86IHN0cmluZywgc2VhcmNoPzogc3RyaW5nLCBmcm9tPzogbnVtYmVyLCB0bz86IG51bWJlciwgdHlwZT86IEV2ZW50VHlwZUNvZGVbXSwgc2V2ZXJpdHk/OiBTZXZlcml0eVR5cGVDb2RlW10sIGNhdGVnb3J5PzogRXZlbnRDYXRlZ29yeUNvZGVbXSwgc3RhdHVzPzogRXZlbnRTdGF0dXNDb2RlW10sIHJ1bGVJZD86IHN0cmluZ1tdLCB0YXJnZXRJcD86IHN0cmluZywgcnVsZVR5cGU/OiBSdWxlVHlwZUNvZGVbXSwgc29ydD86IHN0cmluZywgcGFnZT86IG51bWJlciwgc2l6ZT86IG51bWJlcikge1xuICAgIGNvbnN0IHBhcmFtcyA9IFtdO1x0XHRcbiAgICBpZiAoc3RyZWFtSWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc3RyZWFtSWQ9JHtzdHJlYW1JZH1gKTsgfVxuICAgIGlmIChkZXZpY2VJZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBkZXZpY2VJZD0ke2RldmljZUlkfWApOyB9XG4gICAgaWYgKHNlYXJjaCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzZWFyY2g9JHtzZWFyY2h9YCk7IH1cbiAgICBpZiAoZnJvbSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmcm9tPSR7ZnJvbX1gKTsgfVxuICAgIGlmICh0byAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0bz0ke3RvfWApOyB9XG4gICAgaWYgKHR5cGUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgdHlwZT0ke3R5cGV9YCk7IH1cbiAgICBpZiAoc2V2ZXJpdHkgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2V2ZXJpdHk9JHtzZXZlcml0eX1gKTsgfVxuICAgIGlmIChjYXRlZ29yeSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBjYXRlZ29yeT0ke2NhdGVnb3J5fWApOyB9XG4gICAgaWYgKHN0YXR1cyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdGF0dXM9JHtzdGF0dXN9YCk7IH1cbiAgICBpZiAocnVsZUlkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHJ1bGVJZD0ke3J1bGVJZH1gKTsgfVxuICAgIGlmICh0YXJnZXRJcCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0YXJnZXRJcD0ke3RhcmdldElwfWApOyB9XG4gICAgaWYgKHJ1bGVUeXBlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHJ1bGVUeXBlPSR7cnVsZVR5cGV9YCk7IH1cbiAgICBpZiAoc29ydCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzb3J0PSR7c29ydH1gKTsgfVxuICAgIGlmIChwYWdlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2U9JHtwYWdlfWApOyB9XG4gICAgaWYgKHNpemUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2l6ZT0ke3NpemV9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0PEVudGl0eVJlc3BvbnNlPEludERpc3RyaWJ1dGlvbj4+KGAke3RoaXMuYmFzZVVybH0vY291bnQvYnktdHlwZWAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogRmluZCBldmVudHMgZGlzdHJpYnV0aW9uIGJ5IHN0YXR1cyBmaWx0ZXJlZCBieSBxdWVyeVxuICAgKi9cbiAgY291bnRCeVN0YXR1cyhzdHJlYW1JZD86IHN0cmluZywgZGV2aWNlSWQ/OiBzdHJpbmcsIHNlYXJjaD86IHN0cmluZywgZnJvbT86IG51bWJlciwgdG8/OiBudW1iZXIsIHR5cGU/OiBFdmVudFR5cGVDb2RlW10sIHNldmVyaXR5PzogU2V2ZXJpdHlUeXBlQ29kZVtdLCBjYXRlZ29yeT86IEV2ZW50Q2F0ZWdvcnlDb2RlW10sIHN0YXR1cz86IEV2ZW50U3RhdHVzQ29kZVtdLCBydWxlSWQ/OiBzdHJpbmdbXSwgdGFyZ2V0SXA/OiBzdHJpbmcsIHJ1bGVUeXBlPzogUnVsZVR5cGVDb2RlW10sIHNvcnQ/OiBzdHJpbmcsIHBhZ2U/OiBudW1iZXIsIHNpemU/OiBudW1iZXIpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBbXTtcdFx0XG4gICAgaWYgKHN0cmVhbUlkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHN0cmVhbUlkPSR7c3RyZWFtSWR9YCk7IH1cbiAgICBpZiAoZGV2aWNlSWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZGV2aWNlSWQ9JHtkZXZpY2VJZH1gKTsgfVxuICAgIGlmIChzZWFyY2ggIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2VhcmNoPSR7c2VhcmNofWApOyB9XG4gICAgaWYgKGZyb20gIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZnJvbT0ke2Zyb219YCk7IH1cbiAgICBpZiAodG8gIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgdG89JHt0b31gKTsgfVxuICAgIGlmICh0eXBlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHR5cGU9JHt0eXBlfWApOyB9XG4gICAgaWYgKHNldmVyaXR5ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNldmVyaXR5PSR7c2V2ZXJpdHl9YCk7IH1cbiAgICBpZiAoY2F0ZWdvcnkgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgY2F0ZWdvcnk9JHtjYXRlZ29yeX1gKTsgfVxuICAgIGlmIChzdGF0dXMgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc3RhdHVzPSR7c3RhdHVzfWApOyB9XG4gICAgaWYgKHJ1bGVJZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBydWxlSWQ9JHtydWxlSWR9YCk7IH1cbiAgICBpZiAodGFyZ2V0SXAgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgdGFyZ2V0SXA9JHt0YXJnZXRJcH1gKTsgfVxuICAgIGlmIChydWxlVHlwZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBydWxlVHlwZT0ke3J1bGVUeXBlfWApOyB9XG4gICAgaWYgKHNvcnQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc29ydD0ke3NvcnR9YCk7IH1cbiAgICBpZiAocGFnZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYWdlPSR7cGFnZX1gKTsgfVxuICAgIGlmIChzaXplICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNpemU9JHtzaXplfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldDxFbnRpdHlSZXNwb25zZTxJbnREaXN0cmlidXRpb24+PihgJHt0aGlzLmJhc2VVcmx9L2NvdW50L2J5LXN0YXR1c2AsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogRmluZCBldmVudHMgZGlzdHJpYnV0aW9uIGJ5IHNldmVyaXR5IGZpbHRlcmVkIGJ5IHF1ZXJ5XG4gICAqL1xuICBjb3VudEJ5U2V2ZXJpdHkoc3RyZWFtSWQ/OiBzdHJpbmcsIGRldmljZUlkPzogc3RyaW5nLCBzZWFyY2g/OiBzdHJpbmcsIGZyb20/OiBudW1iZXIsIHRvPzogbnVtYmVyLCB0eXBlPzogRXZlbnRUeXBlQ29kZVtdLCBzZXZlcml0eT86IFNldmVyaXR5VHlwZUNvZGVbXSwgY2F0ZWdvcnk/OiBFdmVudENhdGVnb3J5Q29kZVtdLCBzdGF0dXM/OiBFdmVudFN0YXR1c0NvZGVbXSwgcnVsZUlkPzogc3RyaW5nW10sIHRhcmdldElwPzogc3RyaW5nLCBydWxlVHlwZT86IFJ1bGVUeXBlQ29kZVtdLCBzb3J0Pzogc3RyaW5nLCBwYWdlPzogbnVtYmVyLCBzaXplPzogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFyYW1zID0gW107XHRcdFxuICAgIGlmIChzdHJlYW1JZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdHJlYW1JZD0ke3N0cmVhbUlkfWApOyB9XG4gICAgaWYgKGRldmljZUlkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGRldmljZUlkPSR7ZGV2aWNlSWR9YCk7IH1cbiAgICBpZiAoc2VhcmNoICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNlYXJjaD0ke3NlYXJjaH1gKTsgfVxuICAgIGlmIChmcm9tICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZyb209JHtmcm9tfWApOyB9XG4gICAgaWYgKHRvICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHRvPSR7dG99YCk7IH1cbiAgICBpZiAodHlwZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0eXBlPSR7dHlwZX1gKTsgfVxuICAgIGlmIChzZXZlcml0eSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzZXZlcml0eT0ke3NldmVyaXR5fWApOyB9XG4gICAgaWYgKGNhdGVnb3J5ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGNhdGVnb3J5PSR7Y2F0ZWdvcnl9YCk7IH1cbiAgICBpZiAoc3RhdHVzICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHN0YXR1cz0ke3N0YXR1c31gKTsgfVxuICAgIGlmIChydWxlSWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcnVsZUlkPSR7cnVsZUlkfWApOyB9XG4gICAgaWYgKHRhcmdldElwICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHRhcmdldElwPSR7dGFyZ2V0SXB9YCk7IH1cbiAgICBpZiAocnVsZVR5cGUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcnVsZVR5cGU9JHtydWxlVHlwZX1gKTsgfVxuICAgIGlmIChzb3J0ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNvcnQ9JHtzb3J0fWApOyB9XG4gICAgaWYgKHBhZ2UgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcGFnZT0ke3BhZ2V9YCk7IH1cbiAgICBpZiAoc2l6ZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzaXplPSR7c2l6ZX1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQ8RW50aXR5UmVzcG9uc2U8SW50RGlzdHJpYnV0aW9uPj4oYCR7dGhpcy5iYXNlVXJsfS9jb3VudC9ieS1zZXZlcml0eWAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogRmluZCBldmVudHMgZGlzdHJpYnV0aW9uIGJ5IHJ1bGUgZmlsdGVyZWQgYnkgcXVlcnlcbiAgICovXG4gIGNvdW50QnlSdWxlKHN0cmVhbUlkPzogc3RyaW5nLCBkZXZpY2VJZD86IHN0cmluZywgc2VhcmNoPzogc3RyaW5nLCBmcm9tPzogbnVtYmVyLCB0bz86IG51bWJlciwgdHlwZT86IEV2ZW50VHlwZUNvZGVbXSwgc2V2ZXJpdHk/OiBTZXZlcml0eVR5cGVDb2RlW10sIGNhdGVnb3J5PzogRXZlbnRDYXRlZ29yeUNvZGVbXSwgc3RhdHVzPzogRXZlbnRTdGF0dXNDb2RlW10sIHJ1bGVJZD86IHN0cmluZ1tdLCB0YXJnZXRJcD86IHN0cmluZywgcnVsZVR5cGU/OiBSdWxlVHlwZUNvZGVbXSwgc29ydD86IHN0cmluZywgcGFnZT86IG51bWJlciwgc2l6ZT86IG51bWJlcikge1xuICAgIGNvbnN0IHBhcmFtcyA9IFtdO1x0XHRcbiAgICBpZiAoc3RyZWFtSWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc3RyZWFtSWQ9JHtzdHJlYW1JZH1gKTsgfVxuICAgIGlmIChkZXZpY2VJZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBkZXZpY2VJZD0ke2RldmljZUlkfWApOyB9XG4gICAgaWYgKHNlYXJjaCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzZWFyY2g9JHtzZWFyY2h9YCk7IH1cbiAgICBpZiAoZnJvbSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmcm9tPSR7ZnJvbX1gKTsgfVxuICAgIGlmICh0byAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0bz0ke3RvfWApOyB9XG4gICAgaWYgKHR5cGUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgdHlwZT0ke3R5cGV9YCk7IH1cbiAgICBpZiAoc2V2ZXJpdHkgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2V2ZXJpdHk9JHtzZXZlcml0eX1gKTsgfVxuICAgIGlmIChjYXRlZ29yeSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBjYXRlZ29yeT0ke2NhdGVnb3J5fWApOyB9XG4gICAgaWYgKHN0YXR1cyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdGF0dXM9JHtzdGF0dXN9YCk7IH1cbiAgICBpZiAocnVsZUlkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHJ1bGVJZD0ke3J1bGVJZH1gKTsgfVxuICAgIGlmICh0YXJnZXRJcCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0YXJnZXRJcD0ke3RhcmdldElwfWApOyB9XG4gICAgaWYgKHJ1bGVUeXBlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHJ1bGVUeXBlPSR7cnVsZVR5cGV9YCk7IH1cbiAgICBpZiAoc29ydCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzb3J0PSR7c29ydH1gKTsgfVxuICAgIGlmIChwYWdlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2U9JHtwYWdlfWApOyB9XG4gICAgaWYgKHNpemUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2l6ZT0ke3NpemV9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0PEVudGl0eVJlc3BvbnNlPEludERpc3RyaWJ1dGlvbj4+KGAke3RoaXMuYmFzZVVybH0vY291bnQvYnktcnVsZWAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogRmluZCBldmVudHMgZGlzdHJpYnV0aW9uIGJ5IGNhdGVnb3J5IGZpbHRlcmVkIGJ5IHF1ZXJ5XG4gICAqL1xuICBjb3VudEJ5Q2F0ZWdvcnkoc3RyZWFtSWQ/OiBzdHJpbmcsIGRldmljZUlkPzogc3RyaW5nLCBzZWFyY2g/OiBzdHJpbmcsIGZyb20/OiBudW1iZXIsIHRvPzogbnVtYmVyLCB0eXBlPzogRXZlbnRUeXBlQ29kZVtdLCBzZXZlcml0eT86IFNldmVyaXR5VHlwZUNvZGVbXSwgY2F0ZWdvcnk/OiBFdmVudENhdGVnb3J5Q29kZVtdLCBzdGF0dXM/OiBFdmVudFN0YXR1c0NvZGVbXSwgcnVsZUlkPzogc3RyaW5nW10sIHRhcmdldElwPzogc3RyaW5nLCBydWxlVHlwZT86IFJ1bGVUeXBlQ29kZVtdLCBzb3J0Pzogc3RyaW5nLCBwYWdlPzogbnVtYmVyLCBzaXplPzogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFyYW1zID0gW107XHRcdFxuICAgIGlmIChzdHJlYW1JZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdHJlYW1JZD0ke3N0cmVhbUlkfWApOyB9XG4gICAgaWYgKGRldmljZUlkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGRldmljZUlkPSR7ZGV2aWNlSWR9YCk7IH1cbiAgICBpZiAoc2VhcmNoICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNlYXJjaD0ke3NlYXJjaH1gKTsgfVxuICAgIGlmIChmcm9tICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZyb209JHtmcm9tfWApOyB9XG4gICAgaWYgKHRvICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHRvPSR7dG99YCk7IH1cbiAgICBpZiAodHlwZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0eXBlPSR7dHlwZX1gKTsgfVxuICAgIGlmIChzZXZlcml0eSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzZXZlcml0eT0ke3NldmVyaXR5fWApOyB9XG4gICAgaWYgKGNhdGVnb3J5ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGNhdGVnb3J5PSR7Y2F0ZWdvcnl9YCk7IH1cbiAgICBpZiAoc3RhdHVzICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHN0YXR1cz0ke3N0YXR1c31gKTsgfVxuICAgIGlmIChydWxlSWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcnVsZUlkPSR7cnVsZUlkfWApOyB9XG4gICAgaWYgKHRhcmdldElwICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHRhcmdldElwPSR7dGFyZ2V0SXB9YCk7IH1cbiAgICBpZiAocnVsZVR5cGUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcnVsZVR5cGU9JHtydWxlVHlwZX1gKTsgfVxuICAgIGlmIChzb3J0ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNvcnQ9JHtzb3J0fWApOyB9XG4gICAgaWYgKHBhZ2UgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcGFnZT0ke3BhZ2V9YCk7IH1cbiAgICBpZiAoc2l6ZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzaXplPSR7c2l6ZX1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQ8RW50aXR5UmVzcG9uc2U8SW50RGlzdHJpYnV0aW9uPj4oYCR7dGhpcy5iYXNlVXJsfS9jb3VudC9ieS1jYXRlZ29yeWAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGV2ZW50IHN0YXR1c1xuICAgKi9cbiAgYXBwbHlBY3Rpb24oaWQ/OiBzdHJpbmcsIHN0YXR1cz86IEV2ZW50U3RhdHVzQ29kZSkge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdDxBY3Rpb25SZXNwb25zZT4oYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9zdGF0dXMvJHtzdGF0dXN9YCwgJycpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjdXJyZW50IHNoaWVsZGV4IHZhbHVlIGFzIEFjdGlvblJlc3BvbnNlLCB0aGUgS2V5IGNvbnRhaW5zIHRoZSBzaGllbGQgaW5kZXggYW5kIHRoZSBkYXRhIGluY2x1ZGVzIHRoZSB0cmVuZFxuICAgKi9cbiAgZ2V0U2hpZWxkZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQ8QWN0aW9uUmVzcG9uc2U+KGAke3RoaXMuYmFzZVVybH0vc2hpZWxkZXhgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgaGlzdG9ncmFtIG9mIGV2ZW50cyBvdmVyIHRpbWUgYnkgZGltZW5zaW9uICh0eXBlIHwgc2V2ZXJpdHkgfCBzdGF0dXMgfCBydWxlVHlwZSB8IGNhdGVnb3J5KVxuICAgKi9cbiAgZXZlbnRzVGltZWxpbmUoc3RyZWFtSWQ/OiBzdHJpbmcsIGRldmljZUlkPzogc3RyaW5nLCBkaW1lbnNpb24/OiBzdHJpbmcsIGZyb20/OiBudW1iZXIsIHRvPzogbnVtYmVyLCB0eXBlPzogRXZlbnRUeXBlQ29kZVtdLCBzZXZlcml0eT86IFNldmVyaXR5VHlwZUNvZGVbXSwgY2F0ZWdvcnk/OiBFdmVudENhdGVnb3J5Q29kZVtdLCBzdGF0dXM/OiBFdmVudFN0YXR1c0NvZGVbXSwgcnVsZUlkPzogc3RyaW5nW10sIHRhcmdldElwPzogc3RyaW5nLCBydWxlVHlwZT86IFJ1bGVUeXBlQ29kZVtdLCBzb3J0Pzogc3RyaW5nLCBwYWdlPzogbnVtYmVyLCBzaXplPzogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFyYW1zID0gW107XHRcdFxuICAgIGlmIChzdHJlYW1JZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdHJlYW1JZD0ke3N0cmVhbUlkfWApOyB9XG4gICAgaWYgKGRldmljZUlkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGRldmljZUlkPSR7ZGV2aWNlSWR9YCk7IH1cbiAgICBpZiAoZGltZW5zaW9uICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGRpbWVuc2lvbj0ke2RpbWVuc2lvbn1gKTsgfVxuICAgIGlmIChmcm9tICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZyb209JHtmcm9tfWApOyB9XG4gICAgaWYgKHRvICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHRvPSR7dG99YCk7IH1cbiAgICBpZiAodHlwZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0eXBlPSR7dHlwZX1gKTsgfVxuICAgIGlmIChzZXZlcml0eSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzZXZlcml0eT0ke3NldmVyaXR5fWApOyB9XG4gICAgaWYgKGNhdGVnb3J5ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGNhdGVnb3J5PSR7Y2F0ZWdvcnl9YCk7IH1cbiAgICBpZiAoc3RhdHVzICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHN0YXR1cz0ke3N0YXR1c31gKTsgfVxuICAgIGlmIChydWxlSWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcnVsZUlkPSR7cnVsZUlkfWApOyB9XG4gICAgaWYgKHRhcmdldElwICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHRhcmdldElwPSR7dGFyZ2V0SXB9YCk7IH1cbiAgICBpZiAocnVsZVR5cGUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcnVsZVR5cGU9JHtydWxlVHlwZX1gKTsgfVxuICAgIGlmIChzb3J0ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNvcnQ9JHtzb3J0fWApOyB9XG4gICAgaWYgKHBhZ2UgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcGFnZT0ke3BhZ2V9YCk7IH1cbiAgICBpZiAoc2l6ZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzaXplPSR7c2l6ZX1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQ8RW50aXR5UmVzcG9uc2U8VGltZVNlcmllc09mMkQ+PihgJHt0aGlzLmJhc2VVcmx9L3RpbWVsaW5lYCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgaGlzdG9ncmFtIG9mIHNoaWVsZGV4IHZhbHVlcyBvdmVyIHRpbWVcbiAgICovXG4gIHNoaWVsZGV4VGltZWxpbmUoc3RyZWFtSWQ/OiBzdHJpbmcsIGZyb20/OiBudW1iZXIsIHRvPzogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFyYW1zID0gW107XHRcdFxuICAgIGlmIChzdHJlYW1JZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdHJlYW1JZD0ke3N0cmVhbUlkfWApOyB9XG4gICAgaWYgKGZyb20gIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZnJvbT0ke2Zyb219YCk7IH1cbiAgICBpZiAodG8gIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgdG89JHt0b31gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQ8RW50aXR5UmVzcG9uc2U8VGltZVNlcmllc09mRmxvYXQ+PihgJHt0aGlzLmJhc2VVcmx9L3NoaWVsZGV4L3RpbWVsaW5lYCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHBvcnQgZXZlbnQgc291cmNlIGZpbGVcbiAgICovXG4gIGV4cG9ydFNvdXJjZShpZD86IHN0cmluZywgdGltZXN0YW1wPzogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFyYW1zID0gW107XHRcdFxuICAgIGlmICh0aW1lc3RhbXAgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgdGltZXN0YW1wPSR7dGltZXN0YW1wfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmRvd25sb2FkKGBldmVudHNgLGAke3RoaXMuYmFzZVVybH0vJHtpZH0vZXhwb3J0X3NvdXJjZWAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRvdGFsIG51bWJlciBkZXZpY2VzIGF0IHJpc2sgKGFmZmVjdGVkIGJ5IHRoZSBldmVudHMgbWF0Y2hpbmcgdGhlIHF1ZXJ5KVxuICAgKi9cbiAgZ2V0VG90YWxEZXZpY2VzQXRSaXNrKHN0cmVhbUlkPzogc3RyaW5nLCBzZWFyY2g/OiBzdHJpbmcsIGZyb20/OiBudW1iZXIsIHRvPzogbnVtYmVyLCB0eXBlPzogRXZlbnRUeXBlQ29kZVtdLCBzZXZlcml0eT86IFNldmVyaXR5VHlwZUNvZGVbXSwgY2F0ZWdvcnk/OiBFdmVudENhdGVnb3J5Q29kZVtdLCBzdGF0dXM/OiBFdmVudFN0YXR1c0NvZGVbXSwgcnVsZUlkPzogc3RyaW5nW10sIHRhcmdldElwPzogc3RyaW5nLCBydWxlVHlwZT86IFJ1bGVUeXBlQ29kZVtdKSB7XG4gICAgY29uc3QgcGFyYW1zID0gW107XHRcdFxuICAgIGlmIChzdHJlYW1JZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdHJlYW1JZD0ke3N0cmVhbUlkfWApOyB9XG4gICAgaWYgKHNlYXJjaCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzZWFyY2g9JHtzZWFyY2h9YCk7IH1cbiAgICBpZiAoZnJvbSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmcm9tPSR7ZnJvbX1gKTsgfVxuICAgIGlmICh0byAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0bz0ke3RvfWApOyB9XG4gICAgaWYgKHR5cGUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgdHlwZT0ke3R5cGV9YCk7IH1cbiAgICBpZiAoc2V2ZXJpdHkgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2V2ZXJpdHk9JHtzZXZlcml0eX1gKTsgfVxuICAgIGlmIChjYXRlZ29yeSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBjYXRlZ29yeT0ke2NhdGVnb3J5fWApOyB9XG4gICAgaWYgKHN0YXR1cyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdGF0dXM9JHtzdGF0dXN9YCk7IH1cbiAgICBpZiAocnVsZUlkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHJ1bGVJZD0ke3J1bGVJZH1gKTsgfVxuICAgIGlmICh0YXJnZXRJcCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0YXJnZXRJcD0ke3RhcmdldElwfWApOyB9XG4gICAgaWYgKHJ1bGVUeXBlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHJ1bGVUeXBlPSR7cnVsZVR5cGV9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0PEFjdGlvblJlc3BvbnNlPihgJHt0aGlzLmJhc2VVcmx9L2RldmljZXMtYXQtcmlza2AsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IG1hbGljaW91cyBJUCBkYXRhIGNhcmQgZm9yIHNwZWNpZmljIG1hbGljaW91cyBJUFxuICAgKi9cbiAgZ2V0TWFsaWNpb3VzSXBDYXJkKHN0cmVhbUlkPzogc3RyaW5nLCB0YXJnZXRJcD86IHN0cmluZywgZnJvbT86IG51bWJlciwgdG8/OiBudW1iZXIpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBbXTtcdFx0XG4gICAgaWYgKHN0cmVhbUlkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHN0cmVhbUlkPSR7c3RyZWFtSWR9YCk7IH1cbiAgICBpZiAodGFyZ2V0SXAgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgdGFyZ2V0SXA9JHt0YXJnZXRJcH1gKTsgfVxuICAgIGlmIChmcm9tICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZyb209JHtmcm9tfWApOyB9XG4gICAgaWYgKHRvICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHRvPSR7dG99YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0PEFjdGlvblJlc3BvbnNlPihgJHt0aGlzLmJhc2VVcmx9L21hbGljaW91cy1pcC1jYXJkYCwgLi4ucGFyYW1zKTtcbiAgfVxuXG59XG4iXX0=