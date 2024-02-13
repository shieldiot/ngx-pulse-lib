import { BaseEntity } from '../entities/BaseEntity';
import { FeatureCode } from '../enums/FeatureCode';
export declare class FeaturesGroup extends BaseEntity {
    name: string;
    features: FeatureCode[];
}
