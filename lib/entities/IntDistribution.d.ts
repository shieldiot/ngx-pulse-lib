import { IntKeyValue } from '../common/IntKeyValue';
export declare class IntDistribution {
    name: string;
    total: number;
    values: IntKeyValue[];
    constructor(name?: string, total?: number, values?: IntKeyValue[]);
}
