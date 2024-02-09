"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewElement = exports.Element = void 0;
var gotypes_1 = require("./gotypes");
var Element = /** @class */ (function () {
    function Element(el) {
        this.attributes = {};
        this.atom = el.atom;
        this.type = el.type;
        this.file = el.file;
        this.nodes = el.nodes ? el.nodes : [];
        this.attributes = el.attributes ? el.attributes : {};
        if (this.attributes === undefined) {
            this.attributes = {};
        }
    }
    Element.prototype.toString = function () {
        var _a;
        var s = "";
        (_a = this.nodes) === null || _a === void 0 ? void 0 : _a.forEach(function (n) {
            if (n === undefined)
                return;
            s += n.toString();
        });
        if (this.atom === undefined)
            return s;
        var tag = "<".concat(this.atom);
        var ats = this.attributes ? this.attributes : {};
        for (var _i = 0, _b = Object.entries(ats); _i < _b.length; _i++) {
            var _c = _b[_i], key = _c[0], value = _c[1];
            tag += " ".concat(key, "=\"").concat(value, "\"");
        }
        tag += ">".concat(s, "</").concat(this.atom, ">");
        return tag;
    };
    Element.prototype.toHtml = function () {
        return this.toString() + "\n";
    };
    return Element;
}());
exports.Element = Element;
function NewElement(atom, attrs) {
    return new Element({
        atom: atom,
        nodes: [],
        type: gotypes_1.gotypes.Element,
        attributes: attrs,
    });
}
exports.NewElement = NewElement;
