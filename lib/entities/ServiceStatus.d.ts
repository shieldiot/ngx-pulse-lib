import { BaseEntity } from '../entities/BaseEntity';
export declare class ServiceStatus extends BaseEntity {
    serviceName: string;
    accountId: string;
    metrics: any;
}
