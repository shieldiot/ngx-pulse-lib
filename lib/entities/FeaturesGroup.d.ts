import { FeatureCode } from '../enums';
import { BaseEntity } from '../base';
export declare class FeaturesGroup extends BaseEntity {
    name: string;
    features: FeatureCode[];
}
