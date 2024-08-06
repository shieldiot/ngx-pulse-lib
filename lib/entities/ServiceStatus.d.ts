import { BaseEntity } from '../base';
export declare class ServiceStatus extends BaseEntity {
    serviceName: string;
    hostName: string;
    startTime: number;
    accountId: string;
    metrics: any;
}
