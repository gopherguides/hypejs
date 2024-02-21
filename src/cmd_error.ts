import { ParseError } from "./parse_error";
import { Parser } from "./parser";

export class CmdError {
    args: string[];
    env: string[];
    error: any;
    exit: number;
    filename: string;
    output: string;
    root: string;

    constructor(data: any, parser?: Parser) {
        this.args = data.args;
        this.env = data.env;
        this.exit = data.exit;
        this.filename = data.filename;
        this.output = data.output;
        this.root = data.root;

        parser = parser || new Parser();
        this.error = parser.parseError(data.err);
    }
}
// args: [ 'ech', 'Hello World' ],
// env: [
// ],
// err: 'exec: "ech": executable file not found in $PATH',
// exit: -1,
// filename: 'usage.md',
// output: '',
// root: '/Users/markbates/Library/CloudStorage/Dropbox/dev/guides/hypeviewer',
// type: 'hype.CmdError'