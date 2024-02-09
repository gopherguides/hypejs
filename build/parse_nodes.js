"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParseNodes = void 0;
var cmd_1 = require("./cmd");
var cmd_result_1 = require("./cmd_result");
var element_1 = require("./element");
var fenced_code_1 = require("./fenced_code");
var fig_caption_1 = require("./fig_caption");
var figure_1 = require("./figure");
var heading_1 = require("./heading");
var image_1 = require("./image");
var include_1 = require("./include");
var inline_code_1 = require("./inline_code");
var li_1 = require("./li");
var link_1 = require("./link");
var ol_1 = require("./ol");
var page_1 = require("./page");
var ref_1 = require("./ref");
var snippet_1 = require("./snippet");
var source_code_1 = require("./source_code");
var table_1 = require("./table");
var text_1 = require("./text");
var ul_1 = require("./ul");
var gotypes_1 = require("./gotypes");
function ParseNodes(nodes) {
    if (nodes === void 0) { nodes = []; }
    var ret = [];
    nodes.forEach(function (n) {
        if (n == null) {
            return;
        }
        n.nodes = ParseNodes(n.nodes);
        switch (n.type) {
            case gotypes_1.gotypes.Body:
            case gotypes_1.gotypes.Element:
            case gotypes_1.gotypes.Paragraph:
            case gotypes_1.gotypes.TD:
            case gotypes_1.gotypes.TH:
            case gotypes_1.gotypes.THead:
            case gotypes_1.gotypes.TR:
                ret.push(new element_1.Element(n));
                break;
            case gotypes_1.gotypes.Page:
                ret.push(new page_1.Page(n));
                break;
            case gotypes_1.gotypes.Text:
                ret.push(new text_1.Text(n));
                break;
            case gotypes_1.gotypes.Heading:
                ret.push(new heading_1.Heading(n));
                break;
            case gotypes_1.gotypes.InlineCode:
                ret.push(new inline_code_1.InlineCode(n));
                break;
            case gotypes_1.gotypes.Include:
                ret.push(new include_1.Include(n));
                break;
            case gotypes_1.gotypes.Link:
                ret.push(new link_1.Link(n));
                break;
            case gotypes_1.gotypes.Figure:
                ret.push(new figure_1.Figure(n));
                break;
            case gotypes_1.gotypes.Table:
                ret.push(new table_1.Table(n));
                break;
            case gotypes_1.gotypes.Ref:
                ret.push(new ref_1.Ref(n));
                break;
            case gotypes_1.gotypes.Cmd:
                ret.push(new cmd_1.Cmd(n));
                break;
            case gotypes_1.gotypes.CmdResult:
                ret.push(new cmd_result_1.CmdResult(n));
                break;
            case gotypes_1.gotypes.Snippet:
                ret.push(new snippet_1.Snippet(n));
                break;
            case gotypes_1.gotypes.FencedCode:
                ret.push(new fenced_code_1.FencedCode(n));
                break;
            case gotypes_1.gotypes.SourceCode:
                ret.push(new source_code_1.SourceCode(n));
                break;
            case gotypes_1.gotypes.OL:
                ret.push(new ol_1.OL(n));
                break;
            case gotypes_1.gotypes.UL:
                ret.push(new ul_1.UL(n));
                break;
            case gotypes_1.gotypes.LI:
                ret.push(new li_1.LI(n));
                break;
            case gotypes_1.gotypes.Image:
                ret.push(new image_1.Image(n));
                break;
            case gotypes_1.gotypes.Figcaption:
            case "*hype.FigCaption":
                ret.push(new fig_caption_1.FigCaption(n));
                break;
            default:
                if (Array.isArray(n)) {
                    nodes = ParseNodes(n);
                    ret.push.apply(ret, nodes);
                    break;
                }
                console.log("unknown node type", n.type, n);
                throw new Error("Unknown node type: " + n.type);
                break;
        }
    });
    return ret;
}
exports.ParseNodes = ParseNodes;
