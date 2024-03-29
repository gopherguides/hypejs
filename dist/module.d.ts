import { Document } from "./document";
import { Toc } from "./toc";
import { Parser } from "./parser";
export declare class Module {
    id: string;
    filepath: string;
    dir: string;
    name: string;
    parser: Parser;
    doc: Document;
    toc: Toc;
    constructor(doc: any, parser?: Parser);
    title(): string;
    toString(): string;
}
