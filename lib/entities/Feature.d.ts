import { BaseEntity } from '../base';
import { FeatureCode } from '../enums';
export declare class Feature extends BaseEntity {
    code: FeatureCode;
    name: string;
}
