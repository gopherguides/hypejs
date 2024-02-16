import { Parser } from "./parser";
export declare class ExecuteError {
    filename: string;
    root: string;
    err: any;
    constructor(data: any, parser?: Parser);
}
