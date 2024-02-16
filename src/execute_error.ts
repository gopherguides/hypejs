import { ParseError } from "./parse_error";
import { Parser } from "./parser";

export class ExecuteError {
    filename: string;
    root: string;
    err: any;

    constructor(data: any, parser?: Parser) {
        this.filename = data.filename;
        this.root = data.root;

        parser = parser || new Parser();
        this.err = parser.parseError(data.err);
    }
}