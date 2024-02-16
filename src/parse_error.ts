import { gotypes } from "./gotypes";
import { ExecuteError } from "./execute_error";
import { CmdError } from "./cmd_error";
import { Parser } from "./parser";

export class ParseError {
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