export interface Node {
    atom: string;
    nodes: Node[];
    type: string;
    file?: string;
    toString(): string;
    toHtml(): string;
}
export declare function NodesToString(nodes: Node[]): string;
export declare function NodesToHtml(nodes: Node[]): string;
