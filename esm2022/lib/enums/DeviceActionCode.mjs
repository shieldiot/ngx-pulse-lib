// Device action code
export var DeviceActionCode;
(function (DeviceActionCode) {
    // Undefined [0] 
    DeviceActionCode[DeviceActionCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Redirect all traffic to an alternative endpoint [1] 
    DeviceActionCode[DeviceActionCode["REDIRECT"] = 1] = "REDIRECT";
    // Suspend device (make it inactive) [2] 
    DeviceActionCode[DeviceActionCode["SUSPEND"] = 2] = "SUSPEND";
    // Throttle traffic from/to the device [3] 
    DeviceActionCode[DeviceActionCode["THROTTLE"] = 3] = "THROTTLE";
    // Block specific external IP [4] 
    DeviceActionCode[DeviceActionCode["BLOCK_IP"] = 4] = "BLOCK_IP";
    // Unsuspend device [5] 
    DeviceActionCode[DeviceActionCode["UNSUSPEND"] = 5] = "UNSUSPEND";
})(DeviceActionCode || (DeviceActionCode = {}));
// Return list of DeviceActionCode values and their display names
export function GetDeviceActionCodes() {
    let result = new Map();
    result.set(DeviceActionCode.UNDEFINED, 'Undefined');
    result.set(DeviceActionCode.REDIRECT, 'Redirect');
    result.set(DeviceActionCode.SUSPEND, 'Suspend');
    result.set(DeviceActionCode.THROTTLE, 'Throttle');
    result.set(DeviceActionCode.BLOCK_IP, 'Block Ip');
    result.set(DeviceActionCode.UNSUSPEND, 'Unsuspend');
    return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGV2aWNlQWN0aW9uQ29kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1wdWxzZS1saWIvc3JjL2xpYi9lbnVtcy9EZXZpY2VBY3Rpb25Db2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLHFCQUFxQjtBQUNyQixNQUFNLENBQU4sSUFBWSxnQkFvQlg7QUFwQkQsV0FBWSxnQkFBZ0I7SUFFeEIsaUJBQWlCO0lBQ2pCLGlFQUFhLENBQUE7SUFFYix1REFBdUQ7SUFDdkQsK0RBQVksQ0FBQTtJQUVaLHlDQUF5QztJQUN6Qyw2REFBVyxDQUFBO0lBRVgsMkNBQTJDO0lBQzNDLCtEQUFZLENBQUE7SUFFWixrQ0FBa0M7SUFDbEMsK0RBQVksQ0FBQTtJQUVaLHdCQUF3QjtJQUN4QixpRUFBYSxDQUFBO0FBRWpCLENBQUMsRUFwQlcsZ0JBQWdCLEtBQWhCLGdCQUFnQixRQW9CM0I7QUFFRCxpRUFBaUU7QUFDakUsTUFBTSxVQUFVLG9CQUFvQjtJQUVoQyxJQUFJLE1BQU0sR0FBRyxJQUFJLEdBQUcsRUFBNEIsQ0FBQztJQUdqRCxNQUFNLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUVwRCxNQUFNLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUVsRCxNQUFNLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztJQUVoRCxNQUFNLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUVsRCxNQUFNLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUVsRCxNQUFNLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUdwRCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyBEZXZpY2UgYWN0aW9uIGNvZGVcbmV4cG9ydCBlbnVtIERldmljZUFjdGlvbkNvZGUge1xuIFxuICAgIC8vIFVuZGVmaW5lZCBbMF0gXG4gICAgVU5ERUZJTkVEID0gMCxcbiBcbiAgICAvLyBSZWRpcmVjdCBhbGwgdHJhZmZpYyB0byBhbiBhbHRlcm5hdGl2ZSBlbmRwb2ludCBbMV0gXG4gICAgUkVESVJFQ1QgPSAxLFxuIFxuICAgIC8vIFN1c3BlbmQgZGV2aWNlIChtYWtlIGl0IGluYWN0aXZlKSBbMl0gXG4gICAgU1VTUEVORCA9IDIsXG4gXG4gICAgLy8gVGhyb3R0bGUgdHJhZmZpYyBmcm9tL3RvIHRoZSBkZXZpY2UgWzNdIFxuICAgIFRIUk9UVExFID0gMyxcbiBcbiAgICAvLyBCbG9jayBzcGVjaWZpYyBleHRlcm5hbCBJUCBbNF0gXG4gICAgQkxPQ0tfSVAgPSA0LFxuIFxuICAgIC8vIFVuc3VzcGVuZCBkZXZpY2UgWzVdIFxuICAgIFVOU1VTUEVORCA9IDUsXG4gXG59XG5cbi8vIFJldHVybiBsaXN0IG9mIERldmljZUFjdGlvbkNvZGUgdmFsdWVzIGFuZCB0aGVpciBkaXNwbGF5IG5hbWVzXG5leHBvcnQgZnVuY3Rpb24gR2V0RGV2aWNlQWN0aW9uQ29kZXMoKSA6IE1hcDxEZXZpY2VBY3Rpb25Db2RlLCBzdHJpbmc+IHtcblxuICAgIGxldCByZXN1bHQgPSBuZXcgTWFwPERldmljZUFjdGlvbkNvZGUsIHN0cmluZz4oKTtcblxuICAgIFxuICAgIHJlc3VsdC5zZXQoRGV2aWNlQWN0aW9uQ29kZS5VTkRFRklORUQsICdVbmRlZmluZWQnKTtcbiAgICBcbiAgICByZXN1bHQuc2V0KERldmljZUFjdGlvbkNvZGUuUkVESVJFQ1QsICdSZWRpcmVjdCcpO1xuICAgIFxuICAgIHJlc3VsdC5zZXQoRGV2aWNlQWN0aW9uQ29kZS5TVVNQRU5ELCAnU3VzcGVuZCcpO1xuICAgIFxuICAgIHJlc3VsdC5zZXQoRGV2aWNlQWN0aW9uQ29kZS5USFJPVFRMRSwgJ1Rocm90dGxlJyk7XG4gICAgXG4gICAgcmVzdWx0LnNldChEZXZpY2VBY3Rpb25Db2RlLkJMT0NLX0lQLCAnQmxvY2sgSXAnKTtcbiAgICBcbiAgICByZXN1bHQuc2V0KERldmljZUFjdGlvbkNvZGUuVU5TVVNQRU5ELCAnVW5zdXNwZW5kJyk7XG4gICAgXG5cbiAgICByZXR1cm4gcmVzdWx0O1xufSJdfQ==