// Device type code
export var DeviceTypeCode;
(function (DeviceTypeCode) {
    // Undefined [0] 
    DeviceTypeCode[DeviceTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Other (Unknown Device) [1] 
    DeviceTypeCode[DeviceTypeCode["OTHER"] = 1] = "OTHER";
    // Industrial Controller [2] 
    DeviceTypeCode[DeviceTypeCode["CONTROLLER"] = 2] = "CONTROLLER";
    // General smart meter [3] 
    DeviceTypeCode[DeviceTypeCode["METER"] = 3] = "METER";
    // General sensor [4] 
    DeviceTypeCode[DeviceTypeCode["SENSOR"] = 4] = "SENSOR";
    // General camera [5] 
    DeviceTypeCode[DeviceTypeCode["CAMERA"] = 5] = "CAMERA";
    // Point of sale [6] 
    DeviceTypeCode[DeviceTypeCode["POS"] = 6] = "POS";
    // Pump [7] 
    DeviceTypeCode[DeviceTypeCode["PUMP"] = 7] = "PUMP";
    // EV charging station [8] 
    DeviceTypeCode[DeviceTypeCode["CHARGING_STATION"] = 8] = "CHARGING_STATION";
    // Smart lightning [9] 
    DeviceTypeCode[DeviceTypeCode["LIGHTNING"] = 9] = "LIGHTNING";
    // Temperature sensor [10] 
    DeviceTypeCode[DeviceTypeCode["TEMPERATURE_SENSOR"] = 10] = "TEMPERATURE_SENSOR";
    // Air Quality sensor [11] 
    DeviceTypeCode[DeviceTypeCode["AIR_QUALITY_SENSOR"] = 11] = "AIR_QUALITY_SENSOR";
    // Valve [12] 
    DeviceTypeCode[DeviceTypeCode["VALVE"] = 12] = "VALVE";
    // Gateway [13] 
    DeviceTypeCode[DeviceTypeCode["GATEWAY"] = 13] = "GATEWAY";
    // ATM [13] 
    DeviceTypeCode[DeviceTypeCode["ATM"] = 14] = "ATM";
})(DeviceTypeCode || (DeviceTypeCode = {}));
// Return list of DeviceTypeCode values and their display names
export function GetDeviceTypeCodes() {
    let result = new Map();
    result.set(DeviceTypeCode.UNDEFINED, 'Undefined');
    result.set(DeviceTypeCode.OTHER, 'Other');
    result.set(DeviceTypeCode.CONTROLLER, 'Controller');
    result.set(DeviceTypeCode.METER, 'Meter');
    result.set(DeviceTypeCode.SENSOR, 'Sensor');
    result.set(DeviceTypeCode.CAMERA, 'Camera');
    result.set(DeviceTypeCode.POS, 'Pos');
    result.set(DeviceTypeCode.PUMP, 'Pump');
    result.set(DeviceTypeCode.CHARGING_STATION, 'Charging Station');
    result.set(DeviceTypeCode.LIGHTNING, 'Lightning');
    result.set(DeviceTypeCode.TEMPERATURE_SENSOR, 'Temperature Sensor');
    result.set(DeviceTypeCode.AIR_QUALITY_SENSOR, 'Air Quality Sensor');
    result.set(DeviceTypeCode.VALVE, 'Valve');
    result.set(DeviceTypeCode.GATEWAY, 'Gateway');
    result.set(DeviceTypeCode.ATM, 'Atm');
    return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGV2aWNlVHlwZUNvZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtcHVsc2UtbGliL3NyYy9saWIvZW51bXMvRGV2aWNlVHlwZUNvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsbUJBQW1CO0FBQ25CLE1BQU0sQ0FBTixJQUFZLGNBK0NYO0FBL0NELFdBQVksY0FBYztJQUV0QixpQkFBaUI7SUFDakIsNkRBQWEsQ0FBQTtJQUViLDhCQUE4QjtJQUM5QixxREFBUyxDQUFBO0lBRVQsNkJBQTZCO0lBQzdCLCtEQUFjLENBQUE7SUFFZCwyQkFBMkI7SUFDM0IscURBQVMsQ0FBQTtJQUVULHNCQUFzQjtJQUN0Qix1REFBVSxDQUFBO0lBRVYsc0JBQXNCO0lBQ3RCLHVEQUFVLENBQUE7SUFFVixxQkFBcUI7SUFDckIsaURBQU8sQ0FBQTtJQUVQLFlBQVk7SUFDWixtREFBUSxDQUFBO0lBRVIsMkJBQTJCO0lBQzNCLDJFQUFvQixDQUFBO0lBRXBCLHVCQUF1QjtJQUN2Qiw2REFBYSxDQUFBO0lBRWIsMkJBQTJCO0lBQzNCLGdGQUF1QixDQUFBO0lBRXZCLDJCQUEyQjtJQUMzQixnRkFBdUIsQ0FBQTtJQUV2QixjQUFjO0lBQ2Qsc0RBQVUsQ0FBQTtJQUVWLGdCQUFnQjtJQUNoQiwwREFBWSxDQUFBO0lBRVosWUFBWTtJQUNaLGtEQUFRLENBQUE7QUFFWixDQUFDLEVBL0NXLGNBQWMsS0FBZCxjQUFjLFFBK0N6QjtBQUVELCtEQUErRDtBQUMvRCxNQUFNLFVBQVUsa0JBQWtCO0lBRTlCLElBQUksTUFBTSxHQUFHLElBQUksR0FBRyxFQUEwQixDQUFDO0lBRy9DLE1BQU0sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUVsRCxNQUFNLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFFMUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBRXBELE1BQU0sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUUxQyxNQUFNLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFFNUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBRTVDLE1BQU0sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUV0QyxNQUFNLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFFeEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUVoRSxNQUFNLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFFbEQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsa0JBQWtCLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztJQUVwRSxNQUFNLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0lBRXBFLE1BQU0sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUUxQyxNQUFNLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFFOUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBR3RDLE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIERldmljZSB0eXBlIGNvZGVcbmV4cG9ydCBlbnVtIERldmljZVR5cGVDb2RlIHtcbiBcbiAgICAvLyBVbmRlZmluZWQgWzBdIFxuICAgIFVOREVGSU5FRCA9IDAsXG4gXG4gICAgLy8gT3RoZXIgKFVua25vd24gRGV2aWNlKSBbMV0gXG4gICAgT1RIRVIgPSAxLFxuIFxuICAgIC8vIEluZHVzdHJpYWwgQ29udHJvbGxlciBbMl0gXG4gICAgQ09OVFJPTExFUiA9IDIsXG4gXG4gICAgLy8gR2VuZXJhbCBzbWFydCBtZXRlciBbM10gXG4gICAgTUVURVIgPSAzLFxuIFxuICAgIC8vIEdlbmVyYWwgc2Vuc29yIFs0XSBcbiAgICBTRU5TT1IgPSA0LFxuIFxuICAgIC8vIEdlbmVyYWwgY2FtZXJhIFs1XSBcbiAgICBDQU1FUkEgPSA1LFxuIFxuICAgIC8vIFBvaW50IG9mIHNhbGUgWzZdIFxuICAgIFBPUyA9IDYsXG4gXG4gICAgLy8gUHVtcCBbN10gXG4gICAgUFVNUCA9IDcsXG4gXG4gICAgLy8gRVYgY2hhcmdpbmcgc3RhdGlvbiBbOF0gXG4gICAgQ0hBUkdJTkdfU1RBVElPTiA9IDgsXG4gXG4gICAgLy8gU21hcnQgbGlnaHRuaW5nIFs5XSBcbiAgICBMSUdIVE5JTkcgPSA5LFxuIFxuICAgIC8vIFRlbXBlcmF0dXJlIHNlbnNvciBbMTBdIFxuICAgIFRFTVBFUkFUVVJFX1NFTlNPUiA9IDEwLFxuIFxuICAgIC8vIEFpciBRdWFsaXR5IHNlbnNvciBbMTFdIFxuICAgIEFJUl9RVUFMSVRZX1NFTlNPUiA9IDExLFxuIFxuICAgIC8vIFZhbHZlIFsxMl0gXG4gICAgVkFMVkUgPSAxMixcbiBcbiAgICAvLyBHYXRld2F5IFsxM10gXG4gICAgR0FURVdBWSA9IDEzLFxuIFxuICAgIC8vIEFUTSBbMTNdIFxuICAgIEFUTSA9IDE0LFxuIFxufVxuXG4vLyBSZXR1cm4gbGlzdCBvZiBEZXZpY2VUeXBlQ29kZSB2YWx1ZXMgYW5kIHRoZWlyIGRpc3BsYXkgbmFtZXNcbmV4cG9ydCBmdW5jdGlvbiBHZXREZXZpY2VUeXBlQ29kZXMoKSA6IE1hcDxEZXZpY2VUeXBlQ29kZSwgc3RyaW5nPiB7XG5cbiAgICBsZXQgcmVzdWx0ID0gbmV3IE1hcDxEZXZpY2VUeXBlQ29kZSwgc3RyaW5nPigpO1xuXG4gICAgXG4gICAgcmVzdWx0LnNldChEZXZpY2VUeXBlQ29kZS5VTkRFRklORUQsICdVbmRlZmluZWQnKTtcbiAgICBcbiAgICByZXN1bHQuc2V0KERldmljZVR5cGVDb2RlLk9USEVSLCAnT3RoZXInKTtcbiAgICBcbiAgICByZXN1bHQuc2V0KERldmljZVR5cGVDb2RlLkNPTlRST0xMRVIsICdDb250cm9sbGVyJyk7XG4gICAgXG4gICAgcmVzdWx0LnNldChEZXZpY2VUeXBlQ29kZS5NRVRFUiwgJ01ldGVyJyk7XG4gICAgXG4gICAgcmVzdWx0LnNldChEZXZpY2VUeXBlQ29kZS5TRU5TT1IsICdTZW5zb3InKTtcbiAgICBcbiAgICByZXN1bHQuc2V0KERldmljZVR5cGVDb2RlLkNBTUVSQSwgJ0NhbWVyYScpO1xuICAgIFxuICAgIHJlc3VsdC5zZXQoRGV2aWNlVHlwZUNvZGUuUE9TLCAnUG9zJyk7XG4gICAgXG4gICAgcmVzdWx0LnNldChEZXZpY2VUeXBlQ29kZS5QVU1QLCAnUHVtcCcpO1xuICAgIFxuICAgIHJlc3VsdC5zZXQoRGV2aWNlVHlwZUNvZGUuQ0hBUkdJTkdfU1RBVElPTiwgJ0NoYXJnaW5nIFN0YXRpb24nKTtcbiAgICBcbiAgICByZXN1bHQuc2V0KERldmljZVR5cGVDb2RlLkxJR0hUTklORywgJ0xpZ2h0bmluZycpO1xuICAgIFxuICAgIHJlc3VsdC5zZXQoRGV2aWNlVHlwZUNvZGUuVEVNUEVSQVRVUkVfU0VOU09SLCAnVGVtcGVyYXR1cmUgU2Vuc29yJyk7XG4gICAgXG4gICAgcmVzdWx0LnNldChEZXZpY2VUeXBlQ29kZS5BSVJfUVVBTElUWV9TRU5TT1IsICdBaXIgUXVhbGl0eSBTZW5zb3InKTtcbiAgICBcbiAgICByZXN1bHQuc2V0KERldmljZVR5cGVDb2RlLlZBTFZFLCAnVmFsdmUnKTtcbiAgICBcbiAgICByZXN1bHQuc2V0KERldmljZVR5cGVDb2RlLkdBVEVXQVksICdHYXRld2F5Jyk7XG4gICAgXG4gICAgcmVzdWx0LnNldChEZXZpY2VUeXBlQ29kZS5BVE0sICdBdG0nKTtcbiAgICBcblxuICAgIHJldHVybiByZXN1bHQ7XG59Il19