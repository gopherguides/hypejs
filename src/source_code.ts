import { Element } from "./element";

export class SourceCode extends Element {
    lang: string;

    constructor(sc: SourceCode) {
        super(sc);

        this.lang = sc.lang;
    }
}