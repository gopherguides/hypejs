import type { Node } from "./node";

export class Element implements Node {
    atom: string
    type: string;
    file?: string;
    nodes?: Node[];
    attributes?: {} = {}

    constructor(el: Element) {
        this.atom = el.atom;
        this.type = el.type;
        this.file = el.file;
        this.nodes = el.nodes;
        this.attributes = el.attributes;

        if (this.attributes === undefined) {
            this.attributes = {}
        }
    }

    toString(): string {
        let s: string = ""

        this.nodes?.forEach((n: any) => {
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

        // s = `< ${ this.atom } ${ this.attributes?.toString() }> ${ s } </${this.atom}>`

        return tag;
    }
}