import { Element } from "./element";
export declare class Snippet extends Element {
    content: string;
    lang: string;
    name: string;
    start?: number;
    end?: number;
    constructor(s: any);
    toString(): string;
}
