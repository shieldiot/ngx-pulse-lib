import { BaseEntity } from '../entities/BaseEntity';
export declare class ServiceStatus extends BaseEntity {
    serviceName: string;
    hostName: string;
    startTime: number;
    accountId: string;
    metrics: any;
}
