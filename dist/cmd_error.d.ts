import { Parser } from "./parser";
export declare class CmdError {
    args: string[];
    env: string[];
    err: any;
    exit: number;
    filename: string;
    output: string;
    root: string;
    constructor(data: any, parser?: Parser);
}
