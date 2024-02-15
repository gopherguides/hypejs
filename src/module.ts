
import { Document } from "./document"
import { Toc } from "./toc"
import { v4 as uuid } from "uuid"
import path from "path-browserify"
import { Parser } from "./parser"

export class Module {
    id: string = "";
    file: string = "";

    dir: string = ""; // calculated from file
    name: string = ""; // calculated from file

    parser: Parser;
    doc: Document;
    toc: Toc;

    constructor(mod: any, parser?: Parser) {
        this.id = uuid();
        if (mod.id) {
            this.id = mod.id;
        }

        if (mod.file === undefined) {
            mod.file = "module.md"
        }

        if (mod.root === undefined) {
            mod.root = "";
        }


        this.file = path.join(mod.root, mod.file);
        this.dir = mod.root
        this.name = path.basename(mod.file)

        this.parser = parser ? parser : new Parser();

        this.doc = this.parser.parse(mod.doc ? mod.doc : mod);
        this.toc = new Toc();
        this.toc.perform(this.doc);
    }

    title(): string {
        if (this.doc === undefined) {
            return this.name;
        }
        return this.doc.title;
    }

    toString(): string {
        if (this.doc === undefined) {
            return "";
        }
        return this.doc.toString();
    }

}
