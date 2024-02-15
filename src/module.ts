
import { Document } from "./document"
import { Toc } from "./toc"
import { v4 as uuid } from "uuid"
import path from "path-browserify"
import { Parser } from "./parser"

export class Module {
    id: string = "";
    filepath: string = "";

    dir: string = ""; // calculated from file
    name: string = ""; // calculated from file

    parser: Parser = new Parser();
    doc: Document;
    toc: Toc;

    constructor(doc: any, parser?: Parser) {
        if (doc.doc !== undefined) {
            doc = doc.doc;
        }


        if (doc.id === undefined) {
            doc.id = uuid();
        }

        this.id = doc.id;

        if (doc.root === undefined) {
            doc.root = "";
        }

        if (doc.filename === undefined) {
            doc.filename = "module.md";
        }

        this.filepath = path.join(doc.root, doc.filename);
        this.dir = doc.root;
        this.name = doc.filename;

        this.doc = this.parser.parse(doc)
        this.toc = new Toc();
        this.toc.perform(this.doc);


        // this.file = path.join(doc.root, doc.file);
        // this.dir = doc.root
        // this.name = path.basename(doc.file)

        // this.parser = parser ? parser : new Parser();

        // this.doc = this.parser.parse(doc.doc ? doc.doc : doc);
        // this.toc = new Toc();
        // this.toc.perform(this.doc);
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
