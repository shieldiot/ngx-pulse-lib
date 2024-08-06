import { StringKeyValue } from '../common';
import { BaseEntity } from '../base';
export declare class Radius extends BaseEntity {
    source: string;
    accountId: string;
    streamId: string;
    assignedOn: number;
    mac: string;
    ip: string;
    sid: string;
    eid: string;
    country: string;
    operator: string;
    attributes: StringKeyValue[];
}
