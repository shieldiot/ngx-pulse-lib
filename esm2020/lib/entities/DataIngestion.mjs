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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YUluZ2VzdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1wdWxzZS1saWIvc3JjL2xpYi9lbnRpdGllcy9EYXRhSW5nZXN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BLHdEQUF3RDtBQUN4RCxNQUFNLE9BQU8sYUFBYTtJQXNDckIsWUFBWSxRQUFpQixFQUFFLE1BQWUsRUFBRSxVQUFtQixFQUFFLGFBQXdCLEVBQUUsT0FBa0IsRUFBRSxPQUFrQixFQUFFLGtCQUEyQixFQUFFLG9CQUE2QixFQUFFLFFBQWlCLEVBQUUsaUJBQWtDLEVBQUUsb0JBQXlDLEVBQUUsb0JBQXlDO1FBQzNVLElBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1NBQUU7UUFDekQsSUFBSSxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7U0FBRTtRQUNuRCxJQUFJLFVBQVUsS0FBSyxTQUFTLEVBQUU7WUFBRSxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztTQUFFO1FBQy9ELElBQUksYUFBYSxLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1NBQUU7UUFDeEUsSUFBSSxPQUFPLEtBQUssU0FBUyxFQUFFO1lBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7U0FBRTtRQUN0RCxJQUFJLE9BQU8sS0FBSyxTQUFTLEVBQUU7WUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztTQUFFO1FBQ3RELElBQUksa0JBQWtCLEtBQUssU0FBUyxFQUFFO1lBQUUsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGtCQUFrQixDQUFDO1NBQUU7UUFDdkYsSUFBSSxvQkFBb0IsS0FBSyxTQUFTLEVBQUU7WUFBRSxJQUFJLENBQUMsb0JBQW9CLEdBQUcsb0JBQW9CLENBQUM7U0FBRTtRQUM3RixJQUFJLFFBQVEsS0FBSyxTQUFTLEVBQUU7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztTQUFFO1FBQ3pELElBQUksaUJBQWlCLEtBQUssU0FBUyxFQUFFO1lBQUUsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO1NBQUU7UUFDcEYsSUFBSSxvQkFBb0IsS0FBSyxTQUFTLEVBQUU7WUFBRSxJQUFJLENBQUMsb0JBQW9CLEdBQUcsb0JBQW9CLENBQUM7U0FBRTtRQUM3RixJQUFJLG9CQUFvQixLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxvQkFBb0IsQ0FBQztTQUFFO0lBQ2pHLENBQUM7Q0FFSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERldmljZVR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvRGV2aWNlVHlwZUNvZGUnO1xuaW1wb3J0IHsgRGV2aWNlQ3JlYXRpb25Db2RlIH0gZnJvbSAnLi4vZW51bXMvRGV2aWNlQ3JlYXRpb25Db2RlJztcbmltcG9ydCB7IERldmljZUlkZW50aXR5Q29kZSB9IGZyb20gJy4uL2VudW1zL0RldmljZUlkZW50aXR5Q29kZSc7XG5cblxuXG4vLyBEYXRhSW5nZXN0aW9uIGlzIHRoZSBpbmdlc3Rpb24gcGlwZWxpbmUgY29uZmlndXJhdGlvblxuZXhwb3J0IGNsYXNzIERhdGFJbmdlc3Rpb24ge1xuIFxuICAgIC8vIElucHV0IGZpbGVzIGxvY2F0aW9ucyBcbiAgICBwdWJsaWMgaW5wdXRVUkk6IHN0cmluZztcbiBcbiAgICAvLyBGaWxlIGZvcm1hdDogcGNhcCAvIHBjYXBuZyAoZGVmYXVsdCkgXG4gICAgcHVibGljIGZvcm1hdDogc3RyaW5nO1xuIFxuICAgIC8vIFdoZXJlIHRvIGFyY2hpdmUgcHJvY2Vzc2VkIGZpbGVzIFxuICAgIHB1YmxpYyBhcmNoaXZlVVJJOiBzdHJpbmc7XG4gXG4gICAgLy8gSW5wdXQgZmlsZXMgZXh0ZW5zaW9ucyAoZmlsdGVyIGJ5IGV4dGVuc2lvbnMpIC0gaWdub3JlIGlmIGVtcHR5IFxuICAgIHB1YmxpYyBpbnB1dEZpbGVzRXh0OiBzdHJpbmdbXTtcbiBcbiAgICAvLyBMaXN0IG9mIElvVCBkZXZpY2VzIHN1Ym5ldHMgLSBpZ25vcmUgaWYgZW1wdHkgXG4gICAgcHVibGljIHN1Yk5ldHM6IHN0cmluZ1tdO1xuIFxuICAgIC8vIExpc3Qgb2Ygc3VibmV0cyBvciBJUHMgdG8gZXhjbHVkZSBcbiAgICBwdWJsaWMgZXhjbHVkZTogc3RyaW5nW107XG4gXG4gICAgLy8gVXNhZ2UgdGltZSB3aW5kb3cgZm9yIGFnZ3JlZ2F0aW9uIChpbiBzZWNvbmRzKSBcbiAgICBwdWJsaWMgdXNhZ2VUaW1lV2luZG93U2VjOiBudW1iZXI7XG4gXG4gICAgLy8gU2Vzc2lvbiB0aW1lIHdpbmRvdyBmb3IgYWdncmVnYXRpb24gKGluIHNlY29uZHMpIFxuICAgIHB1YmxpYyBzZXNzaW9uVGltZVdpbmRvd1NlYzogbnVtYmVyO1xuIFxuICAgIC8vIENyb24gc2NoZWR1bGUgdGVtcGxhdGUgaW4gNiBzZWdtZW50IGZvcm1hdCAoc2VlOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Dcm9uKSAtIGxlYXZlIGVtcHR5IGZvciBpbW1lZGlhdGUgcHJvY2Vzc2luZyBcbiAgICBwdWJsaWMgc2NoZWR1bGU6IHN0cmluZztcbiBcbiAgICAvLyBEZWZhdWx0IGRldmljZSB0eXBlOiBVTkRFRklORUQgfCBPVEhFUiB8IENPTlRST0xMRVIgfCBNRVRFUiB8IFNFTlNPUiAuLi4gXG4gICAgcHVibGljIGRlZmF1bHREZXZpY2VUeXBlOiBEZXZpY2VUeXBlQ29kZTtcbiBcbiAgICAvLyBEZXZpY2UgY3JlYXRpb24gcG9saWN5IGJhc2VkIG9uIHRoZSBQQ1AgcGFyc2luZyAoTk9ORSB8IElQIHwgU0lEIHwgRUlEKSBcbiAgICBwdWJsaWMgZGV2aWNlQ3JlYXRpb25Qb2xpY3k6IERldmljZUNyZWF0aW9uQ29kZTtcbiBcbiAgICAvLyBIb3cgdG8gaWRlbnRpZnkgZGV2aWNlcyBkdXJpbmcgdGhlIFBDQVAgcGFyc2luZyAoTk9ORSB8IElQIHwgU0lEIHwgRUlEKSBcbiAgICBwdWJsaWMgZGV2aWNlSWRlbnRpdHlQb2xpY3k6IERldmljZUlkZW50aXR5Q29kZTtcbiBcbiAgICAgY29uc3RydWN0b3IoaW5wdXRVUkk/OiBzdHJpbmcsIGZvcm1hdD86IHN0cmluZywgYXJjaGl2ZVVSST86IHN0cmluZywgaW5wdXRGaWxlc0V4dD86IHN0cmluZ1tdLCBzdWJOZXRzPzogc3RyaW5nW10sIGV4Y2x1ZGU/OiBzdHJpbmdbXSwgdXNhZ2VUaW1lV2luZG93U2VjPzogbnVtYmVyLCBzZXNzaW9uVGltZVdpbmRvd1NlYz86IG51bWJlciwgc2NoZWR1bGU/OiBzdHJpbmcsIGRlZmF1bHREZXZpY2VUeXBlPzogRGV2aWNlVHlwZUNvZGUsIGRldmljZUNyZWF0aW9uUG9saWN5PzogRGV2aWNlQ3JlYXRpb25Db2RlLCBkZXZpY2VJZGVudGl0eVBvbGljeT86IERldmljZUlkZW50aXR5Q29kZSkgeyBcbiAgICAgICAgaWYgKGlucHV0VVJJICE9PSB1bmRlZmluZWQpIHsgdGhpcy5pbnB1dFVSSSA9IGlucHV0VVJJOyB9XG4gICAgICAgIGlmIChmb3JtYXQgIT09IHVuZGVmaW5lZCkgeyB0aGlzLmZvcm1hdCA9IGZvcm1hdDsgfVxuICAgICAgICBpZiAoYXJjaGl2ZVVSSSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuYXJjaGl2ZVVSSSA9IGFyY2hpdmVVUkk7IH1cbiAgICAgICAgaWYgKGlucHV0RmlsZXNFeHQgIT09IHVuZGVmaW5lZCkgeyB0aGlzLmlucHV0RmlsZXNFeHQgPSBpbnB1dEZpbGVzRXh0OyB9XG4gICAgICAgIGlmIChzdWJOZXRzICE9PSB1bmRlZmluZWQpIHsgdGhpcy5zdWJOZXRzID0gc3ViTmV0czsgfVxuICAgICAgICBpZiAoZXhjbHVkZSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuZXhjbHVkZSA9IGV4Y2x1ZGU7IH1cbiAgICAgICAgaWYgKHVzYWdlVGltZVdpbmRvd1NlYyAhPT0gdW5kZWZpbmVkKSB7IHRoaXMudXNhZ2VUaW1lV2luZG93U2VjID0gdXNhZ2VUaW1lV2luZG93U2VjOyB9XG4gICAgICAgIGlmIChzZXNzaW9uVGltZVdpbmRvd1NlYyAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuc2Vzc2lvblRpbWVXaW5kb3dTZWMgPSBzZXNzaW9uVGltZVdpbmRvd1NlYzsgfVxuICAgICAgICBpZiAoc2NoZWR1bGUgIT09IHVuZGVmaW5lZCkgeyB0aGlzLnNjaGVkdWxlID0gc2NoZWR1bGU7IH1cbiAgICAgICAgaWYgKGRlZmF1bHREZXZpY2VUeXBlICE9PSB1bmRlZmluZWQpIHsgdGhpcy5kZWZhdWx0RGV2aWNlVHlwZSA9IGRlZmF1bHREZXZpY2VUeXBlOyB9XG4gICAgICAgIGlmIChkZXZpY2VDcmVhdGlvblBvbGljeSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuZGV2aWNlQ3JlYXRpb25Qb2xpY3kgPSBkZXZpY2VDcmVhdGlvblBvbGljeTsgfVxuICAgICAgICBpZiAoZGV2aWNlSWRlbnRpdHlQb2xpY3kgIT09IHVuZGVmaW5lZCkgeyB0aGlzLmRldmljZUlkZW50aXR5UG9saWN5ID0gZGV2aWNlSWRlbnRpdHlQb2xpY3k7IH1cbiAgICB9XG5cbn1cblxuXG4iXX0=