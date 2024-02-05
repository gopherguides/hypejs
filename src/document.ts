import { Element } from "./element";
import { Node } from "./node";
import { ParseNodes } from "./parse_nodes";
import { ToHex } from "./hex";


var path = require('path');

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

    nodes?: Node[];

    constructor(el: any) {
        super(el);
        this.root = el.root;
        this.title = el.title;
        this.parser = el.parser;
        this.file = el.file;
        if (this.file === undefined) {
            this.file = "module.md"
        }

        this.id = ToHex(path.join(this.root, this.file));
        this.nodes = ParseNodes(el.nodes);
    }

    toString(): string {
        let s: string = "";
        this.nodes?.forEach((n: any) => {
            s += n.toString();
        });
        return s;
    }

}