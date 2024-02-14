import type { Node } from './node';
import type { VisitNode } from './visit_node';

export function VisitAtom(atom: string | string[], n: Node, fn: VisitNode) {
    if (n === undefined) {
        return;
    }

    n.nodes?.forEach((e) => {
        VisitAtom(atom, e, fn);
    });

    let atoms: string[] = []

    if (Array.isArray(atom)) {
        atoms = atom;
    } else {
        atoms.push(atom);
    }

    atoms.forEach((a: string) => {
        if (a === n.atom) {
            fn(n);
        }
    });

    return
}