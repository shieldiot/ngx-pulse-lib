// GeoData model represents Geographic data associated with IP
// This structure is based on the Elasticsearch GeoIP pipeline fetching data from MaxMind database
export class GeoData {
    constructor(countryIsoCode, countryName, regionIsoCode, regionName, cityName, location) {
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
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2VvRGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1wdWxzZS1saWIvc3JjL2xpYi9jb21tb24vR2VvRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQSw4REFBOEQ7QUFDOUQsa0dBQWtHO0FBQ2xHLE1BQU0sT0FBTyxPQUFPO0lBb0JmLFlBQVksY0FBdUIsRUFBRSxXQUFvQixFQUFFLGFBQXNCLEVBQUUsVUFBbUIsRUFBRSxRQUFpQixFQUFFLFFBQW1CO1FBQzNJLElBQUksY0FBYyxLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxjQUFjLENBQUM7U0FBRTtRQUM3RSxJQUFJLFdBQVcsS0FBSyxTQUFTLEVBQUU7WUFBRSxJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQztTQUFFO1FBQ25FLElBQUksYUFBYSxLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxlQUFlLEdBQUcsYUFBYSxDQUFDO1NBQUU7UUFDMUUsSUFBSSxVQUFVLEtBQUssU0FBUyxFQUFFO1lBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7U0FBRTtRQUNoRSxJQUFJLFFBQVEsS0FBSyxTQUFTLEVBQUU7WUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztTQUFFO1FBQzFELElBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1NBQUU7SUFDN0QsQ0FBQztDQUVKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICcuLi9jb21tb24nO1xuXG5cblxuLy8gR2VvRGF0YSBtb2RlbCByZXByZXNlbnRzIEdlb2dyYXBoaWMgZGF0YSBhc3NvY2lhdGVkIHdpdGggSVBcbi8vIFRoaXMgc3RydWN0dXJlIGlzIGJhc2VkIG9uIHRoZSBFbGFzdGljc2VhcmNoIEdlb0lQIHBpcGVsaW5lIGZldGNoaW5nIGRhdGEgZnJvbSBNYXhNaW5kIGRhdGFiYXNlXG5leHBvcnQgY2xhc3MgR2VvRGF0YSB7XG4gXG4gICAgLy8gQ291bnRyeSBJU08gY29kZSBcbiAgICBwdWJsaWMgY291bnRyeV9pc29fY29kZTogc3RyaW5nO1xuIFxuICAgIC8vIENvdW50cnkgbmFtZSBcbiAgICBwdWJsaWMgY291bnRyeV9uYW1lOiBzdHJpbmc7XG4gXG4gICAgLy8gUmVnaW9uIElTTyBjb2RlIFxuICAgIHB1YmxpYyByZWdpb25faXNvX2NvZGU6IHN0cmluZztcbiBcbiAgICAvLyBSZWdpb24gbmFtZSBcbiAgICBwdWJsaWMgcmVnaW9uX25hbWU6IHN0cmluZztcbiBcbiAgICAvLyBDaXR5IG5hbWUgXG4gICAgcHVibGljIGNpdHlfbmFtZTogc3RyaW5nO1xuIFxuICAgIC8vIFdHUy04NCBHZW8gTG9jYXRpb24gXG4gICAgcHVibGljIGxvY2F0aW9uOiBMb2NhdGlvbjtcbiBcbiAgICAgY29uc3RydWN0b3IoY291bnRyeUlzb0NvZGU/OiBzdHJpbmcsIGNvdW50cnlOYW1lPzogc3RyaW5nLCByZWdpb25Jc29Db2RlPzogc3RyaW5nLCByZWdpb25OYW1lPzogc3RyaW5nLCBjaXR5TmFtZT86IHN0cmluZywgbG9jYXRpb24/OiBMb2NhdGlvbikgeyBcbiAgICAgICAgaWYgKGNvdW50cnlJc29Db2RlICE9PSB1bmRlZmluZWQpIHsgdGhpcy5jb3VudHJ5X2lzb19jb2RlID0gY291bnRyeUlzb0NvZGU7IH1cbiAgICAgICAgaWYgKGNvdW50cnlOYW1lICE9PSB1bmRlZmluZWQpIHsgdGhpcy5jb3VudHJ5X25hbWUgPSBjb3VudHJ5TmFtZTsgfVxuICAgICAgICBpZiAocmVnaW9uSXNvQ29kZSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMucmVnaW9uX2lzb19jb2RlID0gcmVnaW9uSXNvQ29kZTsgfVxuICAgICAgICBpZiAocmVnaW9uTmFtZSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMucmVnaW9uX25hbWUgPSByZWdpb25OYW1lOyB9XG4gICAgICAgIGlmIChjaXR5TmFtZSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuY2l0eV9uYW1lID0gY2l0eU5hbWU7IH1cbiAgICAgICAgaWYgKGxvY2F0aW9uICE9PSB1bmRlZmluZWQpIHsgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uOyB9XG4gICAgfVxuXG59XG5cblxuIl19