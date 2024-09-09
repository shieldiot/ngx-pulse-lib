import { BaseEntity } from '../base';
import { FeatureCode } from '../enums';
export declare class FeaturesGroup extends BaseEntity {
    name: string;
    features: FeatureCode[];
}
