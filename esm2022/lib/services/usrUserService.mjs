import { Injectable, Inject } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../utils";
import * as i2 from "../../config";
// List of user related actions 
// @RequestHeader X-API-KEY The key to identify the application (console) 
// @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user 
export class UsrUserService {
    // Class constructor
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/user';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Authorize user, verify user exists in the system (user was already authenticated by OAuth provider)
     * The response includes access token valid for 20 minutes. The client side should renew the token before expiration using refresh-token method
     */
    authorize(body) {
        return this.rest.post(`${this.baseUrl}/authorize`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Refresh token (set new expiration time) and associate with new account if required
     * The response includes the account details and the newly refreshed token in the HTTP header X-ACCESS-TOKEN
     */
    setAccount(id) {
        return this.rest.post(`${this.baseUrl}/set-account/${id}`, '');
    }
    /**
     * Get the user's current account details
     */
    getAccount() {
        return this.rest.get(`${this.baseUrl}/get-account`);
    }
    /**
     * Get user's current account logo
     */
    getAccountLogo() {
        return this.rest.get(`${this.baseUrl}/get-account-logo`);
    }
    /**
     * Get the user's current account features (aggregated list of all features in all the account's features groups)
     */
    getAccountFeatures() {
        return this.rest.get(`${this.baseUrl}/get-account-features`);
    }
    /**
     * Get the user's current account streams (accessible by the user)
     */
    getAccountStreams() {
        return this.rest.get(`${this.baseUrl}/get-account-streams`);
    }
    /**
     * Get all the user memberships (all accounts that the current user has access to)
     */
    getMemberships() {
        return this.rest.get(`${this.baseUrl}/memberships`);
    }
    /**
     * Save user's avatar image
     */
    saveAvatar(body) {
        return this.rest.patch(`${this.baseUrl}/avatar`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Get user's avatar image
     */
    getAvatar() {
        return this.rest.get(`${this.baseUrl}/avatar`);
    }
    /**
     * Get arbitrary image by Id
     */
    getImage(id) {
        return this.rest.get(`${this.baseUrl}/images`);
    }
    /**
     * Get arbitrary image by Id as stream of bytes
     */
    getImageBytes(id) {
        return this.rest.download(`usr-user`, `${this.baseUrl}/image-bytes`);
    }
    /**
     * Get personal access token
     */
    getAccessToken() {
        return this.rest.get(`${this.baseUrl}/access-token`);
    }
    /**
     * Ask for premium request
     */
    premiumRequest(featureCode) {
        const params = [];
        if (featureCode != null) {
            params.push(`featureCode=${featureCode}`);
        }
        return this.rest.get(`${this.baseUrl}/premium-request`, ...params);
    }
    /**
     * Get system configuration parameters
     */
    getSysConfig() {
        return this.rest.get(`${this.baseUrl}/get-sys-config`);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: UsrUserService, deps: [{ token: 'config' }, { token: i1.RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: UsrUserService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: UsrUserService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i2.PulseConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: i1.RestUtil }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNyVXNlclNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtcHVsc2UtbGliL3NyYy9saWIvc2VydmljZXMvdXNyVXNlclNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFnQm5ELGdDQUFnQztBQUNoQywwRUFBMEU7QUFDMUUsMEVBQTBFO0FBRTFFLE1BQU0sT0FBTyxjQUFjO0lBS3pCLG9CQUFvQjtJQUNwQixZQUFzQyxNQUFtQixFQUFVLElBQWM7UUFBM0MsV0FBTSxHQUFOLE1BQU0sQ0FBYTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVU7UUFKakYsaUJBQWlCO1FBQ1QsWUFBTyxHQUFHLE9BQU8sQ0FBQztRQUl4QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDaEQsQ0FBQztJQUdEOzs7T0FHRztJQUNILFNBQVMsQ0FBQyxJQUFrQjtRQUMxQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUF1QixHQUFHLElBQUksQ0FBQyxPQUFPLFlBQVksRUFBRSxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25JLENBQUM7SUFFRDs7O09BR0c7SUFDSCxVQUFVLENBQUMsRUFBVztRQUNwQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUE2QixHQUFHLElBQUksQ0FBQyxPQUFPLGdCQUFnQixFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM3RixDQUFDO0lBRUQ7O09BRUc7SUFDSCxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBNkIsR0FBRyxJQUFJLENBQUMsT0FBTyxjQUFjLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBRUQ7O09BRUc7SUFDSCxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBd0IsR0FBRyxJQUFJLENBQUMsT0FBTyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7SUFFRDs7T0FFRztJQUNILGtCQUFrQjtRQUNoQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUE0QixHQUFHLElBQUksQ0FBQyxPQUFPLHVCQUF1QixDQUFDLENBQUM7SUFDMUYsQ0FBQztJQUVEOztPQUVHO0lBQ0gsaUJBQWlCO1FBQ2YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBMkIsR0FBRyxJQUFJLENBQUMsT0FBTyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ3hGLENBQUM7SUFFRDs7T0FFRztJQUNILGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFrQyxHQUFHLElBQUksQ0FBQyxPQUFPLGNBQWMsQ0FBQyxDQUFDO0lBQ3ZGLENBQUM7SUFFRDs7T0FFRztJQUNILFVBQVUsQ0FBQyxJQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQWlCLEdBQUcsSUFBSSxDQUFDLE9BQU8sU0FBUyxFQUFFLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0gsQ0FBQztJQUVEOztPQUVHO0lBQ0gsU0FBUztRQUNQLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQXdCLEdBQUcsSUFBSSxDQUFDLE9BQU8sU0FBUyxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVEOztPQUVHO0lBQ0gsUUFBUSxDQUFDLEVBQVc7UUFDbEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBd0IsR0FBRyxJQUFJLENBQUMsT0FBTyxTQUFTLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRUQ7O09BRUc7SUFDSCxhQUFhLENBQUMsRUFBVztRQUN2QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBQyxHQUFHLElBQUksQ0FBQyxPQUFPLGNBQWMsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFRDs7T0FFRztJQUNILGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFpQixHQUFHLElBQUksQ0FBQyxPQUFPLGVBQWUsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFRDs7T0FFRztJQUNILGNBQWMsQ0FBQyxXQUF5QjtRQUN0QyxNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxXQUFXLElBQUksSUFBSSxFQUFFLENBQUM7WUFBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUFDLENBQUM7UUFFekUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBaUIsR0FBRyxJQUFJLENBQUMsT0FBTyxrQkFBa0IsRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQ25GLENBQUM7SUFFRDs7T0FFRztJQUNILFlBQVk7UUFDVixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFnQyxHQUFHLElBQUksQ0FBQyxPQUFPLGlCQUFpQixDQUFDLENBQUM7SUFDeEYsQ0FBQzs4R0FoSFUsY0FBYyxrQkFNTCxRQUFRO2tIQU5qQixjQUFjOzsyRkFBZCxjQUFjO2tCQUQxQixVQUFVOzswQkFPSSxNQUFNOzJCQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc3RVdGlsLCBFbnRpdHlSZXNwb25zZSwgRW50aXRpZXNSZXNwb25zZSwgQWN0aW9uUmVzcG9uc2UgfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgeyBQdWxzZUNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XG5cbmltcG9ydCB7IEZlYXR1cmUgfSBmcm9tICcuLi9lbnRpdGllcyc7XG5pbXBvcnQgeyBTdHJlYW0gfSBmcm9tICcuLi9lbnRpdGllcyc7XG5pbXBvcnQgeyBGZWF0dXJlQ29kZSB9IGZyb20gJy4uL2VudW1zJztcbmltcG9ydCB7IENvbmZpZ1BhcmFtIH0gZnJvbSAnLi4vZW50aXRpZXMnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL2VudGl0aWVzJztcbmltcG9ydCB7IEltYWdlIH0gZnJvbSAnLi4vZW50aXRpZXMnO1xuaW1wb3J0IHsgVXNlck1lbWJlcnNoaXBzIH0gZnJvbSAnLi4vZW50aXRpZXMnO1xuaW1wb3J0IHsgTG9naW5QYXJhbXMgfSBmcm9tICcuLi9jb21tb24nO1xuaW1wb3J0IHsgQWNjb3VudERUTyB9IGZyb20gJy4uL2VudGl0aWVzJztcblxuXG5cbi8vIExpc3Qgb2YgdXNlciByZWxhdGVkIGFjdGlvbnMgXG4vLyBAUmVxdWVzdEhlYWRlciBYLUFQSS1LRVkgVGhlIGtleSB0byBpZGVudGlmeSB0aGUgYXBwbGljYXRpb24gKGNvbnNvbGUpIFxuLy8gQFJlcXVlc3RIZWFkZXIgWC1BQ0NFU1MtVE9LRU4gVGhlIHRva2VuIHRvIGlkZW50aWZ5IHRoZSBsb2dnZWQtaW4gdXNlciBcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc3JVc2VyU2VydmljZSB7XG5cbiAgLy8gVVJMIHRvIHdlYiBhcGlcbiAgcHJpdmF0ZSBiYXNlVXJsID0gJy91c2VyJztcblxuICAvLyBDbGFzcyBjb25zdHJ1Y3RvclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdjb25maWcnKSBwcml2YXRlIGNvbmZpZzogUHVsc2VDb25maWcsIHByaXZhdGUgcmVzdDogUmVzdFV0aWwpIHtcbiAgICB0aGlzLmJhc2VVcmwgPSB0aGlzLmNvbmZpZy5hcGkgKyB0aGlzLmJhc2VVcmw7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBBdXRob3JpemUgdXNlciwgdmVyaWZ5IHVzZXIgZXhpc3RzIGluIHRoZSBzeXN0ZW0gKHVzZXIgd2FzIGFscmVhZHkgYXV0aGVudGljYXRlZCBieSBPQXV0aCBwcm92aWRlcilcbiAgICogVGhlIHJlc3BvbnNlIGluY2x1ZGVzIGFjY2VzcyB0b2tlbiB2YWxpZCBmb3IgMjAgbWludXRlcy4gVGhlIGNsaWVudCBzaWRlIHNob3VsZCByZW5ldyB0aGUgdG9rZW4gYmVmb3JlIGV4cGlyYXRpb24gdXNpbmcgcmVmcmVzaC10b2tlbiBtZXRob2RcbiAgICovXG4gIGF1dGhvcml6ZShib2R5PzogTG9naW5QYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3Q8RW50aXR5UmVzcG9uc2U8VXNlcj4+KGAke3RoaXMuYmFzZVVybH0vYXV0aG9yaXplYCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWZyZXNoIHRva2VuIChzZXQgbmV3IGV4cGlyYXRpb24gdGltZSkgYW5kIGFzc29jaWF0ZSB3aXRoIG5ldyBhY2NvdW50IGlmIHJlcXVpcmVkXG4gICAqIFRoZSByZXNwb25zZSBpbmNsdWRlcyB0aGUgYWNjb3VudCBkZXRhaWxzIGFuZCB0aGUgbmV3bHkgcmVmcmVzaGVkIHRva2VuIGluIHRoZSBIVFRQIGhlYWRlciBYLUFDQ0VTUy1UT0tFTlxuICAgKi9cbiAgc2V0QWNjb3VudChpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdDxFbnRpdHlSZXNwb25zZTxBY2NvdW50RFRPPj4oYCR7dGhpcy5iYXNlVXJsfS9zZXQtYWNjb3VudC8ke2lkfWAsICcnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHVzZXIncyBjdXJyZW50IGFjY291bnQgZGV0YWlsc1xuICAgKi9cbiAgZ2V0QWNjb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldDxFbnRpdHlSZXNwb25zZTxBY2NvdW50RFRPPj4oYCR7dGhpcy5iYXNlVXJsfS9nZXQtYWNjb3VudGApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB1c2VyJ3MgY3VycmVudCBhY2NvdW50IGxvZ29cbiAgICovXG4gIGdldEFjY291bnRMb2dvKCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0PEVudGl0eVJlc3BvbnNlPEltYWdlPj4oYCR7dGhpcy5iYXNlVXJsfS9nZXQtYWNjb3VudC1sb2dvYCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB1c2VyJ3MgY3VycmVudCBhY2NvdW50IGZlYXR1cmVzIChhZ2dyZWdhdGVkIGxpc3Qgb2YgYWxsIGZlYXR1cmVzIGluIGFsbCB0aGUgYWNjb3VudCdzIGZlYXR1cmVzIGdyb3VwcylcbiAgICovXG4gIGdldEFjY291bnRGZWF0dXJlcygpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldDxFbnRpdGllc1Jlc3BvbnNlPEZlYXR1cmU+PihgJHt0aGlzLmJhc2VVcmx9L2dldC1hY2NvdW50LWZlYXR1cmVzYCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB1c2VyJ3MgY3VycmVudCBhY2NvdW50IHN0cmVhbXMgKGFjY2Vzc2libGUgYnkgdGhlIHVzZXIpXG4gICAqL1xuICBnZXRBY2NvdW50U3RyZWFtcygpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldDxFbnRpdGllc1Jlc3BvbnNlPFN0cmVhbT4+KGAke3RoaXMuYmFzZVVybH0vZ2V0LWFjY291bnQtc3RyZWFtc2ApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgdGhlIHVzZXIgbWVtYmVyc2hpcHMgKGFsbCBhY2NvdW50cyB0aGF0IHRoZSBjdXJyZW50IHVzZXIgaGFzIGFjY2VzcyB0bylcbiAgICovXG4gIGdldE1lbWJlcnNoaXBzKCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0PEVudGl0eVJlc3BvbnNlPFVzZXJNZW1iZXJzaGlwcz4+KGAke3RoaXMuYmFzZVVybH0vbWVtYmVyc2hpcHNgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTYXZlIHVzZXIncyBhdmF0YXIgaW1hZ2VcbiAgICovXG4gIHNhdmVBdmF0YXIoYm9keT86IEltYWdlKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wYXRjaDxBY3Rpb25SZXNwb25zZT4oYCR7dGhpcy5iYXNlVXJsfS9hdmF0YXJgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB1c2VyJ3MgYXZhdGFyIGltYWdlXG4gICAqL1xuICBnZXRBdmF0YXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQ8RW50aXR5UmVzcG9uc2U8SW1hZ2U+PihgJHt0aGlzLmJhc2VVcmx9L2F2YXRhcmApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhcmJpdHJhcnkgaW1hZ2UgYnkgSWRcbiAgICovXG4gIGdldEltYWdlKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQ8RW50aXR5UmVzcG9uc2U8SW1hZ2U+PihgJHt0aGlzLmJhc2VVcmx9L2ltYWdlc2ApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhcmJpdHJhcnkgaW1hZ2UgYnkgSWQgYXMgc3RyZWFtIG9mIGJ5dGVzXG4gICAqL1xuICBnZXRJbWFnZUJ5dGVzKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5kb3dubG9hZChgdXNyLXVzZXJgLGAke3RoaXMuYmFzZVVybH0vaW1hZ2UtYnl0ZXNgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgcGVyc29uYWwgYWNjZXNzIHRva2VuXG4gICAqL1xuICBnZXRBY2Nlc3NUb2tlbigpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldDxBY3Rpb25SZXNwb25zZT4oYCR7dGhpcy5iYXNlVXJsfS9hY2Nlc3MtdG9rZW5gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBc2sgZm9yIHByZW1pdW0gcmVxdWVzdFxuICAgKi9cbiAgcHJlbWl1bVJlcXVlc3QoZmVhdHVyZUNvZGU/OiBGZWF0dXJlQ29kZSkge1xuICAgIGNvbnN0IHBhcmFtcyA9IFtdO1x0XHRcbiAgICBpZiAoZmVhdHVyZUNvZGUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZmVhdHVyZUNvZGU9JHtmZWF0dXJlQ29kZX1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQ8QWN0aW9uUmVzcG9uc2U+KGAke3RoaXMuYmFzZVVybH0vcHJlbWl1bS1yZXF1ZXN0YCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc3lzdGVtIGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVyc1xuICAgKi9cbiAgZ2V0U3lzQ29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0PEVudGl0aWVzUmVzcG9uc2U8Q29uZmlnUGFyYW0+PihgJHt0aGlzLmJhc2VVcmx9L2dldC1zeXMtY29uZmlnYCk7XG4gIH1cblxufVxuIl19