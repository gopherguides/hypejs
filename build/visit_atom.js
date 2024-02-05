"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisitAtom = void 0;
function VisitAtom(atom, n, fn) {
    var _a;
    if (n === undefined) {
        return;
    }
    (_a = n.nodes) === null || _a === void 0 ? void 0 : _a.forEach(function (e) {
        VisitAtom(atom, e, fn);
    });
    var atoms = [];
    if (Array.isArray(atom)) {
        atoms = atom;
    }
    else {
        atoms.push(atom);
    }
    atoms.forEach(function (a) {
        if (a === n.atom) {
            fn(n);
        }
    });
    return;
    // func ByAtom[T ~string](nodes Nodes, want ...T) []AtomableNode {
    // 	var res []AtomableNode
    // 	for _, n := range nodes {
    // 		an, ok := n.(AtomableNode)
    // 		if !ok {
    // 			res = append(res, ByAtom(n.Children(), want...)...)
    // 			continue
    // 		}
    // 		for _, w := range want {
    // 			if an.Atom().String() == string(w) {
    // 				res = append(res, an)
    // 				break
    // 			}
    // 		}
    // 		res = append(res, ByAtom(n.Children(), want...)...)
    // 	}
    // 	return res
    // }
}
exports.VisitAtom = VisitAtom;
