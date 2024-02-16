import { Document } from "./document";
export declare class Parser {
    handlers: any;
    constructor();
    parse(data: any): Document;
    parseError(data: any): any;
    private parseNodes;
}
