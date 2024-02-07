import { Element } from './element';
import { atoms } from './atoms';
import { gotypes } from './gotypes';

export class Link extends Element {
    url: string;

    constructor(l: any) {
        super(l);

        this.url = l.url;
    }
}

export function NewLink(url: string, attrs?: any): Link {
    let ats = attrs ? attrs : {};
    if (ats?.href === undefined) {
        ats.href = url;
    }

    return new Link({
        atom: atoms.A,
        attributes: ats,
        nodes: [],
        type: gotypes.Link,
        url: url,
    });
}