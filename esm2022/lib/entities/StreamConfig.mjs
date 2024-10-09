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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RyZWFtQ29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXB1bHNlLWxpYi9zcmMvbGliL2VudGl0aWVzL1N0cmVhbUNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXQSxxREFBcUQ7QUFDckQsTUFBTSxPQUFPLFlBQVk7SUEwQnBCLFlBQVksTUFBc0IsRUFBRSxnQkFBbUMsRUFBRSxjQUErQixFQUFFLFVBQXVCLEVBQUUsY0FBK0IsRUFBRSxtQkFBeUMsRUFBRSxpQkFBc0MsRUFBRSxZQUEyQjtRQUMvUSxJQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQUMsQ0FBQztRQUNuRCxJQUFJLGdCQUFnQixLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO1FBQUMsQ0FBQztRQUNqRixJQUFJLGNBQWMsS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1FBQUMsQ0FBQztRQUMzRSxJQUFJLFVBQVUsS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQUMsQ0FBQztRQUMvRCxJQUFJLGNBQWMsS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1FBQUMsQ0FBQztRQUMzRSxJQUFJLG1CQUFtQixLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQUMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLG1CQUFtQixDQUFDO1FBQUMsQ0FBQztRQUMxRixJQUFJLGlCQUFpQixLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO1FBQUMsQ0FBQztRQUNwRixJQUFJLFlBQVksS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQUMsQ0FBQztJQUN6RSxDQUFDO0NBRUoiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaGllbGRleENvbmZpZyB9IGZyb20gJy4uL2NvbW1vbic7XG5pbXBvcnQgeyBFdmVudFNldmVyaXR5Q29uZmlnIH0gZnJvbSAnLi4vY29tbW9uJztcbmltcG9ydCB7IERldmljZUFjdGlvbkNvZGUgfSBmcm9tICcuLi9lbnVtcyc7XG5pbXBvcnQgeyBEZXZpY2VDb25maWcgfSBmcm9tICcuLi9jb21tb24nO1xuaW1wb3J0IHsgRGF0YUluZ2VzdGlvbiB9IGZyb20gJy4uL2VudGl0aWVzJztcbmltcG9ydCB7IFNlc3Npb25UcmFuc2Zvcm0gfSBmcm9tICcuLi9jb21tb24nO1xuaW1wb3J0IHsgVXNhZ2VUcmFuc2Zvcm0gfSBmcm9tICcuLi9jb21tb24nO1xuaW1wb3J0IHsgVGhyZXNob2xkcyB9IGZyb20gJy4uL2NvbW1vbic7XG5cblxuXG4vLyBTdHJlYW1Db25maWcgaXMgYSBzdHJlYW0gY29uZmlndXJhdGlvbiBkZXNjcmlwdGlvblxuZXhwb3J0IGNsYXNzIFN0cmVhbUNvbmZpZyB7XG4gXG4gICAgLy8gU3RyZWFtIGRhdGEgaW5nZXN0aW9uIHBpcGVsaW5lIFxuICAgIHB1YmxpYyBpbmdlc3Q6IERhdGFJbmdlc3Rpb247XG4gXG4gICAgLy8gU2Vzc2lvbiBkYXRhIHRyYW5zZm9ybSBwYXJhbWV0ZXJzIChub3JtYWxpemUgdmFsdWVzKSBcbiAgICBwdWJsaWMgc2Vzc2lvblRyYW5zZm9ybTogU2Vzc2lvblRyYW5zZm9ybTtcbiBcbiAgICAvLyBVc2FnZSBkYXRhIHRyYW5zZm9ybSBwYXJhbWV0ZXJzIChub3JtYWxpemUgdmFsdWVzKSBcbiAgICBwdWJsaWMgdXNhZ2VUcmFuc2Zvcm06IFVzYWdlVHJhbnNmb3JtO1xuIFxuICAgIC8vIFNldCBvZiBzdHJlYW0gY29uZmlndXJhdGlvbiB0aHJlc2hvbGRzIFxuICAgIHB1YmxpYyB0aHJlc2hvbGRzOiBUaHJlc2hvbGRzO1xuIFxuICAgIC8vIFNldCBvZiBzdHJlYW0gc2hpZWxkZXggY29uZmlndXJhdGlvbiBcbiAgICBwdWJsaWMgc2hpZWxkZXhDb25maWc6IFNoaWVsZGV4Q29uZmlnO1xuIFxuICAgIC8vIFNldCBvZiBldmVudCBzZXZlcml0eSBjb25maWd1cmF0aW9uIFxuICAgIHB1YmxpYyBldmVudFNldmVyaXR5Q29uZmlnOiBFdmVudFNldmVyaXR5Q29uZmlnO1xuIFxuICAgIC8vIFNldCBvZiBhdmFpbGFibGUgcHJldmVudGl2ZSBhY3Rpb25zIHRvIGFwcGx5IFxuICAgIHB1YmxpYyBwcmV2ZW50aXZlQWN0aW9uczogRGV2aWNlQWN0aW9uQ29kZVtdO1xuIFxuICAgIC8vIFNldCBvZiBkZXZpY2UgcmVsYXRlZCBjb25maWd1cmF0aW9ucyBcbiAgICBwdWJsaWMgZGV2aWNlQ29uZmlnOiBEZXZpY2VDb25maWc7XG4gXG4gICAgIGNvbnN0cnVjdG9yKGluZ2VzdD86IERhdGFJbmdlc3Rpb24sIHNlc3Npb25UcmFuc2Zvcm0/OiBTZXNzaW9uVHJhbnNmb3JtLCB1c2FnZVRyYW5zZm9ybT86IFVzYWdlVHJhbnNmb3JtLCB0aHJlc2hvbGRzPzogVGhyZXNob2xkcywgc2hpZWxkZXhDb25maWc/OiBTaGllbGRleENvbmZpZywgZXZlbnRTZXZlcml0eUNvbmZpZz86IEV2ZW50U2V2ZXJpdHlDb25maWcsIHByZXZlbnRpdmVBY3Rpb25zPzogRGV2aWNlQWN0aW9uQ29kZVtdLCBkZXZpY2VDb25maWc/OiBEZXZpY2VDb25maWcpIHsgXG4gICAgICAgIGlmIChpbmdlc3QgIT09IHVuZGVmaW5lZCkgeyB0aGlzLmluZ2VzdCA9IGluZ2VzdDsgfVxuICAgICAgICBpZiAoc2Vzc2lvblRyYW5zZm9ybSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuc2Vzc2lvblRyYW5zZm9ybSA9IHNlc3Npb25UcmFuc2Zvcm07IH1cbiAgICAgICAgaWYgKHVzYWdlVHJhbnNmb3JtICE9PSB1bmRlZmluZWQpIHsgdGhpcy51c2FnZVRyYW5zZm9ybSA9IHVzYWdlVHJhbnNmb3JtOyB9XG4gICAgICAgIGlmICh0aHJlc2hvbGRzICE9PSB1bmRlZmluZWQpIHsgdGhpcy50aHJlc2hvbGRzID0gdGhyZXNob2xkczsgfVxuICAgICAgICBpZiAoc2hpZWxkZXhDb25maWcgIT09IHVuZGVmaW5lZCkgeyB0aGlzLnNoaWVsZGV4Q29uZmlnID0gc2hpZWxkZXhDb25maWc7IH1cbiAgICAgICAgaWYgKGV2ZW50U2V2ZXJpdHlDb25maWcgIT09IHVuZGVmaW5lZCkgeyB0aGlzLmV2ZW50U2V2ZXJpdHlDb25maWcgPSBldmVudFNldmVyaXR5Q29uZmlnOyB9XG4gICAgICAgIGlmIChwcmV2ZW50aXZlQWN0aW9ucyAhPT0gdW5kZWZpbmVkKSB7IHRoaXMucHJldmVudGl2ZUFjdGlvbnMgPSBwcmV2ZW50aXZlQWN0aW9uczsgfVxuICAgICAgICBpZiAoZGV2aWNlQ29uZmlnICE9PSB1bmRlZmluZWQpIHsgdGhpcy5kZXZpY2VDb25maWcgPSBkZXZpY2VDb25maWc7IH1cbiAgICB9XG5cbn1cblxuXG4iXX0=