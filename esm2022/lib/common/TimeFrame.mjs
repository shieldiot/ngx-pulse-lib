// TimeFrame represents a finite time window (from - to)
export class TimeFrame {
    constructor(from, to) {
        if (from !== undefined) {
            this.from = from;
        }
        if (to !== undefined) {
            this.to = to;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGltZUZyYW1lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXB1bHNlLWxpYi9zcmMvbGliL2NvbW1vbi9UaW1lRnJhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0Esd0RBQXdEO0FBQ3hELE1BQU0sT0FBTyxTQUFTO0lBUWpCLFlBQVksSUFBYSxFQUFFLEVBQVc7UUFDbkMsSUFBSSxJQUFJLEtBQUssU0FBUyxFQUFFLENBQUM7WUFBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUFDLENBQUM7UUFDN0MsSUFBSSxFQUFFLEtBQUssU0FBUyxFQUFFLENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUFDLENBQUM7SUFDM0MsQ0FBQztDQUVKIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuLy8gVGltZUZyYW1lIHJlcHJlc2VudHMgYSBmaW5pdGUgdGltZSB3aW5kb3cgKGZyb20gLSB0bylcbmV4cG9ydCBjbGFzcyBUaW1lRnJhbWUge1xuIFxuICAgIC8vIFN0YXJ0IHdpbmRvdyB0aW1lIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgZnJvbTogbnVtYmVyO1xuIFxuICAgIC8vIEVuZCB3aW5kb3cgdGltZSBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIHRvOiBudW1iZXI7XG4gXG4gICAgIGNvbnN0cnVjdG9yKGZyb20/OiBudW1iZXIsIHRvPzogbnVtYmVyKSB7IFxuICAgICAgICBpZiAoZnJvbSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuZnJvbSA9IGZyb207IH1cbiAgICAgICAgaWYgKHRvICE9PSB1bmRlZmluZWQpIHsgdGhpcy50byA9IHRvOyB9XG4gICAgfVxuXG59XG5cblxuIl19