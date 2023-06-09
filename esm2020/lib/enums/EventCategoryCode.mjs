// Event category code
export var EventCategoryCode;
(function (EventCategoryCode) {
    // Undefined [0] 
    EventCategoryCode[EventCategoryCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Cyber-Security event [1] 
    EventCategoryCode[EventCategoryCode["SECURITY"] = 1] = "SECURITY";
    // Operational event [2] 
    EventCategoryCode[EventCategoryCode["OPERATIONS"] = 2] = "OPERATIONS";
})(EventCategoryCode || (EventCategoryCode = {}));
// Return list of EventCategoryCode values and their display names
export function GetEventCategoryCodes() {
    let result = new Map();
    result.set(EventCategoryCode.UNDEFINED, 'Undefined');
    result.set(EventCategoryCode.SECURITY, 'Security');
    result.set(EventCategoryCode.OPERATIONS, 'Operations');
    return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnRDYXRlZ29yeUNvZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtcHVsc2UtbGliL3NyYy9saWIvZW51bXMvRXZlbnRDYXRlZ29yeUNvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0Esc0JBQXNCO0FBQ3RCLE1BQU0sQ0FBTixJQUFZLGlCQVdYO0FBWEQsV0FBWSxpQkFBaUI7SUFFekIsaUJBQWlCO0lBQ2pCLG1FQUFhLENBQUE7SUFFYiw0QkFBNEI7SUFDNUIsaUVBQVksQ0FBQTtJQUVaLHlCQUF5QjtJQUN6QixxRUFBYyxDQUFBO0FBRWxCLENBQUMsRUFYVyxpQkFBaUIsS0FBakIsaUJBQWlCLFFBVzVCO0FBRUQsa0VBQWtFO0FBQ2xFLE1BQU0sVUFBVSxxQkFBcUI7SUFFakMsSUFBSSxNQUFNLEdBQUcsSUFBSSxHQUFHLEVBQTZCLENBQUM7SUFHbEQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFFckQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFFbkQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFHdkQsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8gRXZlbnQgY2F0ZWdvcnkgY29kZVxuZXhwb3J0IGVudW0gRXZlbnRDYXRlZ29yeUNvZGUge1xuIFxuICAgIC8vIFVuZGVmaW5lZCBbMF0gXG4gICAgVU5ERUZJTkVEID0gMCxcbiBcbiAgICAvLyBDeWJlci1TZWN1cml0eSBldmVudCBbMV0gXG4gICAgU0VDVVJJVFkgPSAxLFxuIFxuICAgIC8vIE9wZXJhdGlvbmFsIGV2ZW50IFsyXSBcbiAgICBPUEVSQVRJT05TID0gMixcbiBcbn1cblxuLy8gUmV0dXJuIGxpc3Qgb2YgRXZlbnRDYXRlZ29yeUNvZGUgdmFsdWVzIGFuZCB0aGVpciBkaXNwbGF5IG5hbWVzXG5leHBvcnQgZnVuY3Rpb24gR2V0RXZlbnRDYXRlZ29yeUNvZGVzKCkgOiBNYXA8RXZlbnRDYXRlZ29yeUNvZGUsIHN0cmluZz4ge1xuXG4gICAgbGV0IHJlc3VsdCA9IG5ldyBNYXA8RXZlbnRDYXRlZ29yeUNvZGUsIHN0cmluZz4oKTtcblxuICAgIFxuICAgIHJlc3VsdC5zZXQoRXZlbnRDYXRlZ29yeUNvZGUuVU5ERUZJTkVELCAnVW5kZWZpbmVkJyk7XG4gICAgXG4gICAgcmVzdWx0LnNldChFdmVudENhdGVnb3J5Q29kZS5TRUNVUklUWSwgJ1NlY3VyaXR5Jyk7XG4gICAgXG4gICAgcmVzdWx0LnNldChFdmVudENhdGVnb3J5Q29kZS5PUEVSQVRJT05TLCAnT3BlcmF0aW9ucycpO1xuICAgIFxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn0iXX0=