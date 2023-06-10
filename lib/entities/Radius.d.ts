import { StringKeyValue } from '../common/StringKeyValue';
import { BaseEntity } from '../entities/BaseEntity';
export declare class Radius extends BaseEntity {
    source: string;
    accountId: string;
    streamId: string;
    assignedOn: number;
    mac: string;
    ip: string;
    sid: string;
    eid: string;
    attributes: StringKeyValue[];
}
