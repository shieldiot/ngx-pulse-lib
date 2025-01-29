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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGV2aWNlTm9kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1wdWxzZS1saWIvc3JjL2xpYi9jb21tb24vRGV2aWNlTm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQSxvREFBb0Q7QUFDcEQsTUFBTSxPQUFPLFVBQVU7SUFjbEIsWUFBWSxRQUFpQixFQUFFLEtBQWMsRUFBRSxJQUFxQixFQUFFLFFBQW1CO1FBQ3RGLElBQUksUUFBUSxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFBQyxDQUFDO1FBQ3pELElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFBQyxDQUFDO1FBQ2hELElBQUksSUFBSSxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFBQyxDQUFDO1FBQzdDLElBQUksUUFBUSxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFBQyxDQUFDO0lBQzdELENBQUM7Q0FFSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERldmljZVR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMnO1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICcuLi9jb21tb24nO1xuXG5cblxuLy8gRGV2aWNlTm9kZSByZXByZXNlbnRzIHBhcnRpYWwgZGV2aWNlIGRhdGEgZm9yIG1hcFxuZXhwb3J0IGNsYXNzIERldmljZU5vZGUge1xuIFxuICAgIC8vIERldmljZSBpZCBcbiAgICBwdWJsaWMgZGV2aWNlSWQ6IHN0cmluZztcbiBcbiAgICAvLyBEZXZpY2UgY3VycmVudCBzZWN1cml0eSBzY29yZSBcbiAgICBwdWJsaWMgc2NvcmU6IG51bWJlcjtcbiBcbiAgICAvLyBEZXZpY2UgdHlwZTogVU5ERUZJTkVEIHwgQ09OVFJPTExFUiB8IE1FVEVSIHwgU0VOU09SIC4uLiBcbiAgICBwdWJsaWMgdHlwZTogRGV2aWNlVHlwZUNvZGU7XG4gXG4gICAgLy8gV0dTLTg0IEdlbyBMb2NhdGlvbiBcbiAgICBwdWJsaWMgbG9jYXRpb246IExvY2F0aW9uO1xuIFxuICAgICBjb25zdHJ1Y3RvcihkZXZpY2VJZD86IHN0cmluZywgc2NvcmU/OiBudW1iZXIsIHR5cGU/OiBEZXZpY2VUeXBlQ29kZSwgbG9jYXRpb24/OiBMb2NhdGlvbikgeyBcbiAgICAgICAgaWYgKGRldmljZUlkICE9PSB1bmRlZmluZWQpIHsgdGhpcy5kZXZpY2VJZCA9IGRldmljZUlkOyB9XG4gICAgICAgIGlmIChzY29yZSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuc2NvcmUgPSBzY29yZTsgfVxuICAgICAgICBpZiAodHlwZSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMudHlwZSA9IHR5cGU7IH1cbiAgICAgICAgaWYgKGxvY2F0aW9uICE9PSB1bmRlZmluZWQpIHsgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uOyB9XG4gICAgfVxuXG59XG5cblxuIl19