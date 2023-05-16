import { StringKeyValue } from '../common/StringKeyValue';
import { BaseEntity } from '../entities/BaseEntity';
export declare class Radius extends BaseEntity {
    accountId: string;
    streamId: string;
    timestamp: number;
    mac: string;
    ip: string;
    sid: string;
    eid: string;
    attributes: StringKeyValue[];
}
