import { Parser } from './parser';
export declare class PostParseError {
    error: any;
    filename: string;
    orig_error: any;
    postparser: string;
    root: string;
    type: string;
    constructor(data: any, parser?: Parser);
}
