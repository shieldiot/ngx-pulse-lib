import { SeverityTypeCode } from '../enums';
export declare class Link {
    id: string;
    name: string;
    src: string;
    dst: string;
    value: number;
    severity: SeverityTypeCode;
    eventCount: number;
    constructor(id?: string, name?: string, src?: string, dst?: string, value?: number, severity?: SeverityTypeCode, eventCount?: number);
}
