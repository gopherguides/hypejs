"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParseNodes = void 0;
var cmd_1 = require("./cmd");
var element_1 = require("./element");
var fig_caption_1 = require("./fig_caption");
var figure_1 = require("./figure");
var heading_1 = require("./heading");
var include_1 = require("./include");
var inline_code_1 = require("./inline_code");
var link_1 = require("./link");
var page_1 = require("./page");
var ref_1 = require("./ref");
var ul_1 = require("./ul");
var li_1 = require("./li");
var ol_1 = require("./ol");
var snippet_1 = require("./snippet");
var table_1 = require("./table");
var text_1 = require("./text");
var fenced_code_1 = require("./fenced_code");
var cmd_result_1 = require("./cmd_result");
var source_code_1 = require("./source_code");
var image_1 = require("./image");
function ParseNodes(nodes) {
    if (nodes === void 0) { nodes = []; }
    var ret = [];
    nodes.forEach(function (n) {
        if (n == null) {
            return;
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
                ret.push(new element_1.Element(n));
                break;
            case "*hype.Page":
                ret.push(new page_1.Page(n));
                break;
            case "hype.Text":
                ret.push(new text_1.Text(n));
                break;
            case "hype.Heading":
                ret.push(new heading_1.Heading(n));
                break;
            case "*hype.InlineCode":
                ret.push(new inline_code_1.InlineCode(n));
                break;
            case "*hype.Include":
                ret.push(new include_1.Include(n));
                break;
            case "*hype.Link":
                ret.push(new link_1.Link(n));
                break;
            case "*hype.Figure":
                ret.push(new figure_1.Figure(n));
                break;
            case "*hype.Table":
                ret.push(new table_1.Table(n));
                break;
            case "*hype.Ref":
                ret.push(new ref_1.Ref(n));
                break;
            case "*hype.Cmd":
                ret.push(new cmd_1.Cmd(n));
                break;
            case "*hype.CmdResult":
                ret.push(new cmd_result_1.CmdResult(n));
                break;
            case "hype.Snippet":
                ret.push(new snippet_1.Snippet(n));
                break;
            case "*hype.FencedCode":
                ret.push(new fenced_code_1.FencedCode(n));
                break;
            case "*hype.SourceCode":
                ret.push(new source_code_1.SourceCode(n));
                break;
            case "*hype.OL":
                ret.push(new ol_1.OL(n));
                break;
            case "*hype.UL":
                ret.push(new ul_1.UL(n));
                break;
            case "*hype.LI":
                ret.push(new li_1.LI(n));
                break;
            case "*hype.Image":
                ret.push(new image_1.Image(n));
                break;
            case "*hype.Figcaption":
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
