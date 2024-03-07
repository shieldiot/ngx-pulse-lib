export declare enum DataSourceCode {
    UNDEFINED = 0,
    EVENT = 1,
    USAGE = 2,
    SESSION = 3
}
export declare function GetDataSourceCodes(): Map<DataSourceCode, string>;
