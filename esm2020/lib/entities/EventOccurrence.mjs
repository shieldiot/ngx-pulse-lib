// A single instance of event generated for the same deviceId based on the same rule on the same month
export class EventOccurrence {
    constructor(timestamp, source, sourceIp, indicators, trafficDirection) {
        if (timestamp !== undefined) {
            this.timestamp = timestamp;
        }
        if (source !== undefined) {
            this.source = source;
        }
        if (sourceIp !== undefined) {
            this.sourceIp = sourceIp;
        }
        if (indicators !== undefined) {
            this.indicators = indicators;
        }
        if (trafficDirection !== undefined) {
            this.trafficDirection = trafficDirection;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnRPY2N1cnJlbmNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXB1bHNlLWxpYi9zcmMvbGliL2VudGl0aWVzL0V2ZW50T2NjdXJyZW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQSxzR0FBc0c7QUFDdEcsTUFBTSxPQUFPLGVBQWU7SUFpQnZCLFlBQVksU0FBa0IsRUFBRSxNQUFlLEVBQUUsUUFBaUIsRUFBRSxVQUF3QixFQUFFLGdCQUF1QztRQUNsSSxJQUFJLFNBQVMsS0FBSyxTQUFTLEVBQUU7WUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztTQUFFO1FBQzVELElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1NBQUU7UUFDbkQsSUFBSSxRQUFRLEtBQUssU0FBUyxFQUFFO1lBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7U0FBRTtRQUN6RCxJQUFJLFVBQVUsS0FBSyxTQUFTLEVBQUU7WUFBRSxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztTQUFFO1FBQy9ELElBQUksZ0JBQWdCLEtBQUssU0FBUyxFQUFFO1lBQUUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO1NBQUU7SUFDckYsQ0FBQztDQUVKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5kaWNhdG9yIH0gZnJvbSAnLi4vY29tbW9uL0luZGljYXRvcic7XG5pbXBvcnQgeyBUcmFmZmljRGlyZWN0aW9uQ29kZSB9IGZyb20gJy4uL2VudW1zL1RyYWZmaWNEaXJlY3Rpb25Db2RlJztcblxuXG5cbi8vIEEgc2luZ2xlIGluc3RhbmNlIG9mIGV2ZW50IGdlbmVyYXRlZCBmb3IgdGhlIHNhbWUgZGV2aWNlSWQgYmFzZWQgb24gdGhlIHNhbWUgcnVsZSBvbiB0aGUgc2FtZSBtb250aFxuZXhwb3J0IGNsYXNzIEV2ZW50T2NjdXJyZW5jZSB7XG4gXG4gICAgLy8gRXZlbnQgb2NjdXJyZW5jZSB0aW1lIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgdGltZXN0YW1wOiBudW1iZXI7XG4gXG4gICAgLy8gUmVmZXJlbmNlZCBzb3VyY2UgZmlsZSBcbiAgICBwdWJsaWMgc291cmNlOiBzdHJpbmc7XG4gXG4gICAgLy8gVGhlIGFsbG9jYXRlZCBJUCBmb3IgdGhlIGRldmljZSBhdCB0aGUgdGltZSBvZiB0aGUgZXZlbnQgb2NjdXJyZW5jZSBcbiAgICBwdWJsaWMgc291cmNlSXA6IHN0cmluZztcbiBcbiAgICAvLyBMaXN0IG9mIGV2ZW50IG9jY3VycmVuY2UgaW5kaWNhdG9ycyBcbiAgICBwdWJsaWMgaW5kaWNhdG9yczogSW5kaWNhdG9yW107XG4gXG4gICAgLy8gRGVub3RlcyBuZXR3b3JrIHRyYWZmaWMgZGlyZWN0aW9uOiBVTkRFRklORUQgfCBJTkJPVU5EIHwgT1VUQk9VTkQgXG4gICAgcHVibGljIHRyYWZmaWNEaXJlY3Rpb246IFRyYWZmaWNEaXJlY3Rpb25Db2RlO1xuIFxuICAgICBjb25zdHJ1Y3Rvcih0aW1lc3RhbXA/OiBudW1iZXIsIHNvdXJjZT86IHN0cmluZywgc291cmNlSXA/OiBzdHJpbmcsIGluZGljYXRvcnM/OiBJbmRpY2F0b3JbXSwgdHJhZmZpY0RpcmVjdGlvbj86IFRyYWZmaWNEaXJlY3Rpb25Db2RlKSB7IFxuICAgICAgICBpZiAodGltZXN0YW1wICE9PSB1bmRlZmluZWQpIHsgdGhpcy50aW1lc3RhbXAgPSB0aW1lc3RhbXA7IH1cbiAgICAgICAgaWYgKHNvdXJjZSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuc291cmNlID0gc291cmNlOyB9XG4gICAgICAgIGlmIChzb3VyY2VJcCAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuc291cmNlSXAgPSBzb3VyY2VJcDsgfVxuICAgICAgICBpZiAoaW5kaWNhdG9ycyAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuaW5kaWNhdG9ycyA9IGluZGljYXRvcnM7IH1cbiAgICAgICAgaWYgKHRyYWZmaWNEaXJlY3Rpb24gIT09IHVuZGVmaW5lZCkgeyB0aGlzLnRyYWZmaWNEaXJlY3Rpb24gPSB0cmFmZmljRGlyZWN0aW9uOyB9XG4gICAgfVxuXG59XG5cblxuIl19