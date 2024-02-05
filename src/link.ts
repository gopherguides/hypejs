import { Element } from './element';

export class Link extends Element {
    url: string;

    constructor(l: Link) {
        super(l);

        this.url = l.url;
    }
}