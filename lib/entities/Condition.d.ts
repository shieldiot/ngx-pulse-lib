import { OperatorCode } from '../enums';
export declare class Condition {
    field: string;
    operator: OperatorCode;
    values: number[];
    strings: string[];
    constructor(field?: string, operator?: OperatorCode, values?: number[], strings?: string[]);
}
