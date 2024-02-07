import { Element } from "./element";
import type { Node } from "./node";
import { ParseNodes } from "./parse_nodes";
import { ToHex } from "./hex";



export class Document extends Element {
    id: string = "";
    root: string;
    title: string;
    file: string = "module.md"

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
        this.file = el.file;
        if (this.file === undefined) {
            this.file = "module.md"
        }

        this.id = el.id ? el.id : ToHex(this.root + this.file);
        this.nodes = ParseNodes(el.nodes);
    }

    toString(): string {
        let s: string = "";
        this.nodes?.forEach((n: any) => {
            s += n.toString();
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