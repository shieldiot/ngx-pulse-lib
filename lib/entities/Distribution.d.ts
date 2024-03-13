import { Tuple } from '../common/Tuple';
export declare class Distribution {
    name: string;
    total: number;
    values: Tuple[];
    constructor(name?: string, total?: number, values?: Tuple[]);
}
