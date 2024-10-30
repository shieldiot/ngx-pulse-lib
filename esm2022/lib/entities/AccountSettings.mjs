// AccountSettings is a set of account attributes
export class AccountSettings {
    constructor(logo, defaultHomePageView, complianceReportSettings, teaserPopUpSettings) {
        if (logo !== undefined) {
            this.logo = logo;
        }
        if (defaultHomePageView !== undefined) {
            this.defaultHomePageView = defaultHomePageView;
        }
        if (complianceReportSettings !== undefined) {
            this.complianceReportSettings = complianceReportSettings;
        }
        if (teaserPopUpSettings !== undefined) {
            this.teaserPopUpSettings = teaserPopUpSettings;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjb3VudFNldHRpbmdzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXB1bHNlLWxpYi9zcmMvbGliL2VudGl0aWVzL0FjY291bnRTZXR0aW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQSxpREFBaUQ7QUFDakQsTUFBTSxPQUFPLGVBQWU7SUFjdkIsWUFBWSxJQUFhLEVBQUUsbUJBQXNDLEVBQUUsd0JBQW1ELEVBQUUsbUJBQXlDO1FBQzlKLElBQUksSUFBSSxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFBQyxDQUFDO1FBQzdDLElBQUksbUJBQW1CLEtBQUssU0FBUyxFQUFFLENBQUM7WUFBQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsbUJBQW1CLENBQUM7UUFBQyxDQUFDO1FBQzFGLElBQUksd0JBQXdCLEtBQUssU0FBUyxFQUFFLENBQUM7WUFBQyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsd0JBQXdCLENBQUM7UUFBQyxDQUFDO1FBQ3pHLElBQUksbUJBQW1CLEtBQUssU0FBUyxFQUFFLENBQUM7WUFBQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsbUJBQW1CLENBQUM7UUFBQyxDQUFDO0lBQzlGLENBQUM7Q0FFSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBsaWFuY2VSZXBvcnRTZXR0aW5ncyB9IGZyb20gJy4uL2VudGl0aWVzJztcbmltcG9ydCB7IFRlYXNlclBvcFVwU2V0dGluZ3MgfSBmcm9tICcuLi9lbnRpdGllcyc7XG5pbXBvcnQgeyBIb21lUGFnZVZpZXdDb2RlIH0gZnJvbSAnLi4vZW51bXMnO1xuXG5cblxuLy8gQWNjb3VudFNldHRpbmdzIGlzIGEgc2V0IG9mIGFjY291bnQgYXR0cmlidXRlc1xuZXhwb3J0IGNsYXNzIEFjY291bnRTZXR0aW5ncyB7XG4gXG4gICAgLy8gQWNjb3VudCBsb2dvIFVSTCAoc3RhcnRzIHdpdGggaHR0cCkgb3IgZW1iZWRkZWQgaW1hZ2UgKGJhc2U2NCkgXG4gICAgcHVibGljIGxvZ286IHN0cmluZztcbiBcbiAgICAvLyBEZWZhdWx0IGhvbWUgcGFnZSB2aWV3IFxuICAgIHB1YmxpYyBkZWZhdWx0SG9tZVBhZ2VWaWV3OiBIb21lUGFnZVZpZXdDb2RlO1xuIFxuICAgIC8vIENvbXBsaWFuY2VSZXBvcnRTZXR0aW5ncyBzcGVjaWZpYyBhdHRyaWJ1dGVzIFxuICAgIHB1YmxpYyBjb21wbGlhbmNlUmVwb3J0U2V0dGluZ3M6IENvbXBsaWFuY2VSZXBvcnRTZXR0aW5ncztcbiBcbiAgICAvLyBUZWFzZXIgcG9wIHVwIHNldHRpbmdzIGF0dHJpYnV0ZXMgXG4gICAgcHVibGljIHRlYXNlclBvcFVwU2V0dGluZ3M6IFRlYXNlclBvcFVwU2V0dGluZ3M7XG4gXG4gICAgIGNvbnN0cnVjdG9yKGxvZ28/OiBzdHJpbmcsIGRlZmF1bHRIb21lUGFnZVZpZXc/OiBIb21lUGFnZVZpZXdDb2RlLCBjb21wbGlhbmNlUmVwb3J0U2V0dGluZ3M/OiBDb21wbGlhbmNlUmVwb3J0U2V0dGluZ3MsIHRlYXNlclBvcFVwU2V0dGluZ3M/OiBUZWFzZXJQb3BVcFNldHRpbmdzKSB7IFxuICAgICAgICBpZiAobG9nbyAhPT0gdW5kZWZpbmVkKSB7IHRoaXMubG9nbyA9IGxvZ287IH1cbiAgICAgICAgaWYgKGRlZmF1bHRIb21lUGFnZVZpZXcgIT09IHVuZGVmaW5lZCkgeyB0aGlzLmRlZmF1bHRIb21lUGFnZVZpZXcgPSBkZWZhdWx0SG9tZVBhZ2VWaWV3OyB9XG4gICAgICAgIGlmIChjb21wbGlhbmNlUmVwb3J0U2V0dGluZ3MgIT09IHVuZGVmaW5lZCkgeyB0aGlzLmNvbXBsaWFuY2VSZXBvcnRTZXR0aW5ncyA9IGNvbXBsaWFuY2VSZXBvcnRTZXR0aW5nczsgfVxuICAgICAgICBpZiAodGVhc2VyUG9wVXBTZXR0aW5ncyAhPT0gdW5kZWZpbmVkKSB7IHRoaXMudGVhc2VyUG9wVXBTZXR0aW5ncyA9IHRlYXNlclBvcFVwU2V0dGluZ3M7IH1cbiAgICB9XG5cbn1cblxuXG4iXX0=