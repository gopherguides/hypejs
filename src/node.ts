export interface Node {
    type: string;
    atom?: string
    file?: string;
    nodes?: Node[];
    toString(): string;
}
