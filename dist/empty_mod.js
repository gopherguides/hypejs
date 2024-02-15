import { Module } from "./module";
import { Document } from "./document";
export function EmptyModule() {
    let mod = new Module({
        id: "",
        doc: new Document({}),
        dir: "",
        filepath: "empty.md",
        name: "empty.md",
    });
    mod.doc.title = "Empty Module";
    mod.id = "";
    mod.doc.id = "";
    mod.dir = "";
    mod.filepath = "empty.md";
    mod.name = "empty.md";
    return mod;
}
