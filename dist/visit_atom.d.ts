import type { Node } from './node';
import type { VisitNode } from './visit_node';
export declare function VisitAtom(atom: string | string[], n: Node, fn: VisitNode): void;
