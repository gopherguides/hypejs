"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewText = exports.Text = void 0;
var gotypes_1 = require("./gotypes");
var Text = /** @class */ (function () {
    function Text(t) {
        this.atom = "text";
        this.nodes = [];
        this.type = t.type;
        this.text = t.text;
    }
    Text.prototype.toString = function () {
        return this.text;
    };
    Text.prototype.toHtml = function () {
        return this.text;
    };
    return Text;
}());
exports.Text = Text;
function NewText(text) {
    return new Text({
        type: gotypes_1.gotypes.Text,
        text: text,
    });
}
exports.NewText = NewText;
