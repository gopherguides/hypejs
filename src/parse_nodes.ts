import { Cmd } from "./cmd";
import { Element } from "./element";
import { FigCaption } from "./fig_caption";
import { Figure } from "./figure";
import { Heading } from "./heading";
import { Include } from "./include";
import { InlineCode } from "./inline_code";
import { Link } from "./link";
import { Node } from "./node";
import { Page } from "./page";
import { Ref } from "./ref";
import { UL } from "./ul";
import { LI } from "./li";
import { OL } from "./ol";
import { Snippet } from "./snippet";
import { Table } from "./table";
import { Text } from "./text";
import { FencedCode } from "./fenced_code";
import { CmdResult } from "./cmd_result";
import { SourceCode } from "./source_code";
import { Image } from "./image";

export function ParseNodes(nodes: Node[] = []): Node[] {
    let ret: Node[] = [];

    nodes.forEach((n: any) => {
        if (n == null) {
            return
        }

        n.nodes = ParseNodes(n.nodes);
        switch (n.type) {
            case "*hype.Body":
            case "*hype.Element":
            case "*hype.Paragraph":
            case "*hype.TD":
            case "*hype.TH":
            case "*hype.THead":
            case "*hype.TR":
                ret.push(new Element(n))
                break;
            case "*hype.Page":
                ret.push(new Page(n))
                break;
            case "hype.Text":
                ret.push(new Text(n))
                break;
            case "hype.Heading":
                ret.push(new Heading(n))
                break;
            case "*hype.InlineCode":
                ret.push(new InlineCode(n))
                break;
            case "*hype.Include":
                ret.push(new Include(n))
                break;
            case "*hype.Link":
                ret.push(new Link(n))
                break;
            case "*hype.Figure":
                ret.push(new Figure(n))
                break;
            case "*hype.Table":
                ret.push(new Table(n))
                break;
            case "*hype.Ref":
                ret.push(new Ref(n))
                break;
            case "*hype.Cmd":
                ret.push(new Cmd(n))
                break;
            case "*hype.CmdResult":
                ret.push(new CmdResult(n))
                break;
            case "hype.Snippet":
                ret.push(new Snippet(n))
                break;
            case "*hype.FencedCode":
                ret.push(new FencedCode(n))
                break;
            case "*hype.SourceCode":
                ret.push(new SourceCode(n))
                break;
            case "*hype.OL":
                ret.push(new OL(n))
                break;
            case "*hype.UL":
                ret.push(new UL(n))
                break;
            case "*hype.LI":
                ret.push(new LI(n))
                break;
            case "*hype.Image":
                ret.push(new Image(n))
                break;
            case "*hype.Figcaption":
            case "*hype.FigCaption":
                ret.push(new FigCaption(n))
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