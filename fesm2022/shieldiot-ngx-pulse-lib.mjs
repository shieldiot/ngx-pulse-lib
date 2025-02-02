import * as i0 from '@angular/core';
import { Injectable, Inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i1 from '@angular/common/http';
import { HttpHeaders, HttpRequest, HttpClientModule } from '@angular/common/http';

// BaseRestResponse is a common structure for all response types
class BaseRestResponse {
    constructor() {
        // Error code (0 for success)
        this.code = 0;
        // Error message
        this.error = '';
    }
}

// ActionResponse message is returned for any action on entity with no return data (e.d. delete)
class ActionResponse extends BaseRestResponse {
    constructor() {
        super(...arguments);
        // Entity key
        this.key = '';
        // Additional data
        this.data = '';
    }
}

// EntitiesResponse message is returned for any action returning multiple entities
class EntityResponse extends BaseRestResponse {
    constructor() {
        super(...arguments);
        // Current page (Bulk) number
        this.page = 0;
        // Size of page (items in bulk)
        this.size = 0;
        // Total number of pages
        this.pages = 0;
        // Total number of items in the query
        this.total = 0;
    }
}

// EntitiesResponse message is returned for any action returning multiple entities
class EntitiesResponse extends BaseRestResponse {
    constructor() {
        super(...arguments);
        // Current page (Bulk) number
        this.page = 0;
        // Size of page (items in bulk)
        this.size = 0;
        // Total number of pages
        this.pages = 0;
        // Total number of items in the query
        this.total = 0;
        // List of entities
        this.list = [];
    }
}

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, X-API-KEY, X-ACCESS-TOKEN, X-TIMEZONE, accept, origin, Cache-Control, X-Requested-With, Authorization, Content-Disposition, Content-Filename',
        'Access-Control-Exposed-Headers': 'X-API-KEY, X-ACCESS-TOKEN, X-TIMEZONE, Content-Disposition, Content-Filename',
    })
};
// Utility class for all REST services with common functions
class RestUtil {
    // Constructor with injected authentication service
    constructor(http) {
        this.http = http;
    }
    // Upload is HTTP POST action but the body is File object
    upload(file, url, ...params) {
        const resourceUrl = this.buildUrl(url, ...params);
        const formData = new FormData();
        formData.append('fileKey', file, file.name);
        const req = new HttpRequest('POST', resourceUrl, formData, {
            reportProgress: false,
            responseType: 'json',
        });
        return this.http.request(req);
        //return this.http.request(req);
    }
    // Download is HTTP GET action but the content is blob
    download(fileName, url, ...params) {
        const resourceUrl = this.buildUrl(url, ...params);
        let downloadLink = fileName;
        // extract file name
        params.forEach(p => {
            let arr = p.split('=');
            if (arr.length > 1) {
                if (arr[0].toLowerCase() === 'filename') {
                    downloadLink = arr[1];
                }
            }
        });
        // Set content type for: json / csv / xml / pdf /xslx
        let contentType = this.getMimeType(downloadLink);
        return this.http.get(resourceUrl, {
            responseType: 'blob',
            reportProgress: true,
            observe: 'events',
            headers: new HttpHeaders({ 'Content-Type': contentType })
        });
    }
    // Download2 is an alternative option to download
    download2(fileName, url, ...params) {
        let downloadLink = fileName;
        // extract file name
        params.forEach(p => {
            let arr = p.split('=');
            if (arr.length > 1) {
                if (arr[0].toLowerCase() === 'filename') {
                    downloadLink = arr[1];
                }
            }
        });
        let contentType = this.getMimeType(fileName);
        const link = document.createElement('a');
        link.href = this.buildUrl(url, ...params);
        link.download = downloadLink;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    // HTTP GET action
    get(url, ...params) {
        const resourceUrl = this.buildUrl(url, ...params);
        return this.http.get(resourceUrl, httpOptions);
    }
    // HTTP POST action
    post(url, body, ...params) {
        const resourceUrl = this.buildUrl(url, ...params);
        return this.http.post(resourceUrl, body, httpOptions);
    }
    // HTTP PUT action
    put(url, body, ...params) {
        const resourceUrl = this.buildUrl(url, ...params);
        return this.http.put(resourceUrl, body, httpOptions);
    }
    // HTTP PATCH action
    patch(url, body, ...params) {
        const resourceUrl = this.buildUrl(url, ...params);
        return this.http.patch(resourceUrl, body, httpOptions);
    }
    // HTTP DELETE action
    delete(url, ...params) {
        const resourceUrl = this.buildUrl(url, ...params);
        return this.http.delete(resourceUrl, httpOptions);
    }
    // Construct URL with parameters
    buildUrl(url, ...params) {
        return (params === null) ? url : (params.length === 0) ? url : `${url}${params && params.length > 0 ? '?' + params.join('&') : ''}`;
    }
    // Return MIME type based on file extension
    getMimeType(fileName) {
        // Set content type for: json / csv / xml / pdf /xslx
        let contentType = 'application/json';
        if (fileName.toLowerCase().endsWith('csv')) {
            contentType = 'text/csv';
        }
        else if (fileName.toLowerCase().endsWith('xml')) {
            contentType = 'text/xml';
        }
        else if (fileName.toLowerCase().endsWith('pdf')) {
            contentType = 'application/pdf';
        }
        else if (fileName.toLowerCase().endsWith('xlsx')) {
            contentType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
        }
        return contentType;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: RestUtil, deps: [{ token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: RestUtil }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: RestUtil, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.HttpClient }] });

class PulseConfig {
    constructor() {
        this.api = '';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: PulseConfig, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: PulseConfig }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: PulseConfig, decorators: [{
            type: Injectable
        }] });

// List of AI support related actions for system support only 
// @RequestHeader X-API-KEY The key to identify the application (console) 
// @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user 
class SupportStreamAnalyticsConfig {
    // Class constructor
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/support/stream-analytics-config';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new stream analytics configuration
     */
    create(body) {
        return this.rest.put(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update existing stream analytics configuration
     */
    update(body) {
        return this.rest.patch(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete stream analytics configuration from the system
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single stream analytics configuration by stream id
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Find list of stream analytics configurations by query
     */
    find(search, sort, page, size) {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: SupportStreamAnalyticsConfig, deps: [{ token: 'config' }, { token: RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: SupportStreamAnalyticsConfig }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: SupportStreamAnalyticsConfig, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: PulseConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: RestUtil }] });

// List of account related actions for system administrator only 
// @RequestHeader X-API-KEY The key to identify the application (console) 
// @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user 
class SysAccountsService {
    // Class constructor
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/sys/accounts';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new account
     */
    create(body) {
        return this.rest.put(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update existing account in the system
     */
    update(body) {
        return this.rest.patch(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update existing account settings in the system
     */
    updateSettings(body) {
        return this.rest.patch(`${this.baseUrl}/{id}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete account from the system and all its related content
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single account by id
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Find list of accounts by query
     */
    find(search, type, status, sort, page, size) {
        const params = [];
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (type != null) {
            params.push(`type=${type}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
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
     * Save account's logo image
     */
    saveLogo() {
        return this.rest.patch(`${this.baseUrl}/logo`, '');
    }
    /**
     * Get account's logo image
     */
    getLogo(id) {
        return this.rest.get(`${this.baseUrl}/logo`);
    }
    /**
     * Find list of account reports by query
     */
    findAccountReports(search, type, status, sort, page, size) {
        const params = [];
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (type != null) {
            params.push(`type=${type}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
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
        return this.rest.get(`${this.baseUrl}/find-account-reports`, ...params);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: SysAccountsService, deps: [{ token: 'config' }, { token: RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: SysAccountsService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: SysAccountsService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: PulseConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: RestUtil }] });

// List of audit log queries for system administrator only 
// @RequestHeader X-API-KEY The key to identify the application (console) 
// @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user 
class SysAuditLogService {
    // Class constructor
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/sys/audit-log';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Get single log entry by id
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Find list of log entries by query
     */
    find(from, to, accountId, userId, action, itemType, itemId, itemName, search, sort, page, size) {
        const params = [];
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        if (accountId != null) {
            params.push(`accountId=${accountId}`);
        }
        if (userId != null) {
            params.push(`userId=${userId}`);
        }
        if (action != null) {
            params.push(`action=${action}`);
        }
        if (itemType != null) {
            params.push(`itemType=${itemType}`);
        }
        if (itemId != null) {
            params.push(`itemId=${itemId}`);
        }
        if (itemName != null) {
            params.push(`itemName=${itemName}`);
        }
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
     * Get histogram of audit log entries over time
     */
    getTimeline(from, to, accountId, userId, action, itemType, itemId, itemName, search, sort, page, size) {
        const params = [];
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        if (accountId != null) {
            params.push(`accountId=${accountId}`);
        }
        if (userId != null) {
            params.push(`userId=${userId}`);
        }
        if (action != null) {
            params.push(`action=${action}`);
        }
        if (itemType != null) {
            params.push(`itemType=${itemType}`);
        }
        if (itemId != null) {
            params.push(`itemId=${itemId}`);
        }
        if (itemName != null) {
            params.push(`itemName=${itemName}`);
        }
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
        return this.rest.get(`${this.baseUrl}/timeline`, ...params);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: SysAuditLogService, deps: [{ token: 'config' }, { token: RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: SysAuditLogService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: SysAuditLogService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: PulseConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: RestUtil }] });

// List of checkpoints queries for system administrator only 
// @RequestHeader X-API-KEY The key to identify the application (console) 
// @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user 
class SysCheckpointsService {
    // Class constructor
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/sys/checkpoints';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Get a single checkpoint entry by id
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Find a list of checkpoint entries by query
     */
    find(from, to, accountId, streamId, search, sort, page, size) {
        const params = [];
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        if (accountId != null) {
            params.push(`accountId=${accountId}`);
        }
        if (streamId != null) {
            params.push(`streamId=${streamId}`);
        }
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
     * Get histogram of checkpoints over time
     */
    checkpointsTimeline(from, to, accountId, streamId, field, timeField) {
        const params = [];
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        if (accountId != null) {
            params.push(`accountId=${accountId}`);
        }
        if (streamId != null) {
            params.push(`streamId=${streamId}`);
        }
        if (field != null) {
            params.push(`field=${field}`);
        }
        if (timeField != null) {
            params.push(`timeField=${timeField}`);
        }
        return this.rest.get(`${this.baseUrl}/timeline`, ...params);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: SysCheckpointsService, deps: [{ token: 'config' }, { token: RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: SysCheckpointsService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: SysCheckpointsService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: PulseConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: RestUtil }] });

// List of system configuration parameters related actions for system administrator only 
// @RequestHeader X-API-KEY The key to identify the application (console) 
// @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user 
class SysConfigService {
    // Class constructor
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/sys/config';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new configuration parameter
     */
    create(body) {
        return this.rest.put(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update existing configuration parameter in the system
     */
    update(body) {
        return this.rest.patch(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update group of configuration parameters in the system in a bulk
     */
    updateGroup(body) {
        return this.rest.patch(`${this.baseUrl}/update-group`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete a configuration parameter from the system
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single configuration parameter by id
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Get list of configuration parameters keys and their description
     */
    keys(search, sort, page, size) {
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
        return this.rest.get(`${this.baseUrl}/keys`, ...params);
    }
    /**
     * Find list of configuration parameters by query
     */
    find(search, sort, page, size) {
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
     * Test email template by configId
     */
    testEmailTemplate(configId, addresses) {
        const params = [];
        if (configId != null) {
            params.push(`configId=${configId}`);
        }
        if (addresses != null) {
            params.push(`addresses=${addresses}`);
        }
        return this.rest.get(`${this.baseUrl}/test-email-template`, ...params);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: SysConfigService, deps: [{ token: 'config' }, { token: RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: SysConfigService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: SysConfigService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: PulseConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: RestUtil }] });

// List of features actions for system administrator only 
// @RequestHeader X-API-KEY The key to identify the application (console) 
// @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user 
class SysFeaturesService {
    // Class constructor
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/sys/features';
        this.baseUrl = this.config.api + this.baseUrl;
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
        return this.rest.put(`${this.baseUrl}/groups`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update existing features group
     */
    updateFeaturesGroup(body) {
        return this.rest.patch(`${this.baseUrl}/groups`, typeof body === 'object' ? JSON.stringify(body) : body);
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: SysFeaturesService, deps: [{ token: 'config' }, { token: RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: SysFeaturesService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: SysFeaturesService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: PulseConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: RestUtil }] });

// List of groups related actions for system administrator only 
// @RequestHeader X-API-KEY The key to identify the application (console) 
// @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user 
class SysGroupsService {
    // Class constructor
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/sys/groups';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new groups
     */
    create(body) {
        return this.rest.put(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update existing group in the system
     */
    update(body) {
        return this.rest.patch(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete a group from the system
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single group by id
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Find list of groups by query
     */
    find(search, sort, page, size) {
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
     * Get list of all users in the group
     */
    getUsers(id) {
        return this.rest.get(`${this.baseUrl}/${id}/users`);
    }
    /**
     * Add user to the group
     */
    setDefaultAccount(id, userId) {
        return this.rest.put(`${this.baseUrl}/${id}/users/${userId}`, '');
    }
    /**
     * Remove user from the group
     */
    getAccessToken(id, userId) {
        return this.rest.delete(`${this.baseUrl}/${id}/users/${userId}`);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: SysGroupsService, deps: [{ token: 'config' }, { token: RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: SysGroupsService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: SysGroupsService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: PulseConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: RestUtil }] });

// List of insight queries related actions for system administrator only 
// @RequestHeader X-API-KEY The key to identify the application (console) 
// @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user 
class SysInsightsService {
    // Class constructor
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/sys/insights';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new insight query
     */
    createQuery(body) {
        return this.rest.put(`${this.baseUrl}/query`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update existing insight query
     */
    updateQuery(body) {
        return this.rest.patch(`${this.baseUrl}/query`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete insight query from the system
     */
    deleteQuery(id) {
        return this.rest.delete(`${this.baseUrl}/query/${id}`);
    }
    /**
     * Get single insight query by id
     */
    getQuery(id) {
        return this.rest.get(`${this.baseUrl}/query/${id}`);
    }
    /**
     * Find list of insight queries
     */
    findQueries(search, sort, page, size) {
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
        return this.rest.get(`${this.baseUrl}/query`, ...params);
    }
    /**
     * Create new insight spec
     */
    createSpec(body) {
        return this.rest.put(`${this.baseUrl}/spec`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update existing insight spec
     */
    updateSpec(body) {
        return this.rest.patch(`${this.baseUrl}/spec`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete insight spec from the system
     */
    deleteSpec(id) {
        return this.rest.delete(`${this.baseUrl}/spec/${id}`);
    }
    /**
     * Get single insight spec by id
     */
    getSpec(id) {
        return this.rest.get(`${this.baseUrl}/spec/${id}`);
    }
    /**
     * Find list of insight specs
     */
    findSpecs(accountId, streamId, search, sort, page, size) {
        const params = [];
        if (accountId != null) {
            params.push(`accountId=${accountId}`);
        }
        if (streamId != null) {
            params.push(`streamId=${streamId}`);
        }
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
        return this.rest.get(`${this.baseUrl}/spec`, ...params);
    }
    /**
     * Find list of insight specs
     */
    findSpecsQueries(accountId, streamId, search, sort, page, size) {
        const params = [];
        if (accountId != null) {
            params.push(`accountId=${accountId}`);
        }
        if (streamId != null) {
            params.push(`streamId=${streamId}`);
        }
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
        return this.rest.get(`${this.baseUrl}/spec-queries`, ...params);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: SysInsightsService, deps: [{ token: 'config' }, { token: RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: SysInsightsService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: SysInsightsService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: PulseConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: RestUtil }] });

// List of API keys related actions for system administrator only 
// @RequestHeader X-API-KEY The key to identify the application (console) 
// @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user 
class SysKeysService {
    // Class constructor
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/sys/keys';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new API key
     */
    create(body) {
        return this.rest.put(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update existing API key in the system
     */
    update(body) {
        return this.rest.patch(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete API key from the system
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single API key by id
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Find list of API keys by free test search
     */
    find(search, sort, page, size) {
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
     * Get list of services for the ACL
     */
    listServices() {
        return this.rest.get(`${this.baseUrl}/services`);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: SysKeysService, deps: [{ token: 'config' }, { token: RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: SysKeysService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: SysKeysService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: PulseConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: RestUtil }] });

// List of members related actions for system administrator only 
// @RequestHeader X-API-KEY The key to identify the application (console) 
// @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user 
class SysMembersService {
    // Class constructor
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/sys/members';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new member
     */
    create(body) {
        return this.rest.put(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update existing member in the system
     */
    update(body) {
        return this.rest.patch(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete member from the system
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single member by id
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Find list of members by query
     */
    find(accountId, userId, role, sort, page, size) {
        const params = [];
        if (accountId != null) {
            params.push(`accountId=${accountId}`);
        }
        if (userId != null) {
            params.push(`userId=${userId}`);
        }
        if (role != null) {
            params.push(`role=${role}`);
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: SysMembersService, deps: [{ token: 'config' }, { token: RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: SysMembersService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: SysMembersService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: PulseConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: RestUtil }] });

// List of rule templates related actions for system administrator only 
// @RequestHeader X-API-KEY The key to identify the application (console) 
// @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user 
class SysRuleTemplatesService {
    // Class constructor
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/sys/rule-templates';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new rule template
     */
    create(body) {
        return this.rest.put(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update existing rule template
     */
    update(body) {
        return this.rest.patch(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete a rule template from the system
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single rule template by id
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Find list of rule templates by query
     */
    find(search, sort, page, size) {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: SysRuleTemplatesService, deps: [{ token: 'config' }, { token: RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: SysRuleTemplatesService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: SysRuleTemplatesService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: PulseConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: RestUtil }] });

// List of rules related actions for system administrator only 
// @RequestHeader X-API-KEY The key to identify the application (console) 
// @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user 
class SysRulesService {
    // Class constructor
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/sys/rules';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new rule
     */
    create(body) {
        return this.rest.put(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update existing rule in the system
     */
    update(body) {
        return this.rest.patch(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete a rule from the system
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single rule by id
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Find list of rules by query
     */
    find(accountId, streamId, search, sort, page, size) {
        const params = [];
        if (accountId != null) {
            params.push(`accountId=${accountId}`);
        }
        if (streamId != null) {
            params.push(`streamId=${streamId}`);
        }
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
     * Analyze rule configuration against historic data
     */
    analyze(from, to, interval, size, body) {
        const params = [];
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        if (interval != null) {
            params.push(`interval=${interval}`);
        }
        if (size != null) {
            params.push(`size=${size}`);
        }
        return this.rest.post(`${this.baseUrl}/analyze`, typeof body === 'object' ? JSON.stringify(body) : body, ...params);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: SysRulesService, deps: [{ token: 'config' }, { token: RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: SysRulesService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: SysRulesService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: PulseConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: RestUtil }] });

// List of system statistics information for system administrator only 
// @RequestHeader X-API-KEY The key to identify the application (console) 
// @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user 
class SysStatisticsService {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: SysStatisticsService, deps: [{ token: 'config' }, { token: RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: SysStatisticsService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: SysStatisticsService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: PulseConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: RestUtil }] });

// List of stream related actions for system administrator only 
// @RequestHeader X-API-KEY The key to identify the application (console) 
// @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user 
class SysStreamsService {
    // Class constructor
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/sys/streams';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new stream
     */
    create(body) {
        return this.rest.put(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update existing stream in the system
     */
    update(body) {
        return this.rest.patch(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete a stream from the system
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single stream by id
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Find list of streams by query
     */
    find(accountId, search, sort, page, size) {
        const params = [];
        if (accountId != null) {
            params.push(`accountId=${accountId}`);
        }
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: SysStreamsService, deps: [{ token: 'config' }, { token: RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: SysStreamsService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: SysStreamsService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: PulseConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: RestUtil }] });

// List of users related actions for system administrator only 
// @RequestHeader X-API-KEY The key to identify the application (console) 
// @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user 
class SysUsersService {
    // Class constructor
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/sys/users';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new user
     */
    create(body) {
        return this.rest.put(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update existing user in the system
     */
    update(body) {
        return this.rest.patch(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete a user from the system
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single user by id
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Find list of users by query
     */
    find(search, type, status, sort, page, size) {
        const params = [];
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (type != null) {
            params.push(`type=${type}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
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
     * Create new user with all its accounts memberships
     */
    createMembership(body) {
        return this.rest.post(`${this.baseUrl}/memberships`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update user's default account
     */
    setDefaultAccount(id, accountId) {
        return this.rest.patch(`${this.baseUrl}/${id}/${accountId}`, '');
    }
    /**
     * Update access token
     */
    getAccessToken(id) {
        return this.rest.get(`${this.baseUrl}/${id}/access-token`);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: SysUsersService, deps: [{ token: 'config' }, { token: RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: SysUsersService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: SysUsersService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: PulseConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: RestUtil }] });

// List of integrations related actions for the operator 
// @RequestHeader X-API-KEY The key to identify the application (console) 
// @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user 
class UsrInsightsService {
    // Class constructor
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/insights';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Find list of insights by day
     */
    getDailyInsights(dayId) {
        return this.rest.get(`${this.baseUrl}/daily/${dayId}`);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: UsrInsightsService, deps: [{ token: 'config' }, { token: RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: UsrInsightsService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: UsrInsightsService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: PulseConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: RestUtil }] });

// List of integrations related actions for the operator 
// @RequestHeader X-API-KEY The key to identify the application (console) 
// @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user 
class UsrIntegrationsService {
    // Class constructor
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/integrations';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new integration
     */
    create(body) {
        return this.rest.put(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update existing integration
     */
    update(body) {
        return this.rest.patch(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete integration from the system
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single integration by id
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Find list of integrations by query
     */
    find(accountId, streamId, search, sort, page, size) {
        const params = [];
        if (accountId != null) {
            params.push(`accountId=${accountId}`);
        }
        if (streamId != null) {
            params.push(`streamId=${streamId}`);
        }
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
     * Validate format of the templates in the fields
     */
    validate(body) {
        return this.rest.post(`${this.baseUrl}/validate`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Test the integration with pseudo data
     */
    test(body) {
        return this.rest.post(`${this.baseUrl}/test`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: UsrIntegrationsService, deps: [{ token: 'config' }, { token: RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: UsrIntegrationsService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: UsrIntegrationsService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: PulseConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: RestUtil }] });

// List of members related actions for account administrator only 
// @RequestHeader X-API-KEY The key to identify the application (console) 
// @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user 
class UsrMembersService {
    // Class constructor
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/members';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new member
     */
    create(body) {
        return this.rest.put(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update existing member in the system
     */
    update(body) {
        return this.rest.patch(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete member from the system
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single member by id
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Find list of members by query
     */
    find(userId, role, sort, page, size) {
        const params = [];
        if (userId != null) {
            params.push(`userId=${userId}`);
        }
        if (role != null) {
            params.push(`role=${role}`);
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
     * Find list of registered emails by query
     */
    findEmails(search, page, size) {
        const params = [];
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (size != null) {
            params.push(`size=${size}`);
        }
        return this.rest.get(`${this.baseUrl}/emails`, ...params);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: UsrMembersService, deps: [{ token: 'config' }, { token: RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: UsrMembersService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: UsrMembersService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: PulseConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: RestUtil }] });

// List of user related actions 
// @RequestHeader X-API-KEY The key to identify the application (console) 
// @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user 
class UsrUserService {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: UsrUserService, deps: [{ token: 'config' }, { token: RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: UsrUserService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: UsrUserService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: PulseConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: RestUtil }] });

// List of alerts related actions for the operator 
// @RequestHeader X-API-KEY The key to identify the application (console) 
// @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user 
class UsrAlertsService {
    // Class constructor
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/alerts';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Get single alert by id
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Find list of alerts by query
     */
    find(streamId, deviceId, search, from, to, type, severity, category, status, ruleId, targetIp, ruleType, sort, page, size, withoutOccurrences) {
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
        if (withoutOccurrences != null) {
            params.push(`withoutOccurrences=${withoutOccurrences}`);
        }
        return this.rest.get(`${this.baseUrl}`, ...params);
    }
    /**
     * Export list of alerts by query to a file with the specified format
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
        return this.rest.download(`usr-alerts`, `${this.baseUrl}/export/${format}`, ...params);
    }
    /**
     * Find top 10 alerts by their severity filter by query
     */
    getTop(streamId, deviceId, search, from, to, type, severity, category, status, ruleId, targetIp, ruleType, sort, page, size, withoutOccurrences) {
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
        if (withoutOccurrences != null) {
            params.push(`withoutOccurrences=${withoutOccurrences}`);
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
     * Find alerts distribution by type filtered by query
     */
    countByType(streamId, deviceId, search, from, to, type, severity, category, status, ruleId, targetIp, ruleType, sort, page, size, withoutOccurrences) {
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
        if (withoutOccurrences != null) {
            params.push(`withoutOccurrences=${withoutOccurrences}`);
        }
        return this.rest.get(`${this.baseUrl}/count/by-type`, ...params);
    }
    /**
     * Find alerts distribution by status filtered by query
     */
    countByStatus(streamId, deviceId, search, from, to, type, severity, category, status, ruleId, targetIp, ruleType, sort, page, size, withoutOccurrences) {
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
        if (withoutOccurrences != null) {
            params.push(`withoutOccurrences=${withoutOccurrences}`);
        }
        return this.rest.get(`${this.baseUrl}/count/by-status`, ...params);
    }
    /**
     * Find alerts distribution by severity filtered by query
     */
    countBySeverity(streamId, deviceId, search, from, to, type, severity, category, status, ruleId, targetIp, ruleType, sort, page, size, withoutOccurrences) {
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
        if (withoutOccurrences != null) {
            params.push(`withoutOccurrences=${withoutOccurrences}`);
        }
        return this.rest.get(`${this.baseUrl}/count/by-severity`, ...params);
    }
    /**
     * Find alerts distribution by rule filtered by query
     */
    countByRule(streamId, deviceId, search, from, to, type, severity, category, status, ruleId, targetIp, ruleType, sort, page, size, withoutOccurrences) {
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
        if (withoutOccurrences != null) {
            params.push(`withoutOccurrences=${withoutOccurrences}`);
        }
        return this.rest.get(`${this.baseUrl}/count/by-rule`, ...params);
    }
    /**
     * Find alerts distribution by category filtered by query
     */
    countByCategory(streamId, deviceId, search, from, to, type, severity, category, status, ruleId, targetIp, ruleType, sort, page, size, withoutOccurrences) {
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
        if (withoutOccurrences != null) {
            params.push(`withoutOccurrences=${withoutOccurrences}`);
        }
        return this.rest.get(`${this.baseUrl}/count/by-category`, ...params);
    }
    /**
     * Add tag to an alert
     */
    addTag(id, tag) {
        return this.rest.post(`${this.baseUrl}/${id}/tags/${tag}`, '');
    }
    /**
     * Delete a tag from the alert
     */
    deleteTag(id, tag) {
        return this.rest.delete(`${this.baseUrl}/${id}/tags/${tag}`);
    }
    /**
     * Apply action on an alert
     */
    applyAction(id, action) {
        return this.rest.post(`${this.baseUrl}/${id}/actions/${action}`, '');
    }
    /**
     * Set alert status
     */
    setStatus(id, status) {
        return this.rest.post(`${this.baseUrl}/${id}/status/${status}`, '');
    }
    /**
     * Get current shieldex value as ActionResponse, the Key contains the shield index and the data includes the trend
     */
    getShieldex() {
        return this.rest.get(`${this.baseUrl}/shieldex`);
    }
    /**
     * Get histogram of alerts over time by dimension (type | severity | status | ruleType | category)
     */
    alertsTimeline(streamId, deviceId, dimension, from, to, type, severity, category, status, ruleId, targetIp, ruleType, sort, page, size) {
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
     * Export alert source file
     */
    exportSource(id) {
        return this.rest.download(`usr-alerts`, `${this.baseUrl}/${id}/export_source`);
    }
    /**
     * Get total number devices at risk (affected by the alerts matching the query)
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
    /**
     * Apply DNS lookup for each IP in the list
     */
    getIpLookup(ip) {
        const params = [];
        if (ip != null) {
            params.push(`ip=${ip}`);
        }
        return this.rest.get(`${this.baseUrl}/ip-lookup`, ...params);
    }
    /**
     * Find list of alerts by insight id query
     */
    findByInsightContext() {
        return this.rest.get(`${this.baseUrl}/find-by-insight-context`);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: UsrAlertsService, deps: [{ token: 'config' }, { token: RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: UsrAlertsService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: UsrAlertsService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: PulseConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: RestUtil }] });

// List of device related actions for the operator 
// @RequestHeader X-API-KEY The key to identify the application (console) 
// @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user 
class UsrDevicesService {
    // Class constructor
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/devices';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new device
     */
    create(body) {
        return this.rest.put(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Create bulk of new device, returns list of inserted items
     */
    bulkCreate(body) {
        return this.rest.put(`${this.baseUrl}/bulk`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update existing device in the system
     */
    update(body) {
        return this.rest.patch(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update bulk of device, returns list of updated items
     */
    bulkUpdate(body) {
        return this.rest.patch(`${this.baseUrl}/bulk`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete device from the system
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single device by id
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Find list of devices by query
     */
    find(streamId, search, from, to, type, status, risk, scoreRange, sort, page, size) {
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
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (risk != null) {
            params.push(`risk=${risk}`);
        }
        if (scoreRange != null) {
            params.push(`scoreRange=${scoreRange}`);
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
     * Export list of devices by query to a file with the specified format
     */
    exportFormat(format, streamId, search, from, to, type, status, risk, sort, page, size) {
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
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (risk != null) {
            params.push(`risk=${risk}`);
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
        return this.rest.download(`devices`, `${this.baseUrl}/export/${format}`, ...params);
    }
    /**
     * Find top 10 devices by their score filter by query
     */
    findTop(streamId, search, from, to, type, status, risk, scoreRange, sort, page, size) {
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
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (risk != null) {
            params.push(`risk=${risk}`);
        }
        if (scoreRange != null) {
            params.push(`scoreRange=${scoreRange}`);
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
     * Find device distribution by type filtered by query
     */
    countByType(streamId, search, from, to, type, status, risk, scoreRange, sort, page, size) {
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
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (risk != null) {
            params.push(`risk=${risk}`);
        }
        if (scoreRange != null) {
            params.push(`scoreRange=${scoreRange}`);
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
     * Find device distribution by status filtered by query
     */
    countByStatus(streamId, search, from, to, type, status, risk, scoreRange, sort, page, size) {
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
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (risk != null) {
            params.push(`risk=${risk}`);
        }
        if (scoreRange != null) {
            params.push(`scoreRange=${scoreRange}`);
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
     * Find device distribution by action filtered by query
     */
    countByAction(streamId, search, from, to, type, status, risk, scoreRange, sort, page, size) {
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
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (risk != null) {
            params.push(`risk=${risk}`);
        }
        if (scoreRange != null) {
            params.push(`scoreRange=${scoreRange}`);
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
        return this.rest.get(`${this.baseUrl}/count/by-action`, ...params);
    }
    /**
     * Find device distribution by risk filtered by query
     */
    countByRisk(streamId, search, from, to, type, status, risk, scoreRange, sort, page, size) {
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
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (risk != null) {
            params.push(`risk=${risk}`);
        }
        if (scoreRange != null) {
            params.push(`scoreRange=${scoreRange}`);
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
        return this.rest.get(`${this.baseUrl}/count/by-risk`, ...params);
    }
    /**
     * Add tag to a device
     */
    addTag(id, tag) {
        return this.rest.post(`${this.baseUrl}/${id}/tags/${tag}`, '');
    }
    /**
     * Delete a tag from the device
     */
    deleteTag(id, tag) {
        return this.rest.delete(`${this.baseUrl}/${id}/tags/${tag}`);
    }
    /**
     * Apply action on a device
     */
    applyAction(id, action) {
        return this.rest.post(`${this.baseUrl}/${id}/actions/${action}`, '');
    }
    /**
     * Get network map of devices
     */
    getNetworkMap(streamId, from, to, type, tag, id, mapType, ips) {
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
        if (type != null) {
            params.push(`type=${type}`);
        }
        if (tag != null) {
            params.push(`tag=${tag}`);
        }
        if (id != null) {
            params.push(`id=${id}`);
        }
        if (mapType != null) {
            params.push(`mapType=${mapType}`);
        }
        if (ips != null) {
            params.push(`ips=${ips}`);
        }
        return this.rest.get(`${this.baseUrl}/network-map`, ...params);
    }
    /**
     * Get daily device report over time (daily device report includes: total devices, active devices, devices at risk)
     */
    getDeviceReportTimeline(streamId, from, to) {
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
        return this.rest.get(`${this.baseUrl}/report/timeline`, ...params);
    }
    /**
     * Get latest device report, the Key contains latest devices at risk number (works in account level)
     */
    getLatestDeviceReport() {
        return this.rest.get(`${this.baseUrl}/report/latest`);
    }
    /**
     * Get device / group of devices consumption over time
     */
    getConsumptionTimeline(streamId, from, to, type, tag, id) {
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
        if (type != null) {
            params.push(`type=${type}`);
        }
        if (tag != null) {
            params.push(`tag=${tag}`);
        }
        if (id != null) {
            params.push(`id=${id}`);
        }
        return this.rest.get(`${this.baseUrl}/consumption/timeline`, ...params);
    }
    /**
     * Get device / group of devices consumption over time
     */
    getConsumptionTrend(streamId, from, to, type, tag, id) {
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
        if (type != null) {
            params.push(`type=${type}`);
        }
        if (tag != null) {
            params.push(`tag=${tag}`);
        }
        if (id != null) {
            params.push(`id=${id}`);
        }
        return this.rest.get(`${this.baseUrl}/consumption/trend`, ...params);
    }
    /**
     * Upload list of devices
     */
    uploadDevices(file, streamId, ip, iccid, imsi, msisdn, imei, name, operator, label, tag, country, city, street, postal, lon, lat) {
        const params = [];
        if (streamId != null) {
            params.push(`streamId=${streamId}`);
        }
        if (ip != null) {
            params.push(`ip=${ip}`);
        }
        if (iccid != null) {
            params.push(`iccid=${iccid}`);
        }
        if (imsi != null) {
            params.push(`imsi=${imsi}`);
        }
        if (msisdn != null) {
            params.push(`msisdn=${msisdn}`);
        }
        if (imei != null) {
            params.push(`imei=${imei}`);
        }
        if (name != null) {
            params.push(`name=${name}`);
        }
        if (operator != null) {
            params.push(`operator=${operator}`);
        }
        if (label != null) {
            params.push(`label=${label}`);
        }
        if (tag != null) {
            params.push(`tag=${tag}`);
        }
        if (country != null) {
            params.push(`country=${country}`);
        }
        if (city != null) {
            params.push(`city=${city}`);
        }
        if (street != null) {
            params.push(`street=${street}`);
        }
        if (postal != null) {
            params.push(`postal=${postal}`);
        }
        if (lon != null) {
            params.push(`lon=${lon}`);
        }
        if (lat != null) {
            params.push(`lat=${lat}`);
        }
        return this.rest.upload(file, `${this.baseUrl}/upload`, ...params);
    }
    /**
     * Find list of devices by Insight id query
     */
    findByInsightContext(streamId, insightId, from, to, sort, page, size) {
        const params = [];
        if (streamId != null) {
            params.push(`streamId=${streamId}`);
        }
        if (insightId != null) {
            params.push(`insightId=${insightId}`);
        }
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
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
        return this.rest.get(`${this.baseUrl}/find-by-insight-context`, ...params);
    }
    /**
     * Find devices map
     */
    findDevicesMap(streamId, search, type, status, risk, scoreRange, sort, page, size, mapBounds) {
        const params = [];
        if (streamId != null) {
            params.push(`streamId=${streamId}`);
        }
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (type != null) {
            params.push(`type=${type}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (risk != null) {
            params.push(`risk=${risk}`);
        }
        if (scoreRange != null) {
            params.push(`scoreRange=${scoreRange}`);
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
        return this.rest.put(`${this.baseUrl}/find-devices-map`, typeof mapBounds === 'object' ? JSON.stringify(mapBounds) : mapBounds, ...params);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: UsrDevicesService, deps: [{ token: 'config' }, { token: RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: UsrDevicesService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: UsrDevicesService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: PulseConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: RestUtil }] });

// List of events related actions for the operator 
// @RequestHeader X-API-KEY The key to identify the application (console) 
// @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user 
class UsrEventsService {
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
    find(streamId, deviceId, alertId, search, from, to, type, severity, category, status, ruleId, targetIp, ruleType, sort, page, size) {
        const params = [];
        if (streamId != null) {
            params.push(`streamId=${streamId}`);
        }
        if (deviceId != null) {
            params.push(`deviceId=${deviceId}`);
        }
        if (alertId != null) {
            params.push(`alertId=${alertId}`);
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
    exportFormat(format, streamId, deviceId, alertId, search, from, to, type, severity, category, status, ruleId, targetIp, ruleType, sort, page, size) {
        const params = [];
        if (streamId != null) {
            params.push(`streamId=${streamId}`);
        }
        if (deviceId != null) {
            params.push(`deviceId=${deviceId}`);
        }
        if (alertId != null) {
            params.push(`alertId=${alertId}`);
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
        return this.rest.download(`usr-events`, `${this.baseUrl}/export/${format}`, ...params);
    }
    /**
     * Find top 10 events by their severity filter by query
     */
    getTop(streamId, deviceId, alertId, search, from, to, type, severity, category, status, ruleId, targetIp, ruleType, sort, page, size) {
        const params = [];
        if (streamId != null) {
            params.push(`streamId=${streamId}`);
        }
        if (deviceId != null) {
            params.push(`deviceId=${deviceId}`);
        }
        if (alertId != null) {
            params.push(`alertId=${alertId}`);
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
    countByType(streamId, deviceId, alertId, search, from, to, type, severity, category, status, ruleId, targetIp, ruleType, sort, page, size) {
        const params = [];
        if (streamId != null) {
            params.push(`streamId=${streamId}`);
        }
        if (deviceId != null) {
            params.push(`deviceId=${deviceId}`);
        }
        if (alertId != null) {
            params.push(`alertId=${alertId}`);
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
    countByStatus(streamId, deviceId, alertId, search, from, to, type, severity, category, status, ruleId, targetIp, ruleType, sort, page, size) {
        const params = [];
        if (streamId != null) {
            params.push(`streamId=${streamId}`);
        }
        if (deviceId != null) {
            params.push(`deviceId=${deviceId}`);
        }
        if (alertId != null) {
            params.push(`alertId=${alertId}`);
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
    countBySeverity(streamId, deviceId, alertId, search, from, to, type, severity, category, status, ruleId, targetIp, ruleType, sort, page, size) {
        const params = [];
        if (streamId != null) {
            params.push(`streamId=${streamId}`);
        }
        if (deviceId != null) {
            params.push(`deviceId=${deviceId}`);
        }
        if (alertId != null) {
            params.push(`alertId=${alertId}`);
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
    countByRule(streamId, deviceId, alertId, search, from, to, type, severity, category, status, ruleId, targetIp, ruleType, sort, page, size) {
        const params = [];
        if (streamId != null) {
            params.push(`streamId=${streamId}`);
        }
        if (deviceId != null) {
            params.push(`deviceId=${deviceId}`);
        }
        if (alertId != null) {
            params.push(`alertId=${alertId}`);
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
    countByCategory(streamId, deviceId, alertId, search, from, to, type, severity, category, status, ruleId, targetIp, ruleType, sort, page, size) {
        const params = [];
        if (streamId != null) {
            params.push(`streamId=${streamId}`);
        }
        if (deviceId != null) {
            params.push(`deviceId=${deviceId}`);
        }
        if (alertId != null) {
            params.push(`alertId=${alertId}`);
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
     * Get current shieldex value as ActionResponse, the Key contains the shield index and the data includes the trend
     */
    getShieldex() {
        return this.rest.get(`${this.baseUrl}/shieldex`);
    }
    /**
     * Get histogram of events over time by dimension (type | severity | status | ruleType | category)
     */
    eventsTimeline(streamId, deviceId, alertId, dimension, from, to, type, severity, category, status, ruleId, targetIp, ruleType, sort, page, size) {
        const params = [];
        if (streamId != null) {
            params.push(`streamId=${streamId}`);
        }
        if (deviceId != null) {
            params.push(`deviceId=${deviceId}`);
        }
        if (alertId != null) {
            params.push(`alertId=${alertId}`);
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
    exportSource(id) {
        return this.rest.download(`usr-events`, `${this.baseUrl}/${id}/export_source`);
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
    /**
     * Apply DNS lookup for each IP in the list
     */
    getIpLookup(ip) {
        const params = [];
        if (ip != null) {
            params.push(`ip=${ip}`);
        }
        return this.rest.get(`${this.baseUrl}/ip-lookup`, ...params);
    }
    /**
     * Find list of events by insight id query
     */
    findByInsightContext() {
        return this.rest.get(`${this.baseUrl}/find-by-insight-context`);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: UsrEventsService, deps: [{ token: 'config' }, { token: RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: UsrEventsService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: UsrEventsService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: PulseConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: RestUtil }] });

// List of network statistics related queries for the operator 
// @RequestHeader X-API-KEY The key to identify the application (console) 
// @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user 
class UsrNetworkService {
    // Class constructor
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/network';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Find list of usage records by query
     */
    findUsage(streamId, deviceId, simId, from, to, include, sort, page, size) {
        const params = [];
        if (streamId != null) {
            params.push(`streamId=${streamId}`);
        }
        if (deviceId != null) {
            params.push(`deviceId=${deviceId}`);
        }
        if (simId != null) {
            params.push(`simId=${simId}`);
        }
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        if (include != null) {
            params.push(`include=${include}`);
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
        return this.rest.get(`${this.baseUrl}/usage`, ...params);
    }
    /**
     * Find list of session records by query
     */
    findSession(streamId, deviceId, simId, from, to, include, sort, page, size) {
        const params = [];
        if (streamId != null) {
            params.push(`streamId=${streamId}`);
        }
        if (deviceId != null) {
            params.push(`deviceId=${deviceId}`);
        }
        if (simId != null) {
            params.push(`simId=${simId}`);
        }
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        if (include != null) {
            params.push(`include=${include}`);
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
        return this.rest.get(`${this.baseUrl}/session`, ...params);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: UsrNetworkService, deps: [{ token: 'config' }, { token: RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: UsrNetworkService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: UsrNetworkService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: PulseConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: RestUtil }] });

// List of events related actions for the operator 
// @RequestHeader X-API-KEY The key to identify the application (console) 
// @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user 
class UsrReportsInstanceService {
    // Class constructor
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/reports-instance';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Update existing report instance in the system
     */
    update(body) {
        return this.rest.patch(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete a report instance from the system
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single report instance by id
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Find list of reports instance by query
     */
    find(accountId, search, sort, page, size, from, to, reportTriggerSource) {
        const params = [];
        if (accountId != null) {
            params.push(`accountId=${accountId}`);
        }
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
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        if (reportTriggerSource != null) {
            params.push(`reportTriggerSource=${reportTriggerSource}`);
        }
        return this.rest.get(`${this.baseUrl}`, ...params);
    }
    /**
     * Download report file
     */
    downloadReport(id) {
        return this.rest.download(`usr-reports-instance`, `${this.baseUrl}/${id}/download-report`);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: UsrReportsInstanceService, deps: [{ token: 'config' }, { token: RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: UsrReportsInstanceService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: UsrReportsInstanceService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: PulseConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: RestUtil }] });

// List of events related actions for the operator 
// @RequestHeader X-API-KEY The key to identify the application (console) 
// @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user 
class UsrReportsService {
    // Class constructor
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/reports';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new report
     */
    create(body) {
        return this.rest.put(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update existing report in the system
     */
    update(body) {
        return this.rest.patch(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete a report from the system
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single report by id
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Find list of reports by query
     */
    find(accountId, search, sort, page, size) {
        const params = [];
        if (accountId != null) {
            params.push(`accountId=${accountId}`);
        }
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
     * Get compliance report
     */
    getComplianceReport(streamId, from, to) {
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
        return this.rest.download(`reports`, `${this.baseUrl}/compliance`, ...params);
    }
    /**
     * Create compliance report and send it by email
     */
    getComplianceReportByMail(streamId, from, to, addresses, source) {
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
        if (addresses != null) {
            params.push(`addresses=${addresses}`);
        }
        if (source != null) {
            params.push(`source=${source}`);
        }
        return this.rest.get(`${this.baseUrl}/compliance-by-mail`, ...params);
    }
    /**
     * Get histogram of network activity over time
     */
    getNetworkActivityOverTime(streamId, from, to) {
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
        return this.rest.get(`${this.baseUrl}/network-activity-over-time`, ...params);
    }
    /**
     * Get histogram of device distribution by number of destinations
     */
    getDeviceDistributionByNumberOfDestinations(streamId, from, to) {
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
        return this.rest.get(`${this.baseUrl}/device-distribution-by-number-of-destinations`, ...params);
    }
    /**
     * Get histogram of device distribution by communication frequency
     */
    getDeviceGroupsByCommunicationFrequency(streamId, from, to) {
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
        return this.rest.get(`${this.baseUrl}/device-groups-by-communication-frequency`, ...params);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: UsrReportsService, deps: [{ token: 'config' }, { token: RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: UsrReportsService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: UsrReportsService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: PulseConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: RestUtil }] });

// List of rules related actions 
// @RequestHeader X-API-KEY The key to identify the application (console) 
// @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user 
class UsrRulesService {
    // Class constructor
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/rules';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new rule
     */
    create(body) {
        return this.rest.put(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update existing rule in the system
     */
    update(body) {
        return this.rest.patch(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete a rule from the system
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single rule by id
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Find list of rules by query
     */
    find(streamId, search, from, to, eventSeverity, activityStatus, eventType, includeSysRules, sort, page, size) {
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
        if (eventSeverity != null) {
            params.push(`eventSeverity=${eventSeverity}`);
        }
        if (activityStatus != null) {
            params.push(`activityStatus=${activityStatus}`);
        }
        if (eventType != null) {
            params.push(`eventType=${eventType}`);
        }
        if (includeSysRules != null) {
            params.push(`includeSysRules=${includeSysRules}`);
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
     * Analyze rule configuration against historic data
     */
    analyze(from, to, interval, size, body) {
        const params = [];
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        if (interval != null) {
            params.push(`interval=${interval}`);
        }
        if (size != null) {
            params.push(`size=${size}`);
        }
        return this.rest.post(`${this.baseUrl}/analyze`, typeof body === 'object' ? JSON.stringify(body) : body, ...params);
    }
    /**
     * Find rule distribution by severity filtered by query
     */
    countBySeverity(streamId, search, from, to, eventSeverity, activityStatus, eventType, includeSysRules, sort, page, size) {
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
        if (eventSeverity != null) {
            params.push(`eventSeverity=${eventSeverity}`);
        }
        if (activityStatus != null) {
            params.push(`activityStatus=${activityStatus}`);
        }
        if (eventType != null) {
            params.push(`eventType=${eventType}`);
        }
        if (includeSysRules != null) {
            params.push(`includeSysRules=${includeSysRules}`);
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
     * Find alerts count distribution by rule filtered by query
     */
    countAlertsByRule(streamId, search, from, to, eventSeverity, activityStatus, eventType, includeSysRules, sort, page, size) {
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
        if (eventSeverity != null) {
            params.push(`eventSeverity=${eventSeverity}`);
        }
        if (activityStatus != null) {
            params.push(`activityStatus=${activityStatus}`);
        }
        if (eventType != null) {
            params.push(`eventType=${eventType}`);
        }
        if (includeSysRules != null) {
            params.push(`includeSysRules=${includeSysRules}`);
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
        return this.rest.get(`${this.baseUrl}/count-alerts/by-rule-id`, ...params);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: UsrRulesService, deps: [{ token: 'config' }, { token: RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: UsrRulesService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: UsrRulesService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: PulseConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: RestUtil }] });

const Services = [
    SupportStreamAnalyticsConfig,
    SysAccountsService,
    SysAuditLogService,
    SysCheckpointsService,
    SysConfigService,
    SysFeaturesService,
    SysGroupsService,
    SysInsightsService,
    SysKeysService,
    SysMembersService,
    SysRuleTemplatesService,
    SysRulesService,
    SysStatisticsService,
    SysStreamsService,
    SysUsersService,
    UsrInsightsService,
    UsrIntegrationsService,
    UsrMembersService,
    UsrUserService,
    UsrAlertsService,
    UsrDevicesService,
    UsrEventsService,
    UsrNetworkService,
    UsrReportsInstanceService,
    UsrReportsService,
    UsrRulesService,
];

class NgxPulseLibModule {
    static forRoot(config) {
        return {
            ngModule: NgxPulseLibModule,
            providers: [
                { provide: 'config', useValue: config },
                RestUtil,
                ...Services
            ]
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: NgxPulseLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.1.5", ngImport: i0, type: NgxPulseLibModule, imports: [CommonModule, HttpClientModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: NgxPulseLibModule, imports: [CommonModule, HttpClientModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: NgxPulseLibModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, HttpClientModule]
                }]
        }] });

// Base entity includes common fields for all entities (persistence objects) in the system
class BaseEntity {
    constructor(id, createdOn, updatedOn) {
        if (id !== undefined) {
            this.id = id;
        }
        if (createdOn !== undefined) {
            this.createdOn = createdOn;
        }
        if (updatedOn !== undefined) {
            this.updatedOn = updatedOn;
        }
    }
}

// Account role represents the role of the user in the account
class AccountRole {
    constructor(accountId, accountName, role) {
        if (accountId !== undefined) {
            this.accountId = accountId;
        }
        if (accountName !== undefined) {
            this.accountName = accountName;
        }
        if (role !== undefined) {
            this.role = role;
        }
    }
}

// A set of input, output data values
class ConsumptionData {
    constructor(dataIn, dataOut, total) {
        if (dataIn !== undefined) {
            this.dataIn = dataIn;
        }
        if (dataOut !== undefined) {
            this.dataOut = dataOut;
        }
        if (total !== undefined) {
            this.total = total;
        }
    }
}

// ConsumptionTimeDataPoint model represents a 2 dimensions datapoint in time
class ConsumptionTimeDataPoint {
    constructor(timestamp, value) {
        if (timestamp !== undefined) {
            this.timestamp = timestamp;
        }
        if (value !== undefined) {
            this.value = value;
        }
    }
}

// DeviceConfig is a set of device related configurations
class DeviceConfig {
    constructor(devicesAtRiskConfig, deviceScoreConfig) {
        if (devicesAtRiskConfig !== undefined) {
            this.devicesAtRiskConfig = devicesAtRiskConfig;
        }
        if (deviceScoreConfig !== undefined) {
            this.deviceScoreConfig = deviceScoreConfig;
        }
    }
}

// DeviceNode represents partial device data for map
class DeviceNode {
    constructor(deviceId, score, type, location) {
        if (deviceId !== undefined) {
            this.deviceId = deviceId;
        }
        if (score !== undefined) {
            this.score = score;
        }
        if (type !== undefined) {
            this.type = type;
        }
        if (location !== undefined) {
            this.location = location;
        }
    }
}

// DeviceScoreConfig is a set of parameters for device score config
class DeviceScoreConfig {
    constructor(deviceScoreAlphaFactor, occurrenceThreshold, ruleCountThreshold, lowWeightAlphaFactor, mediumWeightAlphaFactor, highWeightAlphaFactor, highVolumeWeightAlphaFactor, abnormalOutPortsAlphaFactor, abnormalOutEndpointsAlphaFactor, suspiciousIpAlphaFactor, defaultSeverityRange, defaultSeverityFactor, severityConditionConfigs, ruleCountThresholdConfigs, ruleBasedSeverityConditionConfigs, isSeverityBased, isAlertBased) {
        if (deviceScoreAlphaFactor !== undefined) {
            this.deviceScoreAlphaFactor = deviceScoreAlphaFactor;
        }
        if (occurrenceThreshold !== undefined) {
            this.occurrenceThreshold = occurrenceThreshold;
        }
        if (ruleCountThreshold !== undefined) {
            this.ruleCountThreshold = ruleCountThreshold;
        }
        if (lowWeightAlphaFactor !== undefined) {
            this.lowWeightAlphaFactor = lowWeightAlphaFactor;
        }
        if (mediumWeightAlphaFactor !== undefined) {
            this.mediumWeightAlphaFactor = mediumWeightAlphaFactor;
        }
        if (highWeightAlphaFactor !== undefined) {
            this.highWeightAlphaFactor = highWeightAlphaFactor;
        }
        if (highVolumeWeightAlphaFactor !== undefined) {
            this.highVolumeWeightAlphaFactor = highVolumeWeightAlphaFactor;
        }
        if (abnormalOutPortsAlphaFactor !== undefined) {
            this.abnormalOutPortsAlphaFactor = abnormalOutPortsAlphaFactor;
        }
        if (abnormalOutEndpointsAlphaFactor !== undefined) {
            this.abnormalOutEndpointsAlphaFactor = abnormalOutEndpointsAlphaFactor;
        }
        if (suspiciousIpAlphaFactor !== undefined) {
            this.suspiciousIpAlphaFactor = suspiciousIpAlphaFactor;
        }
        if (defaultSeverityRange !== undefined) {
            this.defaultSeverityRange = defaultSeverityRange;
        }
        if (defaultSeverityFactor !== undefined) {
            this.defaultSeverityFactor = defaultSeverityFactor;
        }
        if (severityConditionConfigs !== undefined) {
            this.severityConditionConfigs = severityConditionConfigs;
        }
        if (ruleCountThresholdConfigs !== undefined) {
            this.ruleCountThresholdConfigs = ruleCountThresholdConfigs;
        }
        if (ruleBasedSeverityConditionConfigs !== undefined) {
            this.ruleBasedSeverityConditionConfigs = ruleBasedSeverityConditionConfigs;
        }
        if (isSeverityBased !== undefined) {
            this.isSeverityBased = isSeverityBased;
        }
        if (isAlertBased !== undefined) {
            this.isAlertBased = isAlertBased;
        }
    }
}

// DevicesAtRiskConfig is int of minimal score for device to be at risk
class DevicesAtRiskConfig {
    constructor(minScore) {
        if (minScore !== undefined) {
            this.minScore = minScore;
        }
    }
}

// DevicesMap is a data structure representing a list of device nodes and map bounds
class DevicesMap {
    constructor(deviceNodes, mapBounds) {
        if (deviceNodes !== undefined) {
            this.deviceNodes = deviceNodes;
        }
        if (mapBounds !== undefined) {
            this.mapBounds = mapBounds;
        }
    }
}

// EventSeverityConfig is a list of event severity configuration
class EventSeverityConfig {
    constructor(severityConfigs) {
        if (severityConfigs !== undefined) {
            this.severityConfigs = severityConfigs;
        }
    }
}

// Key Value float tuple
class FloatKeyValue {
    constructor(key, value) {
        if (key !== undefined) {
            this.key = key;
        }
        if (value !== undefined) {
            this.value = value;
        }
    }
}

// GeoData model represents Geographic data associated with IP
// This structure is based on the Elasticsearch GeoIP pipeline fetching data from MaxMind database
class GeoData {
    constructor(countryIsoCode, countryName, regionIsoCode, regionName, cityName, location, street, postal) {
        if (countryIsoCode !== undefined) {
            this.country_iso_code = countryIsoCode;
        }
        if (countryName !== undefined) {
            this.country_name = countryName;
        }
        if (regionIsoCode !== undefined) {
            this.region_iso_code = regionIsoCode;
        }
        if (regionName !== undefined) {
            this.region_name = regionName;
        }
        if (cityName !== undefined) {
            this.city_name = cityName;
        }
        if (location !== undefined) {
            this.location = location;
        }
        if (street !== undefined) {
            this.street = street;
        }
        if (postal !== undefined) {
            this.postal_code = postal;
        }
    }
}

// GraphSeries model represents a generic set of data points over interval
class GraphSeries {
    constructor(name, values) {
        if (name !== undefined) {
            this.name = name;
        }
        if (values !== undefined) {
            this.values = values;
        }
    }
}

// Indicator model represents a feature and feature value within a normal range
class Indicator {
    constructor(name, significance, min, max, actual) {
        if (name !== undefined) {
            this.name = name;
        }
        if (significance !== undefined) {
            this.significance = significance;
        }
        if (min !== undefined) {
            this.min = min;
        }
        if (max !== undefined) {
            this.max = max;
        }
        if (actual !== undefined) {
            this.actual = actual;
        }
    }
}

// Key: int Value SeriesData  tuple
class IntKeySeriesDataValue {
    constructor(key, value) {
        if (key !== undefined) {
            this.key = key;
        }
        if (value !== undefined) {
            this.value = value;
        }
    }
}

// Key Value int tuple
class IntKeyValue {
    constructor(key, value) {
        if (key !== undefined) {
            this.key = key;
        }
        if (value !== undefined) {
            this.value = value;
        }
    }
}

// Interval represents a finite int window (from - to)
class Interval {
    constructor(from, to) {
        if (from !== undefined) {
            this.from = from;
        }
        if (to !== undefined) {
            this.to = to;
        }
    }
}

// Link represents a relation between two nodes
class Link {
    constructor(id, name, src, dst, value, severity, eventCount) {
        if (id !== undefined) {
            this.id = id;
        }
        if (name !== undefined) {
            this.name = name;
        }
        if (src !== undefined) {
            this.src = src;
        }
        if (dst !== undefined) {
            this.dst = dst;
        }
        if (value !== undefined) {
            this.value = value;
        }
        if (severity !== undefined) {
            this.severity = severity;
        }
        if (eventCount !== undefined) {
            this.eventCount = eventCount;
        }
    }
}

// WGS-84 Geo Location
class Location {
    constructor(lat, lon) {
        if (lat !== undefined) {
            this.lat = lat;
        }
        if (lon !== undefined) {
            this.lon = lon;
        }
    }
}

// Login parameters data model
class LoginParams {
    constructor(email, password, accessToken) {
        if (email !== undefined) {
            this.email = email;
        }
        if (password !== undefined) {
            this.password = password;
        }
        if (accessToken !== undefined) {
            this.accessToken = accessToken;
        }
    }
}

// MaliciousIPCard is a data structure representing malicious IP card
class MaliciousIPCard {
    constructor(maliciousIp, maliciousIpDns, countryCode, ipDescription, lastEventTime, attackCategories, numberOfDevices, eventsBySeverityBreakdown) {
        if (maliciousIp !== undefined) {
            this.maliciousIp = maliciousIp;
        }
        if (maliciousIpDns !== undefined) {
            this.maliciousIpDns = maliciousIpDns;
        }
        if (countryCode !== undefined) {
            this.countryCode = countryCode;
        }
        if (ipDescription !== undefined) {
            this.ipDescription = ipDescription;
        }
        if (lastEventTime !== undefined) {
            this.lastEventTime = lastEventTime;
        }
        if (attackCategories !== undefined) {
            this.attackCategories = attackCategories;
        }
        if (numberOfDevices !== undefined) {
            this.numberOfDevices = numberOfDevices;
        }
        if (eventsBySeverityBreakdown !== undefined) {
            this.eventsBySeverityBreakdown = eventsBySeverityBreakdown;
        }
    }
}

// MaliciousIPData is a data structure representing malicious IP and its statistics
class MaliciousIPData {
    constructor(iP, totalEvents, totalDevices, totalMaliciousIPs) {
        if (iP !== undefined) {
            this.ip = iP;
        }
        if (totalEvents !== undefined) {
            this.totalEvents = totalEvents;
        }
        if (totalDevices !== undefined) {
            this.totalDevices = totalDevices;
        }
        if (totalMaliciousIPs !== undefined) {
            this.totalMaliciousIPs = totalMaliciousIPs;
        }
    }
}

// MapBounds represents maps bounds using 2 points southwest and northeast
class MapBounds {
    constructor(southwest, northeast) {
        if (southwest !== undefined) {
            this.southwest = southwest;
        }
        if (northeast !== undefined) {
            this.northeast = northeast;
        }
    }
}

// NetworkMap is a data structure representing a set of nodes and vertex representing a network
class NetworkMap {
    constructor(nodes, links) {
        if (nodes !== undefined) {
            this.nodes = nodes;
        }
        if (links !== undefined) {
            this.links = links;
        }
    }
}

// Node represents a vertex in a network map
class Node {
    constructor(id, name, ip, type, score, tags, labels, eventCount, isGroup, deviceCount) {
        if (id !== undefined) {
            this.id = id;
        }
        if (name !== undefined) {
            this.name = name;
        }
        if (ip !== undefined) {
            this.ip = ip;
        }
        if (type !== undefined) {
            this.type = type;
        }
        if (score !== undefined) {
            this.score = score;
        }
        if (tags !== undefined) {
            this.tags = tags;
        }
        if (labels !== undefined) {
            this.labels = labels;
        }
        if (eventCount !== undefined) {
            this.eventCount = eventCount;
        }
        if (isGroup !== undefined) {
            this.isGroup = isGroup;
        }
        if (deviceCount !== undefined) {
            this.deviceCount = deviceCount;
        }
    }
}

// RuleBasedSeverityConditionConfig is a set of severity types code configs
class RuleBasedSeverityConditionConfig {
    constructor(severityType, bias, ruleConditionThresholdConfig, ruleTypesThreshold) {
        if (severityType !== undefined) {
            this.severityType = severityType;
        }
        if (bias !== undefined) {
            this.bias = bias;
        }
        if (ruleConditionThresholdConfig !== undefined) {
            this.ruleConditionThresholdConfig = ruleConditionThresholdConfig;
        }
        if (ruleTypesThreshold !== undefined) {
            this.ruleTypesThreshold = ruleTypesThreshold;
        }
    }
}

// RuleCountThresholdConfig is a set of event type to threshold
class RuleCountThresholdConfig {
    constructor(eventType, threshold) {
        if (eventType !== undefined) {
            this.eventType = eventType;
        }
        if (threshold !== undefined) {
            this.threshold = threshold;
        }
    }
}

// SeriesData model represents a generic datapoint in interval range
class SeriesData {
    constructor(interval, values) {
        if (interval !== undefined) {
            this.interval = interval;
        }
        if (values !== undefined) {
            this.values = values;
        }
    }
}

// Session data transformation parameters (to calculate z-score)
class SessionTransform {
    constructor(packetsIn, packetsOut, bytesIn, bytesOut) {
        if (packetsIn !== undefined) {
            this.packetsIn = packetsIn;
        }
        if (packetsOut !== undefined) {
            this.packetsOut = packetsOut;
        }
        if (bytesIn !== undefined) {
            this.bytesIn = bytesIn;
        }
        if (bytesOut !== undefined) {
            this.bytesOut = bytesOut;
        }
    }
}

// SeverityConditionConfig is a set of severity configuration configs
class SeverityConditionConfig {
    constructor(conditionSeverity, sevs, countTH, severityFactor, severityRange) {
        if (conditionSeverity !== undefined) {
            this.conditionSeverity = conditionSeverity;
        }
        if (sevs !== undefined) {
            this.sevs = sevs;
        }
        if (countTH !== undefined) {
            this.countTH = countTH;
        }
        if (severityFactor !== undefined) {
            this.severityFactor = severityFactor;
        }
        if (severityRange !== undefined) {
            this.severityRange = severityRange;
        }
    }
}

// SeverityIntervalTuple  is tuple of SeverityTypeCode and Interval
class SeverityIntervalTuple {
    constructor(severity, interval) {
        if (severity !== undefined) {
            this.severity = severity;
        }
        if (interval !== undefined) {
            this.interval = interval;
        }
    }
}

// ShieldexConfig is a shieldex configuration values for the Risk calculation
class ShieldexConfig {
    constructor(alphaWeightFactor, percentFactor, lowRiskWeight, mediumRiskWeight, highRiskWeight, criticalRiskWeight) {
        if (alphaWeightFactor !== undefined) {
            this.alphaWeightFactor = alphaWeightFactor;
        }
        if (percentFactor !== undefined) {
            this.percentFactor = percentFactor;
        }
        if (lowRiskWeight !== undefined) {
            this.lowRiskWeight = lowRiskWeight;
        }
        if (mediumRiskWeight !== undefined) {
            this.mediumRiskWeight = mediumRiskWeight;
        }
        if (highRiskWeight !== undefined) {
            this.highRiskWeight = highRiskWeight;
        }
        if (criticalRiskWeight !== undefined) {
            this.criticalRiskWeight = criticalRiskWeight;
        }
    }
}

// String Int Value tuple
class StringIntValue {
    constructor(key, value) {
        if (key !== undefined) {
            this.key = key;
        }
        if (value !== undefined) {
            this.value = value;
        }
    }
}

// Key Value string  to int tuple
class StringKeyIntValue {
    constructor(key, value) {
        if (key !== undefined) {
            this.key = key;
        }
        if (value !== undefined) {
            this.value = value;
        }
    }
}

// Key Value string tuple
class StringKeyValue {
    constructor(key, value) {
        if (key !== undefined) {
            this.key = key;
        }
        if (value !== undefined) {
            this.value = value;
        }
    }
}

// Thresholds is a list of stream configuration thresholds
class Thresholds {
    constructor(inactiveDeviceWindowMin) {
        if (inactiveDeviceWindowMin !== undefined) {
            this.inactiveDeviceWindowMin = inactiveDeviceWindowMin;
        }
    }
}

// TimeDataPoint model represents a generic datapoint in time
class TimeDataPoint {
    constructor(timestamp, value) {
        if (timestamp !== undefined) {
            this.timestamp = timestamp;
        }
        if (value !== undefined) {
            this.value = value;
        }
    }
}

// TimeDataPoint2D model represents a 2 dimensions datapoint in time
class TimeDataPoint2D {
    constructor(timestamp, value) {
        if (timestamp !== undefined) {
            this.timestamp = timestamp;
        }
        if (value !== undefined) {
            this.value = value;
        }
    }
}

// TimeDataPointFloat model represents a float datapoint in time
class TimeDataPointFloat {
    constructor(timestamp, value) {
        if (timestamp !== undefined) {
            this.timestamp = timestamp;
        }
        if (value !== undefined) {
            this.value = value;
        }
    }
}

// TimeFrame represents a finite time window (from - to)
class TimeFrame {
    constructor(from, to) {
        if (from !== undefined) {
            this.from = from;
        }
        if (to !== undefined) {
            this.to = to;
        }
    }
}

// TimeSeries model represents a generic set of data points over time
class TimeSeries {
    constructor(name, range, values) {
        if (name !== undefined) {
            this.name = name;
        }
        if (range !== undefined) {
            this.range = range;
        }
        if (values !== undefined) {
            this.values = values;
        }
    }
}

// TimeSeriesOf2D model represents a 2 dimension samples over time
class TimeSeriesOf2D {
    constructor(name, range, values) {
        if (name !== undefined) {
            this.name = name;
        }
        if (range !== undefined) {
            this.range = range;
        }
        if (values !== undefined) {
            this.values = values;
        }
    }
}

// TimeSeriesOfDataConsumption model represents a data consumption (in, out, total Kb) samples over time
class TimeSeriesOfDataConsumption {
    constructor(name, range, values) {
        if (name !== undefined) {
            this.name = name;
        }
        if (range !== undefined) {
            this.range = range;
        }
        if (values !== undefined) {
            this.values = values;
        }
    }
}

// TimeSeriesOfFloat model represents a float set of data points over time
class TimeSeriesOfFloat {
    constructor(name, range, values) {
        if (name !== undefined) {
            this.name = name;
        }
        if (range !== undefined) {
            this.range = range;
        }
        if (values !== undefined) {
            this.values = values;
        }
    }
}

// TokenData model represents a user in account which is encrypted with the JWT token
class TokenData {
    constructor(accountId, subjectId, subjectType, role, status, expiresIn) {
        if (accountId !== undefined) {
            this.accountId = accountId;
        }
        if (subjectId !== undefined) {
            this.subjectId = subjectId;
        }
        if (subjectType !== undefined) {
            this.subjectType = subjectType;
        }
        if (role !== undefined) {
            this.role = role;
        }
        if (status !== undefined) {
            this.status = status;
        }
        if (expiresIn !== undefined) {
            this.expiresIn = expiresIn;
        }
    }
}

// Tuple model represents a generic key-value pair
class Tuple {
    constructor(key, value) {
        if (key !== undefined) {
            this.key = key;
        }
        if (value !== undefined) {
            this.value = value;
        }
    }
}

// Usage data transformation parameters (to calculate z-score)
class UsageTransform {
    constructor(packetsIn, packetsOut, bytesIn, bytesOut, endpointsCount, portsCount) {
        if (packetsIn !== undefined) {
            this.packetsIn = packetsIn;
        }
        if (packetsOut !== undefined) {
            this.packetsOut = packetsOut;
        }
        if (bytesIn !== undefined) {
            this.bytesIn = bytesIn;
        }
        if (bytesOut !== undefined) {
            this.bytesOut = bytesOut;
        }
        if (endpointsCount !== undefined) {
            this.endpointsCount = endpointsCount;
        }
        if (portsCount !== undefined) {
            this.portsCount = portsCount;
        }
    }
}

// ZScore parameters
class ZScore {
    constructor(mean, sD) {
        if (mean !== undefined) {
            this.mean = mean;
        }
        if (sD !== undefined) {
            this.sD = sD;
        }
    }
}

// Account entity in the system represents customer account
class Account extends BaseEntity {
}

// AccountDTO includes additional data for display
class AccountDTO extends BaseEntity {
}

// AccountReportDTO includes additional data related to Account for display
class AccountReportDTO extends BaseEntity {
}

// AccountSettings is a set of account attributes
class AccountSettings {
    constructor(defaultHomePageView) {
        if (defaultHomePageView !== undefined) {
            this.defaultHomePageView = defaultHomePageView;
        }
    }
}

// Action entity is a user action applied on an event or device
class Action extends BaseEntity {
}

// Cyber event entity
// The Event entity is created by multiple services (e.g. ip reputation, static rules, anomaly detection) by analyzing network statistics (usage and session data) and related to specific IP address.
// Since it is not always clear what is the actual device with the IP address (RADIUS or DIAMETER logs can be provided later), we should be able to create event without device Id and assign the device Id later on.
// For this purpose, when the device Id is not provided, the event will be created with the `unknown` value in the deviceId field and the eventId must follow the following pattern: streamId:timestamp:ip_address
class Alert extends BaseEntity {
}

// AlertWithDevice entity is an event with the device information (for display only)
class AlertWithDevice extends BaseEntity {
}

// ApiKey entity is a structure representing the source data fields encapsulated in the API key
class ApiKey extends BaseEntity {
}

// Audit Log - each entry represents a single action done by user
class AuditLog extends BaseEntity {
}

// BulkDevices list of devices for bulk operations
class BulkDevices {
    constructor(values) {
        if (values !== undefined) {
            this.values = values;
        }
    }
}

// Checkpoint represents parsing status in time that preserves parsing cycle statistics and last checkpoint (timestamp) to avoid parsing the same files over and over again
class Checkpoint extends BaseEntity {
}

class Condition {
    constructor(field, operator, values, strings) {
        if (field !== undefined) {
            this.field = field;
        }
        if (operator !== undefined) {
            this.operator = operator;
        }
        if (values !== undefined) {
            this.values = values;
        }
        if (strings !== undefined) {
            this.strings = strings;
        }
    }
}

// ConfigParam stores a key-value pair as a system configuration parameter
// The id is the key of the parameter
class ConfigParam extends BaseEntity {
}

// ConfigParams stores a list of system configuration parameters
class ConfigParams extends BaseEntity {
}

// DNSRecord represents network statistics of DNS requests
// The createdOn field represents the first communication time of the device within this time window
// The updatedOn field represents the last communication time of the device within this time window
class DNSRecord extends BaseEntity {
}

// DataIngestion is the ingestion pipeline configuration
class DataIngestion {
    constructor(inputURI, format, archiveURI, inputFilesExt, subNets, exclude, usageTimeWindowSec, sessionTimeWindowSec, schedule, defaultDeviceType, deviceCreationPolicy, deviceIdentityPolicy) {
        if (inputURI !== undefined) {
            this.inputURI = inputURI;
        }
        if (format !== undefined) {
            this.format = format;
        }
        if (archiveURI !== undefined) {
            this.archiveURI = archiveURI;
        }
        if (inputFilesExt !== undefined) {
            this.inputFilesExt = inputFilesExt;
        }
        if (subNets !== undefined) {
            this.subNets = subNets;
        }
        if (exclude !== undefined) {
            this.exclude = exclude;
        }
        if (usageTimeWindowSec !== undefined) {
            this.usageTimeWindowSec = usageTimeWindowSec;
        }
        if (sessionTimeWindowSec !== undefined) {
            this.sessionTimeWindowSec = sessionTimeWindowSec;
        }
        if (schedule !== undefined) {
            this.schedule = schedule;
        }
        if (defaultDeviceType !== undefined) {
            this.defaultDeviceType = defaultDeviceType;
        }
        if (deviceCreationPolicy !== undefined) {
            this.deviceCreationPolicy = deviceCreationPolicy;
        }
        if (deviceIdentityPolicy !== undefined) {
            this.deviceIdentityPolicy = deviceIdentityPolicy;
        }
    }
}

// TimeSeriesOfDeviceReport model represents a time series of DeviceReport
class DataPointOfDeviceReport {
    constructor(timestamp, value) {
        if (timestamp !== undefined) {
            this.timestamp = timestamp;
        }
        if (value !== undefined) {
            this.value = value;
        }
    }
}

// Device entity is an IoT device representation with attributes and state
class Device extends BaseEntity {
}

// DeviceReport is a periodic (usually daily) snapshot on status of all devices, field createdOn indicates the snapshot time
class DeviceReport extends BaseEntity {
}

// DeviceWithEvents entity is a device with its related events (for display only)
class DeviceWithEvents extends BaseEntity {
}

// Distribution model represents a grouped counts of elements of generic type int (usually enum)
class Distribution {
    constructor(name, total, values) {
        if (name !== undefined) {
            this.name = name;
        }
        if (total !== undefined) {
            this.total = total;
        }
        if (values !== undefined) {
            this.values = values;
        }
    }
}

// Alert entity
// The Alert entity representing an aggregation of many Event occurrences of the same type on the same device in a fixed time period (30 days)
// The purpose of this aggregation is to avoid flooding the user with many (hundreds and thousands) of events of the same type
class Event extends BaseEntity {
}

// A single instance of event generated for the same deviceId based on the same rule on the same month
class EventOccurrence {
    constructor(timestamp, source, sourceIp, indicators, trafficDirection) {
        if (timestamp !== undefined) {
            this.timestamp = timestamp;
        }
        if (source !== undefined) {
            this.source = source;
        }
        if (sourceIp !== undefined) {
            this.sourceIp = sourceIp;
        }
        if (indicators !== undefined) {
            this.indicators = indicators;
        }
        if (trafficDirection !== undefined) {
            this.trafficDirection = trafficDirection;
        }
    }
}

// EventWithDevice entity is an event with the device information (for display only)
class EventWithDevice extends BaseEntity {
}

// Feature entity is capability in the system used for feature toggle
class Feature extends BaseEntity {
}

// FeaturesGroup group represents a group of capabilities in the system used for feature toggle
class FeaturesGroup extends BaseEntity {
}

// Group represents a set of memberships to various accounts.
class Group extends BaseEntity {
}

// Image stores a small base64 picture (such as: user avatar, account logo, etc) or URI (for large pictures) in the database
// The id of the image is the entity id * @Table: image
class Image extends BaseEntity {
}

// Insight
// The Insight entity is created by the insights micro service and represents an account-wide insight.
class Insight extends BaseEntity {
}

// InsightQuery
// The InsightQuery entity is a definition of insight query to execute periodically in order to generate "insights" for the users.
class InsightQuery extends BaseEntity {
}

// InsightSpec
// The InsightSpec entity is a link between account and stream Id to insight query.
class InsightSpec extends BaseEntity {
}

// IntDistribution model represents a grouped counts of elements of type int (usually enum)
class IntDistribution {
    constructor(name, total, values) {
        if (name !== undefined) {
            this.name = name;
        }
        if (total !== undefined) {
            this.total = total;
        }
        if (values !== undefined) {
            this.values = values;
        }
    }
}

// Integration specifications
class Integration extends BaseEntity {
}

// Member represents a user in the account and the role he has in this account
// User may have several memberships for several accounts, each with a different role
class Member extends BaseEntity {
}

// Radius entity is an IP allocation to device IMSI entry
class Radius extends BaseEntity {
}

// Report entity represents a system generated and scheduled report data
class Report extends BaseEntity {
}

// Report instance entity represents generated report
class ReportInstance extends BaseEntity {
}

// Deterministic Rule definition
class Rule extends BaseEntity {
}

// RuleTemplate entity is used to define rules quickly based on pre-defined templates
class RuleTemplate extends BaseEntity {
}

// SIM entity represents a physical SIM (Subscriber Identity Module) card used in an IoT device to access the internet via a cellular provider
class SIM {
    constructor(id, iP, iCCID, iMSI, mSISDN) {
        if (id !== undefined) {
            this.id = id;
        }
        if (iP !== undefined) {
            this.ip = iP;
        }
        if (iCCID !== undefined) {
            this.iccid = iCCID;
        }
        if (iMSI !== undefined) {
            this.imsi = iMSI;
        }
        if (mSISDN !== undefined) {
            this.msisdn = mSISDN;
        }
    }
}

// ServiceStatus represents applicative status of a pulse service with a set of metrics
class ServiceStatus extends BaseEntity {
}

// SessionRecord represents network statistics for a session
// The unique Id of session record is based on the template: [window_start_time]-[device_id]-[session_id]
// The createdOn field represents the first communication time of the device within this time window
// The updatedOn field represents the last communication time of the device within this time window
class SessionRecord extends BaseEntity {
}

// Shieldex is a security score per account level calculated periodically
class Shieldex extends BaseEntity {
}

// Stream represents data stream configuration for group of identical IoT devices service the same purpose and sharing the same attributes (e.g. water meter, point-of-sale, ATM IP camera etc)
class Stream extends BaseEntity {
}

// Internal structure used by the AI to fine-tune the analytics thresholds
class StreamAnalyticsConfig extends BaseEntity {
}

// StreamConfig is a stream configuration description
class StreamConfig {
    constructor(ingest, sessionTransform, usageTransform, thresholds, shieldexConfig, eventSeverityConfig, preventiveActions, deviceConfig) {
        if (ingest !== undefined) {
            this.ingest = ingest;
        }
        if (sessionTransform !== undefined) {
            this.sessionTransform = sessionTransform;
        }
        if (usageTransform !== undefined) {
            this.usageTransform = usageTransform;
        }
        if (thresholds !== undefined) {
            this.thresholds = thresholds;
        }
        if (shieldexConfig !== undefined) {
            this.shieldexConfig = shieldexConfig;
        }
        if (eventSeverityConfig !== undefined) {
            this.eventSeverityConfig = eventSeverityConfig;
        }
        if (preventiveActions !== undefined) {
            this.preventiveActions = preventiveActions;
        }
        if (deviceConfig !== undefined) {
            this.deviceConfig = deviceConfig;
        }
    }
}

// TimeSeriesOfDeviceReport model represents a time series of DeviceReport
class TimeSeriesOfDeviceReport {
    constructor(name, range, values) {
        if (name !== undefined) {
            this.name = name;
        }
        if (range !== undefined) {
            this.range = range;
        }
        if (values !== undefined) {
            this.values = values;
        }
    }
}

// UsageRecord represents network statistics
// The unique Id of usage record is based on the template: [window_start_time]-[stream_id]-[device_id]
// The createdOn field represents the first communication time of the device within this time window
// The updatedOn field represents the last communication time of the device within this time window
class UsageRecord extends BaseEntity {
}

// User represents a human / system operator that has access to the system, and can perform operations
// User authentication is done by an external identity provider
class User extends BaseEntity {
}

// UserMembership model include user data with a specific account membership
class UserMembership extends BaseEntity {
}

// UserMemberships model include user data and all its accounts memberships
class UserMemberships extends BaseEntity {
}

// Account status code
var AccountStatusCode;
(function (AccountStatusCode) {
    // Undefined [0] 
    AccountStatusCode[AccountStatusCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Active account [1] 
    AccountStatusCode[AccountStatusCode["ACTIVE"] = 1] = "ACTIVE";
    // Suspended (non-active) account [2] 
    AccountStatusCode[AccountStatusCode["SUSPENDED"] = 2] = "SUSPENDED";
    // Deleted account [3] 
    AccountStatusCode[AccountStatusCode["DELETED"] = 3] = "DELETED";
})(AccountStatusCode || (AccountStatusCode = {}));
// Return list of AccountStatusCode values and their display names
function GetAccountStatusCodes() {
    let result = new Map();
    result.set(AccountStatusCode.UNDEFINED, 'Undefined');
    result.set(AccountStatusCode.ACTIVE, 'Active');
    result.set(AccountStatusCode.SUSPENDED, 'Suspended');
    result.set(AccountStatusCode.DELETED, 'Deleted');
    return result;
}

// Account type code
var AccountTypeCode;
(function (AccountTypeCode) {
    // Undefined [0] 
    AccountTypeCode[AccountTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Demo account for internal use [1] 
    AccountTypeCode[AccountTypeCode["DEMO"] = 1] = "DEMO";
    // Trial account for pilots [2] 
    AccountTypeCode[AccountTypeCode["TRIAL"] = 2] = "TRIAL";
    // Active account for partner [3] 
    AccountTypeCode[AccountTypeCode["PARTNER"] = 3] = "PARTNER";
    // Active account for paying customers [4] 
    AccountTypeCode[AccountTypeCode["CUSTOMER"] = 4] = "CUSTOMER";
})(AccountTypeCode || (AccountTypeCode = {}));
// Return list of AccountTypeCode values and their display names
function GetAccountTypeCodes() {
    let result = new Map();
    result.set(AccountTypeCode.UNDEFINED, 'Undefined');
    result.set(AccountTypeCode.DEMO, 'Demo');
    result.set(AccountTypeCode.TRIAL, 'Trial');
    result.set(AccountTypeCode.PARTNER, 'Partner');
    result.set(AccountTypeCode.CUSTOMER, 'Customer');
    return result;
}

// DataSourceCode represents the sources (indices) of data to apply rules or insights
var DataSourceCode;
(function (DataSourceCode) {
    // Undefined [0] 
    DataSourceCode[DataSourceCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Data source based on Events [1] 
    DataSourceCode[DataSourceCode["EVENT"] = 1] = "EVENT";
    // Data source based on usage records [2] 
    DataSourceCode[DataSourceCode["USAGE"] = 2] = "USAGE";
    // Data source based on Session records [3] 
    DataSourceCode[DataSourceCode["SESSION"] = 3] = "SESSION";
})(DataSourceCode || (DataSourceCode = {}));
// Return list of DataSourceCode values and their display names
function GetDataSourceCodes() {
    let result = new Map();
    result.set(DataSourceCode.UNDEFINED, 'Undefined');
    result.set(DataSourceCode.EVENT, 'Event');
    result.set(DataSourceCode.USAGE, 'Usage');
    result.set(DataSourceCode.SESSION, 'Session');
    return result;
}

// Device action code
var DeviceActionCode;
(function (DeviceActionCode) {
    // Undefined [0] 
    DeviceActionCode[DeviceActionCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Redirect all traffic to an alternative endpoint [1] 
    DeviceActionCode[DeviceActionCode["REDIRECT"] = 1] = "REDIRECT";
    // Suspend device (make it inactive) [2] 
    DeviceActionCode[DeviceActionCode["SUSPEND"] = 2] = "SUSPEND";
    // Throttle traffic from/to the device [3] 
    DeviceActionCode[DeviceActionCode["THROTTLE"] = 3] = "THROTTLE";
    // Block specific external IP [4] 
    DeviceActionCode[DeviceActionCode["BLOCK_IP"] = 4] = "BLOCK_IP";
    // Unsuspend device [5] 
    DeviceActionCode[DeviceActionCode["UNSUSPEND"] = 5] = "UNSUSPEND";
})(DeviceActionCode || (DeviceActionCode = {}));
// Return list of DeviceActionCode values and their display names
function GetDeviceActionCodes() {
    let result = new Map();
    result.set(DeviceActionCode.UNDEFINED, 'Undefined');
    result.set(DeviceActionCode.REDIRECT, 'Redirect');
    result.set(DeviceActionCode.SUSPEND, 'Suspend');
    result.set(DeviceActionCode.THROTTLE, 'Throttle');
    result.set(DeviceActionCode.BLOCK_IP, 'Block Ip');
    result.set(DeviceActionCode.UNSUSPEND, 'Unsuspend');
    return result;
}

// Device creation policy code
var DeviceCreationCode;
(function (DeviceCreationCode) {
    // Undefined [0] 
    DeviceCreationCode[DeviceCreationCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Do not create device [1] 
    DeviceCreationCode[DeviceCreationCode["NONE"] = 1] = "NONE";
    // Create Device based on static IP [2] 
    DeviceCreationCode[DeviceCreationCode["IP"] = 2] = "IP";
    // Create Device based on Subscriber Id - IMSI [3] 
    DeviceCreationCode[DeviceCreationCode["SID"] = 3] = "SID";
    // Create Device based on Equipment Id - IMEI [4] 
    DeviceCreationCode[DeviceCreationCode["EID"] = 4] = "EID";
})(DeviceCreationCode || (DeviceCreationCode = {}));
// Return list of DeviceCreationCode values and their display names
function GetDeviceCreationCodes() {
    let result = new Map();
    result.set(DeviceCreationCode.UNDEFINED, 'Undefined');
    result.set(DeviceCreationCode.NONE, 'None');
    result.set(DeviceCreationCode.IP, 'Ip');
    result.set(DeviceCreationCode.SID, 'Sid');
    result.set(DeviceCreationCode.EID, 'Eid');
    return result;
}

// Set the device unique identity policy
var DeviceIdentityCode;
(function (DeviceIdentityCode) {
    // Undefined [0] 
    DeviceIdentityCode[DeviceIdentityCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Device Identity is provided by the system [1] 
    DeviceIdentityCode[DeviceIdentityCode["AUTO"] = 1] = "AUTO";
    // Device Identity is based on static IP: ip@stream_id [2] 
    DeviceIdentityCode[DeviceIdentityCode["IP"] = 2] = "IP";
    // Device Identity is based on Subscriber Id: imsi@stream_id [3] 
    DeviceIdentityCode[DeviceIdentityCode["IMSI"] = 3] = "IMSI";
    // Device Identity is based on SIM ICCID: iccid@stream_id [4] 
    DeviceIdentityCode[DeviceIdentityCode["ICCID"] = 4] = "ICCID";
    // Device Identity is based on MSISDN: msisdn@stream_id [5] 
    DeviceIdentityCode[DeviceIdentityCode["MSISDN"] = 5] = "MSISDN";
    // Device Identity is based on Equipment Id: imei@stream_id [6] 
    DeviceIdentityCode[DeviceIdentityCode["IMEI"] = 6] = "IMEI";
    // Device Identity is based on MAC address: mac@stream_id [7] 
    DeviceIdentityCode[DeviceIdentityCode["MAC"] = 7] = "MAC";
})(DeviceIdentityCode || (DeviceIdentityCode = {}));
// Return list of DeviceIdentityCode values and their display names
function GetDeviceIdentityCodes() {
    let result = new Map();
    result.set(DeviceIdentityCode.UNDEFINED, 'Undefined');
    result.set(DeviceIdentityCode.AUTO, 'Auto');
    result.set(DeviceIdentityCode.IP, 'Ip');
    result.set(DeviceIdentityCode.IMSI, 'Imsi');
    result.set(DeviceIdentityCode.ICCID, 'Iccid');
    result.set(DeviceIdentityCode.MSISDN, 'Msisdn');
    result.set(DeviceIdentityCode.IMEI, 'Imei');
    result.set(DeviceIdentityCode.MAC, 'Mac');
    return result;
}

// Device status code
var DeviceStatusCode;
(function (DeviceStatusCode) {
    // Undefined [0] 
    DeviceStatusCode[DeviceStatusCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Device is registered and pending verification [1] 
    DeviceStatusCode[DeviceStatusCode["PENDING"] = 1] = "PENDING";
    // Active device in the system [2] 
    DeviceStatusCode[DeviceStatusCode["ACTIVE"] = 2] = "ACTIVE";
    // Inactive device [3] 
    DeviceStatusCode[DeviceStatusCode["INACTIVE"] = 3] = "INACTIVE";
    // Blocked device [4] 
    DeviceStatusCode[DeviceStatusCode["BLOCKED"] = 4] = "BLOCKED";
})(DeviceStatusCode || (DeviceStatusCode = {}));
// Return list of DeviceStatusCode values and their display names
function GetDeviceStatusCodes() {
    let result = new Map();
    result.set(DeviceStatusCode.UNDEFINED, 'Undefined');
    result.set(DeviceStatusCode.PENDING, 'Pending');
    result.set(DeviceStatusCode.ACTIVE, 'Active');
    result.set(DeviceStatusCode.INACTIVE, 'Inactive');
    result.set(DeviceStatusCode.BLOCKED, 'Blocked');
    return result;
}

// Device type code
var DeviceTypeCode;
(function (DeviceTypeCode) {
    // Undefined [0] 
    DeviceTypeCode[DeviceTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Other (Unknown Device) [1] 
    DeviceTypeCode[DeviceTypeCode["OTHER"] = 1] = "OTHER";
    // Industrial Controller [2] 
    DeviceTypeCode[DeviceTypeCode["CONTROLLER"] = 2] = "CONTROLLER";
    // General smart meter [3] 
    DeviceTypeCode[DeviceTypeCode["METER"] = 3] = "METER";
    // General sensor [4] 
    DeviceTypeCode[DeviceTypeCode["SENSOR"] = 4] = "SENSOR";
    // General camera [5] 
    DeviceTypeCode[DeviceTypeCode["CAMERA"] = 5] = "CAMERA";
    // Point of sale [6] 
    DeviceTypeCode[DeviceTypeCode["POS"] = 6] = "POS";
    // Pump [7] 
    DeviceTypeCode[DeviceTypeCode["PUMP"] = 7] = "PUMP";
    // EV charging station [8] 
    DeviceTypeCode[DeviceTypeCode["CHARGING_STATION"] = 8] = "CHARGING_STATION";
    // Smart lightning [9] 
    DeviceTypeCode[DeviceTypeCode["LIGHTNING"] = 9] = "LIGHTNING";
    // Temperature sensor [10] 
    DeviceTypeCode[DeviceTypeCode["TEMPERATURE_SENSOR"] = 10] = "TEMPERATURE_SENSOR";
    // Air Quality sensor [11] 
    DeviceTypeCode[DeviceTypeCode["AIR_QUALITY_SENSOR"] = 11] = "AIR_QUALITY_SENSOR";
    // Valve [12] 
    DeviceTypeCode[DeviceTypeCode["VALVE"] = 12] = "VALVE";
    // Gateway [13] 
    DeviceTypeCode[DeviceTypeCode["GATEWAY"] = 13] = "GATEWAY";
    // ATM [14] 
    DeviceTypeCode[DeviceTypeCode["ATM"] = 14] = "ATM";
})(DeviceTypeCode || (DeviceTypeCode = {}));
// Return list of DeviceTypeCode values and their display names
function GetDeviceTypeCodes() {
    let result = new Map();
    result.set(DeviceTypeCode.UNDEFINED, 'Undefined');
    result.set(DeviceTypeCode.OTHER, 'Other');
    result.set(DeviceTypeCode.CONTROLLER, 'Controller');
    result.set(DeviceTypeCode.METER, 'Meter');
    result.set(DeviceTypeCode.SENSOR, 'Sensor');
    result.set(DeviceTypeCode.CAMERA, 'Camera');
    result.set(DeviceTypeCode.POS, 'Pos');
    result.set(DeviceTypeCode.PUMP, 'Pump');
    result.set(DeviceTypeCode.CHARGING_STATION, 'Charging Station');
    result.set(DeviceTypeCode.LIGHTNING, 'Lightning');
    result.set(DeviceTypeCode.TEMPERATURE_SENSOR, 'Temperature Sensor');
    result.set(DeviceTypeCode.AIR_QUALITY_SENSOR, 'Air Quality Sensor');
    result.set(DeviceTypeCode.VALVE, 'Valve');
    result.set(DeviceTypeCode.GATEWAY, 'Gateway');
    result.set(DeviceTypeCode.ATM, 'Atm');
    return result;
}

// Direction context code
var DirectionContextCode;
(function (DirectionContextCode) {
    // Undefined [0] 
    DirectionContextCode[DirectionContextCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Event list context [1] 
    DirectionContextCode[DirectionContextCode["EVENT_LIST"] = 1] = "EVENT_LIST";
    // Device list context  [2] 
    DirectionContextCode[DirectionContextCode["DEVICE_LIST"] = 2] = "DEVICE_LIST";
    // Event details context [3] 
    DirectionContextCode[DirectionContextCode["EVENT_DETAILS"] = 3] = "EVENT_DETAILS";
    // Device details context [4] 
    DirectionContextCode[DirectionContextCode["DEVICE_DETAILS"] = 4] = "DEVICE_DETAILS";
})(DirectionContextCode || (DirectionContextCode = {}));
// Return list of DirectionContextCode values and their display names
function GetDirectionContextCodes() {
    let result = new Map();
    result.set(DirectionContextCode.UNDEFINED, 'Undefined');
    result.set(DirectionContextCode.EVENT_LIST, 'Event List');
    result.set(DirectionContextCode.DEVICE_LIST, 'Device List');
    result.set(DirectionContextCode.EVENT_DETAILS, 'Event Details');
    result.set(DirectionContextCode.DEVICE_DETAILS, 'Device Details');
    return result;
}

// Event category code
var EventCategoryCode;
(function (EventCategoryCode) {
    // Undefined [0] 
    EventCategoryCode[EventCategoryCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Cyber-Security event [1] 
    EventCategoryCode[EventCategoryCode["SECURITY"] = 1] = "SECURITY";
    // Operational event [2] 
    EventCategoryCode[EventCategoryCode["OPERATIONS"] = 2] = "OPERATIONS";
})(EventCategoryCode || (EventCategoryCode = {}));
// Return list of EventCategoryCode values and their display names
function GetEventCategoryCodes() {
    let result = new Map();
    result.set(EventCategoryCode.UNDEFINED, 'Undefined');
    result.set(EventCategoryCode.SECURITY, 'Security');
    result.set(EventCategoryCode.OPERATIONS, 'Operations');
    return result;
}

// Event workflow status code
var EventStatusCode;
(function (EventStatusCode) {
    // Undefined [0] 
    EventStatusCode[EventStatusCode["UNDEFINED"] = 0] = "UNDEFINED";
    // New event [1] 
    EventStatusCode[EventStatusCode["NEW"] = 1] = "NEW";
    // Open event, handled by the operator [2] 
    EventStatusCode[EventStatusCode["OPEN"] = 2] = "OPEN";
    // Closed event (tagged as True event) [3] 
    EventStatusCode[EventStatusCode["CLOSED_TRUE"] = 3] = "CLOSED_TRUE";
    // Closed event (tagged as False event) [4] 
    EventStatusCode[EventStatusCode["CLOSED_FALSE"] = 4] = "CLOSED_FALSE";
})(EventStatusCode || (EventStatusCode = {}));
// Return list of EventStatusCode values and their display names
function GetEventStatusCodes() {
    let result = new Map();
    result.set(EventStatusCode.UNDEFINED, 'Undefined');
    result.set(EventStatusCode.NEW, 'New');
    result.set(EventStatusCode.OPEN, 'Open');
    result.set(EventStatusCode.CLOSED_TRUE, 'Closed True');
    result.set(EventStatusCode.CLOSED_FALSE, 'Closed False');
    return result;
}

// Event type code
var EventTypeCode;
(function (EventTypeCode) {
    // Undefined [0] 
    EventTypeCode[EventTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Other (Unknown Event) [1] 
    EventTypeCode[EventTypeCode["OTHER"] = 1] = "OTHER";
    // Device Takeover [2] 
    EventTypeCode[EventTypeCode["DEVICE_TAKEOVER"] = 2] = "DEVICE_TAKEOVER";
    // DDoS [3] 
    EventTypeCode[EventTypeCode["DDOS"] = 3] = "DDOS";
    // Unknown Malware [4] 
    EventTypeCode[EventTypeCode["UNKNOWN_MALWARE"] = 4] = "UNKNOWN_MALWARE";
    // Man-in-the-Middle [5] 
    EventTypeCode[EventTypeCode["MAN_IN_THE_MIDDLE"] = 5] = "MAN_IN_THE_MIDDLE";
    // Data Theft [6] 
    EventTypeCode[EventTypeCode["DATA_THEFT"] = 6] = "DATA_THEFT";
    // Port Scanning [7] 
    EventTypeCode[EventTypeCode["PORT_SCANNING"] = 7] = "PORT_SCANNING";
    // Abnormal Download [8] 
    EventTypeCode[EventTypeCode["ABNORMAL_DOWNLOAD"] = 8] = "ABNORMAL_DOWNLOAD";
    // Abnormal Incoming Connection [9] 
    EventTypeCode[EventTypeCode["ABNORMAL_INCOMING_CONNECTION"] = 9] = "ABNORMAL_INCOMING_CONNECTION";
    // Unsuccessful Connection Attempts [10] 
    EventTypeCode[EventTypeCode["UNSUCCESSFUL_CONNECTION_ATTEMPTS"] = 10] = "UNSUCCESSFUL_CONNECTION_ATTEMPTS";
    // High Volume Transmit [11] 
    EventTypeCode[EventTypeCode["HIGH_VOLUME_TRANSIT"] = 11] = "HIGH_VOLUME_TRANSIT";
    // Device Level Attack [12] 
    EventTypeCode[EventTypeCode["DEVICE_LEVEL_ATTACK"] = 12] = "DEVICE_LEVEL_ATTACK";
    // Replay Attack [13] 
    EventTypeCode[EventTypeCode["REPLAY_ATTACK"] = 13] = "REPLAY_ATTACK";
    // Attempted Device Takeover [14] 
    EventTypeCode[EventTypeCode["DEVICE_TAKEOVER_ATTEMPT"] = 14] = "DEVICE_TAKEOVER_ATTEMPT";
    // Unknown Operation [15] 
    EventTypeCode[EventTypeCode["UNKNOWN_OPERATION"] = 15] = "UNKNOWN_OPERATION";
    // Crypto Mining [16] 
    EventTypeCode[EventTypeCode["CRYPTO_MINING"] = 16] = "CRYPTO_MINING";
    // Suspicious IP [17] 
    EventTypeCode[EventTypeCode["SUSPICIOUS_IP"] = 17] = "SUSPICIOUS_IP";
    // Abnormal number of outbound ports [18] 
    EventTypeCode[EventTypeCode["ABNORMAL_OUTBOUND_PORTS"] = 18] = "ABNORMAL_OUTBOUND_PORTS";
    // Abnormal number of outbound endpoints (destinations) [19] 
    EventTypeCode[EventTypeCode["ABNORMAL_OUTBOUND_ENDPOINTS"] = 19] = "ABNORMAL_OUTBOUND_ENDPOINTS";
    // SIM switched [20] 
    EventTypeCode[EventTypeCode["SIM_SWITCH"] = 20] = "SIM_SWITCH";
    // Sim misusage [21] 
    EventTypeCode[EventTypeCode["SIM_MISUSAGE"] = 21] = "SIM_MISUSAGE";
    // Device disconnection [22] 
    EventTypeCode[EventTypeCode["DEVICE_DISCONNECTION"] = 22] = "DEVICE_DISCONNECTION";
    // Anomaly detected [23] 
    EventTypeCode[EventTypeCode["ANOMALY_DETECTED"] = 23] = "ANOMALY_DETECTED";
})(EventTypeCode || (EventTypeCode = {}));
// Return list of EventTypeCode values and their display names
function GetEventTypeCodes() {
    let result = new Map();
    result.set(EventTypeCode.UNDEFINED, 'Undefined');
    result.set(EventTypeCode.OTHER, 'Other');
    result.set(EventTypeCode.DEVICE_TAKEOVER, 'Device Takeover');
    result.set(EventTypeCode.DDOS, 'Ddos');
    result.set(EventTypeCode.UNKNOWN_MALWARE, 'Unknown Malware');
    result.set(EventTypeCode.MAN_IN_THE_MIDDLE, 'Man In The Middle');
    result.set(EventTypeCode.DATA_THEFT, 'Data Theft');
    result.set(EventTypeCode.PORT_SCANNING, 'Port Scanning');
    result.set(EventTypeCode.ABNORMAL_DOWNLOAD, 'Abnormal Download');
    result.set(EventTypeCode.ABNORMAL_INCOMING_CONNECTION, 'Abnormal Incoming Connection');
    result.set(EventTypeCode.UNSUCCESSFUL_CONNECTION_ATTEMPTS, 'Unsuccessful Connection Attempts');
    result.set(EventTypeCode.HIGH_VOLUME_TRANSIT, 'High Volume Transit');
    result.set(EventTypeCode.DEVICE_LEVEL_ATTACK, 'Device Level Attack');
    result.set(EventTypeCode.REPLAY_ATTACK, 'Replay Attack');
    result.set(EventTypeCode.DEVICE_TAKEOVER_ATTEMPT, 'Device Takeover Attempt');
    result.set(EventTypeCode.UNKNOWN_OPERATION, 'Unknown Operation');
    result.set(EventTypeCode.CRYPTO_MINING, 'Crypto Mining');
    result.set(EventTypeCode.SUSPICIOUS_IP, 'Suspicious Ip');
    result.set(EventTypeCode.ABNORMAL_OUTBOUND_PORTS, 'Abnormal Outbound Ports');
    result.set(EventTypeCode.ABNORMAL_OUTBOUND_ENDPOINTS, 'Abnormal Outbound Endpoints');
    result.set(EventTypeCode.SIM_SWITCH, 'Sim Switch');
    result.set(EventTypeCode.SIM_MISUSAGE, 'Sim Misusage');
    result.set(EventTypeCode.DEVICE_DISCONNECTION, 'Device Disconnection');
    result.set(EventTypeCode.ANOMALY_DETECTED, 'Anomaly Detected');
    return result;
}

// Feature code
var FeatureCode;
(function (FeatureCode) {
    // Undefined [0] 
    FeatureCode[FeatureCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Export events to CSV file [1] 
    FeatureCode[FeatureCode["EVENTS_EXPORT"] = 1] = "EVENTS_EXPORT";
    // Download pcap files to analyze the event[2] 
    FeatureCode[FeatureCode["EVENT_SOURCE_FILES"] = 2] = "EVENT_SOURCE_FILES";
    // Apply preventive action on the event [3] 
    FeatureCode[FeatureCode["EVENT_ACTION"] = 3] = "EVENT_ACTION";
    // Export devices to CSV file [4] 
    FeatureCode[FeatureCode["DEVICES_EXPORT"] = 4] = "DEVICES_EXPORT";
    // Device network map [5] 
    FeatureCode[FeatureCode["DEVICE_NETWORK_MAP"] = 5] = "DEVICE_NETWORK_MAP";
    // Apply preventive action on the device [6] 
    FeatureCode[FeatureCode["DEVICE_ACTIONS"] = 6] = "DEVICE_ACTIONS";
    // Apply preventive action on the device [7] 
    FeatureCode[FeatureCode["NETWORK_MAP"] = 7] = "NETWORK_MAP";
    // Create and download compliance report [8] 
    FeatureCode[FeatureCode["COMPLIANCE_REPORTS"] = 8] = "COMPLIANCE_REPORTS";
    // Configure user-defined rules [9] 
    FeatureCode[FeatureCode["CUSTOM_RULES"] = 9] = "CUSTOM_RULES";
    // Enable push integrations [10] 
    FeatureCode[FeatureCode["INTEGRATIONS"] = 10] = "INTEGRATIONS";
    // General upgrade button [11] 
    FeatureCode[FeatureCode["GENERAL_UPGRADE"] = 11] = "GENERAL_UPGRADE";
})(FeatureCode || (FeatureCode = {}));
// Return list of FeatureCode values and their display names
function GetFeatureCodes() {
    let result = new Map();
    result.set(FeatureCode.UNDEFINED, 'Undefined');
    result.set(FeatureCode.EVENTS_EXPORT, 'Events Export');
    result.set(FeatureCode.EVENT_SOURCE_FILES, 'Event Source Files');
    result.set(FeatureCode.EVENT_ACTION, 'Event Action');
    result.set(FeatureCode.DEVICES_EXPORT, 'Devices Export');
    result.set(FeatureCode.DEVICE_NETWORK_MAP, 'Device Network Map');
    result.set(FeatureCode.DEVICE_ACTIONS, 'Device Actions');
    result.set(FeatureCode.NETWORK_MAP, 'Network Map');
    result.set(FeatureCode.COMPLIANCE_REPORTS, 'Compliance Reports');
    result.set(FeatureCode.CUSTOM_RULES, 'Custom Rules');
    result.set(FeatureCode.INTEGRATIONS, 'Integrations');
    result.set(FeatureCode.GENERAL_UPGRADE, 'General Upgrade');
    return result;
}

// Home Page View code
var HomePageViewCode;
(function (HomePageViewCode) {
    // Undefined [0] 
    HomePageViewCode[HomePageViewCode["UNDEFINED"] = 0] = "UNDEFINED";
    // System view [1] 
    HomePageViewCode[HomePageViewCode["SYSTEM"] = 1] = "SYSTEM";
    // Devices View [2] 
    HomePageViewCode[HomePageViewCode["DEVICES"] = 2] = "DEVICES";
    // Malicious IP view [3] 
    HomePageViewCode[HomePageViewCode["MALICIOUS"] = 3] = "MALICIOUS";
})(HomePageViewCode || (HomePageViewCode = {}));
// Return list of HomePageViewCode values and their display names
function GetHomePageViewCodes() {
    let result = new Map();
    result.set(HomePageViewCode.UNDEFINED, 'Undefined');
    result.set(HomePageViewCode.SYSTEM, 'System');
    result.set(HomePageViewCode.DEVICES, 'Devices');
    result.set(HomePageViewCode.MALICIOUS, 'Malicious');
    return result;
}

// HTTP method code
var HttpMethodCode;
(function (HttpMethodCode) {
    // Undefined [0] 
    HttpMethodCode[HttpMethodCode["UNDEFINED"] = 0] = "UNDEFINED";
    // HTTP GET (read) [1] 
    HttpMethodCode[HttpMethodCode["GET"] = 1] = "GET";
    // HTTP POST (create) [2] 
    HttpMethodCode[HttpMethodCode["POST"] = 2] = "POST";
    // HTTP PUT (update/replace) [3] 
    HttpMethodCode[HttpMethodCode["PUT"] = 3] = "PUT";
    // HTTP PATCH (update/modify) [4] 
    HttpMethodCode[HttpMethodCode["PATCH"] = 4] = "PATCH";
    // HTTP DELETE (delete) [5] 
    HttpMethodCode[HttpMethodCode["DELETE"] = 5] = "DELETE";
})(HttpMethodCode || (HttpMethodCode = {}));
// Return list of HttpMethodCode values and their display names
function GetHttpMethodCodes() {
    let result = new Map();
    result.set(HttpMethodCode.UNDEFINED, 'Undefined');
    result.set(HttpMethodCode.GET, 'Get');
    result.set(HttpMethodCode.POST, 'Post');
    result.set(HttpMethodCode.PUT, 'Put');
    result.set(HttpMethodCode.PATCH, 'Patch');
    result.set(HttpMethodCode.DELETE, 'Delete');
    return result;
}

// Insight status code
var InsightStatusCode;
(function (InsightStatusCode) {
    // Undefined [0] 
    InsightStatusCode[InsightStatusCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Inactive (muted) insight [1] 
    InsightStatusCode[InsightStatusCode["INACTIVE"] = 1] = "INACTIVE";
    // Pending insight (not visible yet - for testing only) [2] 
    InsightStatusCode[InsightStatusCode["PENDING"] = 2] = "PENDING";
    // Active insight [3] 
    InsightStatusCode[InsightStatusCode["ACTIVE"] = 3] = "ACTIVE";
})(InsightStatusCode || (InsightStatusCode = {}));
// Return list of InsightStatusCode values and their display names
function GetInsightStatusCodes() {
    let result = new Map();
    result.set(InsightStatusCode.UNDEFINED, 'Undefined');
    result.set(InsightStatusCode.INACTIVE, 'Inactive');
    result.set(InsightStatusCode.PENDING, 'Pending');
    result.set(InsightStatusCode.ACTIVE, 'Active');
    return result;
}

// Insight type code
var InsightTypeCode;
(function (InsightTypeCode) {
    // Undefined [0] 
    InsightTypeCode[InsightTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Event Group insight [1] 
    InsightTypeCode[InsightTypeCode["EVENTS"] = 1] = "EVENTS";
    // Statistical insight [2] 
    InsightTypeCode[InsightTypeCode["STATISTICS"] = 2] = "STATISTICS";
})(InsightTypeCode || (InsightTypeCode = {}));
// Return list of InsightTypeCode values and their display names
function GetInsightTypeCodes() {
    let result = new Map();
    result.set(InsightTypeCode.UNDEFINED, 'Undefined');
    result.set(InsightTypeCode.EVENTS, 'Events');
    result.set(InsightTypeCode.STATISTICS, 'Statistics');
    return result;
}

// Integration trigger code
var IntegrationTriggerCode;
(function (IntegrationTriggerCode) {
    // Undefined [0] 
    IntegrationTriggerCode[IntegrationTriggerCode["UNDEFINED"] = 0] = "UNDEFINED";
    // EVENT based integration [1] 
    IntegrationTriggerCode[IntegrationTriggerCode["EVENT"] = 1] = "EVENT";
    // ACTION based integration [2] 
    IntegrationTriggerCode[IntegrationTriggerCode["ACTION"] = 2] = "ACTION";
})(IntegrationTriggerCode || (IntegrationTriggerCode = {}));
// Return list of IntegrationTriggerCode values and their display names
function GetIntegrationTriggerCodes() {
    let result = new Map();
    result.set(IntegrationTriggerCode.UNDEFINED, 'Undefined');
    result.set(IntegrationTriggerCode.EVENT, 'Event');
    result.set(IntegrationTriggerCode.ACTION, 'Action');
    return result;
}

// Integration type code
var IntegrationTypeCode;
(function (IntegrationTypeCode) {
    // Undefined [0] 
    IntegrationTypeCode[IntegrationTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
    // General HTTP(S) based integration [1] 
    IntegrationTypeCode[IntegrationTypeCode["HTTP"] = 1] = "HTTP";
    // General SMTP based integration [2] 
    IntegrationTypeCode[IntegrationTypeCode["SMTP"] = 2] = "SMTP";
    // Internal email service integration [3] 
    IntegrationTypeCode[IntegrationTypeCode["EMAIL"] = 3] = "EMAIL";
    // Internal SMS service integration  [4] 
    IntegrationTypeCode[IntegrationTypeCode["SMS"] = 4] = "SMS";
})(IntegrationTypeCode || (IntegrationTypeCode = {}));
// Return list of IntegrationTypeCode values and their display names
function GetIntegrationTypeCodes() {
    let result = new Map();
    result.set(IntegrationTypeCode.UNDEFINED, 'Undefined');
    result.set(IntegrationTypeCode.HTTP, 'Http');
    result.set(IntegrationTypeCode.SMTP, 'Smtp');
    result.set(IntegrationTypeCode.EMAIL, 'Email');
    result.set(IntegrationTypeCode.SMS, 'Sms');
    return result;
}

// Member role code (represent role of user in the account)
var MemberRoleCode;
(function (MemberRoleCode) {
    // Undefined [0] 
    MemberRoleCode[MemberRoleCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Account administrator can perform all operations [1] 
    MemberRoleCode[MemberRoleCode["ADMIN"] = 1] = "ADMIN";
    // Supervisor can perform operations on events and generate reports [2] 
    MemberRoleCode[MemberRoleCode["SUPERVISOR"] = 2] = "SUPERVISOR";
    // Account operator can perform operations on events only [3] 
    MemberRoleCode[MemberRoleCode["OPERATOR"] = 3] = "OPERATOR";
    // Viewer has read-only permissions [4] 
    MemberRoleCode[MemberRoleCode["VIEWER"] = 4] = "VIEWER";
})(MemberRoleCode || (MemberRoleCode = {}));
// Return list of MemberRoleCode values and their display names
function GetMemberRoleCodes() {
    let result = new Map();
    result.set(MemberRoleCode.UNDEFINED, 'Undefined');
    result.set(MemberRoleCode.ADMIN, 'Admin');
    result.set(MemberRoleCode.SUPERVISOR, 'Supervisor');
    result.set(MemberRoleCode.OPERATOR, 'Operator');
    result.set(MemberRoleCode.VIEWER, 'Viewer');
    return result;
}

// NetworkMapTypeCode represents the type of network maps
var NetworkMapTypeCode;
(function (NetworkMapTypeCode) {
    // Undefined [0] 
    NetworkMapTypeCode[NetworkMapTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Top devices network map [1] 
    NetworkMapTypeCode[NetworkMapTypeCode["TOP_DEVICES"] = 1] = "TOP_DEVICES";
    // Top malicious IP network map [2] 
    NetworkMapTypeCode[NetworkMapTypeCode["TOP_MALICIOUS_IPS"] = 2] = "TOP_MALICIOUS_IPS";
    // Network devices network map [3] 
    NetworkMapTypeCode[NetworkMapTypeCode["NETWORK"] = 3] = "NETWORK";
})(NetworkMapTypeCode || (NetworkMapTypeCode = {}));
// Return list of NetworkMapTypeCode values and their display names
function GetNetworkMapTypeCodes() {
    let result = new Map();
    result.set(NetworkMapTypeCode.UNDEFINED, 'Undefined');
    result.set(NetworkMapTypeCode.TOP_DEVICES, 'Top Devices');
    result.set(NetworkMapTypeCode.TOP_MALICIOUS_IPS, 'Top Malicious Ips');
    result.set(NetworkMapTypeCode.NETWORK, 'Network');
    return result;
}

// OperatorCode represents the rule condition operator such as equal, not equal, less than ...
var OperatorCode;
(function (OperatorCode) {
    // Undefined [0] 
    OperatorCode[OperatorCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Equal (=) [1] 
    OperatorCode[OperatorCode["EQ"] = 1] = "EQ";
    // Not Equal (!=) [2] 
    OperatorCode[OperatorCode["NEQ"] = 2] = "NEQ";
    // Greater than (>) [3] 
    OperatorCode[OperatorCode["GT"] = 3] = "GT";
    // Greater than or equal (>=) [4] 
    OperatorCode[OperatorCode["GTE"] = 4] = "GTE";
    // Less than (<) [5] 
    OperatorCode[OperatorCode["LT"] = 5] = "LT";
    // Less than or equal (<=) 
    OperatorCode[OperatorCode["LTE"] = 6] = "LTE";
    // Value included in the list (*) [7] 
    OperatorCode[OperatorCode["IN"] = 7] = "IN";
    // Value not included in the list (-) [8] 
    OperatorCode[OperatorCode["NOTIN"] = 8] = "NOTIN";
    // Value is in the range of 2 elements [9] 
    OperatorCode[OperatorCode["RANGE"] = 9] = "RANGE";
    // Partial similarity with wildcards (~) [10] 
    OperatorCode[OperatorCode["LIKE"] = 10] = "LIKE";
    // Array field contains one of the values (@) [11] 
    OperatorCode[OperatorCode["CONTAINS"] = 11] = "CONTAINS";
})(OperatorCode || (OperatorCode = {}));
// Return list of OperatorCode values and their display names
function GetOperatorCodes() {
    let result = new Map();
    result.set(OperatorCode.UNDEFINED, 'Undefined');
    result.set(OperatorCode.EQ, 'Eq');
    result.set(OperatorCode.NEQ, 'Neq');
    result.set(OperatorCode.GT, 'Gt');
    result.set(OperatorCode.GTE, 'Gte');
    result.set(OperatorCode.LT, 'Lt');
    result.set(OperatorCode.LTE, 'Lte');
    result.set(OperatorCode.IN, 'In');
    result.set(OperatorCode.NOTIN, 'Notin');
    result.set(OperatorCode.RANGE, 'Range');
    result.set(OperatorCode.LIKE, 'Like');
    result.set(OperatorCode.CONTAINS, 'Contains');
    return result;
}

// Permission flag (it can combine several values)
var PermissionCode;
(function (PermissionCode) {
    // Undefined [0] 
    PermissionCode[PermissionCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Read permission [1] 
    PermissionCode[PermissionCode["READ"] = 1] = "READ";
    // Create permission [2] 
    PermissionCode[PermissionCode["CREATE"] = 2] = "CREATE";
    // Update permission [4] 
    PermissionCode[PermissionCode["UPDATE"] = 4] = "UPDATE";
    // Delete permission [8] 
    PermissionCode[PermissionCode["DELETE"] = 8] = "DELETE";
    // Action permission [16] 
    PermissionCode[PermissionCode["ACTION"] = 16] = "ACTION";
})(PermissionCode || (PermissionCode = {}));
// Return list of PermissionCode values and their display names
function GetPermissionCodes() {
    let result = new Map();
    result.set(PermissionCode.UNDEFINED, 'Undefined');
    result.set(PermissionCode.READ, 'Read');
    result.set(PermissionCode.CREATE, 'Create');
    result.set(PermissionCode.UPDATE, 'Update');
    result.set(PermissionCode.DELETE, 'Delete');
    result.set(PermissionCode.ACTION, 'Action');
    return result;
}

// Report source code
var ReportSourceCode;
(function (ReportSourceCode) {
    // Undefined [0] 
    ReportSourceCode[ReportSourceCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Ondemand report source - from API [1] 
    ReportSourceCode[ReportSourceCode["ONDEMAND"] = 1] = "ONDEMAND";
    // Periodic task report source [2] 
    ReportSourceCode[ReportSourceCode["PERIODIC"] = 2] = "PERIODIC";
})(ReportSourceCode || (ReportSourceCode = {}));
// Return list of ReportSourceCode values and their display names
function GetReportSourceCodes() {
    let result = new Map();
    result.set(ReportSourceCode.UNDEFINED, 'Undefined');
    result.set(ReportSourceCode.ONDEMAND, 'Ondemand');
    result.set(ReportSourceCode.PERIODIC, 'Periodic');
    return result;
}

// Report type code
var ReportTypeCode;
(function (ReportTypeCode) {
    // Undefined [0] 
    ReportTypeCode[ReportTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Compliance report [1] 
    ReportTypeCode[ReportTypeCode["COMPLIANCE"] = 1] = "COMPLIANCE";
    // Devices report [2] 
    ReportTypeCode[ReportTypeCode["DEVICES"] = 2] = "DEVICES";
    // Events report [3] 
    ReportTypeCode[ReportTypeCode["EVENTS"] = 3] = "EVENTS";
})(ReportTypeCode || (ReportTypeCode = {}));
// Return list of ReportTypeCode values and their display names
function GetReportTypeCodes() {
    let result = new Map();
    result.set(ReportTypeCode.UNDEFINED, 'Undefined');
    result.set(ReportTypeCode.COMPLIANCE, 'Compliance');
    result.set(ReportTypeCode.DEVICES, 'Devices');
    result.set(ReportTypeCode.EVENTS, 'Events');
    return result;
}

// Rule activity status code
var RuleActivityStatusCode;
(function (RuleActivityStatusCode) {
    // Active [0] 
    RuleActivityStatusCode[RuleActivityStatusCode["ACTIVE"] = 0] = "ACTIVE";
    // Inactive [1] 
    RuleActivityStatusCode[RuleActivityStatusCode["INACTIVE"] = 1] = "INACTIVE";
})(RuleActivityStatusCode || (RuleActivityStatusCode = {}));
// Return list of RuleActivityStatusCode values and their display names
function GetRuleActivityStatusCodes() {
    let result = new Map();
    result.set(RuleActivityStatusCode.ACTIVE, 'Active');
    result.set(RuleActivityStatusCode.INACTIVE, 'Inactive');
    return result;
}

// RuleTypeCode represents the sources (engines) of rules
var RuleTypeCode;
(function (RuleTypeCode) {
    // Undefined [0] 
    RuleTypeCode[RuleTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Suspicious IP based on IP reputation engine [1] 
    RuleTypeCode[RuleTypeCode["SUSPICIOUS_IP"] = 1] = "SUSPICIOUS_IP";
    // Static rule based on deterministic rule engine [2] 
    RuleTypeCode[RuleTypeCode["STATIC"] = 2] = "STATIC";
    // Rule based on anomaly detection and classification [3] 
    RuleTypeCode[RuleTypeCode["ANOMALY"] = 3] = "ANOMALY";
})(RuleTypeCode || (RuleTypeCode = {}));
// Return list of RuleTypeCode values and their display names
function GetRuleTypeCodes() {
    let result = new Map();
    result.set(RuleTypeCode.UNDEFINED, 'Undefined');
    result.set(RuleTypeCode.SUSPICIOUS_IP, 'Suspicious Ip');
    result.set(RuleTypeCode.STATIC, 'Static');
    result.set(RuleTypeCode.ANOMALY, 'Anomaly');
    return result;
}

// Severity type (level) code
var SeverityTypeCode;
(function (SeverityTypeCode) {
    // Undefined [0] 
    SeverityTypeCode[SeverityTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Low severity [1] 
    SeverityTypeCode[SeverityTypeCode["LOW"] = 1] = "LOW";
    // Medium severity [2] 
    SeverityTypeCode[SeverityTypeCode["MEDIUM"] = 2] = "MEDIUM";
    // High severity [3] 
    SeverityTypeCode[SeverityTypeCode["HIGH"] = 3] = "HIGH";
    // Critical severity [4] 
    SeverityTypeCode[SeverityTypeCode["CRITICAL"] = 4] = "CRITICAL";
})(SeverityTypeCode || (SeverityTypeCode = {}));
// Return list of SeverityTypeCode values and their display names
function GetSeverityTypeCodes() {
    let result = new Map();
    result.set(SeverityTypeCode.UNDEFINED, 'Undefined');
    result.set(SeverityTypeCode.LOW, 'Low');
    result.set(SeverityTypeCode.MEDIUM, 'Medium');
    result.set(SeverityTypeCode.HIGH, 'High');
    result.set(SeverityTypeCode.CRITICAL, 'Critical');
    return result;
}

// Account type code
var TrafficDirectionCode;
(function (TrafficDirectionCode) {
    // Undefined [0] 
    TrafficDirectionCode[TrafficDirectionCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Denotes inbound network traffic  [1] 
    TrafficDirectionCode[TrafficDirectionCode["INBOUND"] = 1] = "INBOUND";
    // Denotes outbound network traffic [2] 
    TrafficDirectionCode[TrafficDirectionCode["OUTBOUND"] = 2] = "OUTBOUND";
    // Denotes bidirectional network traffic [3] 
    TrafficDirectionCode[TrafficDirectionCode["INOUT"] = 3] = "INOUT";
})(TrafficDirectionCode || (TrafficDirectionCode = {}));
// Return list of TrafficDirectionCode values and their display names
function GetTrafficDirectionCodes() {
    let result = new Map();
    result.set(TrafficDirectionCode.UNDEFINED, 'Undefined');
    result.set(TrafficDirectionCode.INBOUND, 'Inbound');
    result.set(TrafficDirectionCode.OUTBOUND, 'Outbound');
    result.set(TrafficDirectionCode.INOUT, 'Inout');
    return result;
}

// User status code
var UserStatusCode;
(function (UserStatusCode) {
    // Undefined [0] 
    UserStatusCode[UserStatusCode["UNDEFINED"] = 0] = "UNDEFINED";
    // User is registered and pending verification [1] 
    UserStatusCode[UserStatusCode["PENDING"] = 1] = "PENDING";
    // Active user in the system [2] 
    UserStatusCode[UserStatusCode["ACTIVE"] = 2] = "ACTIVE";
    // Blocked user (only account system can unblock the user) [4] 
    UserStatusCode[UserStatusCode["BLOCKED"] = 3] = "BLOCKED";
    // Suspended user (about to be deleted) [8] 
    UserStatusCode[UserStatusCode["SUSPENDED"] = 4] = "SUSPENDED";
})(UserStatusCode || (UserStatusCode = {}));
// Return list of UserStatusCode values and their display names
function GetUserStatusCodes() {
    let result = new Map();
    result.set(UserStatusCode.UNDEFINED, 'Undefined');
    result.set(UserStatusCode.PENDING, 'Pending');
    result.set(UserStatusCode.ACTIVE, 'Active');
    result.set(UserStatusCode.BLOCKED, 'Blocked');
    result.set(UserStatusCode.SUSPENDED, 'Suspended');
    return result;
}

// User type code
var UserTypeCode;
(function (UserTypeCode) {
    // Undefined [0] 
    UserTypeCode[UserTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
    // System administrator has access to all accounts and permissions to perform all actions [1] 
    UserTypeCode[UserTypeCode["SYSADMIN"] = 1] = "SYSADMIN";
    // Support user has view permissions only for all accounts that enabled option Enable Support [2] 
    UserTypeCode[UserTypeCode["SUPPORT"] = 2] = "SUPPORT";
    // Account user - has access to specific accounts with role based access control [3] 
    UserTypeCode[UserTypeCode["USER"] = 3] = "USER";
    // Account service - to be used by other systems to perform actions using the API (can't login as a user to the portal)' [4]` 
    UserTypeCode[UserTypeCode["SERVICE"] = 4] = "SERVICE";
})(UserTypeCode || (UserTypeCode = {}));
// Return list of UserTypeCode values and their display names
function GetUserTypeCodes() {
    let result = new Map();
    result.set(UserTypeCode.UNDEFINED, 'Undefined');
    result.set(UserTypeCode.SYSADMIN, 'Sysadmin');
    result.set(UserTypeCode.SUPPORT, 'Support');
    result.set(UserTypeCode.USER, 'User');
    result.set(UserTypeCode.SERVICE, 'Service');
    return result;
}

/*
 * Public API Surface of ngx-pulse-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { Account, AccountDTO, AccountReportDTO, AccountRole, AccountSettings, AccountStatusCode, AccountTypeCode, Action, ActionResponse, Alert, AlertWithDevice, ApiKey, AuditLog, BaseEntity, BaseRestResponse, BulkDevices, Checkpoint, Condition, ConfigParam, ConfigParams, ConsumptionData, ConsumptionTimeDataPoint, DNSRecord, DataIngestion, DataPointOfDeviceReport, DataSourceCode, Device, DeviceActionCode, DeviceConfig, DeviceCreationCode, DeviceIdentityCode, DeviceNode, DeviceReport, DeviceScoreConfig, DeviceStatusCode, DeviceTypeCode, DeviceWithEvents, DevicesAtRiskConfig, DevicesMap, DirectionContextCode, Distribution, EntitiesResponse, EntityResponse, Event, EventCategoryCode, EventOccurrence, EventSeverityConfig, EventStatusCode, EventTypeCode, EventWithDevice, Feature, FeatureCode, FeaturesGroup, FloatKeyValue, GeoData, GetAccountStatusCodes, GetAccountTypeCodes, GetDataSourceCodes, GetDeviceActionCodes, GetDeviceCreationCodes, GetDeviceIdentityCodes, GetDeviceStatusCodes, GetDeviceTypeCodes, GetDirectionContextCodes, GetEventCategoryCodes, GetEventStatusCodes, GetEventTypeCodes, GetFeatureCodes, GetHomePageViewCodes, GetHttpMethodCodes, GetInsightStatusCodes, GetInsightTypeCodes, GetIntegrationTriggerCodes, GetIntegrationTypeCodes, GetMemberRoleCodes, GetNetworkMapTypeCodes, GetOperatorCodes, GetPermissionCodes, GetReportSourceCodes, GetReportTypeCodes, GetRuleActivityStatusCodes, GetRuleTypeCodes, GetSeverityTypeCodes, GetTrafficDirectionCodes, GetUserStatusCodes, GetUserTypeCodes, GraphSeries, Group, HomePageViewCode, HttpMethodCode, Image, Indicator, Insight, InsightQuery, InsightSpec, InsightStatusCode, InsightTypeCode, IntDistribution, IntKeySeriesDataValue, IntKeyValue, Integration, IntegrationTriggerCode, IntegrationTypeCode, Interval, Link, Location, LoginParams, MaliciousIPCard, MaliciousIPData, MapBounds, Member, MemberRoleCode, NetworkMap, NetworkMapTypeCode, NgxPulseLibModule, Node, OperatorCode, PermissionCode, PulseConfig, Radius, Report, ReportInstance, ReportSourceCode, ReportTypeCode, RestUtil, Rule, RuleActivityStatusCode, RuleBasedSeverityConditionConfig, RuleCountThresholdConfig, RuleTemplate, RuleTypeCode, SIM, SeriesData, ServiceStatus, Services, SessionRecord, SessionTransform, SeverityConditionConfig, SeverityIntervalTuple, SeverityTypeCode, Shieldex, ShieldexConfig, Stream, StreamAnalyticsConfig, StreamConfig, StringIntValue, StringKeyIntValue, StringKeyValue, SupportStreamAnalyticsConfig, SysAccountsService, SysAuditLogService, SysCheckpointsService, SysConfigService, SysFeaturesService, SysGroupsService, SysInsightsService, SysKeysService, SysMembersService, SysRuleTemplatesService, SysRulesService, SysStatisticsService, SysStreamsService, SysUsersService, Thresholds, TimeDataPoint, TimeDataPoint2D, TimeDataPointFloat, TimeFrame, TimeSeries, TimeSeriesOf2D, TimeSeriesOfDataConsumption, TimeSeriesOfDeviceReport, TimeSeriesOfFloat, TokenData, TrafficDirectionCode, Tuple, UsageRecord, UsageTransform, User, UserMembership, UserMemberships, UserStatusCode, UserTypeCode, UsrAlertsService, UsrDevicesService, UsrEventsService, UsrInsightsService, UsrIntegrationsService, UsrMembersService, UsrNetworkService, UsrReportsInstanceService, UsrReportsService, UsrRulesService, UsrUserService, ZScore };
//# sourceMappingURL=shieldiot-ngx-pulse-lib.mjs.map
