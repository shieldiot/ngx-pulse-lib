import { StringKeyIntValue } from '../common/StringKeyIntValue';
import { Interval } from '../common/Interval';
export declare class SeriesData {
    interval: Interval;
    values: StringKeyIntValue[];
    constructor(interval?: Interval, values?: StringKeyIntValue[]);
}
