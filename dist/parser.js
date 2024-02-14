import { Document } from "./document";
import { Cmd } from "./cmd";
import { CmdResult } from "./cmd_result";
import { Element } from "./element";
import { FencedCode } from "./fenced_code";
import { FigCaption } from "./fig_caption";
import { Figure } from "./figure";
import { Heading } from "./heading";
import { Image } from "./image";
import { Include } from "./include";
import { InlineCode } from "./inline_code";
import { LI } from "./li";
import { Link } from "./link";
import { OL } from "./ol";
import { Page } from "./page";
import { Ref } from "./ref";
import { Snippet } from "./snippet";
import { SourceCode } from "./source_code";
import { Table } from "./table";
import { Text } from "./text";
import { UL } from "./ul";
import { gotypes } from "./gotypes";
export class Parser {
    constructor() {
        this.handlers = {};
        this.handlers[gotypes.Body] = newElement;
        this.handlers[gotypes.Element] = newElement;
        this.handlers[gotypes.Paragraph] = newElement;
        this.handlers[gotypes.TD] = newElement;
        this.handlers[gotypes.TH] = newElement;
        this.handlers[gotypes.THead] = newElement;
        this.handlers[gotypes.TR] = newElement;
        this.handlers[gotypes.CmdResult] = (n) => new CmdResult(n);
        this.handlers[gotypes.Cmd] = (n) => new Cmd(n);
        this.handlers[gotypes.FencedCode] = (n) => new FencedCode(n);
        this.handlers[gotypes.Figcaption] = (n) => new FigCaption(n);
        this.handlers[gotypes.Figure] = (n) => new Figure(n);
        this.handlers[gotypes.Heading] = (n) => new Heading(n);
        this.handlers[gotypes.Image] = (n) => new Image(n);
        this.handlers[gotypes.Include] = (n) => new Include(n);
        this.handlers[gotypes.InlineCode] = (n) => new InlineCode(n);
        this.handlers[gotypes.LI] = (n) => new LI(n);
        this.handlers[gotypes.Link] = (n) => new Link(n);
        this.handlers[gotypes.OL] = (n) => new OL(n);
        this.handlers[gotypes.Page] = (n) => new Page(n);
        this.handlers[gotypes.Ref] = (n) => new Ref(n);
        this.handlers[gotypes.Snippet] = (n) => new Snippet(n);
        this.handlers[gotypes.SourceCode] = (n) => new SourceCode(n);
        this.handlers[gotypes.Table] = (n) => new Table(n);
        this.handlers[gotypes.Text] = (n) => new Text(n);
        this.handlers[gotypes.UL] = (n) => new UL(n);
    }
    parse(data) {
        let doc;
        data = structuredClone(data);
        data.nodes = this.parseNodes(data.nodes);
        return new Document(data);
    }
    parseNodes(nodes = []) {
        let ret = [];
        nodes.forEach((n) => {
            if (n == null) {
                return;
            }
            if (Array.isArray(n)) {
                let nodes = this.parseNodes(n);
                ret.push(...nodes);
            }
            else {
                n.nodes = this.parseNodes(n.nodes);
                let fn = this.handlers[n.type];
                if (fn === undefined) {
                    console.warn("unknown node type: " + n.type);
                    fn = newElement;
                }
                ret.push(fn(n));
            }
        });
        return ret;
    }
}
function newElement(n) {
    return new Element(n);
}
