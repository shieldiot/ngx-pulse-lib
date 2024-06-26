import { BaseEntity } from '../entities/BaseEntity';
import { IntegrationTypeCode } from '../enums/IntegrationTypeCode';
import { IntegrationTriggerCode } from '../enums/IntegrationTriggerCode';
import { HttpMethodCode } from '../enums/HttpMethodCode';
import { StringKeyValue } from '../common/StringKeyValue';
import { EventTypeCode } from '../enums/EventTypeCode';
import { SeverityTypeCode } from '../enums/SeverityTypeCode';
import { DeviceActionCode } from '../enums/DeviceActionCode';
export declare class Integration extends BaseEntity {
    accountId: string;
    streamId: string;
    type: IntegrationTypeCode;
    trigger: IntegrationTriggerCode;
    name: string;
    enabled: boolean;
    host: string;
    port: number;
    user: string;
    password: string;
    url: string;
    method: HttpMethodCode;
    headers: StringKeyValue[];
    mimeType: string;
    recipients: string[];
    subject: string;
    body: string;
    from: string;
    eventTypes: EventTypeCode[];
    eventSeverity: SeverityTypeCode;
    preventiveAction: DeviceActionCode;
}
