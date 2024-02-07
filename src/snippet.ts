import { Element } from "./element";

export class Snippet extends Element {
    content: string;
    lang: string;
    name: string;
    start?: number;
    end?: number;

    constructor(s: any) {
        super(s);

        this.content = s.content;
        this.lang = s.lang;
        this.name = s.name;
        this.start = s.start;
        this.end = s.end;
    }
}