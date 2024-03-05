export declare enum HttpMethodCode {
    UNDEFINED = 0,
    GET = 1,
    POST = 2,
    PUT = 3,
    PATCH = 4,
    DELETE = 5
}
export declare function GetHttpMethodCodes(): Map<HttpMethodCode, string>;
