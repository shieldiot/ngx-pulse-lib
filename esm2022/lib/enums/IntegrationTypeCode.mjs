// Integration type code
export var IntegrationTypeCode;
(function (IntegrationTypeCode) {
    // Undefined [0] 
    IntegrationTypeCode[IntegrationTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
    // General HTTP(S) based integration [1] 
    IntegrationTypeCode[IntegrationTypeCode["HTTP"] = 1] = "HTTP";
    // General SMTP based integration [2] 
    IntegrationTypeCode[IntegrationTypeCode["SMTP"] = 2] = "SMTP";
    // Internal email service integration [3] 
    IntegrationTypeCode[IntegrationTypeCode["EMAIL"] = 3] = "EMAIL";
    // Internal SMS service integration  [4] 
    IntegrationTypeCode[IntegrationTypeCode["SMS"] = 4] = "SMS";
})(IntegrationTypeCode || (IntegrationTypeCode = {}));
// Return list of IntegrationTypeCode values and their display names
export function GetIntegrationTypeCodes() {
    let result = new Map();
    result.set(IntegrationTypeCode.UNDEFINED, 'Undefined');
    result.set(IntegrationTypeCode.HTTP, 'Http');
    result.set(IntegrationTypeCode.SMTP, 'Smtp');
    result.set(IntegrationTypeCode.EMAIL, 'Email');
    result.set(IntegrationTypeCode.SMS, 'Sms');
    return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW50ZWdyYXRpb25UeXBlQ29kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1wdWxzZS1saWIvc3JjL2xpYi9lbnVtcy9JbnRlZ3JhdGlvblR5cGVDb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLHdCQUF3QjtBQUN4QixNQUFNLENBQU4sSUFBWSxtQkFpQlg7QUFqQkQsV0FBWSxtQkFBbUI7SUFFM0IsaUJBQWlCO0lBQ2pCLHVFQUFhLENBQUE7SUFFYix5Q0FBeUM7SUFDekMsNkRBQVEsQ0FBQTtJQUVSLHNDQUFzQztJQUN0Qyw2REFBUSxDQUFBO0lBRVIsMENBQTBDO0lBQzFDLCtEQUFTLENBQUE7SUFFVCx5Q0FBeUM7SUFDekMsMkRBQU8sQ0FBQTtBQUVYLENBQUMsRUFqQlcsbUJBQW1CLEtBQW5CLG1CQUFtQixRQWlCOUI7QUFFRCxvRUFBb0U7QUFDcEUsTUFBTSxVQUFVLHVCQUF1QjtJQUVuQyxJQUFJLE1BQU0sR0FBRyxJQUFJLEdBQUcsRUFBK0IsQ0FBQztJQUdwRCxNQUFNLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUV2RCxNQUFNLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUU3QyxNQUFNLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUU3QyxNQUFNLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUUvQyxNQUFNLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUczQyxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyBJbnRlZ3JhdGlvbiB0eXBlIGNvZGVcbmV4cG9ydCBlbnVtIEludGVncmF0aW9uVHlwZUNvZGUge1xuIFxuICAgIC8vIFVuZGVmaW5lZCBbMF0gXG4gICAgVU5ERUZJTkVEID0gMCxcbiBcbiAgICAvLyBHZW5lcmFsIEhUVFAoUykgYmFzZWQgaW50ZWdyYXRpb24gWzFdIFxuICAgIEhUVFAgPSAxLFxuIFxuICAgIC8vIEdlbmVyYWwgU01UUCBiYXNlZCBpbnRlZ3JhdGlvbiBbMl0gXG4gICAgU01UUCA9IDIsXG4gXG4gICAgLy8gSW50ZXJuYWwgZW1haWwgc2VydmljZSBpbnRlZ3JhdGlvbiBbM10gXG4gICAgRU1BSUwgPSAzLFxuIFxuICAgIC8vIEludGVybmFsIFNNUyBzZXJ2aWNlIGludGVncmF0aW9uICBbNF0gXG4gICAgU01TID0gNCxcbiBcbn1cblxuLy8gUmV0dXJuIGxpc3Qgb2YgSW50ZWdyYXRpb25UeXBlQ29kZSB2YWx1ZXMgYW5kIHRoZWlyIGRpc3BsYXkgbmFtZXNcbmV4cG9ydCBmdW5jdGlvbiBHZXRJbnRlZ3JhdGlvblR5cGVDb2RlcygpIDogTWFwPEludGVncmF0aW9uVHlwZUNvZGUsIHN0cmluZz4ge1xuXG4gICAgbGV0IHJlc3VsdCA9IG5ldyBNYXA8SW50ZWdyYXRpb25UeXBlQ29kZSwgc3RyaW5nPigpO1xuXG4gICAgXG4gICAgcmVzdWx0LnNldChJbnRlZ3JhdGlvblR5cGVDb2RlLlVOREVGSU5FRCwgJ1VuZGVmaW5lZCcpO1xuICAgIFxuICAgIHJlc3VsdC5zZXQoSW50ZWdyYXRpb25UeXBlQ29kZS5IVFRQLCAnSHR0cCcpO1xuICAgIFxuICAgIHJlc3VsdC5zZXQoSW50ZWdyYXRpb25UeXBlQ29kZS5TTVRQLCAnU210cCcpO1xuICAgIFxuICAgIHJlc3VsdC5zZXQoSW50ZWdyYXRpb25UeXBlQ29kZS5FTUFJTCwgJ0VtYWlsJyk7XG4gICAgXG4gICAgcmVzdWx0LnNldChJbnRlZ3JhdGlvblR5cGVDb2RlLlNNUywgJ1NtcycpO1xuICAgIFxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn0iXX0=