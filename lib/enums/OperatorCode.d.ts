export declare enum OperatorCode {
    UNDEFINED = 0,
    EQ = 1,
    NEQ = 2,
    GT = 3,
    GTE = 4,
    LT = 5,
    LTE = 6,
    IN = 7,
    NOTIN = 8,
    RANGE = 9,
    LIKE = 10
}
export declare function GetOperatorCodes(): Map<OperatorCode, string>;
