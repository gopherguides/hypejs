import { Element } from './element';
export declare class Link extends Element {
    url: string;
    constructor(l: any);
}
export declare function NewLink(url: string, attrs?: any): Link;
