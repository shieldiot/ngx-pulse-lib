// DataIngestion is the ingestion pipeline configuration
export class DataIngestion {
    constructor(inputURI, format, archiveURI, inputFilesExt, subNets, exclude, usageTimeWindowSec, sessionTimeWindowSec, schedule, defaultDeviceType, deviceCreationPolicy, deviceIdentityPolicy) {
        if (inputURI !== undefined) {
            this.inputURI = inputURI;
        }
        if (format !== undefined) {
            this.format = format;
        }
        if (archiveURI !== undefined) {
            this.archiveURI = archiveURI;
        }
        if (inputFilesExt !== undefined) {
            this.inputFilesExt = inputFilesExt;
        }
        if (subNets !== undefined) {
            this.subNets = subNets;
        }
        if (exclude !== undefined) {
            this.exclude = exclude;
        }
        if (usageTimeWindowSec !== undefined) {
            this.usageTimeWindowSec = usageTimeWindowSec;
        }
        if (sessionTimeWindowSec !== undefined) {
            this.sessionTimeWindowSec = sessionTimeWindowSec;
        }
        if (schedule !== undefined) {
            this.schedule = schedule;
        }
        if (defaultDeviceType !== undefined) {
            this.defaultDeviceType = defaultDeviceType;
        }
        if (deviceCreationPolicy !== undefined) {
            this.deviceCreationPolicy = deviceCreationPolicy;
        }
        if (deviceIdentityPolicy !== undefined) {
            this.deviceIdentityPolicy = deviceIdentityPolicy;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YUluZ2VzdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1wdWxzZS1saWIvc3JjL2xpYi9lbnRpdGllcy9EYXRhSW5nZXN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BLHdEQUF3RDtBQUN4RCxNQUFNLE9BQU8sYUFBYTtJQXNDckIsWUFBWSxRQUFpQixFQUFFLE1BQWUsRUFBRSxVQUFtQixFQUFFLGFBQXdCLEVBQUUsT0FBa0IsRUFBRSxPQUFrQixFQUFFLGtCQUEyQixFQUFFLG9CQUE2QixFQUFFLFFBQWlCLEVBQUUsaUJBQWtDLEVBQUUsb0JBQXlDLEVBQUUsb0JBQXlDO1FBQzNVLElBQUksUUFBUSxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFBQyxDQUFDO1FBQ3pELElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFBQyxDQUFDO1FBQ25ELElBQUksVUFBVSxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFBQyxDQUFDO1FBQy9ELElBQUksYUFBYSxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFBQyxDQUFDO1FBQ3hFLElBQUksT0FBTyxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFBQyxDQUFDO1FBQ3RELElBQUksT0FBTyxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFBQyxDQUFDO1FBQ3RELElBQUksa0JBQWtCLEtBQUssU0FBUyxFQUFFLENBQUM7WUFBQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsa0JBQWtCLENBQUM7UUFBQyxDQUFDO1FBQ3ZGLElBQUksb0JBQW9CLEtBQUssU0FBUyxFQUFFLENBQUM7WUFBQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsb0JBQW9CLENBQUM7UUFBQyxDQUFDO1FBQzdGLElBQUksUUFBUSxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFBQyxDQUFDO1FBQ3pELElBQUksaUJBQWlCLEtBQUssU0FBUyxFQUFFLENBQUM7WUFBQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsaUJBQWlCLENBQUM7UUFBQyxDQUFDO1FBQ3BGLElBQUksb0JBQW9CLEtBQUssU0FBUyxFQUFFLENBQUM7WUFBQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsb0JBQW9CLENBQUM7UUFBQyxDQUFDO1FBQzdGLElBQUksb0JBQW9CLEtBQUssU0FBUyxFQUFFLENBQUM7WUFBQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsb0JBQW9CLENBQUM7UUFBQyxDQUFDO0lBQ2pHLENBQUM7Q0FFSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERldmljZVR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMnO1xuaW1wb3J0IHsgRGV2aWNlQ3JlYXRpb25Db2RlIH0gZnJvbSAnLi4vZW51bXMnO1xuaW1wb3J0IHsgRGV2aWNlSWRlbnRpdHlDb2RlIH0gZnJvbSAnLi4vZW51bXMnO1xuXG5cblxuLy8gRGF0YUluZ2VzdGlvbiBpcyB0aGUgaW5nZXN0aW9uIHBpcGVsaW5lIGNvbmZpZ3VyYXRpb25cbmV4cG9ydCBjbGFzcyBEYXRhSW5nZXN0aW9uIHtcbiBcbiAgICAvLyBJbnB1dCBmaWxlcyBsb2NhdGlvbnMgXG4gICAgcHVibGljIGlucHV0VVJJOiBzdHJpbmc7XG4gXG4gICAgLy8gRmlsZSBmb3JtYXQ6IHBjYXAgLyBwY2FwbmcgKGRlZmF1bHQpIFxuICAgIHB1YmxpYyBmb3JtYXQ6IHN0cmluZztcbiBcbiAgICAvLyBXaGVyZSB0byBhcmNoaXZlIHByb2Nlc3NlZCBmaWxlcyBcbiAgICBwdWJsaWMgYXJjaGl2ZVVSSTogc3RyaW5nO1xuIFxuICAgIC8vIElucHV0IGZpbGVzIGV4dGVuc2lvbnMgKGZpbHRlciBieSBleHRlbnNpb25zKSAtIGlnbm9yZSBpZiBlbXB0eSBcbiAgICBwdWJsaWMgaW5wdXRGaWxlc0V4dDogc3RyaW5nW107XG4gXG4gICAgLy8gTGlzdCBvZiBJb1QgZGV2aWNlcyBzdWJuZXRzIC0gaWdub3JlIGlmIGVtcHR5IFxuICAgIHB1YmxpYyBzdWJOZXRzOiBzdHJpbmdbXTtcbiBcbiAgICAvLyBMaXN0IG9mIHN1Ym5ldHMgb3IgSVBzIHRvIGV4Y2x1ZGUgXG4gICAgcHVibGljIGV4Y2x1ZGU6IHN0cmluZ1tdO1xuIFxuICAgIC8vIFVzYWdlIHRpbWUgd2luZG93IGZvciBhZ2dyZWdhdGlvbiAoaW4gc2Vjb25kcykgXG4gICAgcHVibGljIHVzYWdlVGltZVdpbmRvd1NlYzogbnVtYmVyO1xuIFxuICAgIC8vIFNlc3Npb24gdGltZSB3aW5kb3cgZm9yIGFnZ3JlZ2F0aW9uIChpbiBzZWNvbmRzKSBcbiAgICBwdWJsaWMgc2Vzc2lvblRpbWVXaW5kb3dTZWM6IG51bWJlcjtcbiBcbiAgICAvLyBDcm9uIHNjaGVkdWxlIHRlbXBsYXRlIGluIDYgc2VnbWVudCBmb3JtYXQgKHNlZTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQ3JvbikgLSBsZWF2ZSBlbXB0eSBmb3IgaW1tZWRpYXRlIHByb2Nlc3NpbmcgXG4gICAgcHVibGljIHNjaGVkdWxlOiBzdHJpbmc7XG4gXG4gICAgLy8gRGVmYXVsdCBkZXZpY2UgdHlwZTogVU5ERUZJTkVEIHwgT1RIRVIgfCBDT05UUk9MTEVSIHwgTUVURVIgfCBTRU5TT1IgLi4uIFxuICAgIHB1YmxpYyBkZWZhdWx0RGV2aWNlVHlwZTogRGV2aWNlVHlwZUNvZGU7XG4gXG4gICAgLy8gRGV2aWNlIGNyZWF0aW9uIHBvbGljeSBiYXNlZCBvbiB0aGUgUENQIHBhcnNpbmcgKE5PTkUgfCBJUCB8IFNJRCB8IEVJRCkgXG4gICAgcHVibGljIGRldmljZUNyZWF0aW9uUG9saWN5OiBEZXZpY2VDcmVhdGlvbkNvZGU7XG4gXG4gICAgLy8gSG93IHRvIGlkZW50aWZ5IGRldmljZXMgZHVyaW5nIHRoZSBQQ0FQIHBhcnNpbmcgKE5PTkUgfCBJUCB8IFNJRCB8IEVJRCkgXG4gICAgcHVibGljIGRldmljZUlkZW50aXR5UG9saWN5OiBEZXZpY2VJZGVudGl0eUNvZGU7XG4gXG4gICAgIGNvbnN0cnVjdG9yKGlucHV0VVJJPzogc3RyaW5nLCBmb3JtYXQ/OiBzdHJpbmcsIGFyY2hpdmVVUkk/OiBzdHJpbmcsIGlucHV0RmlsZXNFeHQ/OiBzdHJpbmdbXSwgc3ViTmV0cz86IHN0cmluZ1tdLCBleGNsdWRlPzogc3RyaW5nW10sIHVzYWdlVGltZVdpbmRvd1NlYz86IG51bWJlciwgc2Vzc2lvblRpbWVXaW5kb3dTZWM/OiBudW1iZXIsIHNjaGVkdWxlPzogc3RyaW5nLCBkZWZhdWx0RGV2aWNlVHlwZT86IERldmljZVR5cGVDb2RlLCBkZXZpY2VDcmVhdGlvblBvbGljeT86IERldmljZUNyZWF0aW9uQ29kZSwgZGV2aWNlSWRlbnRpdHlQb2xpY3k/OiBEZXZpY2VJZGVudGl0eUNvZGUpIHsgXG4gICAgICAgIGlmIChpbnB1dFVSSSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuaW5wdXRVUkkgPSBpbnB1dFVSSTsgfVxuICAgICAgICBpZiAoZm9ybWF0ICE9PSB1bmRlZmluZWQpIHsgdGhpcy5mb3JtYXQgPSBmb3JtYXQ7IH1cbiAgICAgICAgaWYgKGFyY2hpdmVVUkkgIT09IHVuZGVmaW5lZCkgeyB0aGlzLmFyY2hpdmVVUkkgPSBhcmNoaXZlVVJJOyB9XG4gICAgICAgIGlmIChpbnB1dEZpbGVzRXh0ICE9PSB1bmRlZmluZWQpIHsgdGhpcy5pbnB1dEZpbGVzRXh0ID0gaW5wdXRGaWxlc0V4dDsgfVxuICAgICAgICBpZiAoc3ViTmV0cyAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuc3ViTmV0cyA9IHN1Yk5ldHM7IH1cbiAgICAgICAgaWYgKGV4Y2x1ZGUgIT09IHVuZGVmaW5lZCkgeyB0aGlzLmV4Y2x1ZGUgPSBleGNsdWRlOyB9XG4gICAgICAgIGlmICh1c2FnZVRpbWVXaW5kb3dTZWMgIT09IHVuZGVmaW5lZCkgeyB0aGlzLnVzYWdlVGltZVdpbmRvd1NlYyA9IHVzYWdlVGltZVdpbmRvd1NlYzsgfVxuICAgICAgICBpZiAoc2Vzc2lvblRpbWVXaW5kb3dTZWMgIT09IHVuZGVmaW5lZCkgeyB0aGlzLnNlc3Npb25UaW1lV2luZG93U2VjID0gc2Vzc2lvblRpbWVXaW5kb3dTZWM7IH1cbiAgICAgICAgaWYgKHNjaGVkdWxlICE9PSB1bmRlZmluZWQpIHsgdGhpcy5zY2hlZHVsZSA9IHNjaGVkdWxlOyB9XG4gICAgICAgIGlmIChkZWZhdWx0RGV2aWNlVHlwZSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuZGVmYXVsdERldmljZVR5cGUgPSBkZWZhdWx0RGV2aWNlVHlwZTsgfVxuICAgICAgICBpZiAoZGV2aWNlQ3JlYXRpb25Qb2xpY3kgIT09IHVuZGVmaW5lZCkgeyB0aGlzLmRldmljZUNyZWF0aW9uUG9saWN5ID0gZGV2aWNlQ3JlYXRpb25Qb2xpY3k7IH1cbiAgICAgICAgaWYgKGRldmljZUlkZW50aXR5UG9saWN5ICE9PSB1bmRlZmluZWQpIHsgdGhpcy5kZXZpY2VJZGVudGl0eVBvbGljeSA9IGRldmljZUlkZW50aXR5UG9saWN5OyB9XG4gICAgfVxuXG59XG5cblxuIl19