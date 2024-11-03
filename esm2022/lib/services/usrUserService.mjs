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
        return this.rest.get(`${this.baseUrl}/premium-request`);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: UsrUserService, deps: [{ token: 'config' }, { token: i1.RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: UsrUserService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: UsrUserService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i2.PulseConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: i1.RestUtil }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNyVXNlclNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtcHVsc2UtbGliL3NyYy9saWIvc2VydmljZXMvdXNyVXNlclNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFlbkQsZ0NBQWdDO0FBQ2hDLDBFQUEwRTtBQUMxRSwwRUFBMEU7QUFFMUUsTUFBTSxPQUFPLGNBQWM7SUFLekIsb0JBQW9CO0lBQ3BCLFlBQXNDLE1BQW1CLEVBQVUsSUFBYztRQUEzQyxXQUFNLEdBQU4sTUFBTSxDQUFhO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBVTtRQUpqRixpQkFBaUI7UUFDVCxZQUFPLEdBQUcsT0FBTyxDQUFDO1FBSXhCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNoRCxDQUFDO0lBR0Q7OztPQUdHO0lBQ0gsU0FBUyxDQUFDLElBQWtCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQXVCLEdBQUcsSUFBSSxDQUFDLE9BQU8sWUFBWSxFQUFFLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkksQ0FBQztJQUVEOzs7T0FHRztJQUNILFVBQVUsQ0FBQyxFQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQTZCLEdBQUcsSUFBSSxDQUFDLE9BQU8sZ0JBQWdCLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzdGLENBQUM7SUFFRDs7T0FFRztJQUNILFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUE2QixHQUFHLElBQUksQ0FBQyxPQUFPLGNBQWMsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7SUFFRDs7T0FFRztJQUNILGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUF3QixHQUFHLElBQUksQ0FBQyxPQUFPLG1CQUFtQixDQUFDLENBQUM7SUFDbEYsQ0FBQztJQUVEOztPQUVHO0lBQ0gsa0JBQWtCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQTRCLEdBQUcsSUFBSSxDQUFDLE9BQU8sdUJBQXVCLENBQUMsQ0FBQztJQUMxRixDQUFDO0lBRUQ7O09BRUc7SUFDSCxpQkFBaUI7UUFDZixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUEyQixHQUFHLElBQUksQ0FBQyxPQUFPLHNCQUFzQixDQUFDLENBQUM7SUFDeEYsQ0FBQztJQUVEOztPQUVHO0lBQ0gsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWtDLEdBQUcsSUFBSSxDQUFDLE9BQU8sY0FBYyxDQUFDLENBQUM7SUFDdkYsQ0FBQztJQUVEOztPQUVHO0lBQ0gsVUFBVSxDQUFDLElBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBaUIsR0FBRyxJQUFJLENBQUMsT0FBTyxTQUFTLEVBQUUsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzSCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxTQUFTO1FBQ1AsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBd0IsR0FBRyxJQUFJLENBQUMsT0FBTyxTQUFTLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRUQ7O09BRUc7SUFDSCxRQUFRLENBQUMsRUFBVztRQUNsQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUF3QixHQUFHLElBQUksQ0FBQyxPQUFPLFNBQVMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFRDs7T0FFRztJQUNILGFBQWEsQ0FBQyxFQUFXO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sY0FBYyxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVEOztPQUVHO0lBQ0gsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWlCLEdBQUcsSUFBSSxDQUFDLE9BQU8sZUFBZSxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVEOztPQUVHO0lBQ0gsY0FBYyxDQUFDLFdBQXlCO1FBQ3RDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWlCLEdBQUcsSUFBSSxDQUFDLE9BQU8sa0JBQWtCLENBQUMsQ0FBQztJQUMxRSxDQUFDOytHQXRHVSxjQUFjLGtCQU1MLFFBQVE7bUhBTmpCLGNBQWM7OzRGQUFkLGNBQWM7a0JBRDFCLFVBQVU7OzBCQU9JLE1BQU07MkJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzdFV0aWwsIEVudGl0eVJlc3BvbnNlLCBFbnRpdGllc1Jlc3BvbnNlLCBBY3Rpb25SZXNwb25zZSB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IFB1bHNlQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcblxuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICcuLi9lbnRpdGllcyc7XG5pbXBvcnQgeyBGZWF0dXJlIH0gZnJvbSAnLi4vZW50aXRpZXMnO1xuaW1wb3J0IHsgU3RyZWFtIH0gZnJvbSAnLi4vZW50aXRpZXMnO1xuaW1wb3J0IHsgVXNlck1lbWJlcnNoaXBzIH0gZnJvbSAnLi4vZW50aXRpZXMnO1xuaW1wb3J0IHsgRmVhdHVyZUNvZGUgfSBmcm9tICcuLi9lbnVtcyc7XG5pbXBvcnQgeyBMb2dpblBhcmFtcyB9IGZyb20gJy4uL2NvbW1vbic7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vZW50aXRpZXMnO1xuaW1wb3J0IHsgQWNjb3VudERUTyB9IGZyb20gJy4uL2VudGl0aWVzJztcblxuXG5cbi8vIExpc3Qgb2YgdXNlciByZWxhdGVkIGFjdGlvbnMgXG4vLyBAUmVxdWVzdEhlYWRlciBYLUFQSS1LRVkgVGhlIGtleSB0byBpZGVudGlmeSB0aGUgYXBwbGljYXRpb24gKGNvbnNvbGUpIFxuLy8gQFJlcXVlc3RIZWFkZXIgWC1BQ0NFU1MtVE9LRU4gVGhlIHRva2VuIHRvIGlkZW50aWZ5IHRoZSBsb2dnZWQtaW4gdXNlciBcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc3JVc2VyU2VydmljZSB7XG5cbiAgLy8gVVJMIHRvIHdlYiBhcGlcbiAgcHJpdmF0ZSBiYXNlVXJsID0gJy91c2VyJztcblxuICAvLyBDbGFzcyBjb25zdHJ1Y3RvclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdjb25maWcnKSBwcml2YXRlIGNvbmZpZzogUHVsc2VDb25maWcsIHByaXZhdGUgcmVzdDogUmVzdFV0aWwpIHtcbiAgICB0aGlzLmJhc2VVcmwgPSB0aGlzLmNvbmZpZy5hcGkgKyB0aGlzLmJhc2VVcmw7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBBdXRob3JpemUgdXNlciwgdmVyaWZ5IHVzZXIgZXhpc3RzIGluIHRoZSBzeXN0ZW0gKHVzZXIgd2FzIGFscmVhZHkgYXV0aGVudGljYXRlZCBieSBPQXV0aCBwcm92aWRlcilcbiAgICogVGhlIHJlc3BvbnNlIGluY2x1ZGVzIGFjY2VzcyB0b2tlbiB2YWxpZCBmb3IgMjAgbWludXRlcy4gVGhlIGNsaWVudCBzaWRlIHNob3VsZCByZW5ldyB0aGUgdG9rZW4gYmVmb3JlIGV4cGlyYXRpb24gdXNpbmcgcmVmcmVzaC10b2tlbiBtZXRob2RcbiAgICovXG4gIGF1dGhvcml6ZShib2R5PzogTG9naW5QYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3Q8RW50aXR5UmVzcG9uc2U8VXNlcj4+KGAke3RoaXMuYmFzZVVybH0vYXV0aG9yaXplYCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWZyZXNoIHRva2VuIChzZXQgbmV3IGV4cGlyYXRpb24gdGltZSkgYW5kIGFzc29jaWF0ZSB3aXRoIG5ldyBhY2NvdW50IGlmIHJlcXVpcmVkXG4gICAqIFRoZSByZXNwb25zZSBpbmNsdWRlcyB0aGUgYWNjb3VudCBkZXRhaWxzIGFuZCB0aGUgbmV3bHkgcmVmcmVzaGVkIHRva2VuIGluIHRoZSBIVFRQIGhlYWRlciBYLUFDQ0VTUy1UT0tFTlxuICAgKi9cbiAgc2V0QWNjb3VudChpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdDxFbnRpdHlSZXNwb25zZTxBY2NvdW50RFRPPj4oYCR7dGhpcy5iYXNlVXJsfS9zZXQtYWNjb3VudC8ke2lkfWAsICcnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHVzZXIncyBjdXJyZW50IGFjY291bnQgZGV0YWlsc1xuICAgKi9cbiAgZ2V0QWNjb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldDxFbnRpdHlSZXNwb25zZTxBY2NvdW50RFRPPj4oYCR7dGhpcy5iYXNlVXJsfS9nZXQtYWNjb3VudGApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB1c2VyJ3MgY3VycmVudCBhY2NvdW50IGxvZ29cbiAgICovXG4gIGdldEFjY291bnRMb2dvKCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0PEVudGl0eVJlc3BvbnNlPEltYWdlPj4oYCR7dGhpcy5iYXNlVXJsfS9nZXQtYWNjb3VudC1sb2dvYCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB1c2VyJ3MgY3VycmVudCBhY2NvdW50IGZlYXR1cmVzIChhZ2dyZWdhdGVkIGxpc3Qgb2YgYWxsIGZlYXR1cmVzIGluIGFsbCB0aGUgYWNjb3VudCdzIGZlYXR1cmVzIGdyb3VwcylcbiAgICovXG4gIGdldEFjY291bnRGZWF0dXJlcygpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldDxFbnRpdGllc1Jlc3BvbnNlPEZlYXR1cmU+PihgJHt0aGlzLmJhc2VVcmx9L2dldC1hY2NvdW50LWZlYXR1cmVzYCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB1c2VyJ3MgY3VycmVudCBhY2NvdW50IHN0cmVhbXMgKGFjY2Vzc2libGUgYnkgdGhlIHVzZXIpXG4gICAqL1xuICBnZXRBY2NvdW50U3RyZWFtcygpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldDxFbnRpdGllc1Jlc3BvbnNlPFN0cmVhbT4+KGAke3RoaXMuYmFzZVVybH0vZ2V0LWFjY291bnQtc3RyZWFtc2ApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgdGhlIHVzZXIgbWVtYmVyc2hpcHMgKGFsbCBhY2NvdW50cyB0aGF0IHRoZSBjdXJyZW50IHVzZXIgaGFzIGFjY2VzcyB0bylcbiAgICovXG4gIGdldE1lbWJlcnNoaXBzKCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0PEVudGl0eVJlc3BvbnNlPFVzZXJNZW1iZXJzaGlwcz4+KGAke3RoaXMuYmFzZVVybH0vbWVtYmVyc2hpcHNgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTYXZlIHVzZXIncyBhdmF0YXIgaW1hZ2VcbiAgICovXG4gIHNhdmVBdmF0YXIoYm9keT86IEltYWdlKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wYXRjaDxBY3Rpb25SZXNwb25zZT4oYCR7dGhpcy5iYXNlVXJsfS9hdmF0YXJgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB1c2VyJ3MgYXZhdGFyIGltYWdlXG4gICAqL1xuICBnZXRBdmF0YXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQ8RW50aXR5UmVzcG9uc2U8SW1hZ2U+PihgJHt0aGlzLmJhc2VVcmx9L2F2YXRhcmApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhcmJpdHJhcnkgaW1hZ2UgYnkgSWRcbiAgICovXG4gIGdldEltYWdlKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQ8RW50aXR5UmVzcG9uc2U8SW1hZ2U+PihgJHt0aGlzLmJhc2VVcmx9L2ltYWdlc2ApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhcmJpdHJhcnkgaW1hZ2UgYnkgSWQgYXMgc3RyZWFtIG9mIGJ5dGVzXG4gICAqL1xuICBnZXRJbWFnZUJ5dGVzKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5kb3dubG9hZChgdXNyLXVzZXJgLGAke3RoaXMuYmFzZVVybH0vaW1hZ2UtYnl0ZXNgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgcGVyc29uYWwgYWNjZXNzIHRva2VuXG4gICAqL1xuICBnZXRBY2Nlc3NUb2tlbigpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldDxBY3Rpb25SZXNwb25zZT4oYCR7dGhpcy5iYXNlVXJsfS9hY2Nlc3MtdG9rZW5gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBc2sgZm9yIHByZW1pdW0gcmVxdWVzdFxuICAgKi9cbiAgcHJlbWl1bVJlcXVlc3QoZmVhdHVyZUNvZGU/OiBGZWF0dXJlQ29kZSkge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0PEFjdGlvblJlc3BvbnNlPihgJHt0aGlzLmJhc2VVcmx9L3ByZW1pdW0tcmVxdWVzdGApO1xuICB9XG5cbn1cbiJdfQ==