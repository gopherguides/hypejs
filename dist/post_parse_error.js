import { Parser } from './parser';
export class PostParseError {
    constructor(data, parser) {
        this.filename = data.filename;
        this.postparser = data.postparser;
        this.root = data.root;
        this.type = data.type;
        parser = parser || new Parser();
        this.error = parser.parseError(data.error);
        this.orig_error = parser.parseError(data.orig_error);
    }
}
