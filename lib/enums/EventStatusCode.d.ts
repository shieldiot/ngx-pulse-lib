export declare enum EventStatusCode {
    UNDEFINED = 0,
    NEW = 1,
    OPEN = 2,
    CLOSED_TRUE = 3,
    CLOSED_FALSE = 4
}
export declare function GetEventStatusCodes(): Map<EventStatusCode, string>;
