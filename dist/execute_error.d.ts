import { Parser } from "./parser";
export declare class ExecuteError {
    filename: string;
    root: string;
    error: any;
    constructor(data: any, parser?: Parser);
}
