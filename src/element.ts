import type { Node } from "./node";
import { gotypes } from "./gotypes";

export class Element implements Node {
    atom: string
    type: string;
    file?: string;
    nodes: Node[];
    attributes: {} = {}

    constructor(el: any) {
        this.atom = el.atom;
        this.type = el.type;
        this.file = el.file;
        this.nodes = el.nodes ? el.nodes : [];
        this.attributes = el.attributes ? el.attributes : {};

        if (this.attributes === undefined) {
            this.attributes = {}
        }
    }

    toString(): string {
        let s: string = ""

        this.nodes?.forEach((n: any) => {
            if (n === undefined)
                return;
            s += n.toString();
        });

        if (this.atom === undefined)
            return s;

        let tag: string = `<${this.atom}`

        let ats: {} = this.attributes ? this.attributes : {}
        for (let [key, value] of Object.entries(ats)) {
            tag += ` ${key}="${value}"`
        }
        tag += `>${s}</${this.atom}>`

        return tag;
    }

    toHtml(): string {
        return this.toString() + "\n";
    }
}

export function NewElement(atom: string, attrs?: any): Element {
    return new Element({
        atom: atom,
        nodes: [],
        type: gotypes.Element,
        attributes: attrs,
    });
}