export declare class DataIngestion {
    inputURI: string;
    archiveURI: string;
    inputFilesExt: string[];
    subNets: string[];
    usageTimeWindowSec: number;
    sessionTimeWindowSec: number;
    schedule: string;
    constructor(inputURI?: string, archiveURI?: string, inputFilesExt?: string[], subNets?: string[], usageTimeWindowSec?: number, sessionTimeWindowSec?: number, schedule?: string);
}
