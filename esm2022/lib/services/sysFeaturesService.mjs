import { Injectable, Inject } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../utils";
import * as i2 from "../../config";
// List of features actions for system administrator only 
// @RequestHeader X-API-KEY The key to identify the application (console) 
// @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user 
export class SysFeaturesService {
    // Class constructor
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/sys/features';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new feature
     */
    createFeature(body) {
        return this.rest.post(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update existing feature
     */
    updateFeature(body) {
        return this.rest.put(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete feature from the system
     */
    deleteFeature(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single feature by id
     */
    getFeature(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Find list of feature
     */
    findFeatures(search, sort, page, size) {
        const params = [];
        if (search != null) {
            params.push(`search=${search}`);
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
     * Create new features group
     */
    createFeaturesGroup(body) {
        return this.rest.post(`${this.baseUrl}/groups`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update existing features group
     */
    updateFeaturesGroup(body) {
        return this.rest.put(`${this.baseUrl}/groups`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete features group from the system
     */
    deleteFeaturesGroup(id) {
        return this.rest.delete(`${this.baseUrl}/groups/${id}`);
    }
    /**
     * Get single features group by id
     */
    getFeaturesGroup(id) {
        return this.rest.get(`${this.baseUrl}/groups/${id}`);
    }
    /**
     * Find list of features groups
     */
    findFeaturesGroups(search, sort, page, size) {
        const params = [];
        if (search != null) {
            params.push(`search=${search}`);
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
        return this.rest.get(`${this.baseUrl}/groups`, ...params);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SysFeaturesService, deps: [{ token: 'config' }, { token: i1.RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SysFeaturesService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SysFeaturesService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i2.PulseConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: i1.RestUtil }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzRmVhdHVyZXNTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXB1bHNlLWxpYi9zcmMvbGliL3NlcnZpY2VzL3N5c0ZlYXR1cmVzU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQVNuRCwwREFBMEQ7QUFDMUQsMEVBQTBFO0FBQzFFLDBFQUEwRTtBQUUxRSxNQUFNLE9BQU8sa0JBQWtCO0lBSzdCLG9CQUFvQjtJQUNwQixZQUFzQyxNQUFtQixFQUFVLElBQWM7UUFBM0MsV0FBTSxHQUFOLE1BQU0sQ0FBYTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVU7UUFKakYsaUJBQWlCO1FBQ1QsWUFBTyxHQUFHLGVBQWUsQ0FBQztRQUloQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDaEQsQ0FBQztJQUdEOztPQUVHO0lBQ0gsYUFBYSxDQUFDLElBQWM7UUFDMUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBMEIsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1SCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxhQUFhLENBQUMsSUFBYztRQUMxQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUEwQixHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElB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QUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUM7U0FBRTtRQUNsRCxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBRXBELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWtDLEdBQUcsSUFBSSxDQUFDLE9BQU8sU0FBUyxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDM0YsQ0FBQzsrR0EzRlUsa0JBQWtCLGtCQU1ULFFBQVE7bUhBTmpCLGtCQUFrQjs7NEZBQWxCLGtCQUFrQjtrQkFEOUIsVUFBVTs7MEJBT0ksTUFBTTsyQkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXN0VXRpbCwgRW50aXR5UmVzcG9uc2UsIEVudGl0aWVzUmVzcG9uc2UsIEFjdGlvblJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgUHVsc2VDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcnO1xuXG5pbXBvcnQgeyBGZWF0dXJlIH0gZnJvbSAnLi4vZW50aXRpZXMvRmVhdHVyZSc7XG5pbXBvcnQgeyBGZWF0dXJlc0dyb3VwIH0gZnJvbSAnLi4vZW50aXRpZXMvRmVhdHVyZXNHcm91cCc7XG5cblxuXG4vLyBMaXN0IG9mIGZlYXR1cmVzIGFjdGlvbnMgZm9yIHN5c3RlbSBhZG1pbmlzdHJhdG9yIG9ubHkgXG4vLyBAUmVxdWVzdEhlYWRlciBYLUFQSS1LRVkgVGhlIGtleSB0byBpZGVudGlmeSB0aGUgYXBwbGljYXRpb24gKGNvbnNvbGUpIFxuLy8gQFJlcXVlc3RIZWFkZXIgWC1BQ0NFU1MtVE9LRU4gVGhlIHRva2VuIHRvIGlkZW50aWZ5IHRoZSBsb2dnZWQtaW4gdXNlciBcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTeXNGZWF0dXJlc1NlcnZpY2Uge1xuXG4gIC8vIFVSTCB0byB3ZWIgYXBpXG4gIHByaXZhdGUgYmFzZVVybCA9ICcvc3lzL2ZlYXR1cmVzJztcblxuICAvLyBDbGFzcyBjb25zdHJ1Y3RvclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdjb25maWcnKSBwcml2YXRlIGNvbmZpZzogUHVsc2VDb25maWcsIHByaXZhdGUgcmVzdDogUmVzdFV0aWwpIHtcbiAgICB0aGlzLmJhc2VVcmwgPSB0aGlzLmNvbmZpZy5hcGkgKyB0aGlzLmJhc2VVcmw7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBDcmVhdGUgbmV3IGZlYXR1cmVcbiAgICovXG4gIGNyZWF0ZUZlYXR1cmUoYm9keT86IEZlYXR1cmUpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3Q8RW50aXR5UmVzcG9uc2U8RmVhdHVyZT4+KGAke3RoaXMuYmFzZVVybH1gLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBleGlzdGluZyBmZWF0dXJlXG4gICAqL1xuICB1cGRhdGVGZWF0dXJlKGJvZHk/OiBGZWF0dXJlKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQ8RW50aXR5UmVzcG9uc2U8RmVhdHVyZT4+KGAke3RoaXMuYmFzZVVybH1gLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBmZWF0dXJlIGZyb20gdGhlIHN5c3RlbVxuICAgKi9cbiAgZGVsZXRlRmVhdHVyZShpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZGVsZXRlPEFjdGlvblJlc3BvbnNlPihgJHt0aGlzLmJhc2VVcmx9LyR7aWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHNpbmdsZSBmZWF0dXJlIGJ5IGlkXG4gICAqL1xuICBnZXRGZWF0dXJlKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQ8RW50aXR5UmVzcG9uc2U8RmVhdHVyZT4+KGAke3RoaXMuYmFzZVVybH0vJHtpZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIGxpc3Qgb2YgZmVhdHVyZVxuICAgKi9cbiAgZmluZEZlYXR1cmVzKHNlYXJjaD86IHN0cmluZywgc29ydD86IHN0cmluZywgcGFnZT86IG51bWJlciwgc2l6ZT86IG51bWJlcikge1xuICAgIGNvbnN0IHBhcmFtcyA9IFtdO1x0XHRcbiAgICBpZiAoc2VhcmNoICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNlYXJjaD0ke3NlYXJjaH1gKTsgfVxuICAgIGlmIChzb3J0ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNvcnQ9JHtzb3J0fWApOyB9XG4gICAgaWYgKHBhZ2UgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcGFnZT0ke3BhZ2V9YCk7IH1cbiAgICBpZiAoc2l6ZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzaXplPSR7c2l6ZX1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQ8RW50aXRpZXNSZXNwb25zZTxGZWF0dXJlPj4oYCR7dGhpcy5iYXNlVXJsfWAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIG5ldyBmZWF0dXJlcyBncm91cFxuICAgKi9cbiAgY3JlYXRlRmVhdHVyZXNHcm91cChib2R5PzogRmVhdHVyZXNHcm91cCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdDxFbnRpdHlSZXNwb25zZTxGZWF0dXJlc0dyb3VwPj4oYCR7dGhpcy5iYXNlVXJsfS9ncm91cHNgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBleGlzdGluZyBmZWF0dXJlcyBncm91cFxuICAgKi9cbiAgdXBkYXRlRmVhdHVyZXNHcm91cChib2R5PzogRmVhdHVyZXNHcm91cCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0PEVudGl0eVJlc3BvbnNlPEZlYXR1cmVzR3JvdXA+PihgJHt0aGlzLmJhc2VVcmx9L2dyb3Vwc2AsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIGZlYXR1cmVzIGdyb3VwIGZyb20gdGhlIHN5c3RlbVxuICAgKi9cbiAgZGVsZXRlRmVhdHVyZXNHcm91cChpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZGVsZXRlPEFjdGlvblJlc3BvbnNlPihgJHt0aGlzLmJhc2VVcmx9L2dyb3Vwcy8ke2lkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzaW5nbGUgZmVhdHVyZXMgZ3JvdXAgYnkgaWRcbiAgICovXG4gIGdldEZlYXR1cmVzR3JvdXAoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldDxFbnRpdHlSZXNwb25zZTxGZWF0dXJlc0dyb3VwPj4oYCR7dGhpcy5iYXNlVXJsfS9ncm91cHMvJHtpZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIGxpc3Qgb2YgZmVhdHVyZXMgZ3JvdXBzXG4gICAqL1xuICBmaW5kRmVhdHVyZXNHcm91cHMoc2VhcmNoPzogc3RyaW5nLCBzb3J0Pzogc3RyaW5nLCBwYWdlPzogbnVtYmVyLCBzaXplPzogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFyYW1zID0gW107XHRcdFxuICAgIGlmIChzZWFyY2ggIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2VhcmNoPSR7c2VhcmNofWApOyB9XG4gICAgaWYgKHNvcnQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc29ydD0ke3NvcnR9YCk7IH1cbiAgICBpZiAocGFnZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYWdlPSR7cGFnZX1gKTsgfVxuICAgIGlmIChzaXplICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNpemU9JHtzaXplfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldDxFbnRpdGllc1Jlc3BvbnNlPEZlYXR1cmVzR3JvdXA+PihgJHt0aGlzLmJhc2VVcmx9L2dyb3Vwc2AsIC4uLnBhcmFtcyk7XG4gIH1cblxufVxuIl19