import { Injectable, Inject } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../utils";
import * as i2 from "../../config";
// List of device related actions for the operator 
// @RequestHeader X-API-KEY The key to identify the application (console) 
// @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user 
export class UsrDevicesService {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: UsrDevicesService, deps: [{ token: 'config' }, { token: i1.RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: UsrDevicesService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: UsrDevicesService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i2.PulseConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: i1.RestUtil }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNyRGV2aWNlc1NlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtcHVsc2UtbGliL3NyYy9saWIvc2VydmljZXMvdXNyRGV2aWNlc1NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFvQm5ELG1EQUFtRDtBQUNuRCwwRUFBMEU7QUFDMUUsMEVBQTBFO0FBRTFFLE1BQU0sT0FBTyxpQkFBaUI7SUFLNUIsb0JBQW9CO0lBQ3BCLFlBQXNDLE1BQW1CLEVBQVUsSUFBYztRQUEzQyxXQUFNLEdBQU4sTUFBTSxDQUFhO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBVTtRQUpqRixpQkFBaUI7UUFDVCxZQUFPLEdBQUcsVUFBVSxDQUFDO1FBSTNCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNoRCxDQUFDO0lBR0Q7O09BRUc7SUFDSCxNQUFNLENBQUMsSUFBYTtRQUNsQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUF5QixHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFILENBQUM7SUFFRDs7T0FFRztJQUNILFVBQVUsQ0FBQyxJQUFrQjtRQUMzQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUEyQixHQUFHLElBQUksQ0FBQyxPQUFPLE9BQU8sRUFBRSxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pJLENBQUM7SUFFRDs7T0FFRztJQUNILE1BQU0sQ0FBQyxJQUFhO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQXlCLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUgsQ0FBQztJQUVEOztPQUVHO0lBQ0gsVUFBVSxDQUFDLElBQWtCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQTJCLEdBQUcsSUFBSSxDQUFDLE9BQU8sT0FBTyxFQUFFLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkksQ0FBQztJQUVEOztPQUVHO0lBQ0gsTUFBTSxDQUFDLEVBQVc7UUFDaEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBaUIsR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVEOztPQUVHO0lBQ0gsR0FBRyxDQUFDLEVBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUF5QixHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFJLENBQUMsUUFBaUIsRUFBRSxNQUFlLEVBQUUsSUFBYSxFQUFFLEVBQVcsRUFBRSxJQUF1QixFQUFFLE1BQTJCLEVBQUUsSUFBeUIsRUFBRSxVQUFxQixFQUFFLElBQWEsRUFBRSxJQUFhLEVBQUUsSUFBYTtRQUN0TixNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUM5RCxJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsTUFBTSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQ3hELElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDbEQsSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUM1QyxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQ2xELElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDeEQsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUM7U0FBRTtRQUNsRCxJQUFJLFVBQVUsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsVUFBVSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQ3BFLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDbEQsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUM7U0FBRTtRQUNsRCxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBRXBELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQTJCLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVEOztPQUVHO0lBQ0gsWUFBWSxDQUFDLE1BQWUsRUFBRSxRQUFpQixFQUFFLE1BQWUsRUFBRSxJQUFhLEVBQUUsRUFBVyxFQUFFLElBQXVCLEVBQUUsTUFBMkIsRUFBRSxJQUF5QixFQUFFLElBQWEsRUFBRSxJQUFhLEVBQUUsSUFBYTtRQUN4TixNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUM5RCxJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsTUFBTSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQ3hELElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDbEQsSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUM1QyxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQ2xELElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDeEQsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUM7U0FBRTtRQUNsRCxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQ2xELElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDbEQsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUM7U0FBRTtRQUVwRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBQyxHQUFHLElBQUksQ0FBQyxPQUFPLFdBQVcsTUFBTSxFQUFFLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUNuRixDQUFDO0lBRUQ7O09BRUc7SUFDSCxPQUFPLENBQUMsUUFBaUIsRUFBRSxNQUFlLEVBQUUsSUFBYSxFQUFFLEVBQVcsRUFBRSxJQUF1QixFQUFFLE1BQTJCLEVBQUUsSUFBeUIsRUFBRSxVQUFxQixFQUFFLElBQWEsRUFBRSxJQUFhLEVBQUUsSUFBYTtRQUN6TixNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUM5RCxJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsTUFBTSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQ3hELElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDbEQsSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUM1QyxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQ2xELElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDeEQsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUM7U0FBRTtRQUNsRCxJQUFJLFVBQVUsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsVUFBVSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQ3BFLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDbEQsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUM7U0FBRTtRQUNsRCxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBRXBELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQXFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sTUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDM0YsQ0FBQztJQUVEOztPQUVHO0lBQ0gsV0FBVyxDQUFDLFFBQWlCLEVBQUUsTUFBZSxFQUFFLElBQWEsRUFBRSxFQUFXLEVBQUUsSUFBdUIsRUFBRSxNQUEyQixFQUFFLElBQXlCLEVBQUUsVUFBcUIsRUFBRSxJQUFhLEVBQUUsSUFBYSxFQUFFLElBQWE7UUFDN04sTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDOUQsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLE1BQU0sRUFBRSxDQUFDLENBQUM7U0FBRTtRQUN4RCxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQ2xELElBQUksRUFBRSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDNUMsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUM7U0FBRTtRQUNsRCxJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsTUFBTSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQ3hELElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDbEQsSUFBSSxVQUFVLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLFVBQVUsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUNwRSxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQ2xELElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDbEQsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUM7U0FBRTtRQUVwRCxP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QUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDNUMsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUssRUFBRSxDQUFDLENBQUM7U0FBRTtRQUNyRCxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQ2xELElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDeEQsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUM7U0FBRTtRQUNsRCxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQ2xELElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDOUQsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUssRUFBRSxDQUFDLENBQUM7U0FBRTtRQUNyRCxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQy9DLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDM0QsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUM7U0FBRTtRQUNsRCxJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsTUFBTSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQ3hELElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDeEQsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUMvQyxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQztTQUFFO1FBRWpELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sU0FBUyxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVEOztPQUVHO0lBQ0gsb0JBQW9CLENBQUMsUUFBaUIsRUFBRSxTQUFrQixFQUFFLElBQWEsRUFBRSxFQUFXLEVBQUUsSUFBYSxFQUFFLElBQWEsRUFBRSxJQUFhO1FBQ2pJLE1BQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksUUFBUSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQzlELElBQUksU0FBUyxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxTQUFTLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDakUsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUM7U0FBRTtRQUNsRCxJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQzVDLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDbEQsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUM7U0FBRTtRQUNsRCxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBRXBELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQTJCLEdBQUcsSUFBSSxDQUFDLE9BQU8sMEJBQTBCLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUNyRyxDQUFDOytHQTFTVSxpQkFBaUIsa0JBTVIsUUFBUTttSEFOakIsaUJBQWlCOzs0RkFBakIsaUJBQWlCO2tCQUQ3QixVQUFVOzswQkFPSSxNQUFNOzJCQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc3RVdGlsLCBFbnRpdHlSZXNwb25zZSwgRW50aXRpZXNSZXNwb25zZSwgQWN0aW9uUmVzcG9uc2UgfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgeyBQdWxzZUNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XG5cbmltcG9ydCB7IERldmljZUFjdGlvbkNvZGUgfSBmcm9tICcuLi9lbnVtcyc7XG5pbXBvcnQgeyBEZXZpY2VSZXBvcnQgfSBmcm9tICcuLi9lbnRpdGllcyc7XG5pbXBvcnQgeyBTZXZlcml0eVR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMnO1xuaW1wb3J0IHsgQnVsa0RldmljZXMgfSBmcm9tICcuLi9lbnRpdGllcyc7XG5pbXBvcnQgeyBEZXZpY2VUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zJztcbmltcG9ydCB7IERldmljZVN0YXR1c0NvZGUgfSBmcm9tICcuLi9lbnVtcyc7XG5pbXBvcnQgeyBEZXZpY2VXaXRoRXZlbnRzIH0gZnJvbSAnLi4vZW50aXRpZXMnO1xuaW1wb3J0IHsgSW50RGlzdHJpYnV0aW9uIH0gZnJvbSAnLi4vZW50aXRpZXMnO1xuaW1wb3J0IHsgTmV0d29ya01hcFR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMnO1xuaW1wb3J0IHsgTmV0d29ya01hcCB9IGZyb20gJy4uL2NvbW1vbic7XG5pbXBvcnQgeyBEZXZpY2UgfSBmcm9tICcuLi9lbnRpdGllcyc7XG5pbXBvcnQgeyBUaW1lU2VyaWVzT2ZEYXRhQ29uc3VtcHRpb24gfSBmcm9tICcuLi9jb21tb24nO1xuaW1wb3J0IHsgVGltZVNlcmllc09mRGV2aWNlUmVwb3J0IH0gZnJvbSAnLi4vZW50aXRpZXMnO1xuXG5cblxuLy8gTGlzdCBvZiBkZXZpY2UgcmVsYXRlZCBhY3Rpb25zIGZvciB0aGUgb3BlcmF0b3IgXG4vLyBAUmVxdWVzdEhlYWRlciBYLUFQSS1LRVkgVGhlIGtleSB0byBpZGVudGlmeSB0aGUgYXBwbGljYXRpb24gKGNvbnNvbGUpIFxuLy8gQFJlcXVlc3RIZWFkZXIgWC1BQ0NFU1MtVE9LRU4gVGhlIHRva2VuIHRvIGlkZW50aWZ5IHRoZSBsb2dnZWQtaW4gdXNlciBcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc3JEZXZpY2VzU2VydmljZSB7XG5cbiAgLy8gVVJMIHRvIHdlYiBhcGlcbiAgcHJpdmF0ZSBiYXNlVXJsID0gJy9kZXZpY2VzJztcblxuICAvLyBDbGFzcyBjb25zdHJ1Y3RvclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdjb25maWcnKSBwcml2YXRlIGNvbmZpZzogUHVsc2VDb25maWcsIHByaXZhdGUgcmVzdDogUmVzdFV0aWwpIHtcbiAgICB0aGlzLmJhc2VVcmwgPSB0aGlzLmNvbmZpZy5hcGkgKyB0aGlzLmJhc2VVcmw7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBDcmVhdGUgbmV3IGRldmljZVxuICAgKi9cbiAgY3JlYXRlKGJvZHk/OiBEZXZpY2UpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dDxFbnRpdHlSZXNwb25zZTxEZXZpY2U+PihgJHt0aGlzLmJhc2VVcmx9YCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYnVsayBvZiBuZXcgZGV2aWNlLCByZXR1cm5zIGxpc3Qgb2YgaW5zZXJ0ZWQgaXRlbXNcbiAgICovXG4gIGJ1bGtDcmVhdGUoYm9keT86IEJ1bGtEZXZpY2VzKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQ8RW50aXRpZXNSZXNwb25zZTxEZXZpY2U+PihgJHt0aGlzLmJhc2VVcmx9L2J1bGtgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBleGlzdGluZyBkZXZpY2UgaW4gdGhlIHN5c3RlbVxuICAgKi9cbiAgdXBkYXRlKGJvZHk/OiBEZXZpY2UpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBhdGNoPEVudGl0eVJlc3BvbnNlPERldmljZT4+KGAke3RoaXMuYmFzZVVybH1gLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBidWxrIG9mIGRldmljZSwgcmV0dXJucyBsaXN0IG9mIHVwZGF0ZWQgaXRlbXNcbiAgICovXG4gIGJ1bGtVcGRhdGUoYm9keT86IEJ1bGtEZXZpY2VzKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wYXRjaDxFbnRpdGllc1Jlc3BvbnNlPERldmljZT4+KGAke3RoaXMuYmFzZVVybH0vYnVsa2AsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIGRldmljZSBmcm9tIHRoZSBzeXN0ZW1cbiAgICovXG4gIGRlbGV0ZShpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZGVsZXRlPEFjdGlvblJlc3BvbnNlPihgJHt0aGlzLmJhc2VVcmx9LyR7aWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHNpbmdsZSBkZXZpY2UgYnkgaWRcbiAgICovXG4gIGdldChpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0PEVudGl0eVJlc3BvbnNlPERldmljZT4+KGAke3RoaXMuYmFzZVVybH0vJHtpZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIGxpc3Qgb2YgZGV2aWNlcyBieSBxdWVyeVxuICAgKi9cbiAgZmluZChzdHJlYW1JZD86IHN0cmluZywgc2VhcmNoPzogc3RyaW5nLCBmcm9tPzogbnVtYmVyLCB0bz86IG51bWJlciwgdHlwZT86IERldmljZVR5cGVDb2RlW10sIHN0YXR1cz86IERldmljZVN0YXR1c0NvZGVbXSwgcmlzaz86IFNldmVyaXR5VHlwZUNvZGVbXSwgc2NvcmVSYW5nZT86IG51bWJlcltdLCBzb3J0Pzogc3RyaW5nLCBwYWdlPzogbnVtYmVyLCBzaXplPzogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFyYW1zID0gW107XHRcdFxuICAgIGlmIChzdHJlYW1JZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdHJlYW1JZD0ke3N0cmVhbUlkfWApOyB9XG4gICAgaWYgKHNlYXJjaCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzZWFyY2g9JHtzZWFyY2h9YCk7IH1cbiAgICBpZiAoZnJvbSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmcm9tPSR7ZnJvbX1gKTsgfVxuICAgIGlmICh0byAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0bz0ke3RvfWApOyB9XG4gICAgaWYgKHR5cGUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgdHlwZT0ke3R5cGV9YCk7IH1cbiAgICBpZiAoc3RhdHVzICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHN0YXR1cz0ke3N0YXR1c31gKTsgfVxuICAgIGlmIChyaXNrICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHJpc2s9JHtyaXNrfWApOyB9XG4gICAgaWYgKHNjb3JlUmFuZ2UgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2NvcmVSYW5nZT0ke3Njb3JlUmFuZ2V9YCk7IH1cbiAgICBpZiAoc29ydCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzb3J0PSR7c29ydH1gKTsgfVxuICAgIGlmIChwYWdlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2U9JHtwYWdlfWApOyB9XG4gICAgaWYgKHNpemUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2l6ZT0ke3NpemV9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0PEVudGl0aWVzUmVzcG9uc2U8RGV2aWNlPj4oYCR7dGhpcy5iYXNlVXJsfWAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogRXhwb3J0IGxpc3Qgb2YgZGV2aWNlcyBieSBxdWVyeSB0byBhIGZpbGUgd2l0aCB0aGUgc3BlY2lmaWVkIGZvcm1hdFxuICAgKi9cbiAgZXhwb3J0Rm9ybWF0KGZvcm1hdD86IHN0cmluZywgc3RyZWFtSWQ/OiBzdHJpbmcsIHNlYXJjaD86IHN0cmluZywgZnJvbT86IG51bWJlciwgdG8/OiBudW1iZXIsIHR5cGU/OiBEZXZpY2VUeXBlQ29kZVtdLCBzdGF0dXM/OiBEZXZpY2VTdGF0dXNDb2RlW10sIHJpc2s/OiBTZXZlcml0eVR5cGVDb2RlW10sIHNvcnQ/OiBzdHJpbmcsIHBhZ2U/OiBudW1iZXIsIHNpemU/OiBudW1iZXIpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBbXTtcdFx0XG4gICAgaWYgKHN0cmVhbUlkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHN0cmVhbUlkPSR7c3RyZWFtSWR9YCk7IH1cbiAgICBpZiAoc2VhcmNoICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNlYXJjaD0ke3NlYXJjaH1gKTsgfVxuICAgIGlmIChmcm9tICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZyb209JHtmcm9tfWApOyB9XG4gICAgaWYgKHRvICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHRvPSR7dG99YCk7IH1cbiAgICBpZiAodHlwZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0eXBlPSR7dHlwZX1gKTsgfVxuICAgIGlmIChzdGF0dXMgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc3RhdHVzPSR7c3RhdHVzfWApOyB9XG4gICAgaWYgKHJpc2sgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcmlzaz0ke3Jpc2t9YCk7IH1cbiAgICBpZiAoc29ydCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzb3J0PSR7c29ydH1gKTsgfVxuICAgIGlmIChwYWdlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2U9JHtwYWdlfWApOyB9XG4gICAgaWYgKHNpemUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2l6ZT0ke3NpemV9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZG93bmxvYWQoYGRldmljZXNgLGAke3RoaXMuYmFzZVVybH0vZXhwb3J0LyR7Zm9ybWF0fWAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogRmluZCB0b3AgMTAgZGV2aWNlcyBieSB0aGVpciBzY29yZSBmaWx0ZXIgYnkgcXVlcnlcbiAgICovXG4gIGZpbmRUb3Aoc3RyZWFtSWQ/OiBzdHJpbmcsIHNlYXJjaD86IHN0cmluZywgZnJvbT86IG51bWJlciwgdG8/OiBudW1iZXIsIHR5cGU/OiBEZXZpY2VUeXBlQ29kZVtdLCBzdGF0dXM/OiBEZXZpY2VTdGF0dXNDb2RlW10sIHJpc2s/OiBTZXZlcml0eVR5cGVDb2RlW10sIHNjb3JlUmFuZ2U/OiBudW1iZXJbXSwgc29ydD86IHN0cmluZywgcGFnZT86IG51bWJlciwgc2l6ZT86IG51bWJlcikge1xuICAgIGNvbnN0IHBhcmFtcyA9IFtdO1x0XHRcbiAgICBpZiAoc3RyZWFtSWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc3RyZWFtSWQ9JHtzdHJlYW1JZH1gKTsgfVxuICAgIGlmIChzZWFyY2ggIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2VhcmNoPSR7c2VhcmNofWApOyB9XG4gICAgaWYgKGZyb20gIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZnJvbT0ke2Zyb219YCk7IH1cbiAgICBpZiAodG8gIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgdG89JHt0b31gKTsgfVxuICAgIGlmICh0eXBlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHR5cGU9JHt0eXBlfWApOyB9XG4gICAgaWYgKHN0YXR1cyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdGF0dXM9JHtzdGF0dXN9YCk7IH1cbiAgICBpZiAocmlzayAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGByaXNrPSR7cmlza31gKTsgfVxuICAgIGlmIChzY29yZVJhbmdlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNjb3JlUmFuZ2U9JHtzY29yZVJhbmdlfWApOyB9XG4gICAgaWYgKHNvcnQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc29ydD0ke3NvcnR9YCk7IH1cbiAgICBpZiAocGFnZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYWdlPSR7cGFnZX1gKTsgfVxuICAgIGlmIChzaXplICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNpemU9JHtzaXplfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldDxFbnRpdGllc1Jlc3BvbnNlPERldmljZVdpdGhFdmVudHM+PihgJHt0aGlzLmJhc2VVcmx9L3RvcGAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogRmluZCBkZXZpY2UgZGlzdHJpYnV0aW9uIGJ5IHR5cGUgZmlsdGVyZWQgYnkgcXVlcnlcbiAgICovXG4gIGNvdW50QnlUeXBlKHN0cmVhbUlkPzogc3RyaW5nLCBzZWFyY2g/OiBzdHJpbmcsIGZyb20/OiBudW1iZXIsIHRvPzogbnVtYmVyLCB0eXBlPzogRGV2aWNlVHlwZUNvZGVbXSwgc3RhdHVzPzogRGV2aWNlU3RhdHVzQ29kZVtdLCByaXNrPzogU2V2ZXJpdHlUeXBlQ29kZVtdLCBzY29yZVJhbmdlPzogbnVtYmVyW10sIHNvcnQ/OiBzdHJpbmcsIHBhZ2U/OiBudW1iZXIsIHNpemU/OiBudW1iZXIpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBbXTtcdFx0XG4gICAgaWYgKHN0cmVhbUlkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHN0cmVhbUlkPSR7c3RyZWFtSWR9YCk7IH1cbiAgICBpZiAoc2VhcmNoICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNlYXJjaD0ke3NlYXJjaH1gKTsgfVxuICAgIGlmIChmcm9tICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZyb209JHtmcm9tfWApOyB9XG4gICAgaWYgKHRvICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHRvPSR7dG99YCk7IH1cbiAgICBpZiAodHlwZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0eXBlPSR7dHlwZX1gKTsgfVxuICAgIGlmIChzdGF0dXMgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc3RhdHVzPSR7c3RhdHVzfWApOyB9XG4gICAgaWYgKHJpc2sgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcmlzaz0ke3Jpc2t9YCk7IH1cbiAgICBpZiAoc2NvcmVSYW5nZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzY29yZVJhbmdlPSR7c2NvcmVSYW5nZX1gKTsgfVxuICAgIGlmIChzb3J0ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNvcnQ9JHtzb3J0fWApOyB9XG4gICAgaWYgKHBhZ2UgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcGFnZT0ke3BhZ2V9YCk7IH1cbiAgICBpZiAoc2l6ZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzaXplPSR7c2l6ZX1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQ8RW50aXR5UmVzcG9uc2U8SW50RGlzdHJpYnV0aW9uPj4oYCR7dGhpcy5iYXNlVXJsfS9jb3VudC9ieS10eXBlYCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIGRldmljZSBkaXN0cmlidXRpb24gYnkgc3RhdHVzIGZpbHRlcmVkIGJ5IHF1ZXJ5XG4gICAqL1xuICBjb3VudEJ5U3RhdHVzKHN0cmVhbUlkPzogc3RyaW5nLCBzZWFyY2g/OiBzdHJpbmcsIGZyb20/OiBudW1iZXIsIHRvPzogbnVtYmVyLCB0eXBlPzogRGV2aWNlVHlwZUNvZGVbXSwgc3RhdHVzPzogRGV2aWNlU3RhdHVzQ29kZVtdLCByaXNrPzogU2V2ZXJpdHlUeXBlQ29kZVtdLCBzY29yZVJhbmdlPzogbnVtYmVyW10sIHNvcnQ/OiBzdHJpbmcsIHBhZ2U/OiBudW1iZXIsIHNpemU/OiBudW1iZXIpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBbXTtcdFx0XG4gICAgaWYgKHN0cmVhbUlkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHN0cmVhbUlkPSR7c3RyZWFtSWR9YCk7IH1cbiAgICBpZiAoc2VhcmNoICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNlYXJjaD0ke3NlYXJjaH1gKTsgfVxuICAgIGlmIChmcm9tICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZyb209JHtmcm9tfWApOyB9XG4gICAgaWYgKHRvICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHRvPSR7dG99YCk7IH1cbiAgICBpZiAodHlwZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0eXBlPSR7dHlwZX1gKTsgfVxuICAgIGlmIChzdGF0dXMgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc3RhdHVzPSR7c3RhdHVzfWApOyB9XG4gICAgaWYgKHJpc2sgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcmlzaz0ke3Jpc2t9YCk7IH1cbiAgICBpZiAoc2NvcmVSYW5nZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzY29yZVJhbmdlPSR7c2NvcmVSYW5nZX1gKTsgfVxuICAgIGlmIChzb3J0ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNvcnQ9JHtzb3J0fWApOyB9XG4gICAgaWYgKHBhZ2UgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcGFnZT0ke3BhZ2V9YCk7IH1cbiAgICBpZiAoc2l6ZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzaXplPSR7c2l6ZX1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQ8RW50aXR5UmVzcG9uc2U8SW50RGlzdHJpYnV0aW9uPj4oYCR7dGhpcy5iYXNlVXJsfS9jb3VudC9ieS1zdGF0dXNgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgZGV2aWNlIGRpc3RyaWJ1dGlvbiBieSBhY3Rpb24gZmlsdGVyZWQgYnkgcXVlcnlcbiAgICovXG4gIGNvdW50QnlBY3Rpb24oc3RyZWFtSWQ/OiBzdHJpbmcsIHNlYXJjaD86IHN0cmluZywgZnJvbT86IG51bWJlciwgdG8/OiBudW1iZXIsIHR5cGU/OiBEZXZpY2VUeXBlQ29kZVtdLCBzdGF0dXM/OiBEZXZpY2VTdGF0dXNDb2RlW10sIHJpc2s/OiBTZXZlcml0eVR5cGVDb2RlW10sIHNjb3JlUmFuZ2U/OiBudW1iZXJbXSwgc29ydD86IHN0cmluZywgcGFnZT86IG51bWJlciwgc2l6ZT86IG51bWJlcikge1xuICAgIGNvbnN0IHBhcmFtcyA9IFtdO1x0XHRcbiAgICBpZiAoc3RyZWFtSWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc3RyZWFtSWQ9JHtzdHJlYW1JZH1gKTsgfVxuICAgIGlmIChzZWFyY2ggIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2VhcmNoPSR7c2VhcmNofWApOyB9XG4gICAgaWYgKGZyb20gIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZnJvbT0ke2Zyb219YCk7IH1cbiAgICBpZiAodG8gIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgdG89JHt0b31gKTsgfVxuICAgIGlmICh0eXBlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHR5cGU9JHt0eXBlfWApOyB9XG4gICAgaWYgKHN0YXR1cyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdGF0dXM9JHtzdGF0dXN9YCk7IH1cbiAgICBpZiAocmlzayAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGByaXNrPSR7cmlza31gKTsgfVxuICAgIGlmIChzY29yZVJhbmdlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNjb3JlUmFuZ2U9JHtzY29yZVJhbmdlfWApOyB9XG4gICAgaWYgKHNvcnQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc29ydD0ke3NvcnR9YCk7IH1cbiAgICBpZiAocGFnZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYWdlPSR7cGFnZX1gKTsgfVxuICAgIGlmIChzaXplICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNpemU9JHtzaXplfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldDxFbnRpdHlSZXNwb25zZTxJbnREaXN0cmlidXRpb24+PihgJHt0aGlzLmJhc2VVcmx9L2NvdW50L2J5LWFjdGlvbmAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIHRhZyB0byBhIGRldmljZVxuICAgKi9cbiAgYWRkVGFnKGlkPzogc3RyaW5nLCB0YWc/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3Q8RW50aXR5UmVzcG9uc2U8RGV2aWNlPj4oYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS90YWdzLyR7dGFnfWAsICcnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgYSB0YWcgZnJvbSB0aGUgZGV2aWNlXG4gICAqL1xuICBkZWxldGVUYWcoaWQ/OiBzdHJpbmcsIHRhZz86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZGVsZXRlPEVudGl0eVJlc3BvbnNlPERldmljZT4+KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vdGFncy8ke3RhZ31gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBseSBhY3Rpb24gb24gYSBkZXZpY2VcbiAgICovXG4gIGFwcGx5QWN0aW9uKGlkPzogc3RyaW5nLCBhY3Rpb24/OiBEZXZpY2VBY3Rpb25Db2RlKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0PEFjdGlvblJlc3BvbnNlPihgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L2FjdGlvbnMvJHthY3Rpb259YCwgJycpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBuZXR3b3JrIG1hcCBvZiBkZXZpY2VzXG4gICAqL1xuICBnZXROZXR3b3JrTWFwKHN0cmVhbUlkPzogc3RyaW5nLCBmcm9tPzogbnVtYmVyLCB0bz86IG51bWJlciwgdHlwZT86IERldmljZVR5cGVDb2RlW10sIHRhZz86IHN0cmluZ1tdLCBpZD86IHN0cmluZ1tdLCBtYXBUeXBlPzogTmV0d29ya01hcFR5cGVDb2RlLCBpcHM/OiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IHBhcmFtcyA9IFtdO1x0XHRcbiAgICBpZiAoc3RyZWFtSWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc3RyZWFtSWQ9JHtzdHJlYW1JZH1gKTsgfVxuICAgIGlmIChmcm9tICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZyb209JHtmcm9tfWApOyB9XG4gICAgaWYgKHRvICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHRvPSR7dG99YCk7IH1cbiAgICBpZiAodHlwZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0eXBlPSR7dHlwZX1gKTsgfVxuICAgIGlmICh0YWcgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgdGFnPSR7dGFnfWApOyB9XG4gICAgaWYgKGlkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGlkPSR7aWR9YCk7IH1cbiAgICBpZiAobWFwVHlwZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBtYXBUeXBlPSR7bWFwVHlwZX1gKTsgfVxuICAgIGlmIChpcHMgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgaXBzPSR7aXBzfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldDxFbnRpdHlSZXNwb25zZTxOZXR3b3JrTWFwPj4oYCR7dGhpcy5iYXNlVXJsfS9uZXR3b3JrLW1hcGAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGRhaWx5IGRldmljZSByZXBvcnQgb3ZlciB0aW1lIChkYWlseSBkZXZpY2UgcmVwb3J0IGluY2x1ZGVzOiB0b3RhbCBkZXZpY2VzLCBhY3RpdmUgZGV2aWNlcywgZGV2aWNlcyBhdCByaXNrKVxuICAgKi9cbiAgZ2V0RGV2aWNlUmVwb3J0VGltZWxpbmUoc3RyZWFtSWQ/OiBzdHJpbmcsIGZyb20/OiBudW1iZXIsIHRvPzogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFyYW1zID0gW107XHRcdFxuICAgIGlmIChzdHJlYW1JZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdHJlYW1JZD0ke3N0cmVhbUlkfWApOyB9XG4gICAgaWYgKGZyb20gIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZnJvbT0ke2Zyb219YCk7IH1cbiAgICBpZiAodG8gIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgdG89JHt0b31gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQ8RW50aXR5UmVzcG9uc2U8VGltZVNlcmllc09mRGV2aWNlUmVwb3J0Pj4oYCR7dGhpcy5iYXNlVXJsfS9yZXBvcnQvdGltZWxpbmVgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBsYXRlc3QgZGV2aWNlIHJlcG9ydCwgdGhlIEtleSBjb250YWlucyBsYXRlc3QgZGV2aWNlcyBhdCByaXNrIG51bWJlciAod29ya3MgaW4gYWNjb3VudCBsZXZlbClcbiAgICovXG4gIGdldExhdGVzdERldmljZVJlcG9ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldDxFbnRpdHlSZXNwb25zZTxEZXZpY2VSZXBvcnQ+PihgJHt0aGlzLmJhc2VVcmx9L3JlcG9ydC9sYXRlc3RgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgZGV2aWNlIC8gZ3JvdXAgb2YgZGV2aWNlcyBjb25zdW1wdGlvbiBvdmVyIHRpbWVcbiAgICovXG4gIGdldENvbnN1bXB0aW9uVGltZWxpbmUoc3RyZWFtSWQ/OiBzdHJpbmcsIGZyb20/OiBudW1iZXIsIHRvPzogbnVtYmVyLCB0eXBlPzogRGV2aWNlVHlwZUNvZGVbXSwgdGFnPzogc3RyaW5nW10sIGlkPzogc3RyaW5nW10pIHtcbiAgICBjb25zdCBwYXJhbXMgPSBbXTtcdFx0XG4gICAgaWYgKHN0cmVhbUlkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHN0cmVhbUlkPSR7c3RyZWFtSWR9YCk7IH1cbiAgICBpZiAoZnJvbSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmcm9tPSR7ZnJvbX1gKTsgfVxuICAgIGlmICh0byAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0bz0ke3RvfWApOyB9XG4gICAgaWYgKHR5cGUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgdHlwZT0ke3R5cGV9YCk7IH1cbiAgICBpZiAodGFnICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHRhZz0ke3RhZ31gKTsgfVxuICAgIGlmIChpZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBpZD0ke2lkfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldDxFbnRpdHlSZXNwb25zZTxUaW1lU2VyaWVzT2ZEYXRhQ29uc3VtcHRpb24+PihgJHt0aGlzLmJhc2VVcmx9L2NvbnN1bXB0aW9uL3RpbWVsaW5lYCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgZGV2aWNlIC8gZ3JvdXAgb2YgZGV2aWNlcyBjb25zdW1wdGlvbiBvdmVyIHRpbWVcbiAgICovXG4gIGdldENvbnN1bXB0aW9uVHJlbmQoc3RyZWFtSWQ/OiBzdHJpbmcsIGZyb20/OiBudW1iZXIsIHRvPzogbnVtYmVyLCB0eXBlPzogRGV2aWNlVHlwZUNvZGVbXSwgdGFnPzogc3RyaW5nW10sIGlkPzogc3RyaW5nW10pIHtcbiAgICBjb25zdCBwYXJhbXMgPSBbXTtcdFx0XG4gICAgaWYgKHN0cmVhbUlkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHN0cmVhbUlkPSR7c3RyZWFtSWR9YCk7IH1cbiAgICBpZiAoZnJvbSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmcm9tPSR7ZnJvbX1gKTsgfVxuICAgIGlmICh0byAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0bz0ke3RvfWApOyB9XG4gICAgaWYgKHR5cGUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgdHlwZT0ke3R5cGV9YCk7IH1cbiAgICBpZiAodGFnICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHRhZz0ke3RhZ31gKTsgfVxuICAgIGlmIChpZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBpZD0ke2lkfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldDxBY3Rpb25SZXNwb25zZT4oYCR7dGhpcy5iYXNlVXJsfS9jb25zdW1wdGlvbi90cmVuZGAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogVXBsb2FkIGxpc3Qgb2YgZGV2aWNlc1xuICAgKi9cbiAgdXBsb2FkRGV2aWNlcyhmaWxlOiBGaWxlLCBzdHJlYW1JZD86IHN0cmluZywgaXA/OiBudW1iZXJbXSwgaWNjaWQ/OiBudW1iZXJbXSwgaW1zaT86IG51bWJlcltdLCBtc2lzZG4/OiBudW1iZXJbXSwgaW1laT86IG51bWJlciwgbmFtZT86IG51bWJlciwgb3BlcmF0b3I/OiBudW1iZXIsIGxhYmVsPzogbnVtYmVyW10sIHRhZz86IG51bWJlcltdLCBjb3VudHJ5PzogbnVtYmVyLCBjaXR5PzogbnVtYmVyLCBzdHJlZXQ/OiBudW1iZXIsIHBvc3RhbD86IG51bWJlciwgbG9uPzogbnVtYmVyLCBsYXQ/OiBudW1iZXIpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBbXTtcdFx0XG4gICAgaWYgKHN0cmVhbUlkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHN0cmVhbUlkPSR7c3RyZWFtSWR9YCk7IH1cbiAgICBpZiAoaXAgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgaXA9JHtpcH1gKTsgfVxuICAgIGlmIChpY2NpZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBpY2NpZD0ke2ljY2lkfWApOyB9XG4gICAgaWYgKGltc2kgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgaW1zaT0ke2ltc2l9YCk7IH1cbiAgICBpZiAobXNpc2RuICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYG1zaXNkbj0ke21zaXNkbn1gKTsgfVxuICAgIGlmIChpbWVpICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGltZWk9JHtpbWVpfWApOyB9XG4gICAgaWYgKG5hbWUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgbmFtZT0ke25hbWV9YCk7IH1cbiAgICBpZiAob3BlcmF0b3IgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgb3BlcmF0b3I9JHtvcGVyYXRvcn1gKTsgfVxuICAgIGlmIChsYWJlbCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBsYWJlbD0ke2xhYmVsfWApOyB9XG4gICAgaWYgKHRhZyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0YWc9JHt0YWd9YCk7IH1cbiAgICBpZiAoY291bnRyeSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBjb3VudHJ5PSR7Y291bnRyeX1gKTsgfVxuICAgIGlmIChjaXR5ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGNpdHk9JHtjaXR5fWApOyB9XG4gICAgaWYgKHN0cmVldCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdHJlZXQ9JHtzdHJlZXR9YCk7IH1cbiAgICBpZiAocG9zdGFsICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBvc3RhbD0ke3Bvc3RhbH1gKTsgfVxuICAgIGlmIChsb24gIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgbG9uPSR7bG9ufWApOyB9XG4gICAgaWYgKGxhdCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBsYXQ9JHtsYXR9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QudXBsb2FkKGZpbGUsYCR7dGhpcy5iYXNlVXJsfS91cGxvYWRgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgbGlzdCBvZiBkZXZpY2VzIGJ5IEluc2lnaHQgaWQgcXVlcnlcbiAgICovXG4gIGZpbmRCeUluc2lnaHRDb250ZXh0KHN0cmVhbUlkPzogc3RyaW5nLCBpbnNpZ2h0SWQ/OiBzdHJpbmcsIGZyb20/OiBudW1iZXIsIHRvPzogbnVtYmVyLCBzb3J0Pzogc3RyaW5nLCBwYWdlPzogbnVtYmVyLCBzaXplPzogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFyYW1zID0gW107XHRcdFxuICAgIGlmIChzdHJlYW1JZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdHJlYW1JZD0ke3N0cmVhbUlkfWApOyB9XG4gICAgaWYgKGluc2lnaHRJZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBpbnNpZ2h0SWQ9JHtpbnNpZ2h0SWR9YCk7IH1cbiAgICBpZiAoZnJvbSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmcm9tPSR7ZnJvbX1gKTsgfVxuICAgIGlmICh0byAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0bz0ke3RvfWApOyB9XG4gICAgaWYgKHNvcnQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc29ydD0ke3NvcnR9YCk7IH1cbiAgICBpZiAocGFnZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYWdlPSR7cGFnZX1gKTsgfVxuICAgIGlmIChzaXplICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNpemU9JHtzaXplfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldDxFbnRpdGllc1Jlc3BvbnNlPERldmljZT4+KGAke3RoaXMuYmFzZVVybH0vZmluZC1ieS1pbnNpZ2h0LWNvbnRleHRgLCAuLi5wYXJhbXMpO1xuICB9XG5cbn1cbiJdfQ==