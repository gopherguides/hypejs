"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodesToHtml = exports.NodesToString = void 0;
function NodesToString(nodes) {
    var s = "";
    nodes.forEach(function (n) {
        s += n.toString();
    });
    return s;
}
exports.NodesToString = NodesToString;
function NodesToHtml(nodes) {
    var s = "";
    nodes.forEach(function (n) {
        s += n.toHtml();
    });
    return s;
}
exports.NodesToHtml = NodesToHtml;
