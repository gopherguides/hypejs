import { Parser } from "./parser";
export class CmdError {
    constructor(data, parser) {
        this.args = data.args;
        this.env = data.env;
        this.exit = data.exit;
        this.filename = data.filename;
        this.output = data.output;
        this.root = data.root;
        parser = parser || new Parser();
        this.err = parser.parseError(data.err);
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
