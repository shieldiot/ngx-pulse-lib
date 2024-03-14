import { DeviceTypeCode } from '../enums/DeviceTypeCode';
import { StringKeyValue } from '../common/StringKeyValue';
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
