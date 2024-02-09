import type { Document } from './document';
import type { Node } from './node';
import { Element } from './element';
export declare class Toc extends Element {
    ids: string[];
    nodes: Node[];
    constructor();
    perform(doc: Document, gen?: () => string): void;
}
