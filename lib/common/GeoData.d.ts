import { Location } from '../common/Location';
export declare class GeoData {
    country_iso_code: string;
    country_name: string;
    region_iso_code: string;
    region_name: string;
    city_name: string;
    location: Location;
    constructor(countryIsoCode?: string, countryName?: string, regionIsoCode?: string, regionName?: string, cityName?: string, location?: Location);
}
