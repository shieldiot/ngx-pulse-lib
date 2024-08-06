import { BaseEntity } from '../base';
export declare class DNSRecord extends BaseEntity {
    source: string;
    deviceId: string;
    deviceIp: string;
    accountId: string;
    streamId: string;
    startTime: number;
    endTime: number;
    fqdn: string;
    records: string[];
}
