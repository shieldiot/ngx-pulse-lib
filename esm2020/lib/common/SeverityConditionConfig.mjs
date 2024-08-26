// SeverityConditionConfig is a set of severity configuration configs
export class SeverityConditionConfig {
    constructor(conditionSeverity, sevs, countTH, severityFactor, severityRange) {
        if (conditionSeverity !== undefined) {
            this.conditionSeverity = conditionSeverity;
        }
        if (sevs !== undefined) {
            this.sevs = sevs;
        }
        if (countTH !== undefined) {
            this.countTH = countTH;
        }
        if (severityFactor !== undefined) {
            this.severityFactor = severityFactor;
        }
        if (severityRange !== undefined) {
            this.severityRange = severityRange;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2V2ZXJpdHlDb25kaXRpb25Db25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtcHVsc2UtbGliL3NyYy9saWIvY29tbW9uL1NldmVyaXR5Q29uZGl0aW9uQ29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBLHFFQUFxRTtBQUNyRSxNQUFNLE9BQU8sdUJBQXVCO0lBaUIvQixZQUFZLGlCQUFvQyxFQUFFLElBQXlCLEVBQUUsT0FBZ0IsRUFBRSxjQUF1QixFQUFFLGFBQXdCO1FBQzdJLElBQUksaUJBQWlCLEtBQUssU0FBUyxFQUFFO1lBQUUsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO1NBQUU7UUFDcEYsSUFBSSxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FBRTtRQUM3QyxJQUFJLE9BQU8sS0FBSyxTQUFTLEVBQUU7WUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztTQUFFO1FBQ3RELElBQUksY0FBYyxLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1NBQUU7UUFDM0UsSUFBSSxhQUFhLEtBQUssU0FBUyxFQUFFO1lBQUUsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7U0FBRTtJQUM1RSxDQUFDO0NBRUoiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZXZlcml0eVR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMnO1xuaW1wb3J0IHsgSW50ZXJ2YWwgfSBmcm9tICcuLi9jb21tb24nO1xuXG5cblxuLy8gU2V2ZXJpdHlDb25kaXRpb25Db25maWcgaXMgYSBzZXQgb2Ygc2V2ZXJpdHkgY29uZmlndXJhdGlvbiBjb25maWdzXG5leHBvcnQgY2xhc3MgU2V2ZXJpdHlDb25kaXRpb25Db25maWcge1xuIFxuICAgIC8vIFNldmVyaXR5IGxldmVsOiBVTkRFRklORUQgfCBMT1cgfCBNRURJVU0gfCBISUdIIHwgQ1JJVElDQUwgXG4gICAgcHVibGljIGNvbmRpdGlvblNldmVyaXR5OiBTZXZlcml0eVR5cGVDb2RlO1xuIFxuICAgIC8vIExpc3Qgb2Ygc2V2ZXJpdGllcyB0eXBlIGNvZGVzIFxuICAgIHB1YmxpYyBzZXZzOiBTZXZlcml0eVR5cGVDb2RlW107XG4gXG4gICAgLy8gQ291bnQgb2Ygb2NjdXJyZW5jZXMgXG4gICAgcHVibGljIGNvdW50VEg6IG51bWJlcjtcbiBcbiAgICAvLyBTZXZlcml0eSBmYWN0b3IgXG4gICAgcHVibGljIHNldmVyaXR5RmFjdG9yOiBudW1iZXI7XG4gXG4gICAgLy8gcmFuZ2Ugb2YgdGhlIHNjb3JlIHBlciBzZXZlcml0eSBcbiAgICBwdWJsaWMgc2V2ZXJpdHlSYW5nZTogSW50ZXJ2YWw7XG4gXG4gICAgIGNvbnN0cnVjdG9yKGNvbmRpdGlvblNldmVyaXR5PzogU2V2ZXJpdHlUeXBlQ29kZSwgc2V2cz86IFNldmVyaXR5VHlwZUNvZGVbXSwgY291bnRUSD86IG51bWJlciwgc2V2ZXJpdHlGYWN0b3I/OiBudW1iZXIsIHNldmVyaXR5UmFuZ2U/OiBJbnRlcnZhbCkgeyBcbiAgICAgICAgaWYgKGNvbmRpdGlvblNldmVyaXR5ICE9PSB1bmRlZmluZWQpIHsgdGhpcy5jb25kaXRpb25TZXZlcml0eSA9IGNvbmRpdGlvblNldmVyaXR5OyB9XG4gICAgICAgIGlmIChzZXZzICE9PSB1bmRlZmluZWQpIHsgdGhpcy5zZXZzID0gc2V2czsgfVxuICAgICAgICBpZiAoY291bnRUSCAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuY291bnRUSCA9IGNvdW50VEg7IH1cbiAgICAgICAgaWYgKHNldmVyaXR5RmFjdG9yICE9PSB1bmRlZmluZWQpIHsgdGhpcy5zZXZlcml0eUZhY3RvciA9IHNldmVyaXR5RmFjdG9yOyB9XG4gICAgICAgIGlmIChzZXZlcml0eVJhbmdlICE9PSB1bmRlZmluZWQpIHsgdGhpcy5zZXZlcml0eVJhbmdlID0gc2V2ZXJpdHlSYW5nZTsgfVxuICAgIH1cblxufVxuXG5cbiJdfQ==