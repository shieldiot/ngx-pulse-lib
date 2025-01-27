// Usage data transformation parameters (to calculate z-score)
export class UsageTransform {
    constructor(packetsIn, packetsOut, bytesIn, bytesOut, endpointsCount, portsCount) {
        if (packetsIn !== undefined) {
            this.packetsIn = packetsIn;
        }
        if (packetsOut !== undefined) {
            this.packetsOut = packetsOut;
        }
        if (bytesIn !== undefined) {
            this.bytesIn = bytesIn;
        }
        if (bytesOut !== undefined) {
            this.bytesOut = bytesOut;
        }
        if (endpointsCount !== undefined) {
            this.endpointsCount = endpointsCount;
        }
        if (portsCount !== undefined) {
            this.portsCount = portsCount;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNhZ2VUcmFuc2Zvcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtcHVsc2UtbGliL3NyYy9saWIvY29tbW9uL1VzYWdlVHJhbnNmb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBLDhEQUE4RDtBQUM5RCxNQUFNLE9BQU8sY0FBYztJQW9CdEIsWUFBWSxTQUFrQixFQUFFLFVBQW1CLEVBQUUsT0FBZ0IsRUFBRSxRQUFpQixFQUFFLGNBQXVCLEVBQUUsVUFBbUI7UUFDbkksSUFBSSxTQUFTLEtBQUssU0FBUyxFQUFFO1lBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7U0FBRTtRQUM1RCxJQUFJLFVBQVUsS0FBSyxTQUFTLEVBQUU7WUFBRSxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztTQUFFO1FBQy9ELElBQUksT0FBTyxLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1NBQUU7UUFDdEQsSUFBSSxRQUFRLEtBQUssU0FBUyxFQUFFO1lBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7U0FBRTtRQUN6RCxJQUFJLGNBQWMsS0FBSyxTQUFTLEVBQUU7WUFBRSxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztTQUFFO1FBQzNFLElBQUksVUFBVSxLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1NBQUU7SUFDbkUsQ0FBQztDQUVKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgWlNjb3JlIH0gZnJvbSAnLi4vY29tbW9uJztcblxuXG5cbi8vIFVzYWdlIGRhdGEgdHJhbnNmb3JtYXRpb24gcGFyYW1ldGVycyAodG8gY2FsY3VsYXRlIHotc2NvcmUpXG5leHBvcnQgY2xhc3MgVXNhZ2VUcmFuc2Zvcm0ge1xuIFxuICAgIC8vIFpTY29yZSBwYXJhbWV0ZXJzIGZvciBpbmNvbWluZyBwYWNrZXRzICh0byB0aGUgZGV2aWNlKSBcbiAgICBwdWJsaWMgcGFja2V0c0luOiBaU2NvcmU7XG4gXG4gICAgLy8gWlNjb3JlIHBhcmFtZXRlcnMgZm9yIG91dGdvaW5nIHBhY2tldHMgKGZyb20gdGhlIGRldmljZSkgXG4gICAgcHVibGljIHBhY2tldHNPdXQ6IFpTY29yZTtcbiBcbiAgICAvLyBaU2NvcmUgcGFyYW1ldGVycyBmb3IgdG90YWwgbnVtYmVyIG9mIGluY29taW5nIGJ5dGVzICh0byB0aGUgZGV2aWNlKSBcbiAgICBwdWJsaWMgYnl0ZXNJbjogWlNjb3JlO1xuIFxuICAgIC8vIFpTY29yZSBwYXJhbWV0ZXJzIGZvciB0b3RhbCBudW1iZXIgb2Ygb3V0Z29pbmcgYnl0ZXMgKGZyb20gdGhlIGRldmljZSkgXG4gICAgcHVibGljIGJ5dGVzT3V0OiBaU2NvcmU7XG4gXG4gICAgLy8gWlNjb3JlIHBhcmFtZXRlcnMgZm9yIHRvdGFsIG51bWJlciBvZiBkZXN0aW5hdGlvbiBlbmRwb2ludHMgXG4gICAgcHVibGljIGVuZHBvaW50c0NvdW50OiBaU2NvcmU7XG4gXG4gICAgLy8gWlNjb3JlIHBhcmFtZXRlcnMgZm9yIHRvdGFsIG51bWJlciBvZiBkZXN0aW5hdGlvbiBwb3J0cyBcbiAgICBwdWJsaWMgcG9ydHNDb3VudDogWlNjb3JlO1xuIFxuICAgICBjb25zdHJ1Y3RvcihwYWNrZXRzSW4/OiBaU2NvcmUsIHBhY2tldHNPdXQ/OiBaU2NvcmUsIGJ5dGVzSW4/OiBaU2NvcmUsIGJ5dGVzT3V0PzogWlNjb3JlLCBlbmRwb2ludHNDb3VudD86IFpTY29yZSwgcG9ydHNDb3VudD86IFpTY29yZSkgeyBcbiAgICAgICAgaWYgKHBhY2tldHNJbiAhPT0gdW5kZWZpbmVkKSB7IHRoaXMucGFja2V0c0luID0gcGFja2V0c0luOyB9XG4gICAgICAgIGlmIChwYWNrZXRzT3V0ICE9PSB1bmRlZmluZWQpIHsgdGhpcy5wYWNrZXRzT3V0ID0gcGFja2V0c091dDsgfVxuICAgICAgICBpZiAoYnl0ZXNJbiAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuYnl0ZXNJbiA9IGJ5dGVzSW47IH1cbiAgICAgICAgaWYgKGJ5dGVzT3V0ICE9PSB1bmRlZmluZWQpIHsgdGhpcy5ieXRlc091dCA9IGJ5dGVzT3V0OyB9XG4gICAgICAgIGlmIChlbmRwb2ludHNDb3VudCAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuZW5kcG9pbnRzQ291bnQgPSBlbmRwb2ludHNDb3VudDsgfVxuICAgICAgICBpZiAocG9ydHNDb3VudCAhPT0gdW5kZWZpbmVkKSB7IHRoaXMucG9ydHNDb3VudCA9IHBvcnRzQ291bnQ7IH1cbiAgICB9XG5cbn1cblxuXG4iXX0=