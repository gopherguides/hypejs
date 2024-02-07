import { Element } from "./element";

export class FencedCode extends Element {
    lang: string;

    constructor(fc: any) {
        super(fc);

        this.lang = fc.lang;
    }
}