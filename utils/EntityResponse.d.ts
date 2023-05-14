import { BaseRestResponse } from './BaseRestResponse';
export declare class EntityResponse<T> extends BaseRestResponse {
    page: number;
    size: number;
    pages: number;
    total: number;
    entity: T;
}
