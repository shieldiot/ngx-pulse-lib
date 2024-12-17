// DeviceScoreConfig is a set of parameters for device score config
export class DeviceScoreConfig {
    constructor(deviceScoreAlphaFactor, occurrenceThreshold, ruleCountThreshold, lowWeightAlphaFactor, mediumWeightAlphaFactor, highWeightAlphaFactor, highVolumeWeightAlphaFactor, abnormalOutPortsAlphaFactor, abnormalOutEndpointsAlphaFactor, suspiciousIpAlphaFactor, defaultSeverityRange, defaultSeverityFactor, severityConditionConfigs, ruleCountThresholdConfigs, ruleBasedSeverityConditionConfigs, isSeverityBased, isAlertBased) {
        if (deviceScoreAlphaFactor !== undefined) {
            this.deviceScoreAlphaFactor = deviceScoreAlphaFactor;
        }
        if (occurrenceThreshold !== undefined) {
            this.occurrenceThreshold = occurrenceThreshold;
        }
        if (ruleCountThreshold !== undefined) {
            this.ruleCountThreshold = ruleCountThreshold;
        }
        if (lowWeightAlphaFactor !== undefined) {
            this.lowWeightAlphaFactor = lowWeightAlphaFactor;
        }
        if (mediumWeightAlphaFactor !== undefined) {
            this.mediumWeightAlphaFactor = mediumWeightAlphaFactor;
        }
        if (highWeightAlphaFactor !== undefined) {
            this.highWeightAlphaFactor = highWeightAlphaFactor;
        }
        if (highVolumeWeightAlphaFactor !== undefined) {
            this.highVolumeWeightAlphaFactor = highVolumeWeightAlphaFactor;
        }
        if (abnormalOutPortsAlphaFactor !== undefined) {
            this.abnormalOutPortsAlphaFactor = abnormalOutPortsAlphaFactor;
        }
        if (abnormalOutEndpointsAlphaFactor !== undefined) {
            this.abnormalOutEndpointsAlphaFactor = abnormalOutEndpointsAlphaFactor;
        }
        if (suspiciousIpAlphaFactor !== undefined) {
            this.suspiciousIpAlphaFactor = suspiciousIpAlphaFactor;
        }
        if (defaultSeverityRange !== undefined) {
            this.defaultSeverityRange = defaultSeverityRange;
        }
        if (defaultSeverityFactor !== undefined) {
            this.defaultSeverityFactor = defaultSeverityFactor;
        }
        if (severityConditionConfigs !== undefined) {
            this.severityConditionConfigs = severityConditionConfigs;
        }
        if (ruleCountThresholdConfigs !== undefined) {
            this.ruleCountThresholdConfigs = ruleCountThresholdConfigs;
        }
        if (ruleBasedSeverityConditionConfigs !== undefined) {
            this.ruleBasedSeverityConditionConfigs = ruleBasedSeverityConditionConfigs;
        }
        if (isSeverityBased !== undefined) {
            this.isSeverityBased = isSeverityBased;
        }
        if (isAlertBased !== undefined) {
            this.isAlertBased = isAlertBased;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGV2aWNlU2NvcmVDb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtcHVsc2UtbGliL3NyYy9saWIvY29tbW9uL0RldmljZVNjb3JlQ29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BLG1FQUFtRTtBQUNuRSxNQUFNLE9BQU8saUJBQWlCO0lBcUR6QixZQUFZLHNCQUErQixFQUFFLG1CQUE0QixFQUFFLGtCQUEyQixFQUFFLG9CQUE2QixFQUFFLHVCQUFnQyxFQUFFLHFCQUE4QixFQUFFLDJCQUFvQyxFQUFFLDJCQUFvQyxFQUFFLCtCQUF3QyxFQUFFLHVCQUFnQyxFQUFFLG9CQUErQixFQUFFLHFCQUE4QixFQUFFLHdCQUFvRCxFQUFFLHlCQUFzRCxFQUFFLGlDQUFzRSxFQUFFLGVBQXlCLEVBQUUsWUFBc0I7UUFDdG9CLElBQUksc0JBQXNCLEtBQUssU0FBUyxFQUFFLENBQUM7WUFBQyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsc0JBQXNCLENBQUM7UUFBQyxDQUFDO1FBQ25HLElBQUksbUJBQW1CLEtBQUssU0FBUyxFQUFFLENBQUM7WUFBQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsbUJBQW1CLENBQUM7UUFBQyxDQUFDO1FBQzFGLElBQUksa0JBQWtCLEtBQUssU0FBUyxFQUFFLENBQUM7WUFBQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsa0JBQWtCLENBQUM7UUFBQyxDQUFDO1FBQ3ZGLElBQUksb0JBQW9CLEtBQUssU0FBUyxFQUFFLENBQUM7WUFBQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsb0JBQW9CLENBQUM7UUFBQyxDQUFDO1FBQzdGLElBQUksdUJBQXVCLEtBQUssU0FBUyxFQUFFLENBQUM7WUFBQyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsdUJBQXVCLENBQUM7UUFBQyxDQUFDO1FBQ3RHLElBQUkscUJBQXFCLEtBQUssU0FBUyxFQUFFLENBQUM7WUFBQyxJQUFJLENBQUMscUJBQXFCLEdBQUcscUJBQXFCLENBQUM7UUFBQyxDQUFDO1FBQ2hHLElBQUksMkJBQTJCLEtBQUssU0FBUyxFQUFFLENBQUM7WUFBQyxJQUFJLENBQUMsMkJBQTJCLEdBQUcsMkJBQTJCLENBQUM7UUFBQyxDQUFDO1FBQ2xILElBQUksMkJBQTJCLEtBQUssU0FBUyxFQUFFLENBQUM7WUFBQyxJQUFJLENBQUMsMkJBQTJCLEdBQUcsMkJBQTJCLENBQUM7UUFBQyxDQUFDO1FBQ2xILElBQUksK0JBQStCLEtBQUssU0FBUyxFQUFFLENBQUM7WUFBQyxJQUFJLENBQUMsK0JBQStCLEdBQUcsK0JBQStCLENBQUM7UUFBQyxDQUFDO1FBQzlILElBQUksdUJBQXVCLEtBQUssU0FBUyxFQUFFLENBQUM7WUFBQyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsdUJBQXVCLENBQUM7UUFBQyxDQUFDO1FBQ3RHLElBQUksb0JBQW9CLEtBQUssU0FBUyxFQUFFLENBQUM7WUFBQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsb0JBQW9CLENBQUM7UUFBQyxDQUFDO1FBQzdGLElBQUkscUJBQXFCLEtBQUssU0FBUyxFQUFFLENBQUM7WUFBQyxJQUFJLENBQUMscUJBQXFCLEdBQUcscUJBQXFCLENBQUM7UUFBQyxDQUFDO1FBQ2hHLElBQUksd0JBQXdCLEtBQUssU0FBUyxFQUFFLENBQUM7WUFBQyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsd0JBQXdCLENBQUM7UUFBQyxDQUFDO1FBQ3pHLElBQUkseUJBQXlCLEtBQUssU0FBUyxFQUFFLENBQUM7WUFBQyxJQUFJLENBQUMseUJBQXlCLEdBQUcseUJBQXlCLENBQUM7UUFBQyxDQUFDO1FBQzVHLElBQUksaUNBQWlDLEtBQUssU0FBUyxFQUFFLENBQUM7WUFBQyxJQUFJLENBQUMsaUNBQWlDLEdBQUcsaUNBQWlDLENBQUM7UUFBQyxDQUFDO1FBQ3BJLElBQUksZUFBZSxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7UUFBQyxDQUFDO1FBQzlFLElBQUksWUFBWSxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFBQyxDQUFDO0lBQ3pFLENBQUM7Q0FFSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJ1bGVCYXNlZFNldmVyaXR5Q29uZGl0aW9uQ29uZmlnIH0gZnJvbSAnLi4vY29tbW9uJztcbmltcG9ydCB7IEludGVydmFsIH0gZnJvbSAnLi4vY29tbW9uJztcbmltcG9ydCB7IFNldmVyaXR5Q29uZGl0aW9uQ29uZmlnIH0gZnJvbSAnLi4vY29tbW9uJztcbmltcG9ydCB7IFJ1bGVDb3VudFRocmVzaG9sZENvbmZpZyB9IGZyb20gJy4uL2NvbW1vbic7XG5cblxuXG4vLyBEZXZpY2VTY29yZUNvbmZpZyBpcyBhIHNldCBvZiBwYXJhbWV0ZXJzIGZvciBkZXZpY2Ugc2NvcmUgY29uZmlnXG5leHBvcnQgY2xhc3MgRGV2aWNlU2NvcmVDb25maWcge1xuIFxuICAgIC8vIGRldmljZSBzY29yZSBhbHBoYSBmYWN0b3IgXG4gICAgcHVibGljIGRldmljZVNjb3JlQWxwaGFGYWN0b3I6IG51bWJlcjtcbiBcbiAgICAvLyBvY2N1cnJlbmNlIHRocmVzaG9sZCBcbiAgICBwdWJsaWMgb2NjdXJyZW5jZVRocmVzaG9sZDogbnVtYmVyO1xuIFxuICAgIC8vIHJ1bGVDb3VudCB0aHJlc2hvbGQgXG4gICAgcHVibGljIHJ1bGVDb3VudFRocmVzaG9sZDogbnVtYmVyO1xuIFxuICAgIC8vIGxvdyB3ZWlnaHQgYWxwaGEgZmFjdG9yIHRvIHVzZSBpbiBkZXZpY2UgcmlzayBzY29yZSBjYWxjdWxhdGlvbiBcbiAgICBwdWJsaWMgbG93V2VpZ2h0QWxwaGFGYWN0b3I6IG51bWJlcjtcbiBcbiAgICAvLyBtZWRpdW0gd2VpZ2h0IGFscGhhIGZhY3RvciB0byB1c2UgaW4gZGV2aWNlIHJpc2sgc2NvcmUgY2FsY3VsYXRpb24gXG4gICAgcHVibGljIG1lZGl1bVdlaWdodEFscGhhRmFjdG9yOiBudW1iZXI7XG4gXG4gICAgLy8gaGlnaCB3ZWlnaHQgYWxwaGEgZmFjdG9yIHRvIHVzZSBpbiBkZXZpY2UgcmlzayBzY29yZSBjYWxjdWxhdGlvbiBcbiAgICBwdWJsaWMgaGlnaFdlaWdodEFscGhhRmFjdG9yOiBudW1iZXI7XG4gXG4gICAgLy8gaGlnaCB2b2x1bWUgd2VpZ2h0IGFscGhhIGZhY3RvciB0byB1c2UgaW4gZGV2aWNlIHJpc2sgc2NvcmUgY2FsY3VsYXRpb24gXG4gICAgcHVibGljIGhpZ2hWb2x1bWVXZWlnaHRBbHBoYUZhY3RvcjogbnVtYmVyO1xuIFxuICAgIC8vIGFibm9ybWFsIG91dCBwb3J0cyBhbHBoYSBmYWN0b3IgdG8gdXNlIGluIGRldmljZSByaXNrIHNjb3JlIGNhbGN1bGF0aW9uIFxuICAgIHB1YmxpYyBhYm5vcm1hbE91dFBvcnRzQWxwaGFGYWN0b3I6IG51bWJlcjtcbiBcbiAgICAvLyBhYm5vcm1hbCBvdXQgZW5kcG9pbnRzIGFscGhhIGZhY3RvciB0byB1c2UgaW4gZGV2aWNlIHJpc2sgc2NvcmUgY2FsY3VsYXRpb24gXG4gICAgcHVibGljIGFibm9ybWFsT3V0RW5kcG9pbnRzQWxwaGFGYWN0b3I6IG51bWJlcjtcbiBcbiAgICAvLyBzdXNwaWNpb3VzIElwIGFscGhhIGZhY3RvciB0byB1c2UgaW4gZGV2aWNlIHJpc2sgc2NvcmUgY2FsY3VsYXRpb24gXG4gICAgcHVibGljIHN1c3BpY2lvdXNJcEFscGhhRmFjdG9yOiBudW1iZXI7XG4gXG4gICAgLy8gZGVmYXVsdCByYW5nZSBvZiB0aGUgc2NvcmUgZm9yIGxvdyBzZXZlcml0eSBcbiAgICBwdWJsaWMgZGVmYXVsdFNldmVyaXR5UmFuZ2U6IEludGVydmFsO1xuIFxuICAgIC8vIGRlZmF1bHQgc2V2ZXJpdHkgZmFjdG9yIFxuICAgIHB1YmxpYyBkZWZhdWx0U2V2ZXJpdHlGYWN0b3I6IG51bWJlcjtcbiBcbiAgICAvLyAwIG9yIG1vcmUgU2V2ZXJpdHlDb25kaXRpb25Db25maWcgcGVyIHNldmVyaXR5IFxuICAgIHB1YmxpYyBzZXZlcml0eUNvbmRpdGlvbkNvbmZpZ3M6IFNldmVyaXR5Q29uZGl0aW9uQ29uZmlnW107XG4gXG4gICAgLy8gMCBvciBtb3JlIFJ1bGVDb3VudFRocmVzaG9sZENvbmZpZyBcbiAgICBwdWJsaWMgcnVsZUNvdW50VGhyZXNob2xkQ29uZmlnczogUnVsZUNvdW50VGhyZXNob2xkQ29uZmlnW107XG4gXG4gICAgLy8gMCBvciBtb3JlIFJ1bGVCYXNlZFNldmVyaXR5Q29uZGl0aW9uQ29uZmlnIFxuICAgIHB1YmxpYyBydWxlQmFzZWRTZXZlcml0eUNvbmRpdGlvbkNvbmZpZ3M6IFJ1bGVCYXNlZFNldmVyaXR5Q29uZGl0aW9uQ29uZmlnW107XG4gXG4gICAgLy8gdHJ1ZSBpZiBzZXZlcml0eSBiYXNlZCAsIGZhbHNlIGlmIHJ1bGUgYmFzZWQgXG4gICAgcHVibGljIGlzU2V2ZXJpdHlCYXNlZDogYm9vbGVhbjtcbiBcbiAgICAvLyB0cnVlIGlmIGFsZXJ0IGJhc2VkICwgZmFsc2UgaWYgZXZlbnQgYmFzZWQgXG4gICAgcHVibGljIGlzQWxlcnRCYXNlZDogYm9vbGVhbjtcbiBcbiAgICAgY29uc3RydWN0b3IoZGV2aWNlU2NvcmVBbHBoYUZhY3Rvcj86IG51bWJlciwgb2NjdXJyZW5jZVRocmVzaG9sZD86IG51bWJlciwgcnVsZUNvdW50VGhyZXNob2xkPzogbnVtYmVyLCBsb3dXZWlnaHRBbHBoYUZhY3Rvcj86IG51bWJlciwgbWVkaXVtV2VpZ2h0QWxwaGFGYWN0b3I/OiBudW1iZXIsIGhpZ2hXZWlnaHRBbHBoYUZhY3Rvcj86IG51bWJlciwgaGlnaFZvbHVtZVdlaWdodEFscGhhRmFjdG9yPzogbnVtYmVyLCBhYm5vcm1hbE91dFBvcnRzQWxwaGFGYWN0b3I/OiBudW1iZXIsIGFibm9ybWFsT3V0RW5kcG9pbnRzQWxwaGFGYWN0b3I/OiBudW1iZXIsIHN1c3BpY2lvdXNJcEFscGhhRmFjdG9yPzogbnVtYmVyLCBkZWZhdWx0U2V2ZXJpdHlSYW5nZT86IEludGVydmFsLCBkZWZhdWx0U2V2ZXJpdHlGYWN0b3I/OiBudW1iZXIsIHNldmVyaXR5Q29uZGl0aW9uQ29uZmlncz86IFNldmVyaXR5Q29uZGl0aW9uQ29uZmlnW10sIHJ1bGVDb3VudFRocmVzaG9sZENvbmZpZ3M/OiBSdWxlQ291bnRUaHJlc2hvbGRDb25maWdbXSwgcnVsZUJhc2VkU2V2ZXJpdHlDb25kaXRpb25Db25maWdzPzogUnVsZUJhc2VkU2V2ZXJpdHlDb25kaXRpb25Db25maWdbXSwgaXNTZXZlcml0eUJhc2VkPzogYm9vbGVhbiwgaXNBbGVydEJhc2VkPzogYm9vbGVhbikgeyBcbiAgICAgICAgaWYgKGRldmljZVNjb3JlQWxwaGFGYWN0b3IgIT09IHVuZGVmaW5lZCkgeyB0aGlzLmRldmljZVNjb3JlQWxwaGFGYWN0b3IgPSBkZXZpY2VTY29yZUFscGhhRmFjdG9yOyB9XG4gICAgICAgIGlmIChvY2N1cnJlbmNlVGhyZXNob2xkICE9PSB1bmRlZmluZWQpIHsgdGhpcy5vY2N1cnJlbmNlVGhyZXNob2xkID0gb2NjdXJyZW5jZVRocmVzaG9sZDsgfVxuICAgICAgICBpZiAocnVsZUNvdW50VGhyZXNob2xkICE9PSB1bmRlZmluZWQpIHsgdGhpcy5ydWxlQ291bnRUaHJlc2hvbGQgPSBydWxlQ291bnRUaHJlc2hvbGQ7IH1cbiAgICAgICAgaWYgKGxvd1dlaWdodEFscGhhRmFjdG9yICE9PSB1bmRlZmluZWQpIHsgdGhpcy5sb3dXZWlnaHRBbHBoYUZhY3RvciA9IGxvd1dlaWdodEFscGhhRmFjdG9yOyB9XG4gICAgICAgIGlmIChtZWRpdW1XZWlnaHRBbHBoYUZhY3RvciAhPT0gdW5kZWZpbmVkKSB7IHRoaXMubWVkaXVtV2VpZ2h0QWxwaGFGYWN0b3IgPSBtZWRpdW1XZWlnaHRBbHBoYUZhY3RvcjsgfVxuICAgICAgICBpZiAoaGlnaFdlaWdodEFscGhhRmFjdG9yICE9PSB1bmRlZmluZWQpIHsgdGhpcy5oaWdoV2VpZ2h0QWxwaGFGYWN0b3IgPSBoaWdoV2VpZ2h0QWxwaGFGYWN0b3I7IH1cbiAgICAgICAgaWYgKGhpZ2hWb2x1bWVXZWlnaHRBbHBoYUZhY3RvciAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuaGlnaFZvbHVtZVdlaWdodEFscGhhRmFjdG9yID0gaGlnaFZvbHVtZVdlaWdodEFscGhhRmFjdG9yOyB9XG4gICAgICAgIGlmIChhYm5vcm1hbE91dFBvcnRzQWxwaGFGYWN0b3IgIT09IHVuZGVmaW5lZCkgeyB0aGlzLmFibm9ybWFsT3V0UG9ydHNBbHBoYUZhY3RvciA9IGFibm9ybWFsT3V0UG9ydHNBbHBoYUZhY3RvcjsgfVxuICAgICAgICBpZiAoYWJub3JtYWxPdXRFbmRwb2ludHNBbHBoYUZhY3RvciAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuYWJub3JtYWxPdXRFbmRwb2ludHNBbHBoYUZhY3RvciA9IGFibm9ybWFsT3V0RW5kcG9pbnRzQWxwaGFGYWN0b3I7IH1cbiAgICAgICAgaWYgKHN1c3BpY2lvdXNJcEFscGhhRmFjdG9yICE9PSB1bmRlZmluZWQpIHsgdGhpcy5zdXNwaWNpb3VzSXBBbHBoYUZhY3RvciA9IHN1c3BpY2lvdXNJcEFscGhhRmFjdG9yOyB9XG4gICAgICAgIGlmIChkZWZhdWx0U2V2ZXJpdHlSYW5nZSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuZGVmYXVsdFNldmVyaXR5UmFuZ2UgPSBkZWZhdWx0U2V2ZXJpdHlSYW5nZTsgfVxuICAgICAgICBpZiAoZGVmYXVsdFNldmVyaXR5RmFjdG9yICE9PSB1bmRlZmluZWQpIHsgdGhpcy5kZWZhdWx0U2V2ZXJpdHlGYWN0b3IgPSBkZWZhdWx0U2V2ZXJpdHlGYWN0b3I7IH1cbiAgICAgICAgaWYgKHNldmVyaXR5Q29uZGl0aW9uQ29uZmlncyAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuc2V2ZXJpdHlDb25kaXRpb25Db25maWdzID0gc2V2ZXJpdHlDb25kaXRpb25Db25maWdzOyB9XG4gICAgICAgIGlmIChydWxlQ291bnRUaHJlc2hvbGRDb25maWdzICE9PSB1bmRlZmluZWQpIHsgdGhpcy5ydWxlQ291bnRUaHJlc2hvbGRDb25maWdzID0gcnVsZUNvdW50VGhyZXNob2xkQ29uZmlnczsgfVxuICAgICAgICBpZiAocnVsZUJhc2VkU2V2ZXJpdHlDb25kaXRpb25Db25maWdzICE9PSB1bmRlZmluZWQpIHsgdGhpcy5ydWxlQmFzZWRTZXZlcml0eUNvbmRpdGlvbkNvbmZpZ3MgPSBydWxlQmFzZWRTZXZlcml0eUNvbmRpdGlvbkNvbmZpZ3M7IH1cbiAgICAgICAgaWYgKGlzU2V2ZXJpdHlCYXNlZCAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuaXNTZXZlcml0eUJhc2VkID0gaXNTZXZlcml0eUJhc2VkOyB9XG4gICAgICAgIGlmIChpc0FsZXJ0QmFzZWQgIT09IHVuZGVmaW5lZCkgeyB0aGlzLmlzQWxlcnRCYXNlZCA9IGlzQWxlcnRCYXNlZDsgfVxuICAgIH1cblxufVxuXG5cbiJdfQ==