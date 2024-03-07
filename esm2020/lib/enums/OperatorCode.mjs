// OperatorCode represents the rule condition operator such as equal, not equal, less than ...
export var OperatorCode;
(function (OperatorCode) {
    // Undefined [0] 
    OperatorCode[OperatorCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Equal (=) [1] 
    OperatorCode[OperatorCode["EQ"] = 1] = "EQ";
    // Not Equal (!=) [2] 
    OperatorCode[OperatorCode["NEQ"] = 2] = "NEQ";
    // Greater than (>) [3] 
    OperatorCode[OperatorCode["GT"] = 3] = "GT";
    // Greater than or equal (>=) [4] 
    OperatorCode[OperatorCode["GTE"] = 4] = "GTE";
    // Less than (<) [5] 
    OperatorCode[OperatorCode["LT"] = 5] = "LT";
    // Less than or equal (<=) 
    OperatorCode[OperatorCode["LTE"] = 6] = "LTE";
    // Value included in the list (*) [7] 
    OperatorCode[OperatorCode["IN"] = 7] = "IN";
    // Value not included in the list (-) [8] 
    OperatorCode[OperatorCode["NOTIN"] = 8] = "NOTIN";
    // Value is in the range of 2 elements [9] 
    OperatorCode[OperatorCode["RANGE"] = 9] = "RANGE";
    // Partial similarity with wildcards (~) [10] 
    OperatorCode[OperatorCode["LIKE"] = 10] = "LIKE";
})(OperatorCode || (OperatorCode = {}));
// Return list of OperatorCode values and their display names
export function GetOperatorCodes() {
    let result = new Map();
    result.set(OperatorCode.UNDEFINED, 'Undefined');
    result.set(OperatorCode.EQ, 'Eq');
    result.set(OperatorCode.NEQ, 'Neq');
    result.set(OperatorCode.GT, 'Gt');
    result.set(OperatorCode.GTE, 'Gte');
    result.set(OperatorCode.LT, 'Lt');
    result.set(OperatorCode.LTE, 'Lte');
    result.set(OperatorCode.IN, 'In');
    result.set(OperatorCode.NOTIN, 'Notin');
    result.set(OperatorCode.RANGE, 'Range');
    result.set(OperatorCode.LIKE, 'Like');
    return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3BlcmF0b3JDb2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXB1bHNlLWxpYi9zcmMvbGliL2VudW1zL09wZXJhdG9yQ29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSw4RkFBOEY7QUFDOUYsTUFBTSxDQUFOLElBQVksWUFtQ1g7QUFuQ0QsV0FBWSxZQUFZO0lBRXBCLGlCQUFpQjtJQUNqQix5REFBYSxDQUFBO0lBRWIsaUJBQWlCO0lBQ2pCLDJDQUFNLENBQUE7SUFFTixzQkFBc0I7SUFDdEIsNkNBQU8sQ0FBQTtJQUVQLHdCQUF3QjtJQUN4QiwyQ0FBTSxDQUFBO0lBRU4sa0NBQWtDO0lBQ2xDLDZDQUFPLENBQUE7SUFFUCxxQkFBcUI7SUFDckIsMkNBQU0sQ0FBQTtJQUVOLDJCQUEyQjtJQUMzQiw2Q0FBTyxDQUFBO0lBRVAsc0NBQXNDO0lBQ3RDLDJDQUFNLENBQUE7SUFFTiwwQ0FBMEM7SUFDMUMsaURBQVMsQ0FBQTtJQUVULDJDQUEyQztJQUMzQyxpREFBUyxDQUFBO0lBRVQsOENBQThDO0lBQzlDLGdEQUFTLENBQUE7QUFFYixDQUFDLEVBbkNXLFlBQVksS0FBWixZQUFZLFFBbUN2QjtBQUVELDZEQUE2RDtBQUM3RCxNQUFNLFVBQVUsZ0JBQWdCO0lBRTVCLElBQUksTUFBTSxHQUFHLElBQUksR0FBRyxFQUF3QixDQUFDO0lBRzdDLE1BQU0sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUVoRCxNQUFNLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFbEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRXBDLE1BQU0sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUVsQyxNQUFNLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFFcEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBRWxDLE1BQU0sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUVwQyxNQUFNLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFbEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBRXhDLE1BQU0sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUV4QyxNQUFNLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFHdEMsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8gT3BlcmF0b3JDb2RlIHJlcHJlc2VudHMgdGhlIHJ1bGUgY29uZGl0aW9uIG9wZXJhdG9yIHN1Y2ggYXMgZXF1YWwsIG5vdCBlcXVhbCwgbGVzcyB0aGFuIC4uLlxuZXhwb3J0IGVudW0gT3BlcmF0b3JDb2RlIHtcbiBcbiAgICAvLyBVbmRlZmluZWQgWzBdIFxuICAgIFVOREVGSU5FRCA9IDAsXG4gXG4gICAgLy8gRXF1YWwgKD0pIFsxXSBcbiAgICBFUSA9IDEsXG4gXG4gICAgLy8gTm90IEVxdWFsICghPSkgWzJdIFxuICAgIE5FUSA9IDIsXG4gXG4gICAgLy8gR3JlYXRlciB0aGFuICg+KSBbM10gXG4gICAgR1QgPSAzLFxuIFxuICAgIC8vIEdyZWF0ZXIgdGhhbiBvciBlcXVhbCAoPj0pIFs0XSBcbiAgICBHVEUgPSA0LFxuIFxuICAgIC8vIExlc3MgdGhhbiAoPCkgWzVdIFxuICAgIExUID0gNSxcbiBcbiAgICAvLyBMZXNzIHRoYW4gb3IgZXF1YWwgKDw9KSBcbiAgICBMVEUgPSA2LFxuIFxuICAgIC8vIFZhbHVlIGluY2x1ZGVkIGluIHRoZSBsaXN0ICgqKSBbN10gXG4gICAgSU4gPSA3LFxuIFxuICAgIC8vIFZhbHVlIG5vdCBpbmNsdWRlZCBpbiB0aGUgbGlzdCAoLSkgWzhdIFxuICAgIE5PVElOID0gOCxcbiBcbiAgICAvLyBWYWx1ZSBpcyBpbiB0aGUgcmFuZ2Ugb2YgMiBlbGVtZW50cyBbOV0gXG4gICAgUkFOR0UgPSA5LFxuIFxuICAgIC8vIFBhcnRpYWwgc2ltaWxhcml0eSB3aXRoIHdpbGRjYXJkcyAofikgWzEwXSBcbiAgICBMSUtFID0gMTAsXG4gXG59XG5cbi8vIFJldHVybiBsaXN0IG9mIE9wZXJhdG9yQ29kZSB2YWx1ZXMgYW5kIHRoZWlyIGRpc3BsYXkgbmFtZXNcbmV4cG9ydCBmdW5jdGlvbiBHZXRPcGVyYXRvckNvZGVzKCkgOiBNYXA8T3BlcmF0b3JDb2RlLCBzdHJpbmc+IHtcblxuICAgIGxldCByZXN1bHQgPSBuZXcgTWFwPE9wZXJhdG9yQ29kZSwgc3RyaW5nPigpO1xuXG4gICAgXG4gICAgcmVzdWx0LnNldChPcGVyYXRvckNvZGUuVU5ERUZJTkVELCAnVW5kZWZpbmVkJyk7XG4gICAgXG4gICAgcmVzdWx0LnNldChPcGVyYXRvckNvZGUuRVEsICdFcScpO1xuICAgIFxuICAgIHJlc3VsdC5zZXQoT3BlcmF0b3JDb2RlLk5FUSwgJ05lcScpO1xuICAgIFxuICAgIHJlc3VsdC5zZXQoT3BlcmF0b3JDb2RlLkdULCAnR3QnKTtcbiAgICBcbiAgICByZXN1bHQuc2V0KE9wZXJhdG9yQ29kZS5HVEUsICdHdGUnKTtcbiAgICBcbiAgICByZXN1bHQuc2V0KE9wZXJhdG9yQ29kZS5MVCwgJ0x0Jyk7XG4gICAgXG4gICAgcmVzdWx0LnNldChPcGVyYXRvckNvZGUuTFRFLCAnTHRlJyk7XG4gICAgXG4gICAgcmVzdWx0LnNldChPcGVyYXRvckNvZGUuSU4sICdJbicpO1xuICAgIFxuICAgIHJlc3VsdC5zZXQoT3BlcmF0b3JDb2RlLk5PVElOLCAnTm90aW4nKTtcbiAgICBcbiAgICByZXN1bHQuc2V0KE9wZXJhdG9yQ29kZS5SQU5HRSwgJ1JhbmdlJyk7XG4gICAgXG4gICAgcmVzdWx0LnNldChPcGVyYXRvckNvZGUuTElLRSwgJ0xpa2UnKTtcbiAgICBcblxuICAgIHJldHVybiByZXN1bHQ7XG59Il19