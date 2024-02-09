import { Element } from './element';
import { atoms } from './atoms';
import { gotypes } from './gotypes';
export class Link extends Element {
    constructor(l) {
        super(l);
        this.url = l.url;
    }
}
export function NewLink(url, attrs) {
    let ats = attrs ? attrs : {};
    if ((ats === null || ats === void 0 ? void 0 : ats.href) === undefined) {
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
