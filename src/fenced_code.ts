import { Element } from "./element";

export class FencedCode extends Element {
    lang: string;

    constructor(fc: FencedCode) {
        super(fc);

        this.lang = fc.lang;
    }
}