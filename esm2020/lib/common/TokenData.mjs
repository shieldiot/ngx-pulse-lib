// TokenData model represents a user in account which is encrypted with the JWT token
export class TokenData {
    constructor(accountId, subjectId, subjectType, role, status, expiresIn) {
        if (accountId !== undefined) {
            this.accountId = accountId;
        }
        if (subjectId !== undefined) {
            this.subjectId = subjectId;
        }
        if (subjectType !== undefined) {
            this.subjectType = subjectType;
        }
        if (role !== undefined) {
            this.role = role;
        }
        if (status !== undefined) {
            this.status = status;
        }
        if (expiresIn !== undefined) {
            this.expiresIn = expiresIn;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9rZW5EYXRhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXB1bHNlLWxpYi9zcmMvbGliL2NvbW1vbi9Ub2tlbkRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUEscUZBQXFGO0FBQ3JGLE1BQU0sT0FBTyxTQUFTO0lBb0JqQixZQUFZLFNBQWtCLEVBQUUsU0FBa0IsRUFBRSxXQUEwQixFQUFFLElBQXFCLEVBQUUsTUFBdUIsRUFBRSxTQUFrQjtRQUMvSSxJQUFJLFNBQVMsS0FBSyxTQUFTLEVBQUU7WUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztTQUFFO1FBQzVELElBQUksU0FBUyxLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1NBQUU7UUFDNUQsSUFBSSxXQUFXLEtBQUssU0FBUyxFQUFFO1lBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7U0FBRTtRQUNsRSxJQUFJLElBQUksS0FBSyxTQUFTLEVBQUU7WUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUFFO1FBQzdDLElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1NBQUU7UUFDbkQsSUFBSSxTQUFTLEtBQUssU0FBUyxFQUFFO1lBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7U0FBRTtJQUNoRSxDQUFDO0NBRUoiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVc2VyU3RhdHVzQ29kZSB9IGZyb20gJy4uL2VudW1zL1VzZXJTdGF0dXNDb2RlJztcbmltcG9ydCB7IFVzZXJUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL1VzZXJUeXBlQ29kZSc7XG5pbXBvcnQgeyBNZW1iZXJSb2xlQ29kZSB9IGZyb20gJy4uL2VudW1zL01lbWJlclJvbGVDb2RlJztcblxuXG5cbi8vIFRva2VuRGF0YSBtb2RlbCByZXByZXNlbnRzIGEgdXNlciBpbiBhY2NvdW50IHdoaWNoIGlzIGVuY3J5cHRlZCB3aXRoIHRoZSBKV1QgdG9rZW5cbmV4cG9ydCBjbGFzcyBUb2tlbkRhdGEge1xuIFxuICAgIC8vIEFjY291bnQgSUQgXG4gICAgcHVibGljIGFjY291bnRJZDogc3RyaW5nO1xuIFxuICAgIC8vIEF1dGhlbnRpY2F0ZWQgc3ViamVjdCBJRCAoY2FuIGJlIHVzZXIsIG9yIHNlcnZpY2UgYWNjb3VudCkgXG4gICAgcHVibGljIHN1YmplY3RJZDogc3RyaW5nO1xuIFxuICAgIC8vIFN1YmplY3QgdHlwZTogVU5ERUZJTkVEIHwgU1lTQURNSU4gfCBVU0VSIHwgU0VSVklDRV9BQ0NPVU5UIFxuICAgIHB1YmxpYyBzdWJqZWN0VHlwZTogVXNlclR5cGVDb2RlO1xuIFxuICAgIC8vIFJvbGUgb2YgdXNlciBpbiB0aGUgYWNjb3VudDogVU5ERUZJTkVEIHwgQURNSU4gfCBVU0VSIFxuICAgIHB1YmxpYyByb2xlOiBNZW1iZXJSb2xlQ29kZTtcbiBcbiAgICAvLyBVc2VyIHN0YXR1czogVU5ERUZJTkVEIHwgUEVORElORyB8IEFDVElWRSB8IEJMT0NLRUQgfCBTVVNQRU5ERUQgXG4gICAgcHVibGljIHN0YXR1czogVXNlclN0YXR1c0NvZGU7XG4gXG4gICAgLy8gVG9rZW4gZXhwaXJhdGlvbiBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIGV4cGlyZXNJbjogbnVtYmVyO1xuIFxuICAgICBjb25zdHJ1Y3RvcihhY2NvdW50SWQ/OiBzdHJpbmcsIHN1YmplY3RJZD86IHN0cmluZywgc3ViamVjdFR5cGU/OiBVc2VyVHlwZUNvZGUsIHJvbGU/OiBNZW1iZXJSb2xlQ29kZSwgc3RhdHVzPzogVXNlclN0YXR1c0NvZGUsIGV4cGlyZXNJbj86IG51bWJlcikgeyBcbiAgICAgICAgaWYgKGFjY291bnRJZCAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuYWNjb3VudElkID0gYWNjb3VudElkOyB9XG4gICAgICAgIGlmIChzdWJqZWN0SWQgIT09IHVuZGVmaW5lZCkgeyB0aGlzLnN1YmplY3RJZCA9IHN1YmplY3RJZDsgfVxuICAgICAgICBpZiAoc3ViamVjdFR5cGUgIT09IHVuZGVmaW5lZCkgeyB0aGlzLnN1YmplY3RUeXBlID0gc3ViamVjdFR5cGU7IH1cbiAgICAgICAgaWYgKHJvbGUgIT09IHVuZGVmaW5lZCkgeyB0aGlzLnJvbGUgPSByb2xlOyB9XG4gICAgICAgIGlmIChzdGF0dXMgIT09IHVuZGVmaW5lZCkgeyB0aGlzLnN0YXR1cyA9IHN0YXR1czsgfVxuICAgICAgICBpZiAoZXhwaXJlc0luICE9PSB1bmRlZmluZWQpIHsgdGhpcy5leHBpcmVzSW4gPSBleHBpcmVzSW47IH1cbiAgICB9XG5cbn1cblxuXG4iXX0=