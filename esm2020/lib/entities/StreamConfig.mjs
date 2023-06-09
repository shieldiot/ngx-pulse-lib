// StreamConfig is a stream configuration description
export class StreamConfig {
    constructor(ingest, sessionTransform, usageTransform) {
        if (ingest !== undefined) {
            this.ingest = ingest;
        }
        if (sessionTransform !== undefined) {
            this.sessionTransform = sessionTransform;
        }
        if (usageTransform !== undefined) {
            this.usageTransform = usageTransform;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RyZWFtQ29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXB1bHNlLWxpYi9zcmMvbGliL2VudGl0aWVzL1N0cmVhbUNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQSxxREFBcUQ7QUFDckQsTUFBTSxPQUFPLFlBQVk7SUFXcEIsWUFBWSxNQUFzQixFQUFFLGdCQUFtQyxFQUFFLGNBQStCO1FBQ3JHLElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1NBQUU7UUFDbkQsSUFBSSxnQkFBZ0IsS0FBSyxTQUFTLEVBQUU7WUFBRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7U0FBRTtRQUNqRixJQUFJLGNBQWMsS0FBSyxTQUFTLEVBQUU7WUFBRSxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztTQUFFO0lBQy9FLENBQUM7Q0FFSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFJbmdlc3Rpb24gfSBmcm9tICcuLi9lbnRpdGllcy9EYXRhSW5nZXN0aW9uJztcbmltcG9ydCB7IFNlc3Npb25UcmFuc2Zvcm0gfSBmcm9tICcuLi9jb21tb24vU2Vzc2lvblRyYW5zZm9ybSc7XG5pbXBvcnQgeyBVc2FnZVRyYW5zZm9ybSB9IGZyb20gJy4uL2NvbW1vbi9Vc2FnZVRyYW5zZm9ybSc7XG5cblxuXG4vLyBTdHJlYW1Db25maWcgaXMgYSBzdHJlYW0gY29uZmlndXJhdGlvbiBkZXNjcmlwdGlvblxuZXhwb3J0IGNsYXNzIFN0cmVhbUNvbmZpZyB7XG4gXG4gICAgLy8gU3RyZWFtIGRhdGEgaW5nZXN0aW9uIHBpcGVsaW5lIFxuICAgIHB1YmxpYyBpbmdlc3Q6IERhdGFJbmdlc3Rpb247XG4gXG4gICAgLy8gU2Vzc2lvbiBkYXRhIHRyYW5zZm9ybSBwYXJhbWV0ZXJzIChub3JtYWxpemUgdmFsdWVzKSBcbiAgICBwdWJsaWMgc2Vzc2lvblRyYW5zZm9ybTogU2Vzc2lvblRyYW5zZm9ybTtcbiBcbiAgICAvLyBVc2FnZSBkYXRhIHRyYW5zZm9ybSBwYXJhbWV0ZXJzIChub3JtYWxpemUgdmFsdWVzKSBcbiAgICBwdWJsaWMgdXNhZ2VUcmFuc2Zvcm06IFVzYWdlVHJhbnNmb3JtO1xuIFxuICAgICBjb25zdHJ1Y3Rvcihpbmdlc3Q/OiBEYXRhSW5nZXN0aW9uLCBzZXNzaW9uVHJhbnNmb3JtPzogU2Vzc2lvblRyYW5zZm9ybSwgdXNhZ2VUcmFuc2Zvcm0/OiBVc2FnZVRyYW5zZm9ybSkgeyBcbiAgICAgICAgaWYgKGluZ2VzdCAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuaW5nZXN0ID0gaW5nZXN0OyB9XG4gICAgICAgIGlmIChzZXNzaW9uVHJhbnNmb3JtICE9PSB1bmRlZmluZWQpIHsgdGhpcy5zZXNzaW9uVHJhbnNmb3JtID0gc2Vzc2lvblRyYW5zZm9ybTsgfVxuICAgICAgICBpZiAodXNhZ2VUcmFuc2Zvcm0gIT09IHVuZGVmaW5lZCkgeyB0aGlzLnVzYWdlVHJhbnNmb3JtID0gdXNhZ2VUcmFuc2Zvcm07IH1cbiAgICB9XG5cbn1cblxuXG4iXX0=