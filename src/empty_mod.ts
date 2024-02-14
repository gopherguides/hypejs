import { Module } from "./module";
import { Document } from "./document"

export function EmptyModule(): Module {
    return new Module({
        id: "",
        doc: new Document({}),
        dir: "",
        filepath: "",
        name: "",
    });
}