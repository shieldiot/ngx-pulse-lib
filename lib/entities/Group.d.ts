import { BaseEntity } from '../entities/BaseEntity';
import { AccountRole } from '../common/AccountRole';
export declare class Group extends BaseEntity {
    name: string;
    externalId: string;
    email: string;
    accountRoles: AccountRole[];
}
