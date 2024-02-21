import { FeatureCode } from '../enums/FeatureCode';
import { BaseEntity } from '../entities/BaseEntity';
export declare class Feature extends BaseEntity {
    code: FeatureCode;
    name: string;
}
