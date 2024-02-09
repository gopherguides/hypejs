import { gotypes } from './gotypes';
export class Text {
    constructor(t) {
        this.atom = "text";
        this.nodes = [];
        this.type = t.type;
        this.text = t.text;
    }
    toString() {
        return this.text;
    }
    toHtml() {
        return this.text;
    }
}
export function NewText(text) {
    return new Text({
        type: gotypes.Text,
        text: text,
    });
}
