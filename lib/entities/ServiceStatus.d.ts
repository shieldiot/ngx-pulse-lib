import { BaseEntity } from '../entities/BaseEntity';
export declare class ServiceStatus extends BaseEntity {
    serviceName: string;
    hostName: string;
    accountId: string;
    metrics: any;
}
