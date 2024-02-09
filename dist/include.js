import { Element } from './element';
export class Include extends Element {
    constructor(el) {
        super(el);
        this.dir = el.dir;
    }
}
