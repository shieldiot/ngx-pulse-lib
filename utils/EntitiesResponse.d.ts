import { BaseRestResponse } from './BaseRestResponse';
export declare class EntitiesResponse<T> extends BaseRestResponse {
    page: number;
    size: number;
    pages: number;
    total: number;
    list: T[];
}
