// SeriesData model represents a generic datapoint in interval range
export class SeriesData {
    constructor(interval, values) {
        if (interval !== undefined) {
            this.interval = interval;
        }
        if (values !== undefined) {
            this.values = values;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VyaWVzRGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1wdWxzZS1saWIvc3JjL2xpYi9jb21tb24vU2VyaWVzRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQSxvRUFBb0U7QUFDcEUsTUFBTSxPQUFPLFVBQVU7SUFRbEIsWUFBWSxRQUFtQixFQUFFLE1BQTRCO1FBQzFELElBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1NBQUU7UUFDekQsSUFBSSxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7U0FBRTtJQUN2RCxDQUFDO0NBRUoiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHJpbmdLZXlJbnRWYWx1ZSB9IGZyb20gJy4uL2NvbW1vbic7XG5pbXBvcnQgeyBJbnRlcnZhbCB9IGZyb20gJy4uL2NvbW1vbic7XG5cblxuXG4vLyBTZXJpZXNEYXRhIG1vZGVsIHJlcHJlc2VudHMgYSBnZW5lcmljIGRhdGFwb2ludCBpbiBpbnRlcnZhbCByYW5nZVxuZXhwb3J0IGNsYXNzIFNlcmllc0RhdGEge1xuIFxuICAgIC8vIERhdGEgaW50ZXJ2YWwgXG4gICAgcHVibGljIGludGVydmFsOiBJbnRlcnZhbDtcbiBcbiAgICAvLyBDdXN0b20gYXR0cmlidXRlcyAoa2V5LXZhbHVlIHBhaXJzKSBcbiAgICBwdWJsaWMgdmFsdWVzOiBTdHJpbmdLZXlJbnRWYWx1ZVtdO1xuIFxuICAgICBjb25zdHJ1Y3RvcihpbnRlcnZhbD86IEludGVydmFsLCB2YWx1ZXM/OiBTdHJpbmdLZXlJbnRWYWx1ZVtdKSB7IFxuICAgICAgICBpZiAoaW50ZXJ2YWwgIT09IHVuZGVmaW5lZCkgeyB0aGlzLmludGVydmFsID0gaW50ZXJ2YWw7IH1cbiAgICAgICAgaWYgKHZhbHVlcyAhPT0gdW5kZWZpbmVkKSB7IHRoaXMudmFsdWVzID0gdmFsdWVzOyB9XG4gICAgfVxuXG59XG5cblxuIl19