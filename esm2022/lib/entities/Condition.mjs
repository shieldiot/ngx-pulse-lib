export class Condition {
    constructor(field, operator, values, strings) {
        if (field !== undefined) {
            this.field = field;
        }
        if (operator !== undefined) {
            this.operator = operator;
        }
        if (values !== undefined) {
            this.values = values;
        }
        if (strings !== undefined) {
            this.strings = strings;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZGl0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXB1bHNlLWxpYi9zcmMvbGliL2VudGl0aWVzL0NvbmRpdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQSxNQUFNLE9BQU8sU0FBUztJQWNqQixZQUFZLEtBQWMsRUFBRSxRQUF1QixFQUFFLE1BQWlCLEVBQUUsT0FBa0I7UUFDdkYsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FBRTtRQUNoRCxJQUFJLFFBQVEsS0FBSyxTQUFTLEVBQUU7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztTQUFFO1FBQ3pELElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1NBQUU7UUFDbkQsSUFBSSxPQUFPLEtBQUssU0FBUyxFQUFFO1lBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7U0FBRTtJQUMxRCxDQUFDO0NBRUoiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPcGVyYXRvckNvZGUgfSBmcm9tICcuLi9lbnVtcyc7XG5cblxuXG5leHBvcnQgY2xhc3MgQ29uZGl0aW9uIHtcbiBcbiAgICAvLyBGaWVsZCBuYW1lIFxuICAgIHB1YmxpYyBmaWVsZDogc3RyaW5nO1xuIFxuICAgIC8vIE9wZXJhdG9yIHN5bWJvbDogRXEoPSksIE5lcSghKSwgR3QoPiksIEd0ZSg+PSksIEx0KDwpLCBMdGUoPD0pLCBJbigqKSwgTm90IEluKC0pLCBCZXR3ZWVuKCMpIFxuICAgIHB1YmxpYyBvcGVyYXRvcjogT3BlcmF0b3JDb2RlO1xuIFxuICAgIC8vIE9wZXJhbmQgZG91YmxlIHZhbHVlcyAobW9yZSB0aGFuIG9uZSB2YWx1ZXMgYXBwbGljYWJsZSBmb3Igb3BlcmF0b3JzOiBJbigqKSwgTm90IEluKC0pLCBSYW5nZSgjKSBcbiAgICBwdWJsaWMgdmFsdWVzOiBudW1iZXJbXTtcbiBcbiAgICAvLyBPcGVyYW5kIHN0cmluZyB2YWx1ZXMgKG1vcmUgdGhhbiBvbmUgdmFsdWVzIGFwcGxpY2FibGUgZm9yIG9wZXJhdG9yczogSW4oKiksIE5vdCBJbigtKSBcbiAgICBwdWJsaWMgc3RyaW5nczogc3RyaW5nW107XG4gXG4gICAgIGNvbnN0cnVjdG9yKGZpZWxkPzogc3RyaW5nLCBvcGVyYXRvcj86IE9wZXJhdG9yQ29kZSwgdmFsdWVzPzogbnVtYmVyW10sIHN0cmluZ3M/OiBzdHJpbmdbXSkgeyBcbiAgICAgICAgaWYgKGZpZWxkICE9PSB1bmRlZmluZWQpIHsgdGhpcy5maWVsZCA9IGZpZWxkOyB9XG4gICAgICAgIGlmIChvcGVyYXRvciAhPT0gdW5kZWZpbmVkKSB7IHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjsgfVxuICAgICAgICBpZiAodmFsdWVzICE9PSB1bmRlZmluZWQpIHsgdGhpcy52YWx1ZXMgPSB2YWx1ZXM7IH1cbiAgICAgICAgaWYgKHN0cmluZ3MgIT09IHVuZGVmaW5lZCkgeyB0aGlzLnN0cmluZ3MgPSBzdHJpbmdzOyB9XG4gICAgfVxuXG59XG5cblxuIl19