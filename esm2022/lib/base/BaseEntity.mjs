// Base entity includes common fields for all entities (persistence objects) in the system
export class BaseEntity {
    constructor(id, createdOn, updatedOn) {
        if (id !== undefined) {
            this.id = id;
        }
        if (createdOn !== undefined) {
            this.createdOn = createdOn;
        }
        if (updatedOn !== undefined) {
            this.updatedOn = updatedOn;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUVudGl0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1wdWxzZS1saWIvc3JjL2xpYi9iYXNlL0Jhc2VFbnRpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsMEZBQTBGO0FBQzFGLE1BQU0sT0FBTyxVQUFVO0lBV2xCLFlBQVksRUFBVyxFQUFFLFNBQWtCLEVBQUUsU0FBa0I7UUFDNUQsSUFBSSxFQUFFLEtBQUssU0FBUyxFQUFFO1lBQUUsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7U0FBRTtRQUN2QyxJQUFJLFNBQVMsS0FBSyxTQUFTLEVBQUU7WUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztTQUFFO1FBQzVELElBQUksU0FBUyxLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1NBQUU7SUFDaEUsQ0FBQztDQUVKIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuLy8gQmFzZSBlbnRpdHkgaW5jbHVkZXMgY29tbW9uIGZpZWxkcyBmb3IgYWxsIGVudGl0aWVzIChwZXJzaXN0ZW5jZSBvYmplY3RzKSBpbiB0aGUgc3lzdGVtXG5leHBvcnQgY2xhc3MgQmFzZUVudGl0eSB7XG4gXG4gICAgLy8gRW50aXR5IElkIFxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgY3JlYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIGNyZWF0ZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgdXBkYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIHVwZGF0ZWRPbjogbnVtYmVyO1xuIFxuICAgICBjb25zdHJ1Y3RvcihpZD86IHN0cmluZywgY3JlYXRlZE9uPzogbnVtYmVyLCB1cGRhdGVkT24/OiBudW1iZXIpIHsgXG4gICAgICAgIGlmIChpZCAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuaWQgPSBpZDsgfVxuICAgICAgICBpZiAoY3JlYXRlZE9uICE9PSB1bmRlZmluZWQpIHsgdGhpcy5jcmVhdGVkT24gPSBjcmVhdGVkT247IH1cbiAgICAgICAgaWYgKHVwZGF0ZWRPbiAhPT0gdW5kZWZpbmVkKSB7IHRoaXMudXBkYXRlZE9uID0gdXBkYXRlZE9uOyB9XG4gICAgfVxuXG59XG5cblxuIl19