"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = void 0;
var Text = /** @class */ (function () {
    function Text(t) {
        this.type = t.type;
        this.text = t.text;
    }
    Text.prototype.toString = function () {
        return this.text;
    };
    return Text;
}());
exports.Text = Text;
