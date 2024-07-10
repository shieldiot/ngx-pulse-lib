import { AccountRole } from '../common/AccountRole';
import { BaseEntity } from '../entities/BaseEntity';
export declare class Group extends BaseEntity {
    name: string;
    externalId: string;
    email: string;
    accountRoles: AccountRole[];
}
