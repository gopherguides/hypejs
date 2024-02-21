import { Parser } from "./parser";
export declare class ParseError {
    filename: string;
    root: string;
    error: any;
    constructor(data: any, parser?: Parser);
}
