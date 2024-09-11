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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: UsrUserService, deps: [{ token: 'config' }, { token: i1.RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: UsrUserService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: UsrUserService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i2.PulseConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: i1.RestUtil }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNyVXNlclNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtcHVsc2UtbGliL3NyYy9saWIvc2VydmljZXMvdXNyVXNlclNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFjbkQsZ0NBQWdDO0FBQ2hDLDBFQUEwRTtBQUMxRSwwRUFBMEU7QUFFMUUsTUFBTSxPQUFPLGNBQWM7SUFLekIsb0JBQW9CO0lBQ3BCLFlBQXNDLE1BQW1CLEVBQVUsSUFBYztRQUEzQyxXQUFNLEdBQU4sTUFBTSxDQUFhO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBVTtRQUpqRixpQkFBaUI7UUFDVCxZQUFPLEdBQUcsT0FBTyxDQUFDO1FBSXhCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNoRCxDQUFDO0lBR0Q7OztPQUdHO0lBQ0gsU0FBUyxDQUFDLElBQWtCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQXVCLEdBQUcsSUFBSSxDQUFDLE9BQU8sWUFBWSxFQUFFLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkksQ0FBQztJQUVEOzs7T0FHRztJQUNILFVBQVUsQ0FBQyxFQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQTZCLEdBQUcsSUFBSSxDQUFDLE9BQU8sZ0JBQWdCLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzdGLENBQUM7SUFFRDs7T0FFRztJQUNILFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUE2QixHQUFHLElBQUksQ0FBQyxPQUFPLGNBQWMsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7SUFFRDs7T0FFRztJQUNILGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUF3QixHQUFHLElBQUksQ0FBQyxPQUFPLG1CQUFtQixDQUFDLENBQUM7SUFDbEYsQ0FBQztJQUVEOztPQUVHO0lBQ0gsa0JBQWtCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQTRCLEdBQUcsSUFBSSxDQUFDLE9BQU8sdUJBQXVCLENBQUMsQ0FBQztJQUMxRixDQUFDO0lBRUQ7O09BRUc7SUFDSCxpQkFBaUI7UUFDZixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUEyQixHQUFHLElBQUksQ0FBQyxPQUFPLHNCQUFzQixDQUFDLENBQUM7SUFDeEYsQ0FBQztJQUVEOztPQUVHO0lBQ0gsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWtDLEdBQUcsSUFBSSxDQUFDLE9BQU8sY0FBYyxDQUFDLENBQUM7SUFDdkYsQ0FBQztJQUVEOztPQUVHO0lBQ0gsVUFBVSxDQUFDLElBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBaUIsR0FBRyxJQUFJLENBQUMsT0FBTyxTQUFTLEVBQUUsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzSCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxTQUFTO1FBQ1AsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBd0IsR0FBRyxJQUFJLENBQUMsT0FBTyxTQUFTLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRUQ7O09BRUc7SUFDSCxRQUFRLENBQUMsRUFBVztRQUNsQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUF3QixHQUFHLElBQUksQ0FBQyxPQUFPLFNBQVMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFRDs7T0FFRztJQUNILGFBQWEsQ0FBQyxFQUFXO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sY0FBYyxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVEOztPQUVHO0lBQ0gsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWlCLEdBQUcsSUFBSSxDQUFDLE9BQU8sZUFBZSxDQUFDLENBQUM7SUFDdkUsQ0FBQzs4R0EvRlUsY0FBYyxrQkFNTCxRQUFRO2tIQU5qQixjQUFjOzsyRkFBZCxjQUFjO2tCQUQxQixVQUFVOzswQkFPSSxNQUFNOzJCQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc3RVdGlsLCBFbnRpdHlSZXNwb25zZSwgRW50aXRpZXNSZXNwb25zZSwgQWN0aW9uUmVzcG9uc2UgfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgeyBQdWxzZUNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XG5cbmltcG9ydCB7IEFjY291bnREVE8gfSBmcm9tICcuLi9lbnRpdGllcyc7XG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gJy4uL2VudGl0aWVzJztcbmltcG9ydCB7IEZlYXR1cmUgfSBmcm9tICcuLi9lbnRpdGllcyc7XG5pbXBvcnQgeyBTdHJlYW0gfSBmcm9tICcuLi9lbnRpdGllcyc7XG5pbXBvcnQgeyBVc2VyTWVtYmVyc2hpcHMgfSBmcm9tICcuLi9lbnRpdGllcyc7XG5pbXBvcnQgeyBMb2dpblBhcmFtcyB9IGZyb20gJy4uL2NvbW1vbic7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vZW50aXRpZXMnO1xuXG5cblxuLy8gTGlzdCBvZiB1c2VyIHJlbGF0ZWQgYWN0aW9ucyBcbi8vIEBSZXF1ZXN0SGVhZGVyIFgtQVBJLUtFWSBUaGUga2V5IHRvIGlkZW50aWZ5IHRoZSBhcHBsaWNhdGlvbiAoY29uc29sZSkgXG4vLyBAUmVxdWVzdEhlYWRlciBYLUFDQ0VTUy1UT0tFTiBUaGUgdG9rZW4gdG8gaWRlbnRpZnkgdGhlIGxvZ2dlZC1pbiB1c2VyIFxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzclVzZXJTZXJ2aWNlIHtcblxuICAvLyBVUkwgdG8gd2ViIGFwaVxuICBwcml2YXRlIGJhc2VVcmwgPSAnL3VzZXInO1xuXG4gIC8vIENsYXNzIGNvbnN0cnVjdG9yXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ2NvbmZpZycpIHByaXZhdGUgY29uZmlnOiBQdWxzZUNvbmZpZywgcHJpdmF0ZSByZXN0OiBSZXN0VXRpbCkge1xuICAgIHRoaXMuYmFzZVVybCA9IHRoaXMuY29uZmlnLmFwaSArIHRoaXMuYmFzZVVybDtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEF1dGhvcml6ZSB1c2VyLCB2ZXJpZnkgdXNlciBleGlzdHMgaW4gdGhlIHN5c3RlbSAodXNlciB3YXMgYWxyZWFkeSBhdXRoZW50aWNhdGVkIGJ5IE9BdXRoIHByb3ZpZGVyKVxuICAgKiBUaGUgcmVzcG9uc2UgaW5jbHVkZXMgYWNjZXNzIHRva2VuIHZhbGlkIGZvciAyMCBtaW51dGVzLiBUaGUgY2xpZW50IHNpZGUgc2hvdWxkIHJlbmV3IHRoZSB0b2tlbiBiZWZvcmUgZXhwaXJhdGlvbiB1c2luZyByZWZyZXNoLXRva2VuIG1ldGhvZFxuICAgKi9cbiAgYXV0aG9yaXplKGJvZHk/OiBMb2dpblBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdDxFbnRpdHlSZXNwb25zZTxVc2VyPj4oYCR7dGhpcy5iYXNlVXJsfS9hdXRob3JpemVgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZnJlc2ggdG9rZW4gKHNldCBuZXcgZXhwaXJhdGlvbiB0aW1lKSBhbmQgYXNzb2NpYXRlIHdpdGggbmV3IGFjY291bnQgaWYgcmVxdWlyZWRcbiAgICogVGhlIHJlc3BvbnNlIGluY2x1ZGVzIHRoZSBhY2NvdW50IGRldGFpbHMgYW5kIHRoZSBuZXdseSByZWZyZXNoZWQgdG9rZW4gaW4gdGhlIEhUVFAgaGVhZGVyIFgtQUNDRVNTLVRPS0VOXG4gICAqL1xuICBzZXRBY2NvdW50KGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0PEVudGl0eVJlc3BvbnNlPEFjY291bnREVE8+PihgJHt0aGlzLmJhc2VVcmx9L3NldC1hY2NvdW50LyR7aWR9YCwgJycpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdXNlcidzIGN1cnJlbnQgYWNjb3VudCBkZXRhaWxzXG4gICAqL1xuICBnZXRBY2NvdW50KCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0PEVudGl0eVJlc3BvbnNlPEFjY291bnREVE8+PihgJHt0aGlzLmJhc2VVcmx9L2dldC1hY2NvdW50YCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHVzZXIncyBjdXJyZW50IGFjY291bnQgbG9nb1xuICAgKi9cbiAgZ2V0QWNjb3VudExvZ28oKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQ8RW50aXR5UmVzcG9uc2U8SW1hZ2U+PihgJHt0aGlzLmJhc2VVcmx9L2dldC1hY2NvdW50LWxvZ29gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHVzZXIncyBjdXJyZW50IGFjY291bnQgZmVhdHVyZXMgKGFnZ3JlZ2F0ZWQgbGlzdCBvZiBhbGwgZmVhdHVyZXMgaW4gYWxsIHRoZSBhY2NvdW50J3MgZmVhdHVyZXMgZ3JvdXBzKVxuICAgKi9cbiAgZ2V0QWNjb3VudEZlYXR1cmVzKCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0PEVudGl0aWVzUmVzcG9uc2U8RmVhdHVyZT4+KGAke3RoaXMuYmFzZVVybH0vZ2V0LWFjY291bnQtZmVhdHVyZXNgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHVzZXIncyBjdXJyZW50IGFjY291bnQgc3RyZWFtcyAoYWNjZXNzaWJsZSBieSB0aGUgdXNlcilcbiAgICovXG4gIGdldEFjY291bnRTdHJlYW1zKCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0PEVudGl0aWVzUmVzcG9uc2U8U3RyZWFtPj4oYCR7dGhpcy5iYXNlVXJsfS9nZXQtYWNjb3VudC1zdHJlYW1zYCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCB0aGUgdXNlciBtZW1iZXJzaGlwcyAoYWxsIGFjY291bnRzIHRoYXQgdGhlIGN1cnJlbnQgdXNlciBoYXMgYWNjZXNzIHRvKVxuICAgKi9cbiAgZ2V0TWVtYmVyc2hpcHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQ8RW50aXR5UmVzcG9uc2U8VXNlck1lbWJlcnNoaXBzPj4oYCR7dGhpcy5iYXNlVXJsfS9tZW1iZXJzaGlwc2ApO1xuICB9XG5cbiAgLyoqXG4gICAqIFNhdmUgdXNlcidzIGF2YXRhciBpbWFnZVxuICAgKi9cbiAgc2F2ZUF2YXRhcihib2R5PzogSW1hZ2UpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBhdGNoPEFjdGlvblJlc3BvbnNlPihgJHt0aGlzLmJhc2VVcmx9L2F2YXRhcmAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHVzZXIncyBhdmF0YXIgaW1hZ2VcbiAgICovXG4gIGdldEF2YXRhcigpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldDxFbnRpdHlSZXNwb25zZTxJbWFnZT4+KGAke3RoaXMuYmFzZVVybH0vYXZhdGFyYCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFyYml0cmFyeSBpbWFnZSBieSBJZFxuICAgKi9cbiAgZ2V0SW1hZ2UoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldDxFbnRpdHlSZXNwb25zZTxJbWFnZT4+KGAke3RoaXMuYmFzZVVybH0vaW1hZ2VzYCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFyYml0cmFyeSBpbWFnZSBieSBJZCBhcyBzdHJlYW0gb2YgYnl0ZXNcbiAgICovXG4gIGdldEltYWdlQnl0ZXMoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmRvd25sb2FkKGB1c3ItdXNlcmAsYCR7dGhpcy5iYXNlVXJsfS9pbWFnZS1ieXRlc2ApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBwZXJzb25hbCBhY2Nlc3MgdG9rZW5cbiAgICovXG4gIGdldEFjY2Vzc1Rva2VuKCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0PEFjdGlvblJlc3BvbnNlPihgJHt0aGlzLmJhc2VVcmx9L2FjY2Vzcy10b2tlbmApO1xuICB9XG5cbn1cbiJdfQ==