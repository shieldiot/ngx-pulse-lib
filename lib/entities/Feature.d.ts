import { BaseEntity } from '../entities/BaseEntity';
import { FeatureCode } from '../enums/FeatureCode';
export declare class Feature extends BaseEntity {
    code: FeatureCode;
    name: string;
}
