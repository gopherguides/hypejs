import { Element, NewElement } from './element';
import { Heading } from './heading';
import { NewLink } from './link';
import { VisitAtom } from './visit_atom';
import { atoms } from './atoms';
import { gotypes } from './gotypes';
import { v4 as uuid } from 'uuid';
export class Toc extends Element {
    constructor() {
        super({
            nodes: [],
            atom: atoms.Ul,
            type: gotypes.UL,
            attributes: {
                class: "hype-toc",
            }
        });
        this.ids = [];
        this.nodes = [];
    }
    perform(doc, gen) {
        VisitAtom(atoms.Headings, doc, (n) => {
            let h = new Heading(n);
            // this.headings.push(h);
            let id = gen ? gen() : newUUID();
            this.ids.push(id);
            let a = NewLink(`#${id}`);
            let li = NewElement(atoms.Li, { class: `hype-toc-lvl-${h.level}` });
            a.nodes = h.nodes;
            li.nodes = [a];
            this.nodes.push(li);
            let nodes = n.nodes;
            let b = NewElement(atoms.A);
            b.attributes = { name: id };
            n.nodes = [b, ...nodes];
        });
    }
}
function newUUID() {
    return `heading-${uuid()}`;
}
