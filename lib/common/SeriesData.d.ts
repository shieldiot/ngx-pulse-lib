import { Interval } from '../common';
import { StringKeyIntValue } from '../common';
export declare class SeriesData {
    interval: Interval;
    values: StringKeyIntValue[];
    constructor(interval?: Interval, values?: StringKeyIntValue[]);
}
