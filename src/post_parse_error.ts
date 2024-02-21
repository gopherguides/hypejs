import { Parser } from './parser';

export class PostParseError {
    error: any;
    filename: string;
    orig_error: any;
    postparser: string;
    root: string;
    type: string;

    constructor(data: any, parser?: Parser) {
        this.filename = data.filename;
        this.postparser = data.postparser;
        this.root = data.root;
        this.type = data.type;

        parser = parser || new Parser();

        this.error = parser.parseError(data.error);
        this.orig_error = parser.parseError(data.orig_error);
    }
}