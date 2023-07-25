// Feature code
export var FeatureCode;
(function (FeatureCode) {
    // Undefined [0] 
    FeatureCode[FeatureCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Network Map view [1] 
    FeatureCode[FeatureCode["NETWORK_MAP_VIEW"] = 1] = "NETWORK_MAP_VIEW";
    // Network Map module [2] 
    FeatureCode[FeatureCode["NETWORK_MAP_MODULE"] = 2] = "NETWORK_MAP_MODULE";
})(FeatureCode || (FeatureCode = {}));
// Return list of FeatureCode values and their display names
export function GetFeatureCodes() {
    let result = new Map();
    result.set(FeatureCode.UNDEFINED, 'Undefined');
    result.set(FeatureCode.NETWORK_MAP_VIEW, 'Network Map View');
    result.set(FeatureCode.NETWORK_MAP_MODULE, 'Network Map Module');
    return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmVhdHVyZUNvZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtcHVsc2UtbGliL3NyYy9saWIvZW51bXMvRmVhdHVyZUNvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsZUFBZTtBQUNmLE1BQU0sQ0FBTixJQUFZLFdBV1g7QUFYRCxXQUFZLFdBQVc7SUFFbkIsaUJBQWlCO0lBQ2pCLHVEQUFhLENBQUE7SUFFYix3QkFBd0I7SUFDeEIscUVBQW9CLENBQUE7SUFFcEIsMEJBQTBCO0lBQzFCLHlFQUFzQixDQUFBO0FBRTFCLENBQUMsRUFYVyxXQUFXLEtBQVgsV0FBVyxRQVd0QjtBQUVELDREQUE0RDtBQUM1RCxNQUFNLFVBQVUsZUFBZTtJQUUzQixJQUFJLE1BQU0sR0FBRyxJQUFJLEdBQUcsRUFBdUIsQ0FBQztJQUc1QyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFFL0MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUU3RCxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0lBR2pFLE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIEZlYXR1cmUgY29kZVxuZXhwb3J0IGVudW0gRmVhdHVyZUNvZGUge1xuIFxuICAgIC8vIFVuZGVmaW5lZCBbMF0gXG4gICAgVU5ERUZJTkVEID0gMCxcbiBcbiAgICAvLyBOZXR3b3JrIE1hcCB2aWV3IFsxXSBcbiAgICBORVRXT1JLX01BUF9WSUVXID0gMSxcbiBcbiAgICAvLyBOZXR3b3JrIE1hcCBtb2R1bGUgWzJdIFxuICAgIE5FVFdPUktfTUFQX01PRFVMRSA9IDIsXG4gXG59XG5cbi8vIFJldHVybiBsaXN0IG9mIEZlYXR1cmVDb2RlIHZhbHVlcyBhbmQgdGhlaXIgZGlzcGxheSBuYW1lc1xuZXhwb3J0IGZ1bmN0aW9uIEdldEZlYXR1cmVDb2RlcygpIDogTWFwPEZlYXR1cmVDb2RlLCBzdHJpbmc+IHtcblxuICAgIGxldCByZXN1bHQgPSBuZXcgTWFwPEZlYXR1cmVDb2RlLCBzdHJpbmc+KCk7XG5cbiAgICBcbiAgICByZXN1bHQuc2V0KEZlYXR1cmVDb2RlLlVOREVGSU5FRCwgJ1VuZGVmaW5lZCcpO1xuICAgIFxuICAgIHJlc3VsdC5zZXQoRmVhdHVyZUNvZGUuTkVUV09SS19NQVBfVklFVywgJ05ldHdvcmsgTWFwIFZpZXcnKTtcbiAgICBcbiAgICByZXN1bHQuc2V0KEZlYXR1cmVDb2RlLk5FVFdPUktfTUFQX01PRFVMRSwgJ05ldHdvcmsgTWFwIE1vZHVsZScpO1xuICAgIFxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn0iXX0=