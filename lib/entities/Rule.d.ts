import { BaseEntity } from '../entities/BaseEntity';
export declare class Rule extends BaseEntity {
    accountId: string;
    streamId: string;
    name: string;
    description: string;
    isSystemRule: boolean;
    isActiveRule: boolean;
    context: string;
    matchAll: string[];
    matchAny: string[];
}
