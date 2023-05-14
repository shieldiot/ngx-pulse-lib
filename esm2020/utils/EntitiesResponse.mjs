import { BaseRestResponse } from './BaseRestResponse';
// EntitiesResponse message is returned for any action returning multiple entities
export class EntitiesResponse extends BaseRestResponse {
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
        // List of entities
        this.list = [];
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50aXRpZXNSZXNwb25zZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1wdWxzZS1saWIvc3JjL3V0aWxzL0VudGl0aWVzUmVzcG9uc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUE7QUFFckQsa0ZBQWtGO0FBQ2xGLE1BQU0sT0FBTyxnQkFBb0IsU0FBUSxnQkFBZ0I7SUFBekQ7O1FBRUksNkJBQTZCO1FBQ3RCLFNBQUksR0FBVyxDQUFDLENBQUM7UUFFeEIsK0JBQStCO1FBQ3hCLFNBQUksR0FBVyxDQUFDLENBQUM7UUFFeEIsd0JBQXdCO1FBQ2pCLFVBQUssR0FBVyxDQUFDLENBQUM7UUFFekIscUNBQXFDO1FBQzlCLFVBQUssR0FBVyxDQUFDLENBQUM7UUFFekIsbUJBQW1CO1FBQ1osU0FBSSxHQUFRLEVBQUUsQ0FBQztJQUUxQixDQUFDO0NBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlUmVzdFJlc3BvbnNlIH0gZnJvbSAnLi9CYXNlUmVzdFJlc3BvbnNlJ1xuXG4vLyBFbnRpdGllc1Jlc3BvbnNlIG1lc3NhZ2UgaXMgcmV0dXJuZWQgZm9yIGFueSBhY3Rpb24gcmV0dXJuaW5nIG11bHRpcGxlIGVudGl0aWVzXG5leHBvcnQgY2xhc3MgRW50aXRpZXNSZXNwb25zZTxUPiBleHRlbmRzIEJhc2VSZXN0UmVzcG9uc2Uge1xuXG4gICAgLy8gQ3VycmVudCBwYWdlIChCdWxrKSBudW1iZXJcbiAgICBwdWJsaWMgcGFnZTogbnVtYmVyID0gMDtcblxuICAgIC8vIFNpemUgb2YgcGFnZSAoaXRlbXMgaW4gYnVsaylcbiAgICBwdWJsaWMgc2l6ZTogbnVtYmVyID0gMDtcblxuICAgIC8vIFRvdGFsIG51bWJlciBvZiBwYWdlc1xuICAgIHB1YmxpYyBwYWdlczogbnVtYmVyID0gMDtcblxuICAgIC8vIFRvdGFsIG51bWJlciBvZiBpdGVtcyBpbiB0aGUgcXVlcnlcbiAgICBwdWJsaWMgdG90YWw6IG51bWJlciA9IDA7XG5cbiAgICAvLyBMaXN0IG9mIGVudGl0aWVzXG4gICAgcHVibGljIGxpc3Q6IFRbXSA9IFtdO1xuXG59Il19