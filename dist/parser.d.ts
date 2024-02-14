import { Document } from "./document";
export declare class Parser {
    handlers: any;
    constructor();
    parse(data: any): Document;
    private parseNodes;
}
