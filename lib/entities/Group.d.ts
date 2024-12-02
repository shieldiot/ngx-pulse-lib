import { AccountRole } from '../common';
import { BaseEntity } from '../base';
export declare class Group extends BaseEntity {
    name: string;
    externalId: string;
    email: string;
    accountRoles: AccountRole[];
}
