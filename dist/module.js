import { Toc } from "./toc";
import { v4 as uuid } from "uuid";
import path from "path-browserify";
import { Parser } from "./parser";
export class Module {
    constructor(mod, parser) {
        this.id = "";
        this.dir = "";
        this.filepath = "";
        this.name = "";
        this.id = uuid();
        if (mod.id) {
            this.id = mod.id;
        }
        if (mod.file === undefined) {
            mod.file = "module.md";
        }
        if (mod.root === undefined) {
            mod.root = "";
        }
        this.filepath = path.join(mod.root, mod.file);
        this.dir = mod.root;
        this.name = mod.file ? mod.file : "module.md";
        this.parser = parser ? parser : new Parser();
        this.doc = this.parser.parse(mod.doc ? mod.doc : mod);
        this.toc = new Toc();
        this.toc.perform(this.doc);
    }
    title() {
        if (this.doc === undefined) {
            return this.name;
        }
        return this.doc.title;
    }
    toString() {
        if (this.doc === undefined) {
            return "";
        }
        return this.doc.toString();
    }
}
