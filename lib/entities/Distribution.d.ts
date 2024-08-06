import { Tuple } from '../common';
export declare class Distribution {
    name: string;
    total: number;
    values: Tuple[];
    constructor(name?: string, total?: number, values?: Tuple[]);
}
