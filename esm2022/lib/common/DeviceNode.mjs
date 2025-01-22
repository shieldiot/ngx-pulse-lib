// DeviceNode represents partial device data for map
export class DeviceNode {
    constructor(deviceId, score, type, location) {
        if (deviceId !== undefined) {
            this.deviceId = deviceId;
        }
        if (score !== undefined) {
            this.score = score;
        }
        if (type !== undefined) {
            this.type = type;
        }
        if (location !== undefined) {
            this.location = location;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGV2aWNlTm9kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1wdWxzZS1saWIvc3JjL2xpYi9jb21tb24vRGV2aWNlTm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQSxvREFBb0Q7QUFDcEQsTUFBTSxPQUFPLFVBQVU7SUFjbEIsWUFBWSxRQUFpQixFQUFFLEtBQWMsRUFBRSxJQUFxQixFQUFFLFFBQW1CO1FBQ3RGLElBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1NBQUU7UUFDekQsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FBRTtRQUNoRCxJQUFJLElBQUksS0FBSyxTQUFTLEVBQUU7WUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUFFO1FBQzdDLElBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1NBQUU7SUFDN0QsQ0FBQztDQUVKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICcuLi9jb21tb24nO1xuaW1wb3J0IHsgRGV2aWNlVHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcyc7XG5cblxuXG4vLyBEZXZpY2VOb2RlIHJlcHJlc2VudHMgcGFydGlhbCBkZXZpY2UgZGF0YSBmb3IgbWFwXG5leHBvcnQgY2xhc3MgRGV2aWNlTm9kZSB7XG4gXG4gICAgLy8gRGV2aWNlIGlkIFxuICAgIHB1YmxpYyBkZXZpY2VJZDogc3RyaW5nO1xuIFxuICAgIC8vIERldmljZSBjdXJyZW50IHNlY3VyaXR5IHNjb3JlIFxuICAgIHB1YmxpYyBzY29yZTogbnVtYmVyO1xuIFxuICAgIC8vIERldmljZSB0eXBlOiBVTkRFRklORUQgfCBDT05UUk9MTEVSIHwgTUVURVIgfCBTRU5TT1IgLi4uIFxuICAgIHB1YmxpYyB0eXBlOiBEZXZpY2VUeXBlQ29kZTtcbiBcbiAgICAvLyBXR1MtODQgR2VvIExvY2F0aW9uIFxuICAgIHB1YmxpYyBsb2NhdGlvbjogTG9jYXRpb247XG4gXG4gICAgIGNvbnN0cnVjdG9yKGRldmljZUlkPzogc3RyaW5nLCBzY29yZT86IG51bWJlciwgdHlwZT86IERldmljZVR5cGVDb2RlLCBsb2NhdGlvbj86IExvY2F0aW9uKSB7IFxuICAgICAgICBpZiAoZGV2aWNlSWQgIT09IHVuZGVmaW5lZCkgeyB0aGlzLmRldmljZUlkID0gZGV2aWNlSWQ7IH1cbiAgICAgICAgaWYgKHNjb3JlICE9PSB1bmRlZmluZWQpIHsgdGhpcy5zY29yZSA9IHNjb3JlOyB9XG4gICAgICAgIGlmICh0eXBlICE9PSB1bmRlZmluZWQpIHsgdGhpcy50eXBlID0gdHlwZTsgfVxuICAgICAgICBpZiAobG9jYXRpb24gIT09IHVuZGVmaW5lZCkgeyB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247IH1cbiAgICB9XG5cbn1cblxuXG4iXX0=