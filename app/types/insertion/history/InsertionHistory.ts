import type { InsertionHistoryStatus } from "./InsertionHistoryStatus";

export interface InsertionHistory {
    id: number;
    creationDate: string;
    endDate: string;
    status: InsertionHistoryStatus;
    numberObjects: number;
}
