import { BaseRestResponse } from './BaseRestResponse';
// EntitiesResponse message is returned for any action returning multiple entities
export class EntityResponse extends BaseRestResponse {
    constructor() {
        super(...arguments);
        // Current page (Bulk) number
        this.page = 0;
        // Size of page (items in bulk)
        this.size = 0;
        // Total number of pages
        this.pages = 0;
        // Total number of items in the query
        this.total = 0;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50aXR5UmVzcG9uc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtcHVsc2UtbGliL3NyYy91dGlscy9FbnRpdHlSZXNwb25zZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQTtBQUVyRCxrRkFBa0Y7QUFDbEYsTUFBTSxPQUFPLGNBQWtCLFNBQVEsZ0JBQWdCO0lBQXZEOztRQUVJLDZCQUE2QjtRQUN0QixTQUFJLEdBQVcsQ0FBQyxDQUFDO1FBRXhCLCtCQUErQjtRQUN4QixTQUFJLEdBQVcsQ0FBQyxDQUFDO1FBRXhCLHdCQUF3QjtRQUNqQixVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBRXpCLHFDQUFxQztRQUM5QixVQUFLLEdBQVcsQ0FBQyxDQUFDO0lBSTdCLENBQUM7Q0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VSZXN0UmVzcG9uc2UgfSBmcm9tICcuL0Jhc2VSZXN0UmVzcG9uc2UnXG5cbi8vIEVudGl0aWVzUmVzcG9uc2UgbWVzc2FnZSBpcyByZXR1cm5lZCBmb3IgYW55IGFjdGlvbiByZXR1cm5pbmcgbXVsdGlwbGUgZW50aXRpZXNcbmV4cG9ydCBjbGFzcyBFbnRpdHlSZXNwb25zZTxUPiBleHRlbmRzIEJhc2VSZXN0UmVzcG9uc2Uge1xuXG4gICAgLy8gQ3VycmVudCBwYWdlIChCdWxrKSBudW1iZXJcbiAgICBwdWJsaWMgcGFnZTogbnVtYmVyID0gMDtcblxuICAgIC8vIFNpemUgb2YgcGFnZSAoaXRlbXMgaW4gYnVsaylcbiAgICBwdWJsaWMgc2l6ZTogbnVtYmVyID0gMDtcblxuICAgIC8vIFRvdGFsIG51bWJlciBvZiBwYWdlc1xuICAgIHB1YmxpYyBwYWdlczogbnVtYmVyID0gMDtcblxuICAgIC8vIFRvdGFsIG51bWJlciBvZiBpdGVtcyBpbiB0aGUgcXVlcnlcbiAgICBwdWJsaWMgdG90YWw6IG51bWJlciA9IDA7XG5cbiAgICAvLyBMaXN0IG9mIGVudGl0aWVzXG4gICAgcHVibGljIGVudGl0eTogVDtcbn1cbiJdfQ==