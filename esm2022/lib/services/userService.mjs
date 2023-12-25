import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../config";
import * as i2 from "../../utils";
// List of user related actions 
// @RequestHeader X-API-KEY The key to identify the application (console) 
// @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user 
export class UserService {
    // Class constructor (without @Inject('config'))
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
     * Get the user's current account features (aggregated list of all features in all the account's features groups)
     */
    getAccountFeatures() {
        return this.rest.get(`${this.baseUrl}/get-account-features`);
    }
    /**
     * Get all the user memberships (all accounts that the current user has access to)
     */
    getMemberships() {
        return this.rest.get(`${this.baseUrl}/memberships`);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: UserService, deps: [{ token: i1.PulseConfig }, { token: i2.RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: UserService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: UserService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.PulseConfig }, { type: i2.RestUtil }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlclNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtcHVsc2UtbGliL3NyYy9saWIvc2VydmljZXMvdXNlclNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBVSxNQUFNLGVBQWUsQ0FBQzs7OztBQVduRCxnQ0FBZ0M7QUFDaEMsMEVBQTBFO0FBQzFFLDBFQUEwRTtBQUUxRSxNQUFNLE9BQU8sV0FBVztJQUt0QixnREFBZ0Q7SUFDaEQsWUFBb0IsTUFBbUIsRUFBVSxJQUFjO1FBQTNDLFdBQU0sR0FBTixNQUFNLENBQWE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFVO1FBSi9ELGlCQUFpQjtRQUNULFlBQU8sR0FBRyxPQUFPLENBQUM7UUFJeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ2hELENBQUM7SUFHRDs7O09BR0c7SUFDSCxTQUFTLENBQUMsSUFBa0I7UUFDMUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBaUIsR0FBRyxJQUFJLENBQUMsT0FBTyxZQUFZLEVBQUUsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3SCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsVUFBVSxDQUFDLEVBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBNkIsR0FBRyxJQUFJLENBQUMsT0FBTyxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDN0YsQ0FBQztJQUVEOztPQUVHO0lBQ0gsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQTZCLEdBQUcsSUFBSSxDQUFDLE9BQU8sY0FBYyxDQUFDLENBQUM7SUFDbEYsQ0FBQztJQUVEOztPQUVHO0lBQ0gsa0JBQWtCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQTRCLEdBQUcsSUFBSSxDQUFDLE9BQU8sdUJBQXVCLENBQUMsQ0FBQztJQUMxRixDQUFDO0lBRUQ7O09BRUc7SUFDSCxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBa0MsR0FBRyxJQUFJLENBQUMsT0FBTyxjQUFjLENBQUMsQ0FBQztJQUN2RixDQUFDOytHQTlDVSxXQUFXO21IQUFYLFdBQVc7OzRGQUFYLFdBQVc7a0JBRHZCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc3RVdGlsLCBFbnRpdHlSZXNwb25zZSwgRW50aXRpZXNSZXNwb25zZSwgQWN0aW9uUmVzcG9uc2UgfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgeyBQdWxzZUNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XG5cbmltcG9ydCB7IExvZ2luUGFyYW1zIH0gZnJvbSAnLi4vY29tbW9uL0xvZ2luUGFyYW1zJztcbmltcG9ydCB7IEFjY291bnREVE8gfSBmcm9tICcuLi9lbnRpdGllcy9BY2NvdW50RFRPJztcbmltcG9ydCB7IEZlYXR1cmUgfSBmcm9tICcuLi9lbnRpdGllcy9GZWF0dXJlJztcbmltcG9ydCB7IFVzZXJNZW1iZXJzaGlwcyB9IGZyb20gJy4uL2VudGl0aWVzL1VzZXJNZW1iZXJzaGlwcyc7XG5cblxuXG4vLyBMaXN0IG9mIHVzZXIgcmVsYXRlZCBhY3Rpb25zIFxuLy8gQFJlcXVlc3RIZWFkZXIgWC1BUEktS0VZIFRoZSBrZXkgdG8gaWRlbnRpZnkgdGhlIGFwcGxpY2F0aW9uIChjb25zb2xlKSBcbi8vIEBSZXF1ZXN0SGVhZGVyIFgtQUNDRVNTLVRPS0VOIFRoZSB0b2tlbiB0byBpZGVudGlmeSB0aGUgbG9nZ2VkLWluIHVzZXIgXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xuXG4gIC8vIFVSTCB0byB3ZWIgYXBpXG4gIHByaXZhdGUgYmFzZVVybCA9ICcvdXNlcic7XG5cbiAgLy8gQ2xhc3MgY29uc3RydWN0b3IgKHdpdGhvdXQgQEluamVjdCgnY29uZmlnJykpXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29uZmlnOiBQdWxzZUNvbmZpZywgcHJpdmF0ZSByZXN0OiBSZXN0VXRpbCkge1xuICAgIHRoaXMuYmFzZVVybCA9IHRoaXMuY29uZmlnLmFwaSArIHRoaXMuYmFzZVVybDtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEF1dGhvcml6ZSB1c2VyLCB2ZXJpZnkgdXNlciBleGlzdHMgaW4gdGhlIHN5c3RlbSAodXNlciB3YXMgYWxyZWFkeSBhdXRoZW50aWNhdGVkIGJ5IE9BdXRoIHByb3ZpZGVyKVxuICAgKiBUaGUgcmVzcG9uc2UgaW5jbHVkZXMgYWNjZXNzIHRva2VuIHZhbGlkIGZvciAyMCBtaW51dGVzLiBUaGUgY2xpZW50IHNpZGUgc2hvdWxkIHJlbmV3IHRoZSB0b2tlbiBiZWZvcmUgZXhwaXJhdGlvbiB1c2luZyByZWZyZXNoLXRva2VuIG1ldGhvZFxuICAgKi9cbiAgYXV0aG9yaXplKGJvZHk/OiBMb2dpblBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdDxBY3Rpb25SZXNwb25zZT4oYCR7dGhpcy5iYXNlVXJsfS9hdXRob3JpemVgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZnJlc2ggdG9rZW4gKHNldCBuZXcgZXhwaXJhdGlvbiB0aW1lKSBhbmQgYXNzb2NpYXRlIHdpdGggbmV3IGFjY291bnQgaWYgcmVxdWlyZWRcbiAgICogVGhlIHJlc3BvbnNlIGluY2x1ZGVzIHRoZSBhY2NvdW50IGRldGFpbHMgYW5kIHRoZSBuZXdseSByZWZyZXNoZWQgdG9rZW4gaW4gdGhlIEhUVFAgaGVhZGVyIFgtQUNDRVNTLVRPS0VOXG4gICAqL1xuICBzZXRBY2NvdW50KGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0PEVudGl0eVJlc3BvbnNlPEFjY291bnREVE8+PihgJHt0aGlzLmJhc2VVcmx9L3NldC1hY2NvdW50LyR7aWR9YCwgJycpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdXNlcidzIGN1cnJlbnQgYWNjb3VudCBkZXRhaWxzXG4gICAqL1xuICBnZXRBY2NvdW50KCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0PEVudGl0eVJlc3BvbnNlPEFjY291bnREVE8+PihgJHt0aGlzLmJhc2VVcmx9L2dldC1hY2NvdW50YCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB1c2VyJ3MgY3VycmVudCBhY2NvdW50IGZlYXR1cmVzIChhZ2dyZWdhdGVkIGxpc3Qgb2YgYWxsIGZlYXR1cmVzIGluIGFsbCB0aGUgYWNjb3VudCdzIGZlYXR1cmVzIGdyb3VwcylcbiAgICovXG4gIGdldEFjY291bnRGZWF0dXJlcygpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldDxFbnRpdGllc1Jlc3BvbnNlPEZlYXR1cmU+PihgJHt0aGlzLmJhc2VVcmx9L2dldC1hY2NvdW50LWZlYXR1cmVzYCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCB0aGUgdXNlciBtZW1iZXJzaGlwcyAoYWxsIGFjY291bnRzIHRoYXQgdGhlIGN1cnJlbnQgdXNlciBoYXMgYWNjZXNzIHRvKVxuICAgKi9cbiAgZ2V0TWVtYmVyc2hpcHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQ8RW50aXR5UmVzcG9uc2U8VXNlck1lbWJlcnNoaXBzPj4oYCR7dGhpcy5iYXNlVXJsfS9tZW1iZXJzaGlwc2ApO1xuICB9XG5cbn1cbiJdfQ==