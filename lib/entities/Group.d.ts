import { BaseEntity } from '../base';
import { AccountRole } from '../common';
export declare class Group extends BaseEntity {
    name: string;
    externalId: string;
    email: string;
    accountRoles: AccountRole[];
}
