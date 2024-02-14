import exp from "constants";
import { Document } from "./document"
import { Module } from "./module"
import { Toc } from "./toc"

describe('module', () => {

    let data = require("./testdata/context.json")

    test("should parse", () => {
        let mod: Module = new Module(data)

        expect(mod).toBeDefined();
        expect(mod.id).toBeDefined();
        expect(mod.name).toEqual("module.md");
        expect(mod.title()).toEqual("Context");

        let doc: Document = mod.doc;
        expect(doc).toBeDefined();
        expect(doc.title).toEqual("Context");

        let toc: Toc = mod.toc;
        expect(toc).toBeDefined();
        expect(toc.ids.length).toEqual(42);
        expect(toc.nodes.length).toEqual(42);
    })
})