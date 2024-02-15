import type { Node } from "./node";
export declare class Element implements Node {
    atom: string;
    type: string;
    filename?: string;
    nodes: Node[];
    attributes: {};
    constructor(el: any);
    toString(): string;
    toHtml(): string;
}
export declare function NewElement(atom: string, attrs?: any): Element;
