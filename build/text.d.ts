import type { Node } from './node';
export declare class Text {
    type: string;
    text: string;
    atom: string;
    nodes: Node[];
    constructor(t: any);
    toString(): string;
    toHtml(): string;
}
export declare function NewText(text: string): Text;
