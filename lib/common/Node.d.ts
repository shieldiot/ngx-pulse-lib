import { StringKeyValue } from '../common/StringKeyValue';
import { DeviceTypeCode } from '../enums/DeviceTypeCode';
export declare class Node {
    id: string;
    name: string;
    ip: string;
    type: DeviceTypeCode;
    score: number;
    tags: string[];
    labels: StringKeyValue[];
    eventCount: number;
    isGroup: boolean;
    deviceCount: number;
    constructor(id?: string, name?: string, ip?: string, type?: DeviceTypeCode, score?: number, tags?: string[], labels?: StringKeyValue[], eventCount?: number, isGroup?: boolean, deviceCount?: number);
}
