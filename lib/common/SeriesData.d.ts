import { StringKeyIntValue } from '../common';
import { Interval } from '../common';
export declare class SeriesData {
    interval: Interval;
    values: StringKeyIntValue[];
    constructor(interval?: Interval, values?: StringKeyIntValue[]);
}
