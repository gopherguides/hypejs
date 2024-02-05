export class Text {
    type: string;
    text: string;

    constructor(t: Text) {
        this.type = t.type;
        this.text = t.text;
    }

    toString(): string {
        return this.text;
    }
}