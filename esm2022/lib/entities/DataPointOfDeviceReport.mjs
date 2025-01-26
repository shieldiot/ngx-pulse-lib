// TimeSeriesOfDeviceReport model represents a time series of DeviceReport
export class DataPointOfDeviceReport {
    constructor(timestamp, value) {
        if (timestamp !== undefined) {
            this.timestamp = timestamp;
        }
        if (value !== undefined) {
            this.value = value;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YVBvaW50T2ZEZXZpY2VSZXBvcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtcHVsc2UtbGliL3NyYy9saWIvZW50aXRpZXMvRGF0YVBvaW50T2ZEZXZpY2VSZXBvcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUEsMEVBQTBFO0FBQzFFLE1BQU0sT0FBTyx1QkFBdUI7SUFRL0IsWUFBWSxTQUFrQixFQUFFLEtBQW9CO1FBQ2pELElBQUksU0FBUyxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFBQyxDQUFDO1FBQzVELElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFBQyxDQUFDO0lBQ3BELENBQUM7Q0FFSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERldmljZVJlcG9ydCB9IGZyb20gJy4uL2VudGl0aWVzJztcblxuXG5cbi8vIFRpbWVTZXJpZXNPZkRldmljZVJlcG9ydCBtb2RlbCByZXByZXNlbnRzIGEgdGltZSBzZXJpZXMgb2YgRGV2aWNlUmVwb3J0XG5leHBvcnQgY2xhc3MgRGF0YVBvaW50T2ZEZXZpY2VSZXBvcnQge1xuIFxuICAgIC8vIFNhdGEgcG9pbnQgdGltZXN0YW1wIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgdGltZXN0YW1wOiBudW1iZXI7XG4gXG4gICAgLy8gRGV2aWNlIHJlcG9ydCB2YWx1ZSBcbiAgICBwdWJsaWMgdmFsdWU6IERldmljZVJlcG9ydDtcbiBcbiAgICAgY29uc3RydWN0b3IodGltZXN0YW1wPzogbnVtYmVyLCB2YWx1ZT86IERldmljZVJlcG9ydCkgeyBcbiAgICAgICAgaWYgKHRpbWVzdGFtcCAhPT0gdW5kZWZpbmVkKSB7IHRoaXMudGltZXN0YW1wID0gdGltZXN0YW1wOyB9XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMudmFsdWUgPSB2YWx1ZTsgfVxuICAgIH1cblxufVxuXG5cbiJdfQ==