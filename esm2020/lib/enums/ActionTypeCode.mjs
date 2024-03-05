// Action type code
export var ActionTypeCode;
(function (ActionTypeCode) {
    // Undefined [0] 
    ActionTypeCode[ActionTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Suspend device [1] 
    ActionTypeCode[ActionTypeCode["SUSPEND"] = 1] = "SUSPEND";
    // Redirect all traffic to an alternative endpoint [2] 
    ActionTypeCode[ActionTypeCode["REDIRECT"] = 2] = "REDIRECT";
    // Throttle traffic from/to the device [3] 
    ActionTypeCode[ActionTypeCode["THROTTLE"] = 3] = "THROTTLE";
    // Block specific external IP [4] 
    ActionTypeCode[ActionTypeCode["BLOCK_IP"] = 4] = "BLOCK_IP";
})(ActionTypeCode || (ActionTypeCode = {}));
// Return list of ActionTypeCode values and their display names
export function GetActionTypeCodes() {
    let result = new Map();
    result.set(ActionTypeCode.UNDEFINED, 'Undefined');
    result.set(ActionTypeCode.SUSPEND, 'Suspend');
    result.set(ActionTypeCode.REDIRECT, 'Redirect');
    result.set(ActionTypeCode.THROTTLE, 'Throttle');
    result.set(ActionTypeCode.BLOCK_IP, 'Block Ip');
    return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWN0aW9uVHlwZUNvZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtcHVsc2UtbGliL3NyYy9saWIvZW51bXMvQWN0aW9uVHlwZUNvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsbUJBQW1CO0FBQ25CLE1BQU0sQ0FBTixJQUFZLGNBaUJYO0FBakJELFdBQVksY0FBYztJQUV0QixpQkFBaUI7SUFDakIsNkRBQWEsQ0FBQTtJQUViLHNCQUFzQjtJQUN0Qix5REFBVyxDQUFBO0lBRVgsdURBQXVEO0lBQ3ZELDJEQUFZLENBQUE7SUFFWiwyQ0FBMkM7SUFDM0MsMkRBQVksQ0FBQTtJQUVaLGtDQUFrQztJQUNsQywyREFBWSxDQUFBO0FBRWhCLENBQUMsRUFqQlcsY0FBYyxLQUFkLGNBQWMsUUFpQnpCO0FBRUQsK0RBQStEO0FBQy9ELE1BQU0sVUFBVSxrQkFBa0I7SUFFOUIsSUFBSSxNQUFNLEdBQUcsSUFBSSxHQUFHLEVBQTBCLENBQUM7SUFHL0MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBRWxELE1BQU0sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztJQUU5QyxNQUFNLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFFaEQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBRWhELE1BQU0sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUdoRCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyBBY3Rpb24gdHlwZSBjb2RlXG5leHBvcnQgZW51bSBBY3Rpb25UeXBlQ29kZSB7XG4gXG4gICAgLy8gVW5kZWZpbmVkIFswXSBcbiAgICBVTkRFRklORUQgPSAwLFxuIFxuICAgIC8vIFN1c3BlbmQgZGV2aWNlIFsxXSBcbiAgICBTVVNQRU5EID0gMSxcbiBcbiAgICAvLyBSZWRpcmVjdCBhbGwgdHJhZmZpYyB0byBhbiBhbHRlcm5hdGl2ZSBlbmRwb2ludCBbMl0gXG4gICAgUkVESVJFQ1QgPSAyLFxuIFxuICAgIC8vIFRocm90dGxlIHRyYWZmaWMgZnJvbS90byB0aGUgZGV2aWNlIFszXSBcbiAgICBUSFJPVFRMRSA9IDMsXG4gXG4gICAgLy8gQmxvY2sgc3BlY2lmaWMgZXh0ZXJuYWwgSVAgWzRdIFxuICAgIEJMT0NLX0lQID0gNCxcbiBcbn1cblxuLy8gUmV0dXJuIGxpc3Qgb2YgQWN0aW9uVHlwZUNvZGUgdmFsdWVzIGFuZCB0aGVpciBkaXNwbGF5IG5hbWVzXG5leHBvcnQgZnVuY3Rpb24gR2V0QWN0aW9uVHlwZUNvZGVzKCkgOiBNYXA8QWN0aW9uVHlwZUNvZGUsIHN0cmluZz4ge1xuXG4gICAgbGV0IHJlc3VsdCA9IG5ldyBNYXA8QWN0aW9uVHlwZUNvZGUsIHN0cmluZz4oKTtcblxuICAgIFxuICAgIHJlc3VsdC5zZXQoQWN0aW9uVHlwZUNvZGUuVU5ERUZJTkVELCAnVW5kZWZpbmVkJyk7XG4gICAgXG4gICAgcmVzdWx0LnNldChBY3Rpb25UeXBlQ29kZS5TVVNQRU5ELCAnU3VzcGVuZCcpO1xuICAgIFxuICAgIHJlc3VsdC5zZXQoQWN0aW9uVHlwZUNvZGUuUkVESVJFQ1QsICdSZWRpcmVjdCcpO1xuICAgIFxuICAgIHJlc3VsdC5zZXQoQWN0aW9uVHlwZUNvZGUuVEhST1RUTEUsICdUaHJvdHRsZScpO1xuICAgIFxuICAgIHJlc3VsdC5zZXQoQWN0aW9uVHlwZUNvZGUuQkxPQ0tfSVAsICdCbG9jayBJcCcpO1xuICAgIFxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn0iXX0=