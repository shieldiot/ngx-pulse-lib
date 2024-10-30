import { BaseEntity } from '../base';
import { UserTypeCode } from '../enums';
export declare class AuditLog extends BaseEntity {
    accountId: string;
    userId: string;
    userType: UserTypeCode;
    action: string;
    itemType: string;
    itemId: string;
    itemName: string;
    beforeChange: string;
    afterChange: string;
}
