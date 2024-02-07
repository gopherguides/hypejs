import { Element } from "./element";

export class Heading extends Element {
    text: string;
    level: number = 1;

    constructor(n: any) {
        super(n);
        this.text = n.text;
        this.level = n.level;
        if (this.level < 1) this.level = 1;
    }
}