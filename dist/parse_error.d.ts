import { Parser } from "./parser";
export declare class ParseError {
    filename: string;
    root: string;
    err: any;
    constructor(data: any, parser?: Parser);
}
