import { Element } from "./element";
import { atoms } from "./atoms";
import { gotypes } from "./gotypes";

export class UL extends Element {
    constructor(ul: any) {
        super(ul);
    }
}

export function NewUL(attrs?: any): UL {
    return new UL({
        atom: atoms.Ul,
        type: gotypes.UL,
        nodes: [],
        attributes: attrs,
    });
}