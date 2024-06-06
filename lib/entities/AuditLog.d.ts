import { UserTypeCode } from '../enums/UserTypeCode';
import { BaseEntity } from '../entities/BaseEntity';
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
