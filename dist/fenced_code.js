import { Element } from "./element";
export class FencedCode extends Element {
    constructor(fc) {
        super(fc);
        this.lang = fc.lang;
    }
}
