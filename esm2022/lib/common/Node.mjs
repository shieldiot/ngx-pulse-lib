// Node represents a vertex in a network map
export class Node {
    constructor(id, name, ip, type, score, tags, labels, eventCount, isGroup, deviceCount) {
        if (id !== undefined) {
            this.id = id;
        }
        if (name !== undefined) {
            this.name = name;
        }
        if (ip !== undefined) {
            this.ip = ip;
        }
        if (type !== undefined) {
            this.type = type;
        }
        if (score !== undefined) {
            this.score = score;
        }
        if (tags !== undefined) {
            this.tags = tags;
        }
        if (labels !== undefined) {
            this.labels = labels;
        }
        if (eventCount !== undefined) {
            this.eventCount = eventCount;
        }
        if (isGroup !== undefined) {
            this.isGroup = isGroup;
        }
        if (deviceCount !== undefined) {
            this.deviceCount = deviceCount;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm9kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1wdWxzZS1saWIvc3JjL2xpYi9jb21tb24vTm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQSw0Q0FBNEM7QUFDNUMsTUFBTSxPQUFPLElBQUk7SUFnQ1osWUFBWSxFQUFXLEVBQUUsSUFBYSxFQUFFLEVBQVcsRUFBRSxJQUFxQixFQUFFLEtBQWMsRUFBRSxJQUFlLEVBQUUsTUFBeUIsRUFBRSxVQUFtQixFQUFFLE9BQWlCLEVBQUUsV0FBb0I7UUFDak0sSUFBSSxFQUFFLEtBQUssU0FBUyxFQUFFLENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUFDLENBQUM7UUFDdkMsSUFBSSxJQUFJLEtBQUssU0FBUyxFQUFFLENBQUM7WUFBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUFDLENBQUM7UUFDN0MsSUFBSSxFQUFFLEtBQUssU0FBUyxFQUFFLENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUFDLENBQUM7UUFDdkMsSUFBSSxJQUFJLEtBQUssU0FBUyxFQUFFLENBQUM7WUFBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUFDLENBQUM7UUFDN0MsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFLENBQUM7WUFBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUFDLENBQUM7UUFDaEQsSUFBSSxJQUFJLEtBQUssU0FBUyxFQUFFLENBQUM7WUFBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUFDLENBQUM7UUFDN0MsSUFBSSxNQUFNLEtBQUssU0FBUyxFQUFFLENBQUM7WUFBQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUFDLENBQUM7UUFDbkQsSUFBSSxVQUFVLEtBQUssU0FBUyxFQUFFLENBQUM7WUFBQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUFDLENBQUM7UUFDL0QsSUFBSSxPQUFPLEtBQUssU0FBUyxFQUFFLENBQUM7WUFBQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUFDLENBQUM7UUFDdEQsSUFBSSxXQUFXLEtBQUssU0FBUyxFQUFFLENBQUM7WUFBQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUFDLENBQUM7SUFDdEUsQ0FBQztDQUVKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGV2aWNlVHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9EZXZpY2VUeXBlQ29kZSc7XG5pbXBvcnQgeyBTdHJpbmdLZXlWYWx1ZSB9IGZyb20gJy4uL2NvbW1vbi9TdHJpbmdLZXlWYWx1ZSc7XG5cblxuXG4vLyBOb2RlIHJlcHJlc2VudHMgYSB2ZXJ0ZXggaW4gYSBuZXR3b3JrIG1hcFxuZXhwb3J0IGNsYXNzIE5vZGUge1xuIFxuICAgIC8vIE5vZGUgSWQgXG4gICAgcHVibGljIGlkOiBzdHJpbmc7XG4gXG4gICAgLy8gTm9kZSBuYW1lIFxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gXG4gICAgLy8gTm9kZSBJUCBcbiAgICBwdWJsaWMgaXA6IHN0cmluZztcbiBcbiAgICAvLyBEZXZpY2UgdHlwZSAoZm9yIG5vZGVzIHJlcHJlc2VudGluZyBhIGRldmljZSkgXG4gICAgcHVibGljIHR5cGU6IERldmljZVR5cGVDb2RlO1xuIFxuICAgIC8vIERldmljZSBjdXJyZW50IHNlY3VyaXR5IHNjb3JlIFxuICAgIHB1YmxpYyBzY29yZTogbnVtYmVyO1xuIFxuICAgIC8vIExpc3Qgb2YgZGV2aWNlIHRhZ3MgXG4gICAgcHVibGljIHRhZ3M6IHN0cmluZ1tdO1xuIFxuICAgIC8vIEN1c3RvbSBhdHRyaWJ1dGVzIChrZXktdmFsdWUgcGFpcnMpIFxuICAgIHB1YmxpYyBsYWJlbHM6IFN0cmluZ0tleVZhbHVlW107XG4gXG4gICAgLy8gTnVtYmVyIG9mIGV2ZW50cyBmb3IgdGhlIHRpbWUgcGVyaW9kIChjYWxjdWxhdGVkIGZpZWxkKSBcbiAgICBwdWJsaWMgZXZlbnRDb3VudDogbnVtYmVyO1xuIFxuICAgIC8vIElzIGFnZ3JlZ2F0ZWQgbm9kZSBcbiAgICBwdWJsaWMgaXNHcm91cDogYm9vbGVhbjtcbiBcbiAgICAvLyBcbiAgICBwdWJsaWMgZGV2aWNlQ291bnQ6IG51bWJlcjtcbiBcbiAgICAgY29uc3RydWN0b3IoaWQ/OiBzdHJpbmcsIG5hbWU/OiBzdHJpbmcsIGlwPzogc3RyaW5nLCB0eXBlPzogRGV2aWNlVHlwZUNvZGUsIHNjb3JlPzogbnVtYmVyLCB0YWdzPzogc3RyaW5nW10sIGxhYmVscz86IFN0cmluZ0tleVZhbHVlW10sIGV2ZW50Q291bnQ/OiBudW1iZXIsIGlzR3JvdXA/OiBib29sZWFuLCBkZXZpY2VDb3VudD86IG51bWJlcikgeyBcbiAgICAgICAgaWYgKGlkICE9PSB1bmRlZmluZWQpIHsgdGhpcy5pZCA9IGlkOyB9XG4gICAgICAgIGlmIChuYW1lICE9PSB1bmRlZmluZWQpIHsgdGhpcy5uYW1lID0gbmFtZTsgfVxuICAgICAgICBpZiAoaXAgIT09IHVuZGVmaW5lZCkgeyB0aGlzLmlwID0gaXA7IH1cbiAgICAgICAgaWYgKHR5cGUgIT09IHVuZGVmaW5lZCkgeyB0aGlzLnR5cGUgPSB0eXBlOyB9XG4gICAgICAgIGlmIChzY29yZSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuc2NvcmUgPSBzY29yZTsgfVxuICAgICAgICBpZiAodGFncyAhPT0gdW5kZWZpbmVkKSB7IHRoaXMudGFncyA9IHRhZ3M7IH1cbiAgICAgICAgaWYgKGxhYmVscyAhPT0gdW5kZWZpbmVkKSB7IHRoaXMubGFiZWxzID0gbGFiZWxzOyB9XG4gICAgICAgIGlmIChldmVudENvdW50ICE9PSB1bmRlZmluZWQpIHsgdGhpcy5ldmVudENvdW50ID0gZXZlbnRDb3VudDsgfVxuICAgICAgICBpZiAoaXNHcm91cCAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuaXNHcm91cCA9IGlzR3JvdXA7IH1cbiAgICAgICAgaWYgKGRldmljZUNvdW50ICE9PSB1bmRlZmluZWQpIHsgdGhpcy5kZXZpY2VDb3VudCA9IGRldmljZUNvdW50OyB9XG4gICAgfVxuXG59XG5cblxuIl19