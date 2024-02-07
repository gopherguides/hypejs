import type { Document } from './document';
import type { Node } from './node';
import { Element, NewElement } from './element';
import { Heading } from './heading';
import { Link, NewLink } from './link';
import { VisitAtom } from './visit_atom';
import { atoms } from './atoms';
import { gotypes } from './gotypes';
import { v4 as uuid } from 'uuid';

export class Toc extends Element {
    ids: string[] = [];
    nodes: Node[] = [];

    constructor() {
        super({
            nodes: [],
            atom: atoms.Ul,
            type: gotypes.UL,
            attributes: {
                class: "hype-toc",
            }
        })
    }

    perform(doc: Document, gen?: () => string) {
        VisitAtom(atoms.Headings, doc, (n) => {
            let h: Heading = new Heading(n);
            // this.headings.push(h);

            let id: string = gen ? gen() : newUUID();
            this.ids.push(id);

            let a: Link = NewLink(`#${id}`);

            let li: Element = NewElement(atoms.Li, { class: `hype-toc-lvl-${h.level}` });
            a.nodes = h.nodes;
            li.nodes = [a];
            this.nodes.push(li);

            let nodes: Node[] = n.nodes;
            let b: Element = NewElement(atoms.A);
            b.attributes = { name: id };
            n.nodes = [b, ...nodes];
        });
    }
}

function newUUID(): string {
    return `heading-${uuid()}`
}