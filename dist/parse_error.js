import { Parser } from "./parser";
export class ParseError {
    constructor(data, parser) {
        this.filename = data.filename;
        this.root = data.root;
        parser = parser || new Parser();
        this.err = parser.parseError(data.err);
    }
}
