import { Element } from './element';

export class Figure extends Element {
    pos: number;
    style?: string;
    section_id?: number;

    constructor(f: Figure) {
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