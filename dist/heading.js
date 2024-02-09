import { Element } from "./element";
export class Heading extends Element {
    constructor(n) {
        super(n);
        this.level = 1;
        this.text = n.text;
        this.level = n.level;
        if (this.level < 1)
            this.level = 1;
    }
}
