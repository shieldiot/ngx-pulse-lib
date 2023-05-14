import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class RestUtil {
    private http;
    constructor(http: HttpClient);
    upload(file: File, url: string, ...params: string[]): Observable<import("@angular/common/http").HttpEvent<unknown>>;
    download(fileName: string, url: string, ...params: string[]): Observable<import("@angular/common/http").HttpEvent<Blob>>;
    download2(fileName: string, url: string, ...params: string[]): void;
    get<T>(url: string, ...params: string[]): Observable<T>;
    post<T>(url: string, body?: string, ...params: string[]): Observable<T>;
    put<T>(url: string, body?: string, ...params: string[]): Observable<T>;
    delete<T>(url: string, ...params: string[]): Observable<T>;
    private buildUrl;
    private getMimeType;
    static ɵfac: i0.ɵɵFactoryDeclaration<RestUtil, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RestUtil>;
}
