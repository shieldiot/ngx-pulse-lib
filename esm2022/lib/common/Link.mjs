// Link represents a relation between two nodes
export class Link {
    constructor(id, name, src, dst, value, severity, eventCount) {
        if (id !== undefined) {
            this.id = id;
        }
        if (name !== undefined) {
            this.name = name;
        }
        if (src !== undefined) {
            this.src = src;
        }
        if (dst !== undefined) {
            this.dst = dst;
        }
        if (value !== undefined) {
            this.value = value;
        }
        if (severity !== undefined) {
            this.severity = severity;
        }
        if (eventCount !== undefined) {
            this.eventCount = eventCount;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGluay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1wdWxzZS1saWIvc3JjL2xpYi9jb21tb24vTGluay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQSwrQ0FBK0M7QUFDL0MsTUFBTSxPQUFPLElBQUk7SUF1QlosWUFBWSxFQUFXLEVBQUUsSUFBYSxFQUFFLEdBQVksRUFBRSxHQUFZLEVBQUUsS0FBYyxFQUFFLFFBQTJCLEVBQUUsVUFBbUI7UUFDakksSUFBSSxFQUFFLEtBQUssU0FBUyxFQUFFLENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUFDLENBQUM7UUFDdkMsSUFBSSxJQUFJLEtBQUssU0FBUyxFQUFFLENBQUM7WUFBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUFDLENBQUM7UUFDN0MsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFLENBQUM7WUFBQyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUFDLENBQUM7UUFDMUMsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFLENBQUM7WUFBQyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUFDLENBQUM7UUFDMUMsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFLENBQUM7WUFBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUFDLENBQUM7UUFDaEQsSUFBSSxRQUFRLEtBQUssU0FBUyxFQUFFLENBQUM7WUFBQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUFDLENBQUM7UUFDekQsSUFBSSxVQUFVLEtBQUssU0FBUyxFQUFFLENBQUM7WUFBQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUFDLENBQUM7SUFDbkUsQ0FBQztDQUVKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2V2ZXJpdHlUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL1NldmVyaXR5VHlwZUNvZGUnO1xuXG5cblxuLy8gTGluayByZXByZXNlbnRzIGEgcmVsYXRpb24gYmV0d2VlbiB0d28gbm9kZXNcbmV4cG9ydCBjbGFzcyBMaW5rIHtcbiBcbiAgICAvLyBMaW5rIElkIFxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xuIFxuICAgIC8vIExpbmsgbmFtZSBcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xuIFxuICAgIC8vIFNvdXJjZSBOb2RlIElkIChmcm9tKSBcbiAgICBwdWJsaWMgc3JjOiBzdHJpbmc7XG4gXG4gICAgLy8gRGVzdGluYXRpb24gTm9kZSBJZCAodG8pIFxuICAgIHB1YmxpYyBkc3Q6IHN0cmluZztcbiBcbiAgICAvLyBMaW5rIG51bWVyaWMgdmFsdWUgXG4gICAgcHVibGljIHZhbHVlOiBudW1iZXI7XG4gXG4gICAgLy8gU2V2ZXJpdHkgbGV2ZWw6IFVOREVGSU5FRCB8IExPVyB8IE1FRElVTSB8IEhJR0ggfCBDUklUSUNBTCBcbiAgICBwdWJsaWMgc2V2ZXJpdHk6IFNldmVyaXR5VHlwZUNvZGU7XG4gXG4gICAgLy8gTnVtYmVyIG9mIGV2ZW50cyBmb3IgdGhlIHRpbWUgcGVyaW9kIChjYWxjdWxhdGVkIGZpZWxkKSBcbiAgICBwdWJsaWMgZXZlbnRDb3VudDogbnVtYmVyO1xuIFxuICAgICBjb25zdHJ1Y3RvcihpZD86IHN0cmluZywgbmFtZT86IHN0cmluZywgc3JjPzogc3RyaW5nLCBkc3Q/OiBzdHJpbmcsIHZhbHVlPzogbnVtYmVyLCBzZXZlcml0eT86IFNldmVyaXR5VHlwZUNvZGUsIGV2ZW50Q291bnQ/OiBudW1iZXIpIHsgXG4gICAgICAgIGlmIChpZCAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuaWQgPSBpZDsgfVxuICAgICAgICBpZiAobmFtZSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMubmFtZSA9IG5hbWU7IH1cbiAgICAgICAgaWYgKHNyYyAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuc3JjID0gc3JjOyB9XG4gICAgICAgIGlmIChkc3QgIT09IHVuZGVmaW5lZCkgeyB0aGlzLmRzdCA9IGRzdDsgfVxuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkgeyB0aGlzLnZhbHVlID0gdmFsdWU7IH1cbiAgICAgICAgaWYgKHNldmVyaXR5ICE9PSB1bmRlZmluZWQpIHsgdGhpcy5zZXZlcml0eSA9IHNldmVyaXR5OyB9XG4gICAgICAgIGlmIChldmVudENvdW50ICE9PSB1bmRlZmluZWQpIHsgdGhpcy5ldmVudENvdW50ID0gZXZlbnRDb3VudDsgfVxuICAgIH1cblxufVxuXG5cbiJdfQ==