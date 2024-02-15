export interface Node {
    atom: string
    nodes: Node[];
    type: string;
    filename?: string;
    toString(): string;
    toHtml(): string;
}

export function NodesToString(nodes: Node[]): string {
    let s: string = ""
    nodes.forEach((n: Node) => {
        s += n.toString();
    });
    return s;
}

export function NodesToHtml(nodes: Node[]): string {
    let s: string = ""
    nodes.forEach((n: Node) => {
        s += n.toHtml()
    });
    return s;
}