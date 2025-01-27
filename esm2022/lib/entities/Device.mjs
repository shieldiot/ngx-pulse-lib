import { BaseEntity } from '../base';
// Device entity is an IoT device representation with attributes and state
export class Device extends BaseEntity {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGV2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXB1bHNlLWxpYi9zcmMvbGliL2VudGl0aWVzL0RldmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBUXJDLDBFQUEwRTtBQUMxRSxNQUFNLE9BQU8sTUFBTyxTQUFRLFVBQVU7Q0F3RXJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU0lNIH0gZnJvbSAnLi4vZW50aXRpZXMnO1xuaW1wb3J0IHsgR2VvRGF0YSB9IGZyb20gJy4uL2NvbW1vbic7XG5pbXBvcnQgeyBCYXNlRW50aXR5IH0gZnJvbSAnLi4vYmFzZSc7XG5pbXBvcnQgeyBEZXZpY2VUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zJztcbmltcG9ydCB7IERldmljZVN0YXR1c0NvZGUgfSBmcm9tICcuLi9lbnVtcyc7XG5pbXBvcnQgeyBTdHJpbmdLZXlWYWx1ZSB9IGZyb20gJy4uL2NvbW1vbic7XG5pbXBvcnQgeyBEZXZpY2VBY3Rpb25Db2RlIH0gZnJvbSAnLi4vZW51bXMnO1xuXG5cblxuLy8gRGV2aWNlIGVudGl0eSBpcyBhbiBJb1QgZGV2aWNlIHJlcHJlc2VudGF0aW9uIHdpdGggYXR0cmlidXRlcyBhbmQgc3RhdGVcbmV4cG9ydCBjbGFzcyBEZXZpY2UgZXh0ZW5kcyBCYXNlRW50aXR5IHtcbiBcbiAgICAvLyBBY2NvdW50IElkIFxuICAgIHB1YmxpYyBhY2NvdW50SWQ6IHN0cmluZztcbiBcbiAgICAvLyBTdHJlYW0gSWQgXG4gICAgcHVibGljIHN0cmVhbUlkOiBzdHJpbmc7XG4gXG4gICAgLy8gVGhlIGRldmljZSBpZGVudGl0eSBpbiB0aGUgZXh0ZXJuYWwgc3lzdGVtICh1c2VkIGZvciBpbnRlZ3JhdGlvbikgXG4gICAgcHVibGljIGV4dGVybmFsSWQ6IHN0cmluZztcbiBcbiAgICAvLyBEZXZpY2UgbmFtZSBcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xuIFxuICAgIC8vIERldmljZSBkZXNjcmlwdGlvbiBcbiAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZztcbiBcbiAgICAvLyBDb3VudHJ5IG5hbWUgXG4gICAgcHVibGljIGNvdW50cnk6IHN0cmluZztcbiBcbiAgICAvLyBNb2JpbGUgbmV0d29yayBvcGVyYXRvciBuYW1lIFxuICAgIHB1YmxpYyBvcGVyYXRvcjogc3RyaW5nO1xuIFxuICAgIC8vIERldmljZSB0eXBlOiBVTkRFRklORUQgfCBDT05UUk9MTEVSIHwgTUVURVIgfCBTRU5TT1IgLi4uIFxuICAgIHB1YmxpYyB0eXBlOiBEZXZpY2VUeXBlQ29kZTtcbiBcbiAgICAvLyBEZXZpY2Ugc3RhdHVzOiBVTkRFRklORUQgfCBQRU5ESU5HIHwgQUNUSVZFIHwgIElOQUNUSVZFIHwgU1VTUEVOREVEIFxuICAgIHB1YmxpYyBzdGF0dXM6IERldmljZVN0YXR1c0NvZGU7XG4gXG4gICAgLy8gRGV2aWNlIGxhc3QgYWN0aXZpdHkgdGltZXN0YW1wIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgbGFzdEFjdGl2aXR5OiBudW1iZXI7XG4gXG4gICAgLy8gRGV2aWNlIE1BQyBhZGRyZXNzIFxuICAgIHB1YmxpYyBtYWM6IHN0cmluZztcbiBcbiAgICAvLyBEZXZpY2UgSVAgYWRkcmVzcyAoSVB2NCBvciBJUHY2KSBcbiAgICBwdWJsaWMgaXA6IHN0cmluZztcbiBcbiAgICAvLyBEZXZpY2UgbW9iaWxlIHN1YnNjcmliZXIgaWQgKElNU0kgb3IgU1VQSSBmb3IgNUcpIFxuICAgIHB1YmxpYyBzaWQ6IHN0cmluZztcbiBcbiAgICAvLyBEZXZpY2UgbW9iaWxlIGVxdWlwbWVudCBpZCAoSU1FSSBvciBQRUkgZm9yIDVHKSBcbiAgICBwdWJsaWMgZWlkOiBzdHJpbmc7XG4gXG4gICAgLy8gRGV2aWNlIGN1cnJlbnQgc2VjdXJpdHkgc2NvcmUgXG4gICAgcHVibGljIHNjb3JlOiBudW1iZXI7XG4gXG4gICAgLy8gTGlzdCBvZiBkZXZpY2UgdGFncyBcbiAgICBwdWJsaWMgdGFnczogc3RyaW5nW107XG4gXG4gICAgLy8gQ3VzdG9tIGF0dHJpYnV0ZXMgKGtleS12YWx1ZSBwYWlycykgXG4gICAgcHVibGljIGxhYmVsczogU3RyaW5nS2V5VmFsdWVbXTtcbiBcbiAgICAvLyBOdW1iZXIgb2YgZXZlbnRzIGZvciB0aGUgdGltZSBwZXJpb2QgKGNhbGN1bGF0ZWQgZmllbGQpIFxuICAgIHB1YmxpYyBldmVudENvdW50OiBudW1iZXI7XG4gXG4gICAgLy8gQWN0aW9uIGFwcGxpZWQgb24gdGhlIGRldmljZSBcbiAgICBwdWJsaWMgYWN0aW9uQXBwbGllZDogRGV2aWNlQWN0aW9uQ29kZTtcbiBcbiAgICAvLyBXaG8gYXBwbGllZCB0aGUgYWN0aW9uICh1c2VyIGlkKSBcbiAgICBwdWJsaWMgYWN0aW9uQXBwbGllZEJ5OiBzdHJpbmc7XG4gXG4gICAgLy8gV2hlbiBhY3Rpb24gd2FzIGFwcGxpZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyBhY3Rpb25BcHBsaWVkT246IG51bWJlcjtcbiBcbiAgICAvLyBMaXN0IG9mIFNJTSBjYXJkcyBhc3NvY2lhdGVkIHdpdGggdGhlIGRldmljZSBcbiAgICBwdWJsaWMgc2ltQ2FyZHM6IFNJTVtdO1xuIFxuICAgIC8vIEdlb0lQIGluZm9ybWF0aW9uIGJhc2VkIG9uIE1heE1pbmQgZGF0YWJhc2UgZm9yIGRldmljZSBhZGRyZXNzIFxuICAgIHB1YmxpYyBhZGRyZXNzOiBHZW9EYXRhO1xuIFxuIFxufVxuXG5cbiJdfQ==