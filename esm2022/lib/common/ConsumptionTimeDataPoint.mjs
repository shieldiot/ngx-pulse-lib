// ConsumptionTimeDataPoint model represents a 2 dimensions datapoint in time
export class ConsumptionTimeDataPoint {
    constructor(timestamp, value) {
        if (timestamp !== undefined) {
            this.timestamp = timestamp;
        }
        if (value !== undefined) {
            this.value = value;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uc3VtcHRpb25UaW1lRGF0YVBvaW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXB1bHNlLWxpYi9zcmMvbGliL2NvbW1vbi9Db25zdW1wdGlvblRpbWVEYXRhUG9pbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUEsNkVBQTZFO0FBQzdFLE1BQU0sT0FBTyx3QkFBd0I7SUFRaEMsWUFBWSxTQUFrQixFQUFFLEtBQXVCO1FBQ3BELElBQUksU0FBUyxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFBQyxDQUFDO1FBQzVELElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFBQyxDQUFDO0lBQ3BELENBQUM7Q0FFSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN1bXB0aW9uRGF0YSB9IGZyb20gJy4uL2NvbW1vbic7XG5cblxuXG4vLyBDb25zdW1wdGlvblRpbWVEYXRhUG9pbnQgbW9kZWwgcmVwcmVzZW50cyBhIDIgZGltZW5zaW9ucyBkYXRhcG9pbnQgaW4gdGltZVxuZXhwb3J0IGNsYXNzIENvbnN1bXB0aW9uVGltZURhdGFQb2ludCB7XG4gXG4gICAgLy8gU2F0YSBwb2ludCB0aW1lc3RhbXAgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyB0aW1lc3RhbXA6IG51bWJlcjtcbiBcbiAgICAvLyBDb25zdW1wdGlvbiBkYXRhIFxuICAgIHB1YmxpYyB2YWx1ZTogQ29uc3VtcHRpb25EYXRhO1xuIFxuICAgICBjb25zdHJ1Y3Rvcih0aW1lc3RhbXA/OiBudW1iZXIsIHZhbHVlPzogQ29uc3VtcHRpb25EYXRhKSB7IFxuICAgICAgICBpZiAodGltZXN0YW1wICE9PSB1bmRlZmluZWQpIHsgdGhpcy50aW1lc3RhbXAgPSB0aW1lc3RhbXA7IH1cbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHsgdGhpcy52YWx1ZSA9IHZhbHVlOyB9XG4gICAgfVxuXG59XG5cblxuIl19