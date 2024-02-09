import { Element } from './element';
export class Figure extends Element {
    constructor(f) {
        super(f);
        if (f.style === "") {
            f.style = "listing";
        }
        if (f.pos < 1) {
            f.pos = 1;
        }
        f.section_id ? f.section_id : 1;
        this.pos = f.pos;
        this.style = f.style;
        this.section_id = f.section_id;
    }
}
