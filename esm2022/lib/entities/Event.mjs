import { BaseEntity } from '../base';
// Alert entity
// The Alert entity representing an aggregation of many Event occurrences of the same type on the same device in a fixed time period (30 days)
// The purpose of this aggregation is to avoid flooding the user with many (hundreds and thousands) of events of the same type
export class Event extends BaseEntity {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtcHVsc2UtbGliL3NyYy9saWIvZW50aXRpZXMvRXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQVNyQyxlQUFlO0FBQ2YsOElBQThJO0FBQzlJLDhIQUE4SDtBQUM5SCxNQUFNLE9BQU8sS0FBTSxTQUFRLFVBQVU7Q0E4RXBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRTdGF0dXNDb2RlIH0gZnJvbSAnLi4vZW51bXMnO1xuaW1wb3J0IHsgSW5kaWNhdG9yIH0gZnJvbSAnLi4vY29tbW9uJztcbmltcG9ydCB7IEV2ZW50Q2F0ZWdvcnlDb2RlIH0gZnJvbSAnLi4vZW51bXMnO1xuaW1wb3J0IHsgRXZlbnRPY2N1cnJlbmNlIH0gZnJvbSAnLi4vZW50aXRpZXMnO1xuaW1wb3J0IHsgVHJhZmZpY0RpcmVjdGlvbkNvZGUgfSBmcm9tICcuLi9lbnVtcyc7XG5pbXBvcnQgeyBCYXNlRW50aXR5IH0gZnJvbSAnLi4vYmFzZSc7XG5pbXBvcnQgeyBFdmVudFR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMnO1xuaW1wb3J0IHsgU2V2ZXJpdHlUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zJztcbmltcG9ydCB7IFJ1bGVUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zJztcbmltcG9ydCB7IEdlb0RhdGEgfSBmcm9tICcuLi9jb21tb24nO1xuaW1wb3J0IHsgU3RyaW5nS2V5VmFsdWUgfSBmcm9tICcuLi9jb21tb24nO1xuXG5cblxuLy8gQWxlcnQgZW50aXR5XG4vLyBUaGUgQWxlcnQgZW50aXR5IHJlcHJlc2VudGluZyBhbiBhZ2dyZWdhdGlvbiBvZiBtYW55IEV2ZW50IG9jY3VycmVuY2VzIG9mIHRoZSBzYW1lIHR5cGUgb24gdGhlIHNhbWUgZGV2aWNlIGluIGEgZml4ZWQgdGltZSBwZXJpb2QgKDMwIGRheXMpXG4vLyBUaGUgcHVycG9zZSBvZiB0aGlzIGFnZ3JlZ2F0aW9uIGlzIHRvIGF2b2lkIGZsb29kaW5nIHRoZSB1c2VyIHdpdGggbWFueSAoaHVuZHJlZHMgYW5kIHRob3VzYW5kcykgb2YgZXZlbnRzIG9mIHRoZSBzYW1lIHR5cGVcbmV4cG9ydCBjbGFzcyBFdmVudCBleHRlbmRzIEJhc2VFbnRpdHkge1xuIFxuICAgIC8vIEFjY291bnQgSWQgXG4gICAgcHVibGljIGFjY291bnRJZDogc3RyaW5nO1xuIFxuICAgIC8vIFN0cmVhbSBJZCBcbiAgICBwdWJsaWMgc3RyZWFtSWQ6IHN0cmluZztcbiBcbiAgICAvLyBEZXZpY2UgSWQgXG4gICAgcHVibGljIGRldmljZUlkOiBzdHJpbmc7XG4gXG4gICAgLy8gU3RhcnQgd2luZG93IHRpbWUgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyBzdGFydFRpbWU6IG51bWJlcjtcbiBcbiAgICAvLyBFbmQgd2luZG93IHRpbWUgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyBlbmRUaW1lOiBudW1iZXI7XG4gXG4gICAgLy8gRXZlbnQgdHlwZTogVU5ERUZJTkVEIHwgRERPUyB8IFBPUlRfU0NBTk5JTkcgfCBERVZJQ0VfVEFLRU9WRVIgLi4uIFxuICAgIHB1YmxpYyB0eXBlOiBFdmVudFR5cGVDb2RlO1xuIFxuICAgIC8vIEV2ZW50IHNldmVyaXR5IGxldmVsOiBVTkRFRklORUQgfCBMT1cgfCBNRURJVU0gfCBISUdIIHwgQ1JJVElDQUwgXG4gICAgcHVibGljIHNldmVyaXR5OiBTZXZlcml0eVR5cGVDb2RlO1xuIFxuICAgIC8vIEV2ZW50IGN1cnJlbnQgc2VjdXJpdHkgc2NvcmUgXG4gICAgcHVibGljIHNjb3JlOiBudW1iZXI7XG4gXG4gICAgLy8gUHJvYmFiaWxpdHkgc2NvcmUgYnkgSVAgcmVwdXRhdGlvbiBlbmdpbmUgXG4gICAgcHVibGljIHByb2JhYmlsaXR5OiBudW1iZXI7XG4gXG4gICAgLy8gRXZlbnQgd29ya2Zsb3cgc3RhdHVzOiBVTkRFRklORUQgfCBORVcgfCBPUEVOIC4uLiBcbiAgICBwdWJsaWMgc3RhdHVzOiBFdmVudFN0YXR1c0NvZGU7XG4gXG4gICAgLy8gTGlzdCBvZiBldmVudCBpbmRpY2F0b3JzIFxuICAgIHB1YmxpYyBpbmRpY2F0b3JzOiBJbmRpY2F0b3JbXTtcbiBcbiAgICAvLyBSdWxlIHR5cGU6IFVOREVGSU5FRCB8IFNVU1BJQ0lPVVNfSVAgfCBTVEFUSUMgfCBBTk9NQUxZIFxuICAgIHB1YmxpYyBydWxlVHlwZTogUnVsZVR5cGVDb2RlO1xuIFxuICAgIC8vIFN0YXRpYyBSdWxlIGlkIChpbiBjYXNlIG9mIFNVU1BJQ0lPVVNfSVAsIGl0IHNob3VsZCBiZSB0aGUgSVAgdmFsdWUpIFxuICAgIHB1YmxpYyBydWxlSWQ6IHN0cmluZztcbiBcbiAgICAvLyBUaGUgYWxsb2NhdGVkIElQIGZvciB0aGUgZGV2aWNlIGF0IHRoZSB0aW1lIG9mIHRoZSBldmVudCBvY2N1cnJlbmNlIFxuICAgIHB1YmxpYyBzb3VyY2VJcDogc3RyaW5nO1xuIFxuICAgIC8vIFRhcmdldCBJUCBhZGRyZXNzIGZvciBzb21lIG9mIHRoZSBldmVudHMgKGUuZy4gc3VzcGljaW91cyBJUCkgXG4gICAgcHVibGljIHRhcmdldElwOiBzdHJpbmc7XG4gXG4gICAgLy8gR2VvSVAgaW5mb3JtYXRpb24gYmFzZWQgb24gTWF4TWluZCBkYXRhYmFzZSBcbiAgICBwdWJsaWMgdGFyZ2V0TG9jYXRpb246IEdlb0RhdGE7XG4gXG4gICAgLy8gRXZlbnQgZGVzY3JpcHRpb24gXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gXG4gICAgLy8gQWRkaXRpb25hbCBFdmVudCB0YWdzIFxuICAgIHB1YmxpYyB0YWdzOiBzdHJpbmdbXTtcbiBcbiAgICAvLyBMaXN0IG9mIGN1c3RvbSBhdHRyaWJ1dGVzIChrZXktdmFsdWUgcGFpcnMpIFxuICAgIHB1YmxpYyBsYWJlbHM6IFN0cmluZ0tleVZhbHVlW107XG4gXG4gICAgLy8gRXZlbnQgY2F0ZWdvcnkgXG4gICAgcHVibGljIGNhdGVnb3J5OiBFdmVudENhdGVnb3J5Q29kZTtcbiBcbiAgICAvLyBSZWNvbW1lbmRlZCBhY3Rpb24gZGVzY3JpcHRpb24gdG8gYXBwbHkgb24gdGhlIGRldmljZSBcbiAgICBwdWJsaWMgcmVjb21tZW5kZWRBY3Rpb246IHN0cmluZztcbiBcbiAgICAvLyBERVBSRUNBVEVEOiBMaXN0IG9mIG9jY3VycmVuY2VzIG9mIHRoZSBhZ2dyZWdhdGVkIGV2ZW50IFxuICAgIHB1YmxpYyBvY2N1cnJlbmNlczogRXZlbnRPY2N1cnJlbmNlW107XG4gXG4gICAgLy8gRGVub3RlcyBuZXR3b3JrIHRyYWZmaWMgZGlyZWN0aW9uOiBVTkRFRklORUQgfCBJTkJPVU5EIHwgT1VUQk9VTkQgXG4gICAgcHVibGljIHRyYWZmaWNEaXJlY3Rpb246IFRyYWZmaWNEaXJlY3Rpb25Db2RlO1xuIFxuICAgIC8vIENvbnRhaW5zIGNvbmZpZGVuY2Ugc2NvcmUgb2YgbWFsaWNpb3VzIElQIGRldGVjdGlvbi4gVmFsdWUgcmFuZ2U6IDAtMTAwIFxuICAgIHB1YmxpYyBjb25maWRlbmNlU2NvcmU6IG51bWJlcjtcbiBcbiAgICAvLyBFdmVudCBvY2N1cnJlbmNlcyBjb3VudCBcbiAgICBwdWJsaWMgb2NjdXJyZW5jZXNDb3VudDogYm9vbGVhbjtcbiBcbiBcbn1cblxuXG4iXX0=