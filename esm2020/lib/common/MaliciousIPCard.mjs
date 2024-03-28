// MaliciousIPCard is a data structure representing malicious IP card
export class MaliciousIPCard {
    constructor(maliciousIp, maliciousIpDns, countryCode, ipDescription, lastEventTime, attackCategories, numberOfDevices, eventsBySeverityBreakdown) {
        if (maliciousIp !== undefined) {
            this.maliciousIp = maliciousIp;
        }
        if (maliciousIpDns !== undefined) {
            this.maliciousIpDns = maliciousIpDns;
        }
        if (countryCode !== undefined) {
            this.countryCode = countryCode;
        }
        if (ipDescription !== undefined) {
            this.ipDescription = ipDescription;
        }
        if (lastEventTime !== undefined) {
            this.lastEventTime = lastEventTime;
        }
        if (attackCategories !== undefined) {
            this.attackCategories = attackCategories;
        }
        if (numberOfDevices !== undefined) {
            this.numberOfDevices = numberOfDevices;
        }
        if (eventsBySeverityBreakdown !== undefined) {
            this.eventsBySeverityBreakdown = eventsBySeverityBreakdown;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFsaWNpb3VzSVBDYXJkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXB1bHNlLWxpYi9zcmMvbGliL2NvbW1vbi9NYWxpY2lvdXNJUENhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUEscUVBQXFFO0FBQ3JFLE1BQU0sT0FBTyxlQUFlO0lBMEJ2QixZQUFZLFdBQW9CLEVBQUUsY0FBdUIsRUFBRSxXQUFvQixFQUFFLGFBQXNCLEVBQUUsYUFBc0IsRUFBRSxnQkFBMkIsRUFBRSxlQUF3QixFQUFFLHlCQUEyQztRQUNoTyxJQUFJLFdBQVcsS0FBSyxTQUFTLEVBQUU7WUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztTQUFFO1FBQ2xFLElBQUksY0FBYyxLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1NBQUU7UUFDM0UsSUFBSSxXQUFXLEtBQUssU0FBUyxFQUFFO1lBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7U0FBRTtRQUNsRSxJQUFJLGFBQWEsS0FBSyxTQUFTLEVBQUU7WUFBRSxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztTQUFFO1FBQ3hFLElBQUksYUFBYSxLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1NBQUU7UUFDeEUsSUFBSSxnQkFBZ0IsS0FBSyxTQUFTLEVBQUU7WUFBRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7U0FBRTtRQUNqRixJQUFJLGVBQWUsS0FBSyxTQUFTLEVBQUU7WUFBRSxJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztTQUFFO1FBQzlFLElBQUkseUJBQXlCLEtBQUssU0FBUyxFQUFFO1lBQUUsSUFBSSxDQUFDLHlCQUF5QixHQUFHLHlCQUF5QixDQUFDO1NBQUU7SUFDaEgsQ0FBQztDQUVKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW50RGlzdHJpYnV0aW9uIH0gZnJvbSAnLi4vZW50aXRpZXMvSW50RGlzdHJpYnV0aW9uJztcblxuXG5cbi8vIE1hbGljaW91c0lQQ2FyZCBpcyBhIGRhdGEgc3RydWN0dXJlIHJlcHJlc2VudGluZyBtYWxpY2lvdXMgSVAgY2FyZFxuZXhwb3J0IGNsYXNzIE1hbGljaW91c0lQQ2FyZCB7XG4gXG4gICAgLy8gVGhlIG1hbGljaW91cyBJUCBcbiAgICBwdWJsaWMgbWFsaWNpb3VzSXA6IHN0cmluZztcbiBcbiAgICAvLyBUaGUgbWFsaWNpb3VzIElQIEROUyBuYW1lIChjYW4gYmUgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgbmFtZXMpIFxuICAgIHB1YmxpYyBtYWxpY2lvdXNJcERuczogc3RyaW5nO1xuIFxuICAgIC8vIENvdW50cnkgY29kZSBcbiAgICBwdWJsaWMgY291bnRyeUNvZGU6IHN0cmluZztcbiBcbiAgICAvLyBJcCBkZXNjcmlwdGlvbiBcbiAgICBwdWJsaWMgaXBEZXNjcmlwdGlvbjogc3RyaW5nO1xuIFxuICAgIC8vIExhc3QgRXZlbnQgVGltZSBcbiAgICBwdWJsaWMgbGFzdEV2ZW50VGltZTogbnVtYmVyO1xuIFxuICAgIC8vIEF0dGFjayBDYXRlZ29yaWVzIGxpc3QgXG4gICAgcHVibGljIGF0dGFja0NhdGVnb3JpZXM6IHN0cmluZ1tdO1xuIFxuICAgIC8vIE51bWJlciBPZiBEZXZpY2VzIFxuICAgIHB1YmxpYyBudW1iZXJPZkRldmljZXM6IG51bWJlcjtcbiBcbiAgICAvLyBFdmVudHMgQnkgU2V2ZXJpdHkgQnJlYWtkb3duIFxuICAgIHB1YmxpYyBldmVudHNCeVNldmVyaXR5QnJlYWtkb3duOiBJbnREaXN0cmlidXRpb247XG4gXG4gICAgIGNvbnN0cnVjdG9yKG1hbGljaW91c0lwPzogc3RyaW5nLCBtYWxpY2lvdXNJcERucz86IHN0cmluZywgY291bnRyeUNvZGU/OiBzdHJpbmcsIGlwRGVzY3JpcHRpb24/OiBzdHJpbmcsIGxhc3RFdmVudFRpbWU/OiBudW1iZXIsIGF0dGFja0NhdGVnb3JpZXM/OiBzdHJpbmdbXSwgbnVtYmVyT2ZEZXZpY2VzPzogbnVtYmVyLCBldmVudHNCeVNldmVyaXR5QnJlYWtkb3duPzogSW50RGlzdHJpYnV0aW9uKSB7IFxuICAgICAgICBpZiAobWFsaWNpb3VzSXAgIT09IHVuZGVmaW5lZCkgeyB0aGlzLm1hbGljaW91c0lwID0gbWFsaWNpb3VzSXA7IH1cbiAgICAgICAgaWYgKG1hbGljaW91c0lwRG5zICE9PSB1bmRlZmluZWQpIHsgdGhpcy5tYWxpY2lvdXNJcERucyA9IG1hbGljaW91c0lwRG5zOyB9XG4gICAgICAgIGlmIChjb3VudHJ5Q29kZSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuY291bnRyeUNvZGUgPSBjb3VudHJ5Q29kZTsgfVxuICAgICAgICBpZiAoaXBEZXNjcmlwdGlvbiAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuaXBEZXNjcmlwdGlvbiA9IGlwRGVzY3JpcHRpb247IH1cbiAgICAgICAgaWYgKGxhc3RFdmVudFRpbWUgIT09IHVuZGVmaW5lZCkgeyB0aGlzLmxhc3RFdmVudFRpbWUgPSBsYXN0RXZlbnRUaW1lOyB9XG4gICAgICAgIGlmIChhdHRhY2tDYXRlZ29yaWVzICE9PSB1bmRlZmluZWQpIHsgdGhpcy5hdHRhY2tDYXRlZ29yaWVzID0gYXR0YWNrQ2F0ZWdvcmllczsgfVxuICAgICAgICBpZiAobnVtYmVyT2ZEZXZpY2VzICE9PSB1bmRlZmluZWQpIHsgdGhpcy5udW1iZXJPZkRldmljZXMgPSBudW1iZXJPZkRldmljZXM7IH1cbiAgICAgICAgaWYgKGV2ZW50c0J5U2V2ZXJpdHlCcmVha2Rvd24gIT09IHVuZGVmaW5lZCkgeyB0aGlzLmV2ZW50c0J5U2V2ZXJpdHlCcmVha2Rvd24gPSBldmVudHNCeVNldmVyaXR5QnJlYWtkb3duOyB9XG4gICAgfVxuXG59XG5cblxuIl19