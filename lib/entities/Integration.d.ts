import { IntegrationTypeCode } from '../enums/IntegrationTypeCode';
import { StringKeyValue } from '../common/StringKeyValue';
import { EventTypeCode } from '../enums/EventTypeCode';
import { SeverityTypeCode } from '../enums/SeverityTypeCode';
import { BaseEntity } from '../entities/BaseEntity';
export declare class Integration extends BaseEntity {
    accountId: string;
    streamId: string;
    deviceId: string;
    type: IntegrationTypeCode;
    name: string;
    enabled: boolean;
    host: string;
    port: number;
    user: string;
    password: string;
    url: string;
    operation: string;
    headers: StringKeyValue[];
    mimeType: string;
    recipients: string[];
    subject: string;
    body: string;
    eventTypes: EventTypeCode[];
    ventSeverity: SeverityTypeCode;
}
