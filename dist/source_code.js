import { Element } from "./element";
export class SourceCode extends Element {
    constructor(sc) {
        super(sc);
        this.lang = sc.lang;
    }
}
