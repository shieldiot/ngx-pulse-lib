import { BaseEntity } from '../entities/BaseEntity';
export declare class RuleTemplate extends BaseEntity {
    name: string;
    description: string;
    context: string;
    matchAll: string[];
    matchAny: string[];
}
