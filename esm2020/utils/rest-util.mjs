import { Injectable } from '@angular/core';
import { HttpHeaders, HttpRequest } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
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
export class RestUtil {
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
}
RestUtil.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: RestUtil, deps: [{ token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
RestUtil.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: RestUtil });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: RestUtil, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.HttpClient }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC11dGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXB1bHNlLWxpYi9zcmMvdXRpbHMvcmVzdC11dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLFdBQVcsRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7O0FBRzVFLE1BQU0sV0FBVyxHQUFHO0lBQ2xCLE9BQU8sRUFBRSxJQUFJLFdBQVcsQ0FBQztRQUN2QixjQUFjLEVBQUcsa0JBQWtCO1FBQ25DLGVBQWUsRUFBRSxvQkFBb0I7UUFDckMsNkJBQTZCLEVBQUUsR0FBRztRQUNsQyw4QkFBOEIsRUFBRSwyTUFBMk07UUFDM08sZ0NBQWdDLEVBQUUsOEVBQThFO0tBQ2pILENBQUM7Q0FDSCxDQUFDO0FBR0YsNERBQTREO0FBRTVELE1BQU0sT0FBTyxRQUFRO0lBRW5CLG1EQUFtRDtJQUNuRCxZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQUksQ0FBQztJQUV6Qyx5REFBeUQ7SUFDekQsTUFBTSxDQUFJLElBQVUsRUFBRSxHQUFXLEVBQUUsR0FBRyxNQUFnQjtRQUVwRCxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBRWxELE1BQU0sUUFBUSxHQUFhLElBQUksUUFBUSxFQUFFLENBQUM7UUFDMUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU1QyxNQUFNLEdBQUcsR0FBRyxJQUFJLFdBQVcsQ0FBQyxNQUFNLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRTtZQUN6RCxjQUFjLEVBQUUsS0FBSztZQUNyQixZQUFZLEVBQUUsTUFBTTtTQUNyQixDQUFDLENBQUM7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LENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQ3BJLENBQUM7SUFFRCwyQ0FBMkM7SUFDbkMsV0FBVyxDQUFDLFFBQWdCO1FBQ2xDLHFEQUFxRDtRQUNyRCxJQUFJLFdBQVcsR0FBRyxrQkFBa0IsQ0FBQztRQUNyQyxJQUFJLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDMUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztTQUMxQjthQUFNLElBQUksUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNqRCxXQUFXLEdBQUcsVUFBVSxDQUFDO1NBQzFCO2FBQU0sSUFBSSxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2pELFdBQVcsR0FBRyxpQkFBaUIsQ0FBQztTQUNqQzthQUFNLElBQUksUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNsRCxXQUFXLEdBQUcsbUVBQW1FLENBQUE7U0FDbEY7UUFDRCxPQUFPLFdBQVcsQ0FBQTtJQUNwQixDQUFDOztzR0EzSFUsUUFBUTswR0FBUixRQUFROzRGQUFSLFFBQVE7a0JBRHBCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFJlcXVlc3QgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5cbmNvbnN0IGh0dHBPcHRpb25zID0ge1xuICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICdDb250ZW50LVR5cGUnOiAgJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICdDYWNoZS1Db250cm9sJzogJ25vLWNhY2hlLCBuby1zdG9yZScsXG4gICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJyxcbiAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycyc6ICdDb250ZW50LVR5cGUsIENvbnRlbnQtTGVuZ3RoLCBBY2NlcHQtRW5jb2RpbmcsIFgtQ1NSRi1Ub2tlbiwgWC1BUEktS0VZLCBYLUFDQ0VTUy1UT0tFTiwgWC1USU1FWk9ORSwgYWNjZXB0LCBvcmlnaW4sIENhY2hlLUNvbnRyb2wsIFgtUmVxdWVzdGVkLVdpdGgsIEF1dGhvcml6YXRpb24sIENvbnRlbnQtRGlzcG9zaXRpb24sIENvbnRlbnQtRmlsZW5hbWUnLFxuICAgICdBY2Nlc3MtQ29udHJvbC1FeHBvc2VkLUhlYWRlcnMnOiAnWC1BUEktS0VZLCBYLUFDQ0VTUy1UT0tFTiwgWC1USU1FWk9ORSwgQ29udGVudC1EaXNwb3NpdGlvbiwgQ29udGVudC1GaWxlbmFtZScsXG4gIH0pXG59O1xuXG5cbi8vIFV0aWxpdHkgY2xhc3MgZm9yIGFsbCBSRVNUIHNlcnZpY2VzIHdpdGggY29tbW9uIGZ1bmN0aW9uc1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJlc3RVdGlsIHtcblxuICAvLyBDb25zdHJ1Y3RvciB3aXRoIGluamVjdGVkIGF1dGhlbnRpY2F0aW9uIHNlcnZpY2VcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cblxuICAvLyBVcGxvYWQgaXMgSFRUUCBQT1NUIGFjdGlvbiBidXQgdGhlIGJvZHkgaXMgRmlsZSBvYmplY3RcbiAgdXBsb2FkPFQ+KGZpbGU6IEZpbGUsIHVybDogc3RyaW5nLCAuLi5wYXJhbXM6IHN0cmluZ1tdKSB7XG5cbiAgICBjb25zdCByZXNvdXJjZVVybCA9IHRoaXMuYnVpbGRVcmwodXJsLCAuLi5wYXJhbXMpO1xuXG4gICAgY29uc3QgZm9ybURhdGE6IEZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlS2V5JywgZmlsZSwgZmlsZS5uYW1lKTtcblxuICAgIGNvbnN0IHJlcSA9IG5ldyBIdHRwUmVxdWVzdCgnUE9TVCcsIHJlc291cmNlVXJsLCBmb3JtRGF0YSwge1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M6IGZhbHNlLFxuICAgICAgcmVzcG9uc2VUeXBlOiAnanNvbicsXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5yZXF1ZXN0PFQ+KHJlcSk7XG4gICAgLy9yZXR1cm4gdGhpcy5odHRwLnJlcXVlc3QocmVxKTtcbiAgfVxuXG4gIC8vIERvd25sb2FkIGlzIEhUVFAgR0VUIGFjdGlvbiBidXQgdGhlIGNvbnRlbnQgaXMgYmxvYlxuICBkb3dubG9hZChmaWxlTmFtZTogc3RyaW5nLCB1cmw6IHN0cmluZywgLi4ucGFyYW1zOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IHJlc291cmNlVXJsID0gdGhpcy5idWlsZFVybCh1cmwsIC4uLnBhcmFtcyk7XG5cbiAgICBsZXQgZG93bmxvYWRMaW5rID0gZmlsZU5hbWVcblxuICAgIC8vIGV4dHJhY3QgZmlsZSBuYW1lXG4gICAgcGFyYW1zLmZvckVhY2gocCA9PiB7XG4gICAgICBsZXQgYXJyID0gcC5zcGxpdCgnPScpO1xuICAgICAgaWYgKGFyci5sZW5ndGggPiAxKSB7XG4gICAgICAgIGlmIChhcnJbMF0udG9Mb3dlckNhc2UoKSA9PT0gJ2ZpbGVuYW1lJykge1xuICAgICAgICAgIGRvd25sb2FkTGluayA9IGFyclsxXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gU2V0IGNvbnRlbnQgdHlwZSBmb3I6IGpzb24gLyBjc3YgLyB4bWwgLyBwZGYgL3hzbHhcbiAgICBsZXQgY29udGVudFR5cGUgPSB0aGlzLmdldE1pbWVUeXBlKGRvd25sb2FkTGluayk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChyZXNvdXJjZVVybCwge1xuICAgICAgcmVzcG9uc2VUeXBlOiAnYmxvYicsXG4gICAgICByZXBvcnRQcm9ncmVzczogdHJ1ZSxcbiAgICAgIG9ic2VydmU6ICdldmVudHMnLFxuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6IGNvbnRlbnRUeXBlIH0pXG4gICAgfSk7XG4gIH1cblxuICAvLyBEb3dubG9hZDIgaXMgYW4gYWx0ZXJuYXRpdmUgb3B0aW9uIHRvIGRvd25sb2FkXG4gIGRvd25sb2FkMihmaWxlTmFtZTogc3RyaW5nLCB1cmw6IHN0cmluZywgLi4ucGFyYW1zOiBzdHJpbmdbXSkge1xuXG4gICAgbGV0IGRvd25sb2FkTGluayA9IGZpbGVOYW1lXG5cbiAgICAvLyBleHRyYWN0IGZpbGUgbmFtZVxuICAgIHBhcmFtcy5mb3JFYWNoKHAgPT4ge1xuICAgICAgbGV0IGFyciA9IHAuc3BsaXQoJz0nKTtcbiAgICAgIGlmIChhcnIubGVuZ3RoID4gMSkge1xuICAgICAgICBpZiAoYXJyWzBdLnRvTG93ZXJDYXNlKCkgPT09ICdmaWxlbmFtZScpIHtcbiAgICAgICAgICBkb3dubG9hZExpbmsgPSBhcnJbMV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGxldCBjb250ZW50VHlwZSA9IHRoaXMuZ2V0TWltZVR5cGUoZmlsZU5hbWUpO1xuXG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBsaW5rLmhyZWYgPSB0aGlzLmJ1aWxkVXJsKHVybCwgLi4ucGFyYW1zKTtcbiAgICBsaW5rLmRvd25sb2FkID0gZG93bmxvYWRMaW5rO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgbGluay5jbGljaygpO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobGluayk7XG5cbiAgfVxuXG4gIC8vIEhUVFAgR0VUIGFjdGlvblxuICBnZXQ8VD4odXJsOiBzdHJpbmcsIC4uLnBhcmFtczogc3RyaW5nW10pOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICBjb25zdCByZXNvdXJjZVVybCA9IHRoaXMuYnVpbGRVcmwodXJsLCAuLi5wYXJhbXMpO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFQ+KHJlc291cmNlVXJsLCBodHRwT3B0aW9ucylcbiAgfVxuXG4gIC8vIEhUVFAgUE9TVCBhY3Rpb25cbiAgcG9zdDxUPih1cmw6IHN0cmluZywgYm9keT86IHN0cmluZywgLi4ucGFyYW1zOiBzdHJpbmdbXSk6IE9ic2VydmFibGU8VD4ge1xuICAgIGNvbnN0IHJlc291cmNlVXJsID0gdGhpcy5idWlsZFVybCh1cmwsIC4uLnBhcmFtcyk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PFQ+KHJlc291cmNlVXJsLCBib2R5LCBodHRwT3B0aW9ucylcbiAgfVxuXG4gIC8vIEhUVFAgUFVUIGFjdGlvblxuICBwdXQ8VD4odXJsOiBzdHJpbmcsIGJvZHk/OiBzdHJpbmcsIC4uLnBhcmFtczogc3RyaW5nW10pOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICBjb25zdCByZXNvdXJjZVVybCA9IHRoaXMuYnVpbGRVcmwodXJsLCAuLi5wYXJhbXMpO1xuICAgIHJldHVybiB0aGlzLmh0dHAucHV0PFQ+KHJlc291cmNlVXJsLCBib2R5LCBodHRwT3B0aW9ucylcbiAgfVxuXG4gIC8vIEhUVFAgUEFUQ0ggYWN0aW9uXG4gIHBhdGNoPFQ+KHVybDogc3RyaW5nLCBib2R5Pzogc3RyaW5nLCAuLi5wYXJhbXM6IHN0cmluZ1tdKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgY29uc3QgcmVzb3VyY2VVcmwgPSB0aGlzLmJ1aWxkVXJsKHVybCwgLi4ucGFyYW1zKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBhdGNoPFQ+KHJlc291cmNlVXJsLCBib2R5LCBodHRwT3B0aW9ucylcbiAgfVxuXG4gIC8vIEhUVFAgREVMRVRFIGFjdGlvblxuICBkZWxldGU8VD4odXJsOiBzdHJpbmcsIC4uLnBhcmFtczogc3RyaW5nW10pOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICBjb25zdCByZXNvdXJjZVVybCA9IHRoaXMuYnVpbGRVcmwodXJsLCAuLi5wYXJhbXMpO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlPFQ+KHJlc291cmNlVXJsLCBodHRwT3B0aW9ucylcbiAgfVxuXG4gIC8vIENvbnN0cnVjdCBVUkwgd2l0aCBwYXJhbWV0ZXJzXG4gIHByaXZhdGUgYnVpbGRVcmwodXJsOiBzdHJpbmcsIC4uLnBhcmFtczogc3RyaW5nW10pIHtcbiAgICByZXR1cm4gKHBhcmFtcyA9PT0gbnVsbCkgPyB1cmwgOiAocGFyYW1zLmxlbmd0aCA9PT0gMCkgPyB1cmwgOiBgJHt1cmx9JHtwYXJhbXMgJiYgcGFyYW1zLmxlbmd0aCA+IDAgPyAnPycrcGFyYW1zLmpvaW4oJyYnKSA6ICcnfWA7XG4gIH1cblxuICAvLyBSZXR1cm4gTUlNRSB0eXBlIGJhc2VkIG9uIGZpbGUgZXh0ZW5zaW9uXG4gIHByaXZhdGUgZ2V0TWltZVR5cGUoZmlsZU5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgLy8gU2V0IGNvbnRlbnQgdHlwZSBmb3I6IGpzb24gLyBjc3YgLyB4bWwgLyBwZGYgL3hzbHhcbiAgICBsZXQgY29udGVudFR5cGUgPSAnYXBwbGljYXRpb24vanNvbic7XG4gICAgaWYgKGZpbGVOYW1lLnRvTG93ZXJDYXNlKCkuZW5kc1dpdGgoJ2NzdicpKSB7XG4gICAgICBjb250ZW50VHlwZSA9ICd0ZXh0L2Nzdic7XG4gICAgfSBlbHNlIGlmIChmaWxlTmFtZS50b0xvd2VyQ2FzZSgpLmVuZHNXaXRoKCd4bWwnKSkge1xuICAgICAgY29udGVudFR5cGUgPSAndGV4dC94bWwnO1xuICAgIH0gZWxzZSBpZiAoZmlsZU5hbWUudG9Mb3dlckNhc2UoKS5lbmRzV2l0aCgncGRmJykpIHtcbiAgICAgIGNvbnRlbnRUeXBlID0gJ2FwcGxpY2F0aW9uL3BkZic7XG4gICAgfSBlbHNlIGlmIChmaWxlTmFtZS50b0xvd2VyQ2FzZSgpLmVuZHNXaXRoKCd4bHN4JykpIHtcbiAgICAgIGNvbnRlbnRUeXBlID0gXCJhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQuc3ByZWFkc2hlZXRtbC5zaGVldFwiXG4gICAgfVxuICAgIHJldHVybiBjb250ZW50VHlwZVxuICB9XG59XG4iXX0=