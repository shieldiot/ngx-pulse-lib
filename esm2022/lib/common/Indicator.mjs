// Indicator model represents a feature and feature value within a normal range
export class Indicator {
    constructor(name, significance, min, max, actual) {
        if (name !== undefined) {
            this.name = name;
        }
        if (significance !== undefined) {
            this.significance = significance;
        }
        if (min !== undefined) {
            this.min = min;
        }
        if (max !== undefined) {
            this.max = max;
        }
        if (actual !== undefined) {
            this.actual = actual;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5kaWNhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXB1bHNlLWxpYi9zcmMvbGliL2NvbW1vbi9JbmRpY2F0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsK0VBQStFO0FBQy9FLE1BQU0sT0FBTyxTQUFTO0lBaUJqQixZQUFZLElBQWEsRUFBRSxZQUFxQixFQUFFLEdBQVksRUFBRSxHQUFZLEVBQUUsTUFBZTtRQUMxRixJQUFJLElBQUksS0FBSyxTQUFTLEVBQUU7WUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUFFO1FBQzdDLElBQUksWUFBWSxLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1NBQUU7UUFDckUsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7U0FBRTtRQUMxQyxJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFBRSxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztTQUFFO1FBQzFDLElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1NBQUU7SUFDdkQsQ0FBQztDQUVKIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuLy8gSW5kaWNhdG9yIG1vZGVsIHJlcHJlc2VudHMgYSBmZWF0dXJlIGFuZCBmZWF0dXJlIHZhbHVlIHdpdGhpbiBhIG5vcm1hbCByYW5nZVxuZXhwb3J0IGNsYXNzIEluZGljYXRvciB7XG4gXG4gICAgLy8gRmVhdHVyZSBuYW1lIFxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gXG4gICAgLy8gTGV2ZWwgb2YgU2lnbmlmaWNhbmNlIFxuICAgIHB1YmxpYyBzaWduaWZpY2FuY2U6IG51bWJlcjtcbiBcbiAgICAvLyBNaW4gbm9ybWFsIHZhbHVlIFxuICAgIHB1YmxpYyBtaW46IG51bWJlcjtcbiBcbiAgICAvLyBNYXggbm9ybWFsIHZhbHVlIFxuICAgIHB1YmxpYyBtYXg6IG51bWJlcjtcbiBcbiAgICAvLyBBY3R1YWwgdmFsdWUgb2YgdGhlIGZlYXR1cmUgXG4gICAgcHVibGljIGFjdHVhbDogbnVtYmVyO1xuIFxuICAgICBjb25zdHJ1Y3RvcihuYW1lPzogc3RyaW5nLCBzaWduaWZpY2FuY2U/OiBudW1iZXIsIG1pbj86IG51bWJlciwgbWF4PzogbnVtYmVyLCBhY3R1YWw/OiBudW1iZXIpIHsgXG4gICAgICAgIGlmIChuYW1lICE9PSB1bmRlZmluZWQpIHsgdGhpcy5uYW1lID0gbmFtZTsgfVxuICAgICAgICBpZiAoc2lnbmlmaWNhbmNlICE9PSB1bmRlZmluZWQpIHsgdGhpcy5zaWduaWZpY2FuY2UgPSBzaWduaWZpY2FuY2U7IH1cbiAgICAgICAgaWYgKG1pbiAhPT0gdW5kZWZpbmVkKSB7IHRoaXMubWluID0gbWluOyB9XG4gICAgICAgIGlmIChtYXggIT09IHVuZGVmaW5lZCkgeyB0aGlzLm1heCA9IG1heDsgfVxuICAgICAgICBpZiAoYWN0dWFsICE9PSB1bmRlZmluZWQpIHsgdGhpcy5hY3R1YWwgPSBhY3R1YWw7IH1cbiAgICB9XG5cbn1cblxuXG4iXX0=