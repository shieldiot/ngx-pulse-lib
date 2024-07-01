import { Injectable, Inject } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../utils";
import * as i2 from "../../config";
// List of system statistics information for system administrator only 
// @RequestHeader X-API-KEY The key to identify the application (console) 
// @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user 
export class SysStatisticsService {
    // Class constructor
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/sys/statistics';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Get accounts distribution by field
     */
    getAccountsCount(field) {
        return this.rest.get(`${this.baseUrl}/accounts/${field}`);
    }
    /**
     * Get streams distribution by field
     */
    getStreamsCount(field) {
        return this.rest.get(`${this.baseUrl}/streams/${field}`);
    }
    /**
     * Get devices distribution by field
     */
    getDevicesCount(field) {
        return this.rest.get(`${this.baseUrl}/devices/${field}`);
    }
    /**
     * Get users distribution by field
     */
    getUsersCount(field) {
        return this.rest.get(`${this.baseUrl}/users/${field}`);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: SysStatisticsService, deps: [{ token: 'config' }, { token: i1.RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: SysStatisticsService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: SysStatisticsService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i2.PulseConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: i1.RestUtil }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzU3RhdGlzdGljc1NlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtcHVsc2UtbGliL3NyYy9saWIvc2VydmljZXMvc3lzU3RhdGlzdGljc1NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFRbkQsdUVBQXVFO0FBQ3ZFLDBFQUEwRTtBQUMxRSwwRUFBMEU7QUFFMUUsTUFBTSxPQUFPLG9CQUFvQjtJQUsvQixvQkFBb0I7SUFDcEIsWUFBc0MsTUFBbUIsRUFBVSxJQUFjO1FBQTNDLFdBQU0sR0FBTixNQUFNLENBQWE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFVO1FBSmpGLGlCQUFpQjtRQUNULFlBQU8sR0FBRyxpQkFBaUIsQ0FBQztRQUlsQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDaEQsQ0FBQztJQUdEOztPQUVHO0lBQ0gsZ0JBQWdCLENBQUMsS0FBYztRQUM3QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUErQixHQUFHLElBQUksQ0FBQyxPQUFPLGFBQWEsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUMxRixDQUFDO0lBRUQ7O09BRUc7SUFDSCxlQUFlLENBQUMsS0FBYztRQUM1QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUErQixHQUFHLElBQUksQ0FBQyxPQUFPLFlBQVksS0FBSyxFQUFFLENBQUMsQ0FBQztJQUN6RixDQUFDO0lBRUQ7O09BRUc7SUFDSCxlQUFlLENBQUMsS0FBYztRQUM1QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUErQixHQUFHLElBQUksQ0FBQyxPQUFPLFlBQVksS0FBSyxFQUFFLENBQUMsQ0FBQztJQUN6RixDQUFDO0lBRUQ7O09BRUc7SUFDSCxhQUFhLENBQUMsS0FBYztRQUMxQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUErQixHQUFHLElBQUksQ0FBQyxPQUFPLFVBQVUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUN2RixDQUFDOytHQXJDVSxvQkFBb0Isa0JBTVgsUUFBUTttSEFOakIsb0JBQW9COzs0RkFBcEIsb0JBQW9CO2tCQURoQyxVQUFVOzswQkFPSSxNQUFNOzJCQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc3RVdGlsLCBFbnRpdHlSZXNwb25zZSwgRW50aXRpZXNSZXNwb25zZSwgQWN0aW9uUmVzcG9uc2UgfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgeyBQdWxzZUNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XG5cbmltcG9ydCB7IERpc3RyaWJ1dGlvbiB9IGZyb20gJy4uL2VudGl0aWVzL0Rpc3RyaWJ1dGlvbic7XG5cblxuXG4vLyBMaXN0IG9mIHN5c3RlbSBzdGF0aXN0aWNzIGluZm9ybWF0aW9uIGZvciBzeXN0ZW0gYWRtaW5pc3RyYXRvciBvbmx5IFxuLy8gQFJlcXVlc3RIZWFkZXIgWC1BUEktS0VZIFRoZSBrZXkgdG8gaWRlbnRpZnkgdGhlIGFwcGxpY2F0aW9uIChjb25zb2xlKSBcbi8vIEBSZXF1ZXN0SGVhZGVyIFgtQUNDRVNTLVRPS0VOIFRoZSB0b2tlbiB0byBpZGVudGlmeSB0aGUgbG9nZ2VkLWluIHVzZXIgXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3lzU3RhdGlzdGljc1NlcnZpY2Uge1xuXG4gIC8vIFVSTCB0byB3ZWIgYXBpXG4gIHByaXZhdGUgYmFzZVVybCA9ICcvc3lzL3N0YXRpc3RpY3MnO1xuXG4gIC8vIENsYXNzIGNvbnN0cnVjdG9yXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ2NvbmZpZycpIHByaXZhdGUgY29uZmlnOiBQdWxzZUNvbmZpZywgcHJpdmF0ZSByZXN0OiBSZXN0VXRpbCkge1xuICAgIHRoaXMuYmFzZVVybCA9IHRoaXMuY29uZmlnLmFwaSArIHRoaXMuYmFzZVVybDtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEdldCBhY2NvdW50cyBkaXN0cmlidXRpb24gYnkgZmllbGRcbiAgICovXG4gIGdldEFjY291bnRzQ291bnQoZmllbGQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldDxFbnRpdHlSZXNwb25zZTxEaXN0cmlidXRpb24+PihgJHt0aGlzLmJhc2VVcmx9L2FjY291bnRzLyR7ZmllbGR9YCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHN0cmVhbXMgZGlzdHJpYnV0aW9uIGJ5IGZpZWxkXG4gICAqL1xuICBnZXRTdHJlYW1zQ291bnQoZmllbGQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldDxFbnRpdHlSZXNwb25zZTxEaXN0cmlidXRpb24+PihgJHt0aGlzLmJhc2VVcmx9L3N0cmVhbXMvJHtmaWVsZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgZGV2aWNlcyBkaXN0cmlidXRpb24gYnkgZmllbGRcbiAgICovXG4gIGdldERldmljZXNDb3VudChmaWVsZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0PEVudGl0eVJlc3BvbnNlPERpc3RyaWJ1dGlvbj4+KGAke3RoaXMuYmFzZVVybH0vZGV2aWNlcy8ke2ZpZWxkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB1c2VycyBkaXN0cmlidXRpb24gYnkgZmllbGRcbiAgICovXG4gIGdldFVzZXJzQ291bnQoZmllbGQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldDxFbnRpdHlSZXNwb25zZTxEaXN0cmlidXRpb24+PihgJHt0aGlzLmJhc2VVcmx9L3VzZXJzLyR7ZmllbGR9YCk7XG4gIH1cblxufVxuIl19