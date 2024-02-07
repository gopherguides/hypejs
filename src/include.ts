import { Element } from './element';

export class Include extends Element {
    dir?: string;

    constructor(el: any) {
        super(el);

        this.dir = el.dir;
    }
}