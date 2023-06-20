import { DeviceTypeCode } from '../enums/DeviceTypeCode';
export declare class Node {
    id: string;
    name: string;
    ip: string;
    type: DeviceTypeCode;
    constructor(id?: string, name?: string, ip?: string, type?: DeviceTypeCode);
}
