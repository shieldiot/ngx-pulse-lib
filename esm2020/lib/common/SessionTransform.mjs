// Session data transformation parameters (to calculate z-score)
export class SessionTransform {
    constructor(packetsIn, packetsOut, bytesIn, bytesOut) {
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
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2Vzc2lvblRyYW5zZm9ybS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1wdWxzZS1saWIvc3JjL2xpYi9jb21tb24vU2Vzc2lvblRyYW5zZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQSxnRUFBZ0U7QUFDaEUsTUFBTSxPQUFPLGdCQUFnQjtJQWN4QixZQUFZLFNBQWtCLEVBQUUsVUFBbUIsRUFBRSxPQUFnQixFQUFFLFFBQWlCO1FBQ3JGLElBQUksU0FBUyxLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1NBQUU7UUFDNUQsSUFBSSxVQUFVLEtBQUssU0FBUyxFQUFFO1lBQUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7U0FBRTtRQUMvRCxJQUFJLE9BQU8sS0FBSyxTQUFTLEVBQUU7WUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztTQUFFO1FBQ3RELElBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1NBQUU7SUFDN0QsQ0FBQztDQUVKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgWlNjb3JlIH0gZnJvbSAnLi4vY29tbW9uL1pTY29yZSc7XG5cblxuXG4vLyBTZXNzaW9uIGRhdGEgdHJhbnNmb3JtYXRpb24gcGFyYW1ldGVycyAodG8gY2FsY3VsYXRlIHotc2NvcmUpXG5leHBvcnQgY2xhc3MgU2Vzc2lvblRyYW5zZm9ybSB7XG4gXG4gICAgLy8gWlNjb3JlIHBhcmFtZXRlcnMgZm9yIGluY29taW5nIHBhY2tldHMgKHRvIHRoZSBkZXZpY2UpIFxuICAgIHB1YmxpYyBwYWNrZXRzSW46IFpTY29yZTtcbiBcbiAgICAvLyBaU2NvcmUgcGFyYW1ldGVycyBmb3Igb3V0Z29pbmcgcGFja2V0cyAoZnJvbSB0aGUgZGV2aWNlKSBcbiAgICBwdWJsaWMgcGFja2V0c091dDogWlNjb3JlO1xuIFxuICAgIC8vIFpTY29yZSBwYXJhbWV0ZXJzIGZvciB0b3RhbCBudW1iZXIgb2YgaW5jb21pbmcgYnl0ZXMgKHRvIHRoZSBkZXZpY2UpIFxuICAgIHB1YmxpYyBieXRlc0luOiBaU2NvcmU7XG4gXG4gICAgLy8gWlNjb3JlIHBhcmFtZXRlcnMgZm9yIHRvdGFsIG51bWJlciBvZiBvdXRnb2luZyBieXRlcyAoZnJvbSB0aGUgZGV2aWNlKSBcbiAgICBwdWJsaWMgYnl0ZXNPdXQ6IFpTY29yZTtcbiBcbiAgICAgY29uc3RydWN0b3IocGFja2V0c0luPzogWlNjb3JlLCBwYWNrZXRzT3V0PzogWlNjb3JlLCBieXRlc0luPzogWlNjb3JlLCBieXRlc091dD86IFpTY29yZSkgeyBcbiAgICAgICAgaWYgKHBhY2tldHNJbiAhPT0gdW5kZWZpbmVkKSB7IHRoaXMucGFja2V0c0luID0gcGFja2V0c0luOyB9XG4gICAgICAgIGlmIChwYWNrZXRzT3V0ICE9PSB1bmRlZmluZWQpIHsgdGhpcy5wYWNrZXRzT3V0ID0gcGFja2V0c091dDsgfVxuICAgICAgICBpZiAoYnl0ZXNJbiAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuYnl0ZXNJbiA9IGJ5dGVzSW47IH1cbiAgICAgICAgaWYgKGJ5dGVzT3V0ICE9PSB1bmRlZmluZWQpIHsgdGhpcy5ieXRlc091dCA9IGJ5dGVzT3V0OyB9XG4gICAgfVxuXG59XG5cblxuIl19