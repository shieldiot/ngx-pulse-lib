// Feature code
export var FeatureCode;
(function (FeatureCode) {
    // Undefined [0] 
    FeatureCode[FeatureCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Export events to CSV file [1] 
    FeatureCode[FeatureCode["EVENTS_EXPORT"] = 1] = "EVENTS_EXPORT";
    // Download pcap files to analyze the event[2] 
    FeatureCode[FeatureCode["EVENT_SOURCE_FILES"] = 2] = "EVENT_SOURCE_FILES";
    // Apply preventive action on the event [3] 
    FeatureCode[FeatureCode["EVENT_ACTION"] = 3] = "EVENT_ACTION";
    // Export devices to CSV file [4] 
    FeatureCode[FeatureCode["DEVICES_EXPORT"] = 4] = "DEVICES_EXPORT";
    // Device network map [5] 
    FeatureCode[FeatureCode["DEVICE_NETWORK_MAP"] = 5] = "DEVICE_NETWORK_MAP";
    // Apply preventive action on the device [6] 
    FeatureCode[FeatureCode["DEVICE_ACTIONS"] = 6] = "DEVICE_ACTIONS";
    // Apply preventive action on the device [7] 
    FeatureCode[FeatureCode["NETWORK_MAP"] = 7] = "NETWORK_MAP";
    // Create and download compliance report 
    FeatureCode[FeatureCode["COMPLIANCE_REPORTS"] = 8] = "COMPLIANCE_REPORTS";
    // Configure user-defined rules 
    FeatureCode[FeatureCode["CUSTOM_RULES"] = 9] = "CUSTOM_RULES";
    // Enable push integrations 
    FeatureCode[FeatureCode["INTEGRATIONS"] = 10] = "INTEGRATIONS";
})(FeatureCode || (FeatureCode = {}));
// Return list of FeatureCode values and their display names
export function GetFeatureCodes() {
    let result = new Map();
    result.set(FeatureCode.UNDEFINED, 'Undefined');
    result.set(FeatureCode.EVENTS_EXPORT, 'Events Export');
    result.set(FeatureCode.EVENT_SOURCE_FILES, 'Event Source Files');
    result.set(FeatureCode.EVENT_ACTION, 'Event Action');
    result.set(FeatureCode.DEVICES_EXPORT, 'Devices Export');
    result.set(FeatureCode.DEVICE_NETWORK_MAP, 'Device Network Map');
    result.set(FeatureCode.DEVICE_ACTIONS, 'Device Actions');
    result.set(FeatureCode.NETWORK_MAP, 'Network Map');
    result.set(FeatureCode.COMPLIANCE_REPORTS, 'Compliance Reports');
    result.set(FeatureCode.CUSTOM_RULES, 'Custom Rules');
    result.set(FeatureCode.INTEGRATIONS, 'Integrations');
    return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmVhdHVyZUNvZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtcHVsc2UtbGliL3NyYy9saWIvZW51bXMvRmVhdHVyZUNvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsZUFBZTtBQUNmLE1BQU0sQ0FBTixJQUFZLFdBbUNYO0FBbkNELFdBQVksV0FBVztJQUVuQixpQkFBaUI7SUFDakIsdURBQWEsQ0FBQTtJQUViLGlDQUFpQztJQUNqQywrREFBaUIsQ0FBQTtJQUVqQiwrQ0FBK0M7SUFDL0MseUVBQXNCLENBQUE7SUFFdEIsNENBQTRDO0lBQzVDLDZEQUFnQixDQUFBO0lBRWhCLGtDQUFrQztJQUNsQyxpRUFBa0IsQ0FBQTtJQUVsQiwwQkFBMEI7SUFDMUIseUVBQXNCLENBQUE7SUFFdEIsNkNBQTZDO0lBQzdDLGlFQUFrQixDQUFBO0lBRWxCLDZDQUE2QztJQUM3QywyREFBZSxDQUFBO0lBRWYseUNBQXlDO0lBQ3pDLHlFQUFzQixDQUFBO0lBRXRCLGdDQUFnQztJQUNoQyw2REFBZ0IsQ0FBQTtJQUVoQiw0QkFBNEI7SUFDNUIsOERBQWlCLENBQUE7QUFFckIsQ0FBQyxFQW5DVyxXQUFXLEtBQVgsV0FBVyxRQW1DdEI7QUFFRCw0REFBNEQ7QUFDNUQsTUFBTSxVQUFVLGVBQWU7SUFFM0IsSUFBSSxNQUFNLEdBQUcsSUFBSSxHQUFHLEVBQXVCLENBQUM7SUFHNUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBRS9DLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxlQUFlLENBQUMsQ0FBQztJQUV2RCxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0lBRWpFLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxjQUFjLENBQUMsQ0FBQztJQUVyRCxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUV6RCxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0lBRWpFLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBRXpELE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUVuRCxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0lBRWpFLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxjQUFjLENBQUMsQ0FBQztJQUVyRCxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFHckQsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8gRmVhdHVyZSBjb2RlXG5leHBvcnQgZW51bSBGZWF0dXJlQ29kZSB7XG4gXG4gICAgLy8gVW5kZWZpbmVkIFswXSBcbiAgICBVTkRFRklORUQgPSAwLFxuIFxuICAgIC8vIEV4cG9ydCBldmVudHMgdG8gQ1NWIGZpbGUgWzFdIFxuICAgIEVWRU5UU19FWFBPUlQgPSAxLFxuIFxuICAgIC8vIERvd25sb2FkIHBjYXAgZmlsZXMgdG8gYW5hbHl6ZSB0aGUgZXZlbnRbMl0gXG4gICAgRVZFTlRfU09VUkNFX0ZJTEVTID0gMixcbiBcbiAgICAvLyBBcHBseSBwcmV2ZW50aXZlIGFjdGlvbiBvbiB0aGUgZXZlbnQgWzNdIFxuICAgIEVWRU5UX0FDVElPTiA9IDMsXG4gXG4gICAgLy8gRXhwb3J0IGRldmljZXMgdG8gQ1NWIGZpbGUgWzRdIFxuICAgIERFVklDRVNfRVhQT1JUID0gNCxcbiBcbiAgICAvLyBEZXZpY2UgbmV0d29yayBtYXAgWzVdIFxuICAgIERFVklDRV9ORVRXT1JLX01BUCA9IDUsXG4gXG4gICAgLy8gQXBwbHkgcHJldmVudGl2ZSBhY3Rpb24gb24gdGhlIGRldmljZSBbNl0gXG4gICAgREVWSUNFX0FDVElPTlMgPSA2LFxuIFxuICAgIC8vIEFwcGx5IHByZXZlbnRpdmUgYWN0aW9uIG9uIHRoZSBkZXZpY2UgWzddIFxuICAgIE5FVFdPUktfTUFQID0gNyxcbiBcbiAgICAvLyBDcmVhdGUgYW5kIGRvd25sb2FkIGNvbXBsaWFuY2UgcmVwb3J0IFxuICAgIENPTVBMSUFOQ0VfUkVQT1JUUyA9IDgsXG4gXG4gICAgLy8gQ29uZmlndXJlIHVzZXItZGVmaW5lZCBydWxlcyBcbiAgICBDVVNUT01fUlVMRVMgPSA5LFxuIFxuICAgIC8vIEVuYWJsZSBwdXNoIGludGVncmF0aW9ucyBcbiAgICBJTlRFR1JBVElPTlMgPSAxMCxcbiBcbn1cblxuLy8gUmV0dXJuIGxpc3Qgb2YgRmVhdHVyZUNvZGUgdmFsdWVzIGFuZCB0aGVpciBkaXNwbGF5IG5hbWVzXG5leHBvcnQgZnVuY3Rpb24gR2V0RmVhdHVyZUNvZGVzKCkgOiBNYXA8RmVhdHVyZUNvZGUsIHN0cmluZz4ge1xuXG4gICAgbGV0IHJlc3VsdCA9IG5ldyBNYXA8RmVhdHVyZUNvZGUsIHN0cmluZz4oKTtcblxuICAgIFxuICAgIHJlc3VsdC5zZXQoRmVhdHVyZUNvZGUuVU5ERUZJTkVELCAnVW5kZWZpbmVkJyk7XG4gICAgXG4gICAgcmVzdWx0LnNldChGZWF0dXJlQ29kZS5FVkVOVFNfRVhQT1JULCAnRXZlbnRzIEV4cG9ydCcpO1xuICAgIFxuICAgIHJlc3VsdC5zZXQoRmVhdHVyZUNvZGUuRVZFTlRfU09VUkNFX0ZJTEVTLCAnRXZlbnQgU291cmNlIEZpbGVzJyk7XG4gICAgXG4gICAgcmVzdWx0LnNldChGZWF0dXJlQ29kZS5FVkVOVF9BQ1RJT04sICdFdmVudCBBY3Rpb24nKTtcbiAgICBcbiAgICByZXN1bHQuc2V0KEZlYXR1cmVDb2RlLkRFVklDRVNfRVhQT1JULCAnRGV2aWNlcyBFeHBvcnQnKTtcbiAgICBcbiAgICByZXN1bHQuc2V0KEZlYXR1cmVDb2RlLkRFVklDRV9ORVRXT1JLX01BUCwgJ0RldmljZSBOZXR3b3JrIE1hcCcpO1xuICAgIFxuICAgIHJlc3VsdC5zZXQoRmVhdHVyZUNvZGUuREVWSUNFX0FDVElPTlMsICdEZXZpY2UgQWN0aW9ucycpO1xuICAgIFxuICAgIHJlc3VsdC5zZXQoRmVhdHVyZUNvZGUuTkVUV09SS19NQVAsICdOZXR3b3JrIE1hcCcpO1xuICAgIFxuICAgIHJlc3VsdC5zZXQoRmVhdHVyZUNvZGUuQ09NUExJQU5DRV9SRVBPUlRTLCAnQ29tcGxpYW5jZSBSZXBvcnRzJyk7XG4gICAgXG4gICAgcmVzdWx0LnNldChGZWF0dXJlQ29kZS5DVVNUT01fUlVMRVMsICdDdXN0b20gUnVsZXMnKTtcbiAgICBcbiAgICByZXN1bHQuc2V0KEZlYXR1cmVDb2RlLklOVEVHUkFUSU9OUywgJ0ludGVncmF0aW9ucycpO1xuICAgIFxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn0iXX0=