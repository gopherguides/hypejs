import exp from 'constants';
import type { Node } from './node';
import { gotypes } from './gotypes';
export class Text {
    type: string;
    text: string;
    atom: string = "text";
    nodes: Node[] = [];

    constructor(t: any) {
        this.type = t.type;
        this.text = t.text;
    }

    toString(): string {
        return this.text;
    }

    toHtml(): string {
        return this.text;
    }
}

export function NewText(text: string): Text {
    return new Text({
        type: gotypes.Text,
        text: text,
    });
}