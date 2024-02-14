import { Element } from "./element";
import { v4 as uuidv4 } from 'uuid';
export class Document extends Element {
    constructor(el) {
        super(el);
        this.id = "";
        this.file = "module.md";
        this.root = el.root;
        this.title = el.title;
        this.parser = el.parser;
        this.file = el.file;
        if (this.file === undefined) {
            this.file = "module.md";
        }
        this.id = el.id ? el.id : uuidv4();
        this.nodes = el.nodes;
        // this.nodes = ParseNodes(el.nodes);
    }
    toString() {
        var _a;
        let s = "";
        (_a = this.nodes) === null || _a === void 0 ? void 0 : _a.forEach((n) => {
            if (Array.isArray(n)) {
                n.forEach((n) => {
                    s += n.toString();
                });
            }
            else {
                s += n.toString();
            }
        });
        return s;
    }
    toHtml() {
        var _a;
        let s = "";
        (_a = this.nodes) === null || _a === void 0 ? void 0 : _a.forEach((n) => {
            s += n.toHtml();
        });
        return s;
    }
}
