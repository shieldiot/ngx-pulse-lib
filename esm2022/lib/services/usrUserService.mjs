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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: UsrUserService, deps: [{ token: 'config' }, { token: i1.RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: UsrUserService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: UsrUserService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i2.PulseConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: i1.RestUtil }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNyVXNlclNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtcHVsc2UtbGliL3NyYy9saWIvc2VydmljZXMvdXNyVXNlclNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFnQm5ELGdDQUFnQztBQUNoQywwRUFBMEU7QUFDMUUsMEVBQTBFO0FBRTFFLE1BQU0sT0FBTyxjQUFjO0lBS3pCLG9CQUFvQjtJQUNwQixZQUFzQyxNQUFtQixFQUFVLElBQWM7UUFBM0MsV0FBTSxHQUFOLE1BQU0sQ0FBYTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVU7UUFKakYsaUJBQWlCO1FBQ1QsWUFBTyxHQUFHLE9BQU8sQ0FBQztRQUl4QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDaEQsQ0FBQztJQUdEOzs7T0FHRztJQUNILFNBQVMsQ0FBQyxJQUFrQjtRQUMxQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUF1QixHQUFHLElBQUksQ0FBQyxPQUFPLFlBQVksRUFBRSxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25JLENBQUM7SUFFRDs7O09BR0c7SUFDSCxVQUFVLENBQUMsRUFBVztRQUNwQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUE2QixHQUFHLElBQUksQ0FBQyxPQUFPLGdCQUFnQixFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM3RixDQUFDO0lBRUQ7O09BRUc7SUFDSCxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBNkIsR0FBRyxJQUFJLENBQUMsT0FBTyxjQUFjLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBRUQ7O09BRUc7SUFDSCxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBd0IsR0FBRyxJQUFJLENBQUMsT0FBTyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7SUFFRDs7T0FFRztJQUNILGtCQUFrQjtRQUNoQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUE0QixHQUFHLElBQUksQ0FBQyxPQUFPLHVCQUF1QixDQUFDLENBQUM7SUFDMUYsQ0FBQztJQUVEOztPQUVHO0lBQ0gsaUJBQWlCO1FBQ2YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBMkIsR0FBRyxJQUFJLENBQUMsT0FBTyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ3hGLENBQUM7SUFFRDs7T0FFRztJQUNILGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFrQyxHQUFHLElBQUksQ0FBQyxPQUFPLGNBQWMsQ0FBQyxDQUFDO0lBQ3ZGLENBQUM7SUFFRDs7T0FFRztJQUNILFVBQVUsQ0FBQyxJQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQWlCLEdBQUcsSUFBSSxDQUFDLE9BQU8sU0FBUyxFQUFFLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0gsQ0FBQztJQUVEOztPQUVHO0lBQ0gsU0FBUztRQUNQLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQXdCLEdBQUcsSUFBSSxDQUFDLE9BQU8sU0FBUyxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVEOztPQUVHO0lBQ0gsUUFBUSxDQUFDLEVBQVc7UUFDbEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBd0IsR0FBRyxJQUFJLENBQUMsT0FBTyxTQUFTLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRUQ7O09BRUc7SUFDSCxhQUFhLENBQUMsRUFBVztRQUN2QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBQyxHQUFHLElBQUksQ0FBQyxPQUFPLGNBQWMsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFRDs7T0FFRztJQUNILGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFpQixHQUFHLElBQUksQ0FBQyxPQUFPLGVBQWUsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFRDs7T0FFRztJQUNILGNBQWMsQ0FBQyxXQUF5QjtRQUN0QyxNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxXQUFXLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLFdBQVcsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUV6RSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFpQixHQUFHLElBQUksQ0FBQyxPQUFPLGtCQUFrQixFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDbkYsQ0FBQztJQUVEOztPQUVHO0lBQ0gsWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWdDLEdBQUcsSUFBSSxDQUFDLE9BQU8saUJBQWlCLENBQUMsQ0FBQztJQUN4RixDQUFDOytHQWhIVSxjQUFjLGtCQU1MLFFBQVE7bUhBTmpCLGNBQWM7OzRGQUFkLGNBQWM7a0JBRDFCLFVBQVU7OzBCQU9JLE1BQU07MkJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzdFV0aWwsIEVudGl0eVJlc3BvbnNlLCBFbnRpdGllc1Jlc3BvbnNlLCBBY3Rpb25SZXNwb25zZSB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IFB1bHNlQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcblxuaW1wb3J0IHsgTG9naW5QYXJhbXMgfSBmcm9tICcuLi9jb21tb24nO1xuaW1wb3J0IHsgQWNjb3VudERUTyB9IGZyb20gJy4uL2VudGl0aWVzJztcbmltcG9ydCB7IEltYWdlIH0gZnJvbSAnLi4vZW50aXRpZXMnO1xuaW1wb3J0IHsgRmVhdHVyZSB9IGZyb20gJy4uL2VudGl0aWVzJztcbmltcG9ydCB7IFN0cmVhbSB9IGZyb20gJy4uL2VudGl0aWVzJztcbmltcG9ydCB7IENvbmZpZ1BhcmFtIH0gZnJvbSAnLi4vZW50aXRpZXMnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL2VudGl0aWVzJztcbmltcG9ydCB7IFVzZXJNZW1iZXJzaGlwcyB9IGZyb20gJy4uL2VudGl0aWVzJztcbmltcG9ydCB7IEZlYXR1cmVDb2RlIH0gZnJvbSAnLi4vZW51bXMnO1xuXG5cblxuLy8gTGlzdCBvZiB1c2VyIHJlbGF0ZWQgYWN0aW9ucyBcbi8vIEBSZXF1ZXN0SGVhZGVyIFgtQVBJLUtFWSBUaGUga2V5IHRvIGlkZW50aWZ5IHRoZSBhcHBsaWNhdGlvbiAoY29uc29sZSkgXG4vLyBAUmVxdWVzdEhlYWRlciBYLUFDQ0VTUy1UT0tFTiBUaGUgdG9rZW4gdG8gaWRlbnRpZnkgdGhlIGxvZ2dlZC1pbiB1c2VyIFxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzclVzZXJTZXJ2aWNlIHtcblxuICAvLyBVUkwgdG8gd2ViIGFwaVxuICBwcml2YXRlIGJhc2VVcmwgPSAnL3VzZXInO1xuXG4gIC8vIENsYXNzIGNvbnN0cnVjdG9yXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ2NvbmZpZycpIHByaXZhdGUgY29uZmlnOiBQdWxzZUNvbmZpZywgcHJpdmF0ZSByZXN0OiBSZXN0VXRpbCkge1xuICAgIHRoaXMuYmFzZVVybCA9IHRoaXMuY29uZmlnLmFwaSArIHRoaXMuYmFzZVVybDtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEF1dGhvcml6ZSB1c2VyLCB2ZXJpZnkgdXNlciBleGlzdHMgaW4gdGhlIHN5c3RlbSAodXNlciB3YXMgYWxyZWFkeSBhdXRoZW50aWNhdGVkIGJ5IE9BdXRoIHByb3ZpZGVyKVxuICAgKiBUaGUgcmVzcG9uc2UgaW5jbHVkZXMgYWNjZXNzIHRva2VuIHZhbGlkIGZvciAyMCBtaW51dGVzLiBUaGUgY2xpZW50IHNpZGUgc2hvdWxkIHJlbmV3IHRoZSB0b2tlbiBiZWZvcmUgZXhwaXJhdGlvbiB1c2luZyByZWZyZXNoLXRva2VuIG1ldGhvZFxuICAgKi9cbiAgYXV0aG9yaXplKGJvZHk/OiBMb2dpblBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdDxFbnRpdHlSZXNwb25zZTxVc2VyPj4oYCR7dGhpcy5iYXNlVXJsfS9hdXRob3JpemVgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZnJlc2ggdG9rZW4gKHNldCBuZXcgZXhwaXJhdGlvbiB0aW1lKSBhbmQgYXNzb2NpYXRlIHdpdGggbmV3IGFjY291bnQgaWYgcmVxdWlyZWRcbiAgICogVGhlIHJlc3BvbnNlIGluY2x1ZGVzIHRoZSBhY2NvdW50IGRldGFpbHMgYW5kIHRoZSBuZXdseSByZWZyZXNoZWQgdG9rZW4gaW4gdGhlIEhUVFAgaGVhZGVyIFgtQUNDRVNTLVRPS0VOXG4gICAqL1xuICBzZXRBY2NvdW50KGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0PEVudGl0eVJlc3BvbnNlPEFjY291bnREVE8+PihgJHt0aGlzLmJhc2VVcmx9L3NldC1hY2NvdW50LyR7aWR9YCwgJycpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdXNlcidzIGN1cnJlbnQgYWNjb3VudCBkZXRhaWxzXG4gICAqL1xuICBnZXRBY2NvdW50KCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0PEVudGl0eVJlc3BvbnNlPEFjY291bnREVE8+PihgJHt0aGlzLmJhc2VVcmx9L2dldC1hY2NvdW50YCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHVzZXIncyBjdXJyZW50IGFjY291bnQgbG9nb1xuICAgKi9cbiAgZ2V0QWNjb3VudExvZ28oKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQ8RW50aXR5UmVzcG9uc2U8SW1hZ2U+PihgJHt0aGlzLmJhc2VVcmx9L2dldC1hY2NvdW50LWxvZ29gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHVzZXIncyBjdXJyZW50IGFjY291bnQgZmVhdHVyZXMgKGFnZ3JlZ2F0ZWQgbGlzdCBvZiBhbGwgZmVhdHVyZXMgaW4gYWxsIHRoZSBhY2NvdW50J3MgZmVhdHVyZXMgZ3JvdXBzKVxuICAgKi9cbiAgZ2V0QWNjb3VudEZlYXR1cmVzKCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0PEVudGl0aWVzUmVzcG9uc2U8RmVhdHVyZT4+KGAke3RoaXMuYmFzZVVybH0vZ2V0LWFjY291bnQtZmVhdHVyZXNgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHVzZXIncyBjdXJyZW50IGFjY291bnQgc3RyZWFtcyAoYWNjZXNzaWJsZSBieSB0aGUgdXNlcilcbiAgICovXG4gIGdldEFjY291bnRTdHJlYW1zKCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0PEVudGl0aWVzUmVzcG9uc2U8U3RyZWFtPj4oYCR7dGhpcy5iYXNlVXJsfS9nZXQtYWNjb3VudC1zdHJlYW1zYCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCB0aGUgdXNlciBtZW1iZXJzaGlwcyAoYWxsIGFjY291bnRzIHRoYXQgdGhlIGN1cnJlbnQgdXNlciBoYXMgYWNjZXNzIHRvKVxuICAgKi9cbiAgZ2V0TWVtYmVyc2hpcHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQ8RW50aXR5UmVzcG9uc2U8VXNlck1lbWJlcnNoaXBzPj4oYCR7dGhpcy5iYXNlVXJsfS9tZW1iZXJzaGlwc2ApO1xuICB9XG5cbiAgLyoqXG4gICAqIFNhdmUgdXNlcidzIGF2YXRhciBpbWFnZVxuICAgKi9cbiAgc2F2ZUF2YXRhcihib2R5PzogSW1hZ2UpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBhdGNoPEFjdGlvblJlc3BvbnNlPihgJHt0aGlzLmJhc2VVcmx9L2F2YXRhcmAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHVzZXIncyBhdmF0YXIgaW1hZ2VcbiAgICovXG4gIGdldEF2YXRhcigpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldDxFbnRpdHlSZXNwb25zZTxJbWFnZT4+KGAke3RoaXMuYmFzZVVybH0vYXZhdGFyYCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFyYml0cmFyeSBpbWFnZSBieSBJZFxuICAgKi9cbiAgZ2V0SW1hZ2UoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldDxFbnRpdHlSZXNwb25zZTxJbWFnZT4+KGAke3RoaXMuYmFzZVVybH0vaW1hZ2VzYCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFyYml0cmFyeSBpbWFnZSBieSBJZCBhcyBzdHJlYW0gb2YgYnl0ZXNcbiAgICovXG4gIGdldEltYWdlQnl0ZXMoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmRvd25sb2FkKGB1c3ItdXNlcmAsYCR7dGhpcy5iYXNlVXJsfS9pbWFnZS1ieXRlc2ApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBwZXJzb25hbCBhY2Nlc3MgdG9rZW5cbiAgICovXG4gIGdldEFjY2Vzc1Rva2VuKCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0PEFjdGlvblJlc3BvbnNlPihgJHt0aGlzLmJhc2VVcmx9L2FjY2Vzcy10b2tlbmApO1xuICB9XG5cbiAgLyoqXG4gICAqIEFzayBmb3IgcHJlbWl1bSByZXF1ZXN0XG4gICAqL1xuICBwcmVtaXVtUmVxdWVzdChmZWF0dXJlQ29kZT86IEZlYXR1cmVDb2RlKSB7XG4gICAgY29uc3QgcGFyYW1zID0gW107XHRcdFxuICAgIGlmIChmZWF0dXJlQ29kZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmZWF0dXJlQ29kZT0ke2ZlYXR1cmVDb2RlfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldDxBY3Rpb25SZXNwb25zZT4oYCR7dGhpcy5iYXNlVXJsfS9wcmVtaXVtLXJlcXVlc3RgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzeXN0ZW0gY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzXG4gICAqL1xuICBnZXRTeXNDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQ8RW50aXRpZXNSZXNwb25zZTxDb25maWdQYXJhbT4+KGAke3RoaXMuYmFzZVVybH0vZ2V0LXN5cy1jb25maWdgKTtcbiAgfVxuXG59XG4iXX0=