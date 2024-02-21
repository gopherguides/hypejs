import type { Node } from "./node";
import { Document } from "./document";
type NodeParseFn = (n: any) => Node[];
export declare class Parser {
    handlers: {
        [key: string]: NodeParseFn;
    };
    constructor();
    parse(data: any): Document;
    parseError(data: any): any;
    private parseNodes;
}
export {};
