import { Element } from "./element";
export class Snippet extends Element {
    constructor(s) {
        super(s);
        this.content = s.content;
        this.lang = s.lang;
        this.name = s.name;
        this.start = s.start;
        this.end = s.end;
    }
    toString() {
        return this.content;
    }
}
