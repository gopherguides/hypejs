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
export class Parser {
    constructor() {
        this.handlers = {};
        this.handlers[gotypes.CmdResult] = (n) => [new CmdResult(n)];
        this.handlers[gotypes.Cmd] = (n) => [new Cmd(n)];
        this.handlers[gotypes.FencedCode] = (n) => [new FencedCode(n)];
        this.handlers[gotypes.Figcaption] = (n) => [new FigCaption(n)];
        this.handlers[gotypes.Figure] = (n) => [new Figure(n)];
        this.handlers[gotypes.Heading] = (n) => [new Heading(n)];
        this.handlers[gotypes.Image] = (n) => [new Image(n)];
        this.handlers[gotypes.Include] = (n) => [new Include(n)];
        this.handlers[gotypes.InlineCode] = (n) => [new InlineCode(n)];
        this.handlers[gotypes.LI] = (n) => [new LI(n)];
        this.handlers[gotypes.Link] = (n) => [new Link(n)];
        this.handlers[gotypes.OL] = (n) => [new OL(n)];
        this.handlers[gotypes.Page] = (n) => [new Page(n)];
        this.handlers[gotypes.Ref] = (n) => [new Ref(n)];
        this.handlers[gotypes.Snippet] = (n) => [new Snippet(n)];
        this.handlers[gotypes.SourceCode] = (n) => [new SourceCode(n)];
        this.handlers[gotypes.Table] = (n) => [new Table(n)];
        this.handlers[gotypes.Text] = (n) => [new Text(n)];
        this.handlers[gotypes.UL] = (n) => [new UL(n)];
    }
    parse(data) {
        let doc;
        data = structuredClone(data);
        data.nodes = this.parseNodes(data.nodes);
        return new Document(data);
    }
    parseError(data) {
        switch (data.type) {
            case goerrors.ExecuteError:
                return new ExecuteError(data, this);
            case goerrors.CmdError:
                return new CmdError(data, this);
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
                return data;
        }
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
                    // console.warn("unknown node type: " + n.type)
                    fn = newElement;
                }
                ret.push(...fn(n));
            }
        });
        return ret;
    }
}
function newElement(n) {
    return [new Element(n)];
}
