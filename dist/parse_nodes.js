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
export function ParseNodes(nodes = []) {
    let ret = [];
    nodes.forEach((n) => {
        if (n == null) {
            return;
        }
        n.nodes = ParseNodes(n.nodes);
        switch (n.type) {
            case gotypes.Body:
            case gotypes.Element:
            case gotypes.Paragraph:
            case gotypes.TD:
            case gotypes.TH:
            case gotypes.THead:
            case gotypes.TR:
                ret.push(new Element(n));
                break;
            case gotypes.Page:
                ret.push(new Page(n));
                break;
            case gotypes.Text:
                ret.push(new Text(n));
                break;
            case gotypes.Heading:
                ret.push(new Heading(n));
                break;
            case gotypes.InlineCode:
                ret.push(new InlineCode(n));
                break;
            case gotypes.Include:
                ret.push(new Include(n));
                break;
            case gotypes.Link:
                ret.push(new Link(n));
                break;
            case gotypes.Figure:
                ret.push(new Figure(n));
                break;
            case gotypes.Table:
                ret.push(new Table(n));
                break;
            case gotypes.Ref:
                ret.push(new Ref(n));
                break;
            case gotypes.Cmd:
                ret.push(new Cmd(n));
                break;
            case gotypes.CmdResult:
                ret.push(new CmdResult(n));
                break;
            case gotypes.Snippet:
                ret.push(new Snippet(n));
                break;
            case gotypes.FencedCode:
                ret.push(new FencedCode(n));
                break;
            case gotypes.SourceCode:
                ret.push(new SourceCode(n));
                break;
            case gotypes.OL:
                ret.push(new OL(n));
                break;
            case gotypes.UL:
                ret.push(new UL(n));
                break;
            case gotypes.LI:
                ret.push(new LI(n));
                break;
            case gotypes.Image:
                ret.push(new Image(n));
                break;
            case gotypes.Figcaption:
            case "*hype.FigCaption":
                ret.push(new FigCaption(n));
                break;
            default:
                if (Array.isArray(n)) {
                    nodes = ParseNodes(n);
                    ret.push(...nodes);
                    break;
                }
                console.log("unknown node type", n.type, n);
                throw new Error("Unknown node type: " + n.type);
                break;
        }
    });
    return ret;
}
