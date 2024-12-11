// StreamConfig is a stream configuration description
export class StreamConfig {
    constructor(ingest, sessionTransform, usageTransform, thresholds, shieldexConfig, eventSeverityConfig, preventiveActions, deviceConfig) {
        if (ingest !== undefined) {
            this.ingest = ingest;
        }
        if (sessionTransform !== undefined) {
            this.sessionTransform = sessionTransform;
        }
        if (usageTransform !== undefined) {
            this.usageTransform = usageTransform;
        }
        if (thresholds !== undefined) {
            this.thresholds = thresholds;
        }
        if (shieldexConfig !== undefined) {
            this.shieldexConfig = shieldexConfig;
        }
        if (eventSeverityConfig !== undefined) {
            this.eventSeverityConfig = eventSeverityConfig;
        }
        if (preventiveActions !== undefined) {
            this.preventiveActions = preventiveActions;
        }
        if (deviceConfig !== undefined) {
            this.deviceConfig = deviceConfig;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RyZWFtQ29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXB1bHNlLWxpYi9zcmMvbGliL2VudGl0aWVzL1N0cmVhbUNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXQSxxREFBcUQ7QUFDckQsTUFBTSxPQUFPLFlBQVk7SUEwQnBCLFlBQVksTUFBc0IsRUFBRSxnQkFBbUMsRUFBRSxjQUErQixFQUFFLFVBQXVCLEVBQUUsY0FBK0IsRUFBRSxtQkFBeUMsRUFBRSxpQkFBc0MsRUFBRSxZQUEyQjtRQUMvUSxJQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztTQUFFO1FBQ25ELElBQUksZ0JBQWdCLEtBQUssU0FBUyxFQUFFO1lBQUUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO1NBQUU7UUFDakYsSUFBSSxjQUFjLEtBQUssU0FBUyxFQUFFO1lBQUUsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7U0FBRTtRQUMzRSxJQUFJLFVBQVUsS0FBSyxTQUFTLEVBQUU7WUFBRSxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztTQUFFO1FBQy9ELElBQUksY0FBYyxLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1NBQUU7UUFDM0UsSUFBSSxtQkFBbUIsS0FBSyxTQUFTLEVBQUU7WUFBRSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsbUJBQW1CLENBQUM7U0FBRTtRQUMxRixJQUFJLGlCQUFpQixLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQztTQUFFO1FBQ3BGLElBQUksWUFBWSxLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1NBQUU7SUFDekUsQ0FBQztDQUVKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2Vzc2lvblRyYW5zZm9ybSB9IGZyb20gJy4uL2NvbW1vbic7XG5pbXBvcnQgeyBVc2FnZVRyYW5zZm9ybSB9IGZyb20gJy4uL2NvbW1vbic7XG5pbXBvcnQgeyBUaHJlc2hvbGRzIH0gZnJvbSAnLi4vY29tbW9uJztcbmltcG9ydCB7IFNoaWVsZGV4Q29uZmlnIH0gZnJvbSAnLi4vY29tbW9uJztcbmltcG9ydCB7IEV2ZW50U2V2ZXJpdHlDb25maWcgfSBmcm9tICcuLi9jb21tb24nO1xuaW1wb3J0IHsgRGV2aWNlQWN0aW9uQ29kZSB9IGZyb20gJy4uL2VudW1zJztcbmltcG9ydCB7IERldmljZUNvbmZpZyB9IGZyb20gJy4uL2NvbW1vbic7XG5pbXBvcnQgeyBEYXRhSW5nZXN0aW9uIH0gZnJvbSAnLi4vZW50aXRpZXMnO1xuXG5cblxuLy8gU3RyZWFtQ29uZmlnIGlzIGEgc3RyZWFtIGNvbmZpZ3VyYXRpb24gZGVzY3JpcHRpb25cbmV4cG9ydCBjbGFzcyBTdHJlYW1Db25maWcge1xuIFxuICAgIC8vIFN0cmVhbSBkYXRhIGluZ2VzdGlvbiBwaXBlbGluZSBcbiAgICBwdWJsaWMgaW5nZXN0OiBEYXRhSW5nZXN0aW9uO1xuIFxuICAgIC8vIFNlc3Npb24gZGF0YSB0cmFuc2Zvcm0gcGFyYW1ldGVycyAobm9ybWFsaXplIHZhbHVlcykgXG4gICAgcHVibGljIHNlc3Npb25UcmFuc2Zvcm06IFNlc3Npb25UcmFuc2Zvcm07XG4gXG4gICAgLy8gVXNhZ2UgZGF0YSB0cmFuc2Zvcm0gcGFyYW1ldGVycyAobm9ybWFsaXplIHZhbHVlcykgXG4gICAgcHVibGljIHVzYWdlVHJhbnNmb3JtOiBVc2FnZVRyYW5zZm9ybTtcbiBcbiAgICAvLyBTZXQgb2Ygc3RyZWFtIGNvbmZpZ3VyYXRpb24gdGhyZXNob2xkcyBcbiAgICBwdWJsaWMgdGhyZXNob2xkczogVGhyZXNob2xkcztcbiBcbiAgICAvLyBTZXQgb2Ygc3RyZWFtIHNoaWVsZGV4IGNvbmZpZ3VyYXRpb24gXG4gICAgcHVibGljIHNoaWVsZGV4Q29uZmlnOiBTaGllbGRleENvbmZpZztcbiBcbiAgICAvLyBTZXQgb2YgZXZlbnQgc2V2ZXJpdHkgY29uZmlndXJhdGlvbiBcbiAgICBwdWJsaWMgZXZlbnRTZXZlcml0eUNvbmZpZzogRXZlbnRTZXZlcml0eUNvbmZpZztcbiBcbiAgICAvLyBTZXQgb2YgYXZhaWxhYmxlIHByZXZlbnRpdmUgYWN0aW9ucyB0byBhcHBseSBcbiAgICBwdWJsaWMgcHJldmVudGl2ZUFjdGlvbnM6IERldmljZUFjdGlvbkNvZGVbXTtcbiBcbiAgICAvLyBTZXQgb2YgZGV2aWNlIHJlbGF0ZWQgY29uZmlndXJhdGlvbnMgXG4gICAgcHVibGljIGRldmljZUNvbmZpZzogRGV2aWNlQ29uZmlnO1xuIFxuICAgICBjb25zdHJ1Y3Rvcihpbmdlc3Q/OiBEYXRhSW5nZXN0aW9uLCBzZXNzaW9uVHJhbnNmb3JtPzogU2Vzc2lvblRyYW5zZm9ybSwgdXNhZ2VUcmFuc2Zvcm0/OiBVc2FnZVRyYW5zZm9ybSwgdGhyZXNob2xkcz86IFRocmVzaG9sZHMsIHNoaWVsZGV4Q29uZmlnPzogU2hpZWxkZXhDb25maWcsIGV2ZW50U2V2ZXJpdHlDb25maWc/OiBFdmVudFNldmVyaXR5Q29uZmlnLCBwcmV2ZW50aXZlQWN0aW9ucz86IERldmljZUFjdGlvbkNvZGVbXSwgZGV2aWNlQ29uZmlnPzogRGV2aWNlQ29uZmlnKSB7IFxuICAgICAgICBpZiAoaW5nZXN0ICE9PSB1bmRlZmluZWQpIHsgdGhpcy5pbmdlc3QgPSBpbmdlc3Q7IH1cbiAgICAgICAgaWYgKHNlc3Npb25UcmFuc2Zvcm0gIT09IHVuZGVmaW5lZCkgeyB0aGlzLnNlc3Npb25UcmFuc2Zvcm0gPSBzZXNzaW9uVHJhbnNmb3JtOyB9XG4gICAgICAgIGlmICh1c2FnZVRyYW5zZm9ybSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMudXNhZ2VUcmFuc2Zvcm0gPSB1c2FnZVRyYW5zZm9ybTsgfVxuICAgICAgICBpZiAodGhyZXNob2xkcyAhPT0gdW5kZWZpbmVkKSB7IHRoaXMudGhyZXNob2xkcyA9IHRocmVzaG9sZHM7IH1cbiAgICAgICAgaWYgKHNoaWVsZGV4Q29uZmlnICE9PSB1bmRlZmluZWQpIHsgdGhpcy5zaGllbGRleENvbmZpZyA9IHNoaWVsZGV4Q29uZmlnOyB9XG4gICAgICAgIGlmIChldmVudFNldmVyaXR5Q29uZmlnICE9PSB1bmRlZmluZWQpIHsgdGhpcy5ldmVudFNldmVyaXR5Q29uZmlnID0gZXZlbnRTZXZlcml0eUNvbmZpZzsgfVxuICAgICAgICBpZiAocHJldmVudGl2ZUFjdGlvbnMgIT09IHVuZGVmaW5lZCkgeyB0aGlzLnByZXZlbnRpdmVBY3Rpb25zID0gcHJldmVudGl2ZUFjdGlvbnM7IH1cbiAgICAgICAgaWYgKGRldmljZUNvbmZpZyAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuZGV2aWNlQ29uZmlnID0gZGV2aWNlQ29uZmlnOyB9XG4gICAgfVxuXG59XG5cblxuIl19