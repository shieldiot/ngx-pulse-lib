// ComplianceReportSettings is a set of account's compliance report settings.
export class ComplianceReportSettings {
    constructor(title, subTitle, header, footer) {
        if (title !== undefined) {
            this.title = title;
        }
        if (subTitle !== undefined) {
            this.subTitle = subTitle;
        }
        if (header !== undefined) {
            this.header = header;
        }
        if (footer !== undefined) {
            this.footer = footer;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tcGxpYW5jZVJlcG9ydFNldHRpbmdzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXB1bHNlLWxpYi9zcmMvbGliL2VudGl0aWVzL0NvbXBsaWFuY2VSZXBvcnRTZXR0aW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSw2RUFBNkU7QUFDN0UsTUFBTSxPQUFPLHdCQUF3QjtJQWNoQyxZQUFZLEtBQWMsRUFBRSxRQUFpQixFQUFFLE1BQWUsRUFBRSxNQUFlO1FBQzVFLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQUU7UUFDaEQsSUFBSSxRQUFRLEtBQUssU0FBUyxFQUFFO1lBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7U0FBRTtRQUN6RCxJQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztTQUFFO1FBQ25ELElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1NBQUU7SUFDdkQsQ0FBQztDQUVKIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuLy8gQ29tcGxpYW5jZVJlcG9ydFNldHRpbmdzIGlzIGEgc2V0IG9mIGFjY291bnQncyBjb21wbGlhbmNlIHJlcG9ydCBzZXR0aW5ncy5cbmV4cG9ydCBjbGFzcyBDb21wbGlhbmNlUmVwb3J0U2V0dGluZ3Mge1xuIFxuICAgIC8vIENvbXBsaWFuY2UgcmVwb3J0IHRpdGxlIFxuICAgIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xuIFxuICAgIC8vIENvbXBsaWFuY2UgcmVwb3J0IHN1YnRpdGxlIFxuICAgIHB1YmxpYyBzdWJUaXRsZTogc3RyaW5nO1xuIFxuICAgIC8vIENvbXBsaWFuY2UgcmVwb3J0IGhlYWRlciBcbiAgICBwdWJsaWMgaGVhZGVyOiBzdHJpbmc7XG4gXG4gICAgLy8gQ29tcGxpYW5jZSByZXBvcnQgZm9vdGVyIFxuICAgIHB1YmxpYyBmb290ZXI6IHN0cmluZztcbiBcbiAgICAgY29uc3RydWN0b3IodGl0bGU/OiBzdHJpbmcsIHN1YlRpdGxlPzogc3RyaW5nLCBoZWFkZXI/OiBzdHJpbmcsIGZvb3Rlcj86IHN0cmluZykgeyBcbiAgICAgICAgaWYgKHRpdGxlICE9PSB1bmRlZmluZWQpIHsgdGhpcy50aXRsZSA9IHRpdGxlOyB9XG4gICAgICAgIGlmIChzdWJUaXRsZSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuc3ViVGl0bGUgPSBzdWJUaXRsZTsgfVxuICAgICAgICBpZiAoaGVhZGVyICE9PSB1bmRlZmluZWQpIHsgdGhpcy5oZWFkZXIgPSBoZWFkZXI7IH1cbiAgICAgICAgaWYgKGZvb3RlciAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuZm9vdGVyID0gZm9vdGVyOyB9XG4gICAgfVxuXG59XG5cblxuIl19