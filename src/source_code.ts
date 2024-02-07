import { Element } from "./element";

export class SourceCode extends Element {
    lang: string;

    constructor(sc: any) {
        super(sc);

        this.lang = sc.lang;
    }
}