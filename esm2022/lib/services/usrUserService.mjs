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
        return this.rest.post(`${this.baseUrl}/avatar`, typeof body === 'object' ? JSON.stringify(body) : body);
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.1", ngImport: i0, type: UsrUserService, deps: [{ token: 'config' }, { token: i1.RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.1", ngImport: i0, type: UsrUserService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.1", ngImport: i0, type: UsrUserService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i2.PulseConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: i1.RestUtil }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNyVXNlclNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtcHVsc2UtbGliL3NyYy9saWIvc2VydmljZXMvdXNyVXNlclNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFjbkQsZ0NBQWdDO0FBQ2hDLDBFQUEwRTtBQUMxRSwwRUFBMEU7QUFFMUUsTUFBTSxPQUFPLGNBQWM7SUFLekIsb0JBQW9CO0lBQ3BCLFlBQXNDLE1BQW1CLEVBQVUsSUFBYztRQUEzQyxXQUFNLEdBQU4sTUFBTSxDQUFhO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBVTtRQUpqRixpQkFBaUI7UUFDVCxZQUFPLEdBQUcsT0FBTyxDQUFDO1FBSXhCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNoRCxDQUFDO0lBR0Q7OztPQUdHO0lBQ0gsU0FBUyxDQUFDLElBQWtCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQXVCLEdBQUcsSUFBSSxDQUFDLE9BQU8sWUFBWSxFQUFFLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkksQ0FBQztJQUVEOzs7T0FHRztJQUNILFVBQVUsQ0FBQyxFQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQTZCLEdBQUcsSUFBSSxDQUFDLE9BQU8sZ0JBQWdCLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzdGLENBQUM7SUFFRDs7T0FFRztJQUNILFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUE2QixHQUFHLElBQUksQ0FBQyxPQUFPLGNBQWMsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7SUFFRDs7T0FFRztJQUNILGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUF3QixHQUFHLElBQUksQ0FBQyxPQUFPLG1CQUFtQixDQUFDLENBQUM7SUFDbEYsQ0FBQztJQUVEOztPQUVHO0lBQ0gsa0JBQWtCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQTRCLEdBQUcsSUFBSSxDQUFDLE9BQU8sdUJBQXVCLENBQUMsQ0FBQztJQUMxRixDQUFDO0lBRUQ7O09BRUc7SUFDSCxpQkFBaUI7UUFDZixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUEyQixHQUFHLElBQUksQ0FBQyxPQUFPLHNCQUFzQixDQUFDLENBQUM7SUFDeEYsQ0FBQztJQUVEOztPQUVHO0lBQ0gsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWtDLEdBQUcsSUFBSSxDQUFDLE9BQU8sY0FBYyxDQUFDLENBQUM7SUFDdkYsQ0FBQztJQUVEOztPQUVHO0lBQ0gsVUFBVSxDQUFDLElBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBaUIsR0FBRyxJQUFJLENBQUMsT0FBTyxTQUFTLEVBQUUsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxSCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxTQUFTO1FBQ1AsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBd0IsR0FBRyxJQUFJLENBQUMsT0FBTyxTQUFTLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRUQ7O09BRUc7SUFDSCxRQUFRLENBQUMsRUFBVztRQUNsQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUF3QixHQUFHLElBQUksQ0FBQyxPQUFPLFNBQVMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFRDs7T0FFRztJQUNILGFBQWEsQ0FBQyxFQUFXO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sY0FBYyxDQUFDLENBQUM7SUFDdEUsQ0FBQzs4R0F4RlUsY0FBYyxrQkFNTCxRQUFRO2tIQU5qQixjQUFjOzsyRkFBZCxjQUFjO2tCQUQxQixVQUFVOzswQkFPSSxNQUFNOzJCQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc3RVdGlsLCBFbnRpdHlSZXNwb25zZSwgRW50aXRpZXNSZXNwb25zZSwgQWN0aW9uUmVzcG9uc2UgfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgeyBQdWxzZUNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XG5cbmltcG9ydCB7IFVzZXJNZW1iZXJzaGlwcyB9IGZyb20gJy4uL2VudGl0aWVzL1VzZXJNZW1iZXJzaGlwcyc7XG5pbXBvcnQgeyBMb2dpblBhcmFtcyB9IGZyb20gJy4uL2NvbW1vbi9Mb2dpblBhcmFtcyc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vZW50aXRpZXMvVXNlcic7XG5pbXBvcnQgeyBBY2NvdW50RFRPIH0gZnJvbSAnLi4vZW50aXRpZXMvQWNjb3VudERUTyc7XG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gJy4uL2VudGl0aWVzL0ltYWdlJztcbmltcG9ydCB7IEZlYXR1cmUgfSBmcm9tICcuLi9lbnRpdGllcy9GZWF0dXJlJztcbmltcG9ydCB7IFN0cmVhbSB9IGZyb20gJy4uL2VudGl0aWVzL1N0cmVhbSc7XG5cblxuXG4vLyBMaXN0IG9mIHVzZXIgcmVsYXRlZCBhY3Rpb25zIFxuLy8gQFJlcXVlc3RIZWFkZXIgWC1BUEktS0VZIFRoZSBrZXkgdG8gaWRlbnRpZnkgdGhlIGFwcGxpY2F0aW9uIChjb25zb2xlKSBcbi8vIEBSZXF1ZXN0SGVhZGVyIFgtQUNDRVNTLVRPS0VOIFRoZSB0b2tlbiB0byBpZGVudGlmeSB0aGUgbG9nZ2VkLWluIHVzZXIgXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNyVXNlclNlcnZpY2Uge1xuXG4gIC8vIFVSTCB0byB3ZWIgYXBpXG4gIHByaXZhdGUgYmFzZVVybCA9ICcvdXNlcic7XG5cbiAgLy8gQ2xhc3MgY29uc3RydWN0b3JcbiAgY29uc3RydWN0b3IoQEluamVjdCgnY29uZmlnJykgcHJpdmF0ZSBjb25maWc6IFB1bHNlQ29uZmlnLCBwcml2YXRlIHJlc3Q6IFJlc3RVdGlsKSB7XG4gICAgdGhpcy5iYXNlVXJsID0gdGhpcy5jb25maWcuYXBpICsgdGhpcy5iYXNlVXJsO1xuICB9XG5cblxuICAvKipcbiAgICogQXV0aG9yaXplIHVzZXIsIHZlcmlmeSB1c2VyIGV4aXN0cyBpbiB0aGUgc3lzdGVtICh1c2VyIHdhcyBhbHJlYWR5IGF1dGhlbnRpY2F0ZWQgYnkgT0F1dGggcHJvdmlkZXIpXG4gICAqIFRoZSByZXNwb25zZSBpbmNsdWRlcyBhY2Nlc3MgdG9rZW4gdmFsaWQgZm9yIDIwIG1pbnV0ZXMuIFRoZSBjbGllbnQgc2lkZSBzaG91bGQgcmVuZXcgdGhlIHRva2VuIGJlZm9yZSBleHBpcmF0aW9uIHVzaW5nIHJlZnJlc2gtdG9rZW4gbWV0aG9kXG4gICAqL1xuICBhdXRob3JpemUoYm9keT86IExvZ2luUGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0PEVudGl0eVJlc3BvbnNlPFVzZXI+PihgJHt0aGlzLmJhc2VVcmx9L2F1dGhvcml6ZWAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogUmVmcmVzaCB0b2tlbiAoc2V0IG5ldyBleHBpcmF0aW9uIHRpbWUpIGFuZCBhc3NvY2lhdGUgd2l0aCBuZXcgYWNjb3VudCBpZiByZXF1aXJlZFxuICAgKiBUaGUgcmVzcG9uc2UgaW5jbHVkZXMgdGhlIGFjY291bnQgZGV0YWlscyBhbmQgdGhlIG5ld2x5IHJlZnJlc2hlZCB0b2tlbiBpbiB0aGUgSFRUUCBoZWFkZXIgWC1BQ0NFU1MtVE9LRU5cbiAgICovXG4gIHNldEFjY291bnQoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3Q8RW50aXR5UmVzcG9uc2U8QWNjb3VudERUTz4+KGAke3RoaXMuYmFzZVVybH0vc2V0LWFjY291bnQvJHtpZH1gLCAnJyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB1c2VyJ3MgY3VycmVudCBhY2NvdW50IGRldGFpbHNcbiAgICovXG4gIGdldEFjY291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQ8RW50aXR5UmVzcG9uc2U8QWNjb3VudERUTz4+KGAke3RoaXMuYmFzZVVybH0vZ2V0LWFjY291bnRgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdXNlcidzIGN1cnJlbnQgYWNjb3VudCBsb2dvXG4gICAqL1xuICBnZXRBY2NvdW50TG9nbygpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldDxFbnRpdHlSZXNwb25zZTxJbWFnZT4+KGAke3RoaXMuYmFzZVVybH0vZ2V0LWFjY291bnQtbG9nb2ApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdXNlcidzIGN1cnJlbnQgYWNjb3VudCBmZWF0dXJlcyAoYWdncmVnYXRlZCBsaXN0IG9mIGFsbCBmZWF0dXJlcyBpbiBhbGwgdGhlIGFjY291bnQncyBmZWF0dXJlcyBncm91cHMpXG4gICAqL1xuICBnZXRBY2NvdW50RmVhdHVyZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQ8RW50aXRpZXNSZXNwb25zZTxGZWF0dXJlPj4oYCR7dGhpcy5iYXNlVXJsfS9nZXQtYWNjb3VudC1mZWF0dXJlc2ApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdXNlcidzIGN1cnJlbnQgYWNjb3VudCBzdHJlYW1zIChhY2Nlc3NpYmxlIGJ5IHRoZSB1c2VyKVxuICAgKi9cbiAgZ2V0QWNjb3VudFN0cmVhbXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQ8RW50aXRpZXNSZXNwb25zZTxTdHJlYW0+PihgJHt0aGlzLmJhc2VVcmx9L2dldC1hY2NvdW50LXN0cmVhbXNgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWxsIHRoZSB1c2VyIG1lbWJlcnNoaXBzIChhbGwgYWNjb3VudHMgdGhhdCB0aGUgY3VycmVudCB1c2VyIGhhcyBhY2Nlc3MgdG8pXG4gICAqL1xuICBnZXRNZW1iZXJzaGlwcygpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldDxFbnRpdHlSZXNwb25zZTxVc2VyTWVtYmVyc2hpcHM+PihgJHt0aGlzLmJhc2VVcmx9L21lbWJlcnNoaXBzYCk7XG4gIH1cblxuICAvKipcbiAgICogU2F2ZSB1c2VyJ3MgYXZhdGFyIGltYWdlXG4gICAqL1xuICBzYXZlQXZhdGFyKGJvZHk/OiBJbWFnZSkge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdDxBY3Rpb25SZXNwb25zZT4oYCR7dGhpcy5iYXNlVXJsfS9hdmF0YXJgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB1c2VyJ3MgYXZhdGFyIGltYWdlXG4gICAqL1xuICBnZXRBdmF0YXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQ8RW50aXR5UmVzcG9uc2U8SW1hZ2U+PihgJHt0aGlzLmJhc2VVcmx9L2F2YXRhcmApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhcmJpdHJhcnkgaW1hZ2UgYnkgSWRcbiAgICovXG4gIGdldEltYWdlKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQ8RW50aXR5UmVzcG9uc2U8SW1hZ2U+PihgJHt0aGlzLmJhc2VVcmx9L2ltYWdlc2ApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhcmJpdHJhcnkgaW1hZ2UgYnkgSWQgYXMgc3RyZWFtIG9mIGJ5dGVzXG4gICAqL1xuICBnZXRJbWFnZUJ5dGVzKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5kb3dubG9hZChgdXNyLXVzZXJgLGAke3RoaXMuYmFzZVVybH0vaW1hZ2UtYnl0ZXNgKTtcbiAgfVxuXG59XG4iXX0=