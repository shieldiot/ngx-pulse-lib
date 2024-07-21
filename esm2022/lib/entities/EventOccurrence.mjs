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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnRPY2N1cnJlbmNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXB1bHNlLWxpYi9zcmMvbGliL2VudGl0aWVzL0V2ZW50T2NjdXJyZW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQSxzR0FBc0c7QUFDdEcsTUFBTSxPQUFPLGVBQWU7SUFpQnZCLFlBQVksU0FBa0IsRUFBRSxNQUFlLEVBQUUsUUFBaUIsRUFBRSxVQUF3QixFQUFFLGdCQUF1QztRQUNsSSxJQUFJLFNBQVMsS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQUMsQ0FBQztRQUM1RCxJQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQUMsQ0FBQztRQUNuRCxJQUFJLFFBQVEsS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQUMsQ0FBQztRQUN6RCxJQUFJLFVBQVUsS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQUMsQ0FBQztRQUMvRCxJQUFJLGdCQUFnQixLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO1FBQUMsQ0FBQztJQUNyRixDQUFDO0NBRUoiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmRpY2F0b3IgfSBmcm9tICcuLi9jb21tb24vSW5kaWNhdG9yJztcbmltcG9ydCB7IFRyYWZmaWNEaXJlY3Rpb25Db2RlIH0gZnJvbSAnLi4vZW51bXMvVHJhZmZpY0RpcmVjdGlvbkNvZGUnO1xuXG5cblxuLy8gQSBzaW5nbGUgaW5zdGFuY2Ugb2YgZXZlbnQgZ2VuZXJhdGVkIGZvciB0aGUgc2FtZSBkZXZpY2VJZCBiYXNlZCBvbiB0aGUgc2FtZSBydWxlIG9uIHRoZSBzYW1lIG1vbnRoXG5leHBvcnQgY2xhc3MgRXZlbnRPY2N1cnJlbmNlIHtcbiBcbiAgICAvLyBFdmVudCBvY2N1cnJlbmNlIHRpbWUgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyB0aW1lc3RhbXA6IG51bWJlcjtcbiBcbiAgICAvLyBSZWZlcmVuY2VkIHNvdXJjZSBmaWxlIFxuICAgIHB1YmxpYyBzb3VyY2U6IHN0cmluZztcbiBcbiAgICAvLyBUaGUgYWxsb2NhdGVkIElQIGZvciB0aGUgZGV2aWNlIGF0IHRoZSB0aW1lIG9mIHRoZSBldmVudCBvY2N1cnJlbmNlIFxuICAgIHB1YmxpYyBzb3VyY2VJcDogc3RyaW5nO1xuIFxuICAgIC8vIExpc3Qgb2YgZXZlbnQgb2NjdXJyZW5jZSBpbmRpY2F0b3JzIFxuICAgIHB1YmxpYyBpbmRpY2F0b3JzOiBJbmRpY2F0b3JbXTtcbiBcbiAgICAvLyBEZW5vdGVzIG5ldHdvcmsgdHJhZmZpYyBkaXJlY3Rpb246IFVOREVGSU5FRCB8IElOQk9VTkQgfCBPVVRCT1VORCBcbiAgICBwdWJsaWMgdHJhZmZpY0RpcmVjdGlvbjogVHJhZmZpY0RpcmVjdGlvbkNvZGU7XG4gXG4gICAgIGNvbnN0cnVjdG9yKHRpbWVzdGFtcD86IG51bWJlciwgc291cmNlPzogc3RyaW5nLCBzb3VyY2VJcD86IHN0cmluZywgaW5kaWNhdG9ycz86IEluZGljYXRvcltdLCB0cmFmZmljRGlyZWN0aW9uPzogVHJhZmZpY0RpcmVjdGlvbkNvZGUpIHsgXG4gICAgICAgIGlmICh0aW1lc3RhbXAgIT09IHVuZGVmaW5lZCkgeyB0aGlzLnRpbWVzdGFtcCA9IHRpbWVzdGFtcDsgfVxuICAgICAgICBpZiAoc291cmNlICE9PSB1bmRlZmluZWQpIHsgdGhpcy5zb3VyY2UgPSBzb3VyY2U7IH1cbiAgICAgICAgaWYgKHNvdXJjZUlwICE9PSB1bmRlZmluZWQpIHsgdGhpcy5zb3VyY2VJcCA9IHNvdXJjZUlwOyB9XG4gICAgICAgIGlmIChpbmRpY2F0b3JzICE9PSB1bmRlZmluZWQpIHsgdGhpcy5pbmRpY2F0b3JzID0gaW5kaWNhdG9yczsgfVxuICAgICAgICBpZiAodHJhZmZpY0RpcmVjdGlvbiAhPT0gdW5kZWZpbmVkKSB7IHRoaXMudHJhZmZpY0RpcmVjdGlvbiA9IHRyYWZmaWNEaXJlY3Rpb247IH1cbiAgICB9XG5cbn1cblxuXG4iXX0=