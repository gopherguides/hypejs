export function VisitAtom(atom, n, fn) {
    var _a;
    if (n === undefined) {
        return;
    }
    (_a = n.nodes) === null || _a === void 0 ? void 0 : _a.forEach((e) => {
        VisitAtom(atom, e, fn);
    });
    let atoms = [];
    if (Array.isArray(atom)) {
        atoms = atom;
    }
    else {
        atoms.push(atom);
    }
    atoms.forEach((a) => {
        if (a === n.atom) {
            fn(n);
        }
    });
    return;
}
