// RuleBasedSeverityConditionConfig is a set of severity types code configs
export class RuleBasedSeverityConditionConfig {
    constructor(severityType, bias, ruleCountThresholdConfigs, ruleTypesThreshold) {
        if (severityType !== undefined) {
            this.severityType = severityType;
        }
        if (bias !== undefined) {
            this.bias = bias;
        }
        if (ruleCountThresholdConfigs !== undefined) {
            this.ruleCountThresholdConfigs = ruleCountThresholdConfigs;
        }
        if (ruleTypesThreshold !== undefined) {
            this.ruleTypesThreshold = ruleTypesThreshold;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUnVsZUJhc2VkU2V2ZXJpdHlDb25kaXRpb25Db25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtcHVsc2UtbGliL3NyYy9saWIvY29tbW9uL1J1bGVCYXNlZFNldmVyaXR5Q29uZGl0aW9uQ29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBLDJFQUEyRTtBQUMzRSxNQUFNLE9BQU8sZ0NBQWdDO0lBY3hDLFlBQVksWUFBK0IsRUFBRSxJQUFhLEVBQUUseUJBQXNELEVBQUUsa0JBQTJCO1FBQzVJLElBQUksWUFBWSxLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1NBQUU7UUFDckUsSUFBSSxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FBRTtRQUM3QyxJQUFJLHlCQUF5QixLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyx5QkFBeUIsR0FBRyx5QkFBeUIsQ0FBQztTQUFFO1FBQzVHLElBQUksa0JBQWtCLEtBQUssU0FBUyxFQUFFO1lBQUUsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGtCQUFrQixDQUFDO1NBQUU7SUFDM0YsQ0FBQztDQUVKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2V2ZXJpdHlUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zJztcbmltcG9ydCB7IFJ1bGVDb3VudFRocmVzaG9sZENvbmZpZyB9IGZyb20gJy4uL2NvbW1vbic7XG5cblxuXG4vLyBSdWxlQmFzZWRTZXZlcml0eUNvbmRpdGlvbkNvbmZpZyBpcyBhIHNldCBvZiBzZXZlcml0eSB0eXBlcyBjb2RlIGNvbmZpZ3NcbmV4cG9ydCBjbGFzcyBSdWxlQmFzZWRTZXZlcml0eUNvbmRpdGlvbkNvbmZpZyB7XG4gXG4gICAgLy8gU2V2ZXJpdHkgbGV2ZWw6IFVOREVGSU5FRCB8IExPVyB8IE1FRElVTSB8IEhJR0ggfCBDUklUSUNBTCBcbiAgICBwdWJsaWMgc2V2ZXJpdHlUeXBlOiBTZXZlcml0eVR5cGVDb2RlO1xuIFxuICAgIC8vIGJpYXMgY29uZmlnIFxuICAgIHB1YmxpYyBiaWFzOiBudW1iZXI7XG4gXG4gICAgLy8gMCBvciBtb3JlIFJ1bGVDb3VudFRocmVzaG9sZENvbmZpZyBcbiAgICBwdWJsaWMgcnVsZUNvdW50VGhyZXNob2xkQ29uZmlnczogUnVsZUNvdW50VGhyZXNob2xkQ29uZmlnW107XG4gXG4gICAgLy8gTWluaW11bSBudW1iZXIgb2YgZGlmZmVyZW50IHJ1bGUgdHlwZXMgXG4gICAgcHVibGljIHJ1bGVUeXBlc1RocmVzaG9sZDogbnVtYmVyO1xuIFxuICAgICBjb25zdHJ1Y3RvcihzZXZlcml0eVR5cGU/OiBTZXZlcml0eVR5cGVDb2RlLCBiaWFzPzogbnVtYmVyLCBydWxlQ291bnRUaHJlc2hvbGRDb25maWdzPzogUnVsZUNvdW50VGhyZXNob2xkQ29uZmlnW10sIHJ1bGVUeXBlc1RocmVzaG9sZD86IG51bWJlcikgeyBcbiAgICAgICAgaWYgKHNldmVyaXR5VHlwZSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuc2V2ZXJpdHlUeXBlID0gc2V2ZXJpdHlUeXBlOyB9XG4gICAgICAgIGlmIChiaWFzICE9PSB1bmRlZmluZWQpIHsgdGhpcy5iaWFzID0gYmlhczsgfVxuICAgICAgICBpZiAocnVsZUNvdW50VGhyZXNob2xkQ29uZmlncyAhPT0gdW5kZWZpbmVkKSB7IHRoaXMucnVsZUNvdW50VGhyZXNob2xkQ29uZmlncyA9IHJ1bGVDb3VudFRocmVzaG9sZENvbmZpZ3M7IH1cbiAgICAgICAgaWYgKHJ1bGVUeXBlc1RocmVzaG9sZCAhPT0gdW5kZWZpbmVkKSB7IHRoaXMucnVsZVR5cGVzVGhyZXNob2xkID0gcnVsZVR5cGVzVGhyZXNob2xkOyB9XG4gICAgfVxuXG59XG5cblxuIl19