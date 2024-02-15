import { gotypes } from "./gotypes";
export class Element {
    constructor(el) {
        this.attributes = {};
        this.atom = el.atom;
        this.type = el.type;
        this.filename = el.file;
        this.nodes = el.nodes ? el.nodes : [];
        this.attributes = el.attributes ? el.attributes : {};
        if (this.attributes === undefined) {
            this.attributes = {};
        }
    }
    toString() {
        var _a;
        let s = "";
        (_a = this.nodes) === null || _a === void 0 ? void 0 : _a.forEach((n) => {
            if (n === undefined)
                return;
            if (Array.isArray(n)) {
                n.forEach((n) => {
                    s += n.toString();
                });
            }
            else {
                s += n.toString();
            }
        });
        if (this.atom === undefined)
            return s;
        let tag = `<${this.atom}`;
        let ats = this.attributes ? this.attributes : {};
        for (let [key, value] of Object.entries(ats)) {
            tag += ` ${key}="${value}"`;
        }
        tag += `>${s}</${this.atom}>`;
        return tag;
    }
    toHtml() {
        return this.toString() + "\n";
    }
}
export function NewElement(atom, attrs) {
    return new Element({
        atom: atom,
        nodes: [],
        type: gotypes.Element,
        attributes: attrs,
    });
}
