import type { Node } from "./node";
import { Cmd } from "./cmd";
import { CmdError } from "./cmd_error";
import { CmdResult } from "./cmd_result";
import { Document } from "./document";
import { Element } from "./element";
import { ExecuteError } from "./execute_error";
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
import { ParseError } from "./parse_error";
import { Ref } from "./ref";
import { Snippet } from "./snippet";
import { SourceCode } from "./source_code";
import { Table } from "./table";
import { Text } from "./text";
import { UL } from "./ul";
import { gotypes, goerrors } from "./gotypes";
import { PostParseError } from "./post_parse_error";

type NodeParseFn = (n: any) => Node[];

export class Parser {

    handlers: { [key: string]: NodeParseFn } = {}

    constructor() {
        this.handlers[gotypes.CmdResult] = (n: any) => [new CmdResult(n)]
        this.handlers[gotypes.Cmd] = (n: any) => [new Cmd(n)]
        this.handlers[gotypes.FencedCode] = (n: any) => [new FencedCode(n)]
        this.handlers[gotypes.Figcaption] = (n: any) => [new FigCaption(n)]
        this.handlers[gotypes.Figure] = (n: any) => [new Figure(n)]
        this.handlers[gotypes.Heading] = (n: any) => [new Heading(n)]
        this.handlers[gotypes.Image] = (n: any) => [new Image(n)]
        this.handlers[gotypes.Include] = (n: any) => [new Include(n)]
        this.handlers[gotypes.InlineCode] = (n: any) => [new InlineCode(n)]
        this.handlers[gotypes.LI] = (n: any) => [new LI(n)]
        this.handlers[gotypes.Link] = (n: any) => [new Link(n)]
        this.handlers[gotypes.OL] = (n: any) => [new OL(n)]
        this.handlers[gotypes.Page] = (n: any) => [new Page(n)]
        this.handlers[gotypes.Ref] = (n: any) => [new Ref(n)]
        this.handlers[gotypes.Snippet] = (n: any) => [new Snippet(n)]
        this.handlers[gotypes.SourceCode] = (n: any) => [new SourceCode(n)]
        this.handlers[gotypes.Table] = (n: any) => [new Table(n)]
        this.handlers[gotypes.Text] = (n: any) => [new Text(n)]
        this.handlers[gotypes.UL] = (n: any) => [new UL(n)]

        this.handlers[gotypes.Metadata] = (n: any) => { throw new Error("not implemented: " + gotypes.Metadata); }
        this.handlers[gotypes.Now] = (n: any) => { throw new Error("not implemented: " + gotypes.Now); }
        this.handlers[gotypes.Paragraph] = (n: any) => { throw new Error("not implemented: " + gotypes.Paragraph); }
        this.handlers[gotypes.Snippets] = (n: any) => { throw new Error("not implemented: " + gotypes.Snippets); }
        this.handlers[gotypes.TD] = (n: any) => { throw new Error("not implemented: " + gotypes.TD); }
        this.handlers[gotypes.TH] = (n: any) => { throw new Error("not implemented: " + gotypes.TH); }
        this.handlers[gotypes.THead] = (n: any) => { throw new Error("not implemented: " + gotypes.THead); }
        this.handlers[gotypes.TR] = (n: any) => { throw new Error("not implemented: " + gotypes.TR); }
        this.handlers[gotypes.ToC] = (n: any) => { throw new Error("not implemented: " + gotypes.ToC); }
        this.handlers[gotypes.Var] = (n: any) => { throw new Error("not implemented: " + gotypes.Var); }

    }

    parse(data: any): Document {
        let doc: Document;

        data = structuredClone(data);

        data.nodes = this.parseNodes(data.nodes);

        return new Document(data);
    }

    parseError(data: any): any {
        switch (data.type) {
            case goerrors.CmdError:
                return new CmdError(data, this);
            case goerrors.ExecuteError:
                return new ExecuteError(data, this);
            case goerrors.ParseError:
                return new ParseError(data, this);
            case goerrors.PostParseError:
                return new PostParseError(data, this);
            case goerrors.PostExecuteError:
                throw new Error("not implemented: " + data.type);
            case goerrors.PreExecuteError:
                throw new Error("not implemented: " + data.type);
            case goerrors.PreParseError:
                throw new Error("not implemented: " + data.type);
            default:
                if (data.type === undefined) {
                    return data;
                }

                // console.warn("parseError: unknown type: ", data.type)
                throw new Error("not implemented: " + data.type);
        }
    }

    private parseNodes(nodes: Node[] = []): Node[] {
        let ret: Node[] = [];

        nodes.forEach((n: any) => {
            if (n == null) {
                return
            }

            if (Array.isArray(n)) {
                let nodes = this.parseNodes(n);
                ret.push(...nodes);
            } else {

                n.nodes = this.parseNodes(n.nodes);

                let fn = this.handlers[n.type];
                if (fn === undefined) {
                    // console.warn("unknown node type: " + n.type)
                    fn = newElement
                }

                ret.push(...fn(n))
            }

        });

        return ret;
    }

}

function newElement(n: any): Node[] {
    return [new Element(n)]
}