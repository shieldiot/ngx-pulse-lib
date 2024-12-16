import { Location } from '../common';
export declare class MapBounds {
    deviceId: string;
    southwest: Location;
    northeast: Location;
    constructor(deviceId?: string, southwest?: Location, northeast?: Location);
}
