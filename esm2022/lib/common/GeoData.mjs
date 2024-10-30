// GeoData model represents Geographic data associated with IP
// This structure is based on the Elasticsearch GeoIP pipeline fetching data from MaxMind database
export class GeoData {
    constructor(countryIsoCode, countryName, regionIsoCode, regionName, cityName, location, street, postal) {
        if (countryIsoCode !== undefined) {
            this.country_iso_code = countryIsoCode;
        }
        if (countryName !== undefined) {
            this.country_name = countryName;
        }
        if (regionIsoCode !== undefined) {
            this.region_iso_code = regionIsoCode;
        }
        if (regionName !== undefined) {
            this.region_name = regionName;
        }
        if (cityName !== undefined) {
            this.city_name = cityName;
        }
        if (location !== undefined) {
            this.location = location;
        }
        if (street !== undefined) {
            this.street = street;
        }
        if (postal !== undefined) {
            this.postal_code = postal;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2VvRGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1wdWxzZS1saWIvc3JjL2xpYi9jb21tb24vR2VvRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQSw4REFBOEQ7QUFDOUQsa0dBQWtHO0FBQ2xHLE1BQU0sT0FBTyxPQUFPO0lBMEJmLFlBQVksY0FBdUIsRUFBRSxXQUFvQixFQUFFLGFBQXNCLEVBQUUsVUFBbUIsRUFBRSxRQUFpQixFQUFFLFFBQW1CLEVBQUUsTUFBZSxFQUFFLE1BQWU7UUFDN0ssSUFBSSxjQUFjLEtBQUssU0FBUyxFQUFFO1lBQUUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGNBQWMsQ0FBQztTQUFFO1FBQzdFLElBQUksV0FBVyxLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxZQUFZLEdBQUcsV0FBVyxDQUFDO1NBQUU7UUFDbkUsSUFBSSxhQUFhLEtBQUssU0FBUyxFQUFFO1lBQUUsSUFBSSxDQUFDLGVBQWUsR0FBRyxhQUFhLENBQUM7U0FBRTtRQUMxRSxJQUFJLFVBQVUsS0FBSyxTQUFTLEVBQUU7WUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztTQUFFO1FBQ2hFLElBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1NBQUU7UUFDMUQsSUFBSSxRQUFRLEtBQUssU0FBUyxFQUFFO1lBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7U0FBRTtRQUN6RCxJQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztTQUFFO1FBQ25ELElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDO1NBQUU7SUFDNUQsQ0FBQztDQUVKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICcuLi9jb21tb24nO1xuXG5cblxuLy8gR2VvRGF0YSBtb2RlbCByZXByZXNlbnRzIEdlb2dyYXBoaWMgZGF0YSBhc3NvY2lhdGVkIHdpdGggSVBcbi8vIFRoaXMgc3RydWN0dXJlIGlzIGJhc2VkIG9uIHRoZSBFbGFzdGljc2VhcmNoIEdlb0lQIHBpcGVsaW5lIGZldGNoaW5nIGRhdGEgZnJvbSBNYXhNaW5kIGRhdGFiYXNlXG5leHBvcnQgY2xhc3MgR2VvRGF0YSB7XG4gXG4gICAgLy8gQ291bnRyeSBJU08gY29kZSBcbiAgICBwdWJsaWMgY291bnRyeV9pc29fY29kZTogc3RyaW5nO1xuIFxuICAgIC8vIENvdW50cnkgbmFtZSBcbiAgICBwdWJsaWMgY291bnRyeV9uYW1lOiBzdHJpbmc7XG4gXG4gICAgLy8gUmVnaW9uIElTTyBjb2RlIFxuICAgIHB1YmxpYyByZWdpb25faXNvX2NvZGU6IHN0cmluZztcbiBcbiAgICAvLyBSZWdpb24gbmFtZSBcbiAgICBwdWJsaWMgcmVnaW9uX25hbWU6IHN0cmluZztcbiBcbiAgICAvLyBDaXR5IG5hbWUgXG4gICAgcHVibGljIGNpdHlfbmFtZTogc3RyaW5nO1xuIFxuICAgIC8vIFdHUy04NCBHZW8gTG9jYXRpb24gXG4gICAgcHVibGljIGxvY2F0aW9uOiBMb2NhdGlvbjtcbiBcbiAgICAvLyBTdHJlZXQgbmFtZSBcbiAgICBwdWJsaWMgc3RyZWV0OiBzdHJpbmc7XG4gXG4gICAgLy8gUG9zdGFsIGNvZGUgXG4gICAgcHVibGljIHBvc3RhbF9jb2RlOiBudW1iZXI7XG4gXG4gICAgIGNvbnN0cnVjdG9yKGNvdW50cnlJc29Db2RlPzogc3RyaW5nLCBjb3VudHJ5TmFtZT86IHN0cmluZywgcmVnaW9uSXNvQ29kZT86IHN0cmluZywgcmVnaW9uTmFtZT86IHN0cmluZywgY2l0eU5hbWU/OiBzdHJpbmcsIGxvY2F0aW9uPzogTG9jYXRpb24sIHN0cmVldD86IHN0cmluZywgcG9zdGFsPzogbnVtYmVyKSB7IFxuICAgICAgICBpZiAoY291bnRyeUlzb0NvZGUgIT09IHVuZGVmaW5lZCkgeyB0aGlzLmNvdW50cnlfaXNvX2NvZGUgPSBjb3VudHJ5SXNvQ29kZTsgfVxuICAgICAgICBpZiAoY291bnRyeU5hbWUgIT09IHVuZGVmaW5lZCkgeyB0aGlzLmNvdW50cnlfbmFtZSA9IGNvdW50cnlOYW1lOyB9XG4gICAgICAgIGlmIChyZWdpb25Jc29Db2RlICE9PSB1bmRlZmluZWQpIHsgdGhpcy5yZWdpb25faXNvX2NvZGUgPSByZWdpb25Jc29Db2RlOyB9XG4gICAgICAgIGlmIChyZWdpb25OYW1lICE9PSB1bmRlZmluZWQpIHsgdGhpcy5yZWdpb25fbmFtZSA9IHJlZ2lvbk5hbWU7IH1cbiAgICAgICAgaWYgKGNpdHlOYW1lICE9PSB1bmRlZmluZWQpIHsgdGhpcy5jaXR5X25hbWUgPSBjaXR5TmFtZTsgfVxuICAgICAgICBpZiAobG9jYXRpb24gIT09IHVuZGVmaW5lZCkgeyB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247IH1cbiAgICAgICAgaWYgKHN0cmVldCAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuc3RyZWV0ID0gc3RyZWV0OyB9XG4gICAgICAgIGlmIChwb3N0YWwgIT09IHVuZGVmaW5lZCkgeyB0aGlzLnBvc3RhbF9jb2RlID0gcG9zdGFsOyB9XG4gICAgfVxuXG59XG5cblxuIl19