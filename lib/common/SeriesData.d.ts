import { Interval } from '../common/Interval';
import { StringKeyIntValue } from '../common/StringKeyIntValue';
export declare class SeriesData {
    interval: Interval;
    values: StringKeyIntValue[];
    constructor(interval?: Interval, values?: StringKeyIntValue[]);
}
