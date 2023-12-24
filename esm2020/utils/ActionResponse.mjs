import { BaseRestResponse } from './BaseRestResponse';
// ActionResponse message is returned for any action on entity with no return data (e.d. delete)
export class ActionResponse extends BaseRestResponse {
    constructor() {
        super(...arguments);
        // Entity key
        this.key = '';
        // Additional data
        this.data = '';
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWN0aW9uUmVzcG9uc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtcHVsc2UtbGliL3NyYy91dGlscy9BY3Rpb25SZXNwb25zZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQTtBQUVyRCxnR0FBZ0c7QUFDaEcsTUFBTSxPQUFPLGNBQWUsU0FBUSxnQkFBZ0I7SUFBcEQ7O1FBRUksYUFBYTtRQUNOLFFBQUcsR0FBVyxFQUFFLENBQUM7UUFFeEIsa0JBQWtCO1FBQ1gsU0FBSSxHQUFXLEVBQUUsQ0FBQztJQUM3QixDQUFDO0NBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlUmVzdFJlc3BvbnNlIH0gZnJvbSAnLi9CYXNlUmVzdFJlc3BvbnNlJ1xuXG4vLyBBY3Rpb25SZXNwb25zZSBtZXNzYWdlIGlzIHJldHVybmVkIGZvciBhbnkgYWN0aW9uIG9uIGVudGl0eSB3aXRoIG5vIHJldHVybiBkYXRhIChlLmQuIGRlbGV0ZSlcbmV4cG9ydCBjbGFzcyBBY3Rpb25SZXNwb25zZSBleHRlbmRzIEJhc2VSZXN0UmVzcG9uc2Uge1xuXG4gICAgLy8gRW50aXR5IGtleVxuICAgIHB1YmxpYyBrZXk6IHN0cmluZyA9ICcnO1xuXG4gICAgLy8gQWRkaXRpb25hbCBkYXRhXG4gICAgcHVibGljIGRhdGE6IHN0cmluZyA9ICcnO1xufVxuXG5cbiJdfQ==