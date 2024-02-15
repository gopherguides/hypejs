import { Element } from "./element";
import { v4 as uuidv4 } from 'uuid';

export class Document extends Element {
    id: string = "";
    root: string;
    title: string;
    filename: string = "module.md"

    section_id?: number;
    snippets?: {};

    parser?: {
        root: string;
        snippets?: {};
        section?: number;
    };

    constructor(el: any) {
        super(el);
        this.root = el.root;
        this.title = el.title;
        this.parser = el.parser;
        this.filename = el.file;

        if (this.filename === undefined) {
            this.filename = "module.md"
        }

        this.id = el.id ? el.id : uuidv4();
        this.nodes = el.nodes;
    }

    toString(): string {
        let s: string = "";
        this.nodes?.forEach((n: any) => {
            if (Array.isArray(n)) {
                n.forEach((n: any) => {
                    s += n.toString();
                });
            } else {
                s += n.toString();
            }
        });
        return s;
    }

    toHtml(): string {
        let s: string = "";
        this.nodes?.forEach((n: any) => {
            s += n.toHtml();
        });
        return s;
    }
}