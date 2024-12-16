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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SysStatisticsService, deps: [{ token: 'config' }, { token: i1.RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SysStatisticsService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SysStatisticsService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i2.PulseConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: i1.RestUtil }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzU3RhdGlzdGljc1NlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtcHVsc2UtbGliL3NyYy9saWIvc2VydmljZXMvc3lzU3RhdGlzdGljc1NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFRbkQsdUVBQXVFO0FBQ3ZFLDBFQUEwRTtBQUMxRSwwRUFBMEU7QUFFMUUsTUFBTSxPQUFPLG9CQUFvQjtJQUsvQixvQkFBb0I7SUFDcEIsWUFBc0MsTUFBbUIsRUFBVSxJQUFjO1FBQTNDLFdBQU0sR0FBTixNQUFNLENBQWE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFVO1FBSmpGLGlCQUFpQjtRQUNULFlBQU8sR0FBRyxpQkFBaUIsQ0FBQztRQUlsQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDaEQsQ0FBQztJQUdEOztPQUVHO0lBQ0gsZ0JBQWdCLENBQUMsS0FBYztRQUM3QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUErQixHQUFHLElBQUksQ0FBQyxPQUFPLGFBQWEsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUMxRixDQUFDO0lBRUQ7O09BRUc7SUFDSCxlQUFlLENBQUMsS0FBYztRQUM1QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUErQixHQUFHLElBQUksQ0FBQyxPQUFPLFlBQVksS0FBSyxFQUFFLENBQUMsQ0FBQztJQUN6RixDQUFDO0lBRUQ7O09BRUc7SUFDSCxlQUFlLENBQUMsS0FBYztRQUM1QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUErQixHQUFHLElBQUksQ0FBQyxPQUFPLFlBQVksS0FBSyxFQUFFLENBQUMsQ0FBQztJQUN6RixDQUFDO0lBRUQ7O09BRUc7SUFDSCxhQUFhLENBQUMsS0FBYztRQUMxQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUErQixHQUFHLElBQUksQ0FBQyxPQUFPLFVBQVUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUN2RixDQUFDOytHQXJDVSxvQkFBb0Isa0JBTVgsUUFBUTttSEFOakIsb0JBQW9COzs0RkFBcEIsb0JBQW9CO2tCQURoQyxVQUFVOzswQkFPSSxNQUFNOzJCQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc3RVdGlsLCBFbnRpdHlSZXNwb25zZSwgRW50aXRpZXNSZXNwb25zZSwgQWN0aW9uUmVzcG9uc2UgfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgeyBQdWxzZUNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XG5cbmltcG9ydCB7IERpc3RyaWJ1dGlvbiB9IGZyb20gJy4uL2VudGl0aWVzJztcblxuXG5cbi8vIExpc3Qgb2Ygc3lzdGVtIHN0YXRpc3RpY3MgaW5mb3JtYXRpb24gZm9yIHN5c3RlbSBhZG1pbmlzdHJhdG9yIG9ubHkgXG4vLyBAUmVxdWVzdEhlYWRlciBYLUFQSS1LRVkgVGhlIGtleSB0byBpZGVudGlmeSB0aGUgYXBwbGljYXRpb24gKGNvbnNvbGUpIFxuLy8gQFJlcXVlc3RIZWFkZXIgWC1BQ0NFU1MtVE9LRU4gVGhlIHRva2VuIHRvIGlkZW50aWZ5IHRoZSBsb2dnZWQtaW4gdXNlciBcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTeXNTdGF0aXN0aWNzU2VydmljZSB7XG5cbiAgLy8gVVJMIHRvIHdlYiBhcGlcbiAgcHJpdmF0ZSBiYXNlVXJsID0gJy9zeXMvc3RhdGlzdGljcyc7XG5cbiAgLy8gQ2xhc3MgY29uc3RydWN0b3JcbiAgY29uc3RydWN0b3IoQEluamVjdCgnY29uZmlnJykgcHJpdmF0ZSBjb25maWc6IFB1bHNlQ29uZmlnLCBwcml2YXRlIHJlc3Q6IFJlc3RVdGlsKSB7XG4gICAgdGhpcy5iYXNlVXJsID0gdGhpcy5jb25maWcuYXBpICsgdGhpcy5iYXNlVXJsO1xuICB9XG5cblxuICAvKipcbiAgICogR2V0IGFjY291bnRzIGRpc3RyaWJ1dGlvbiBieSBmaWVsZFxuICAgKi9cbiAgZ2V0QWNjb3VudHNDb3VudChmaWVsZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0PEVudGl0eVJlc3BvbnNlPERpc3RyaWJ1dGlvbj4+KGAke3RoaXMuYmFzZVVybH0vYWNjb3VudHMvJHtmaWVsZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc3RyZWFtcyBkaXN0cmlidXRpb24gYnkgZmllbGRcbiAgICovXG4gIGdldFN0cmVhbXNDb3VudChmaWVsZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0PEVudGl0eVJlc3BvbnNlPERpc3RyaWJ1dGlvbj4+KGAke3RoaXMuYmFzZVVybH0vc3RyZWFtcy8ke2ZpZWxkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBkZXZpY2VzIGRpc3RyaWJ1dGlvbiBieSBmaWVsZFxuICAgKi9cbiAgZ2V0RGV2aWNlc0NvdW50KGZpZWxkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQ8RW50aXR5UmVzcG9uc2U8RGlzdHJpYnV0aW9uPj4oYCR7dGhpcy5iYXNlVXJsfS9kZXZpY2VzLyR7ZmllbGR9YCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHVzZXJzIGRpc3RyaWJ1dGlvbiBieSBmaWVsZFxuICAgKi9cbiAgZ2V0VXNlcnNDb3VudChmaWVsZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0PEVudGl0eVJlc3BvbnNlPERpc3RyaWJ1dGlvbj4+KGAke3RoaXMuYmFzZVVybH0vdXNlcnMvJHtmaWVsZH1gKTtcbiAgfVxuXG59XG4iXX0=