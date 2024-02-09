import { Element } from "./element";
export declare class Document extends Element {
    id: string;
    root: string;
    title: string;
    file: string;
    section_id?: number;
    snippets?: {};
    parser?: {
        root: string;
        snippets?: {};
        section?: number;
    };
    constructor(el: any);
    toString(): string;
    toHtml(): string;
}
