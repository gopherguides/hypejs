import { Element } from "./element";
export class CmdResult extends Element {
    constructor(cr) {
        super(cr);
        this.result = cr.result;
    }
}
