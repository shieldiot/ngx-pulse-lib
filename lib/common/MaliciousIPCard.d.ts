import { IntDistribution } from '../entities/IntDistribution';
export declare class MaliciousIPCard {
    maliciousIp: string;
    maliciousIpDns: string;
    countryCode: string;
    ipDescription: string;
    lastEventTime: number;
    attackCategories: string[];
    numberOfDevices: number;
    eventsBySeverityBreakdown: IntDistribution;
    constructor(maliciousIp?: string, maliciousIpDns?: string, countryCode?: string, ipDescription?: string, lastEventTime?: number, attackCategories?: string[], numberOfDevices?: number, eventsBySeverityBreakdown?: IntDistribution);
}
