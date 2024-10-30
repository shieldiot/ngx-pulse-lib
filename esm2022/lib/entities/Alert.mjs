import { BaseEntity } from '../base';
// Cyber event entity
// The Event entity is created by multiple services (e.g. ip reputation, static rules, anomaly detection) by analyzing network statistics (usage and session data) and related to specific IP address.
// Since it is not always clear what is the actual device with the IP address (RADIUS or DIAMETER logs can be provided later), we should be able to create event without device Id and assign the device Id later on.
// For this purpose, when the device Id is not provided, the event will be created with the `unknown` value in the deviceId field and the eventId must follow the following pattern: streamId:timestamp:ip_address
export class Alert extends BaseEntity {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWxlcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtcHVsc2UtbGliL3NyYy9saWIvZW50aXRpZXMvQWxlcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUlyQyxxQkFBcUI7QUFDckIsc01BQXNNO0FBQ3RNLHFOQUFxTjtBQUNyTixrTkFBa047QUFDbE4sTUFBTSxPQUFPLEtBQU0sU0FBUSxVQUFVO0NBd0VwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNldmVyaXR5VHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcyc7XG5pbXBvcnQgeyBHZW9EYXRhIH0gZnJvbSAnLi4vY29tbW9uJztcbmltcG9ydCB7IFN0cmluZ0tleVZhbHVlIH0gZnJvbSAnLi4vY29tbW9uJztcbmltcG9ydCB7IEV2ZW50VHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcyc7XG5pbXBvcnQgeyBFdmVudFN0YXR1c0NvZGUgfSBmcm9tICcuLi9lbnVtcyc7XG5pbXBvcnQgeyBSdWxlVHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcyc7XG5pbXBvcnQgeyBFdmVudENhdGVnb3J5Q29kZSB9IGZyb20gJy4uL2VudW1zJztcbmltcG9ydCB7IFRyYWZmaWNEaXJlY3Rpb25Db2RlIH0gZnJvbSAnLi4vZW51bXMnO1xuaW1wb3J0IHsgQmFzZUVudGl0eSB9IGZyb20gJy4uL2Jhc2UnO1xuXG5cblxuLy8gQ3liZXIgZXZlbnQgZW50aXR5XG4vLyBUaGUgRXZlbnQgZW50aXR5IGlzIGNyZWF0ZWQgYnkgbXVsdGlwbGUgc2VydmljZXMgKGUuZy4gaXAgcmVwdXRhdGlvbiwgc3RhdGljIHJ1bGVzLCBhbm9tYWx5IGRldGVjdGlvbikgYnkgYW5hbHl6aW5nIG5ldHdvcmsgc3RhdGlzdGljcyAodXNhZ2UgYW5kIHNlc3Npb24gZGF0YSkgYW5kIHJlbGF0ZWQgdG8gc3BlY2lmaWMgSVAgYWRkcmVzcy5cbi8vIFNpbmNlIGl0IGlzIG5vdCBhbHdheXMgY2xlYXIgd2hhdCBpcyB0aGUgYWN0dWFsIGRldmljZSB3aXRoIHRoZSBJUCBhZGRyZXNzIChSQURJVVMgb3IgRElBTUVURVIgbG9ncyBjYW4gYmUgcHJvdmlkZWQgbGF0ZXIpLCB3ZSBzaG91bGQgYmUgYWJsZSB0byBjcmVhdGUgZXZlbnQgd2l0aG91dCBkZXZpY2UgSWQgYW5kIGFzc2lnbiB0aGUgZGV2aWNlIElkIGxhdGVyIG9uLlxuLy8gRm9yIHRoaXMgcHVycG9zZSwgd2hlbiB0aGUgZGV2aWNlIElkIGlzIG5vdCBwcm92aWRlZCwgdGhlIGV2ZW50IHdpbGwgYmUgY3JlYXRlZCB3aXRoIHRoZSBgdW5rbm93bmAgdmFsdWUgaW4gdGhlIGRldmljZUlkIGZpZWxkIGFuZCB0aGUgZXZlbnRJZCBtdXN0IGZvbGxvdyB0aGUgZm9sbG93aW5nIHBhdHRlcm46IHN0cmVhbUlkOnRpbWVzdGFtcDppcF9hZGRyZXNzXG5leHBvcnQgY2xhc3MgQWxlcnQgZXh0ZW5kcyBCYXNlRW50aXR5IHtcbiBcbiAgICAvLyBBY2NvdW50IElkIFxuICAgIHB1YmxpYyBhY2NvdW50SWQ6IHN0cmluZztcbiBcbiAgICAvLyBTdHJlYW0gSWQgXG4gICAgcHVibGljIHN0cmVhbUlkOiBzdHJpbmc7XG4gXG4gICAgLy8gRGV2aWNlIElkIFxuICAgIHB1YmxpYyBkZXZpY2VJZDogc3RyaW5nO1xuIFxuICAgIC8vIFN0YXJ0IHdpbmRvdyB0aW1lIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgc3RhcnRUaW1lOiBudW1iZXI7XG4gXG4gICAgLy8gRW5kIHdpbmRvdyB0aW1lIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgZW5kVGltZTogbnVtYmVyO1xuIFxuICAgIC8vIEV2ZW50IHR5cGU6IFVOREVGSU5FRCB8IERET1MgfCBQT1JUX1NDQU5OSU5HIHwgREVWSUNFX1RBS0VPVkVSIC4uLiBcbiAgICBwdWJsaWMgdHlwZTogRXZlbnRUeXBlQ29kZTtcbiBcbiAgICAvLyBFdmVudCBzZXZlcml0eSBsZXZlbDogVU5ERUZJTkVEIHwgTE9XIHwgTUVESVVNIHwgSElHSCB8IENSSVRJQ0FMIFxuICAgIHB1YmxpYyBzZXZlcml0eTogU2V2ZXJpdHlUeXBlQ29kZTtcbiBcbiAgICAvLyBFdmVudCBjdXJyZW50IHNlY3VyaXR5IHNjb3JlIFxuICAgIHB1YmxpYyBzY29yZTogbnVtYmVyO1xuIFxuICAgIC8vIFByb2JhYmlsaXR5IHNjb3JlIGJ5IElQIHJlcHV0YXRpb24gZW5naW5lIFxuICAgIHB1YmxpYyBwcm9iYWJpbGl0eTogbnVtYmVyO1xuIFxuICAgIC8vIEV2ZW50IHdvcmtmbG93IHN0YXR1czogVU5ERUZJTkVEIHwgTkVXIHwgT1BFTiAuLi4gXG4gICAgcHVibGljIHN0YXR1czogRXZlbnRTdGF0dXNDb2RlO1xuIFxuICAgIC8vIFJ1bGUgdHlwZTogVU5ERUZJTkVEIHwgU1VTUElDSU9VU19JUCB8IFNUQVRJQyB8IEFOT01BTFkgXG4gICAgcHVibGljIHJ1bGVUeXBlOiBSdWxlVHlwZUNvZGU7XG4gXG4gICAgLy8gU3RhdGljIFJ1bGUgaWQgKGluIGNhc2Ugb2YgU1VTUElDSU9VU19JUCwgaXQgc2hvdWxkIGJlIHRoZSBJUCB2YWx1ZSkgXG4gICAgcHVibGljIHJ1bGVJZDogc3RyaW5nO1xuIFxuICAgIC8vIFRoZSBhbGxvY2F0ZWQgSVAgZm9yIHRoZSBkZXZpY2UgYXQgdGhlIHRpbWUgb2YgdGhlIGV2ZW50IG9jY3VycmVuY2UgXG4gICAgcHVibGljIHNvdXJjZUlwOiBzdHJpbmc7XG4gXG4gICAgLy8gVGFyZ2V0IElQIGFkZHJlc3MgZm9yIHNvbWUgb2YgdGhlIGV2ZW50cyAoZS5nLiBzdXNwaWNpb3VzIElQKSBcbiAgICBwdWJsaWMgdGFyZ2V0SXA6IHN0cmluZztcbiBcbiAgICAvLyBHZW9JUCBpbmZvcm1hdGlvbiBiYXNlZCBvbiBNYXhNaW5kIGRhdGFiYXNlIFxuICAgIHB1YmxpYyB0YXJnZXRMb2NhdGlvbjogR2VvRGF0YTtcbiBcbiAgICAvLyBFdmVudCBkZXNjcmlwdGlvbiBcbiAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZztcbiBcbiAgICAvLyBBZGRpdGlvbmFsIEV2ZW50IHRhZ3MgXG4gICAgcHVibGljIHRhZ3M6IHN0cmluZ1tdO1xuIFxuICAgIC8vIExpc3Qgb2YgY3VzdG9tIGF0dHJpYnV0ZXMgKGtleS12YWx1ZSBwYWlycykgXG4gICAgcHVibGljIGxhYmVsczogU3RyaW5nS2V5VmFsdWVbXTtcbiBcbiAgICAvLyBFdmVudCBjYXRlZ29yeSBcbiAgICBwdWJsaWMgY2F0ZWdvcnk6IEV2ZW50Q2F0ZWdvcnlDb2RlO1xuIFxuICAgIC8vIFJlY29tbWVuZGVkIGFjdGlvbiBkZXNjcmlwdGlvbiB0byBhcHBseSBvbiB0aGUgZGV2aWNlIFxuICAgIHB1YmxpYyByZWNvbW1lbmRlZEFjdGlvbjogc3RyaW5nO1xuIFxuICAgIC8vIERlbm90ZXMgbmV0d29yayB0cmFmZmljIGRpcmVjdGlvbjogVU5ERUZJTkVEIHwgSU5CT1VORCB8IE9VVEJPVU5EIFxuICAgIHB1YmxpYyB0cmFmZmljRGlyZWN0aW9uOiBUcmFmZmljRGlyZWN0aW9uQ29kZTtcbiBcbiAgICAvLyBDb250YWlucyBjb25maWRlbmNlIHNjb3JlIG9mIG1hbGljaW91cyBJUCBkZXRlY3Rpb24uIFZhbHVlIHJhbmdlOiAwLTEwMCBcbiAgICBwdWJsaWMgY29uZmlkZW5jZVNjb3JlOiBudW1iZXI7XG4gXG4gICAgLy8gRXZlbnQgb2NjdXJyZW5jZXMgY291bnQgXG4gICAgcHVibGljIG9jY3VycmVuY2VzQ291bnQ6IGJvb2xlYW47XG4gXG4gXG59XG5cblxuIl19