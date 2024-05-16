export declare enum PermissionCode {
    UNDEFINED = 0,
    READ = 1,
    CREATE = 2,
    UPDATE = 4,
    DELETE = 8,
    ACTION = 16
}
export declare function GetPermissionCodes(): Map<PermissionCode, string>;
