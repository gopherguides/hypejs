"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Toc = void 0;
var element_1 = require("./element");
var heading_1 = require("./heading");
var link_1 = require("./link");
var visit_atom_1 = require("./visit_atom");
var atoms_1 = require("./atoms");
var gotypes_1 = require("./gotypes");
var uuid_1 = require("uuid");
var Toc = /** @class */ (function (_super) {
    __extends(Toc, _super);
    function Toc() {
        var _this = _super.call(this, {
            nodes: [],
            atom: atoms_1.atoms.Ul,
            type: gotypes_1.gotypes.UL,
            attributes: {
                class: "hype-toc",
            }
        }) || this;
        _this.ids = [];
        _this.nodes = [];
        return _this;
    }
    Toc.prototype.perform = function (doc, gen) {
        var _this = this;
        (0, visit_atom_1.VisitAtom)(atoms_1.atoms.Headings, doc, function (n) {
            var h = new heading_1.Heading(n);
            // this.headings.push(h);
            var id = gen ? gen() : newUUID();
            _this.ids.push(id);
            var a = (0, link_1.NewLink)("#".concat(id));
            var li = (0, element_1.NewElement)(atoms_1.atoms.Li, { class: "hype-toc-lvl-".concat(h.level) });
            a.nodes = h.nodes;
            li.nodes = [a];
            _this.nodes.push(li);
            var nodes = n.nodes;
            var b = (0, element_1.NewElement)(atoms_1.atoms.A);
            b.attributes = { name: id };
            n.nodes = __spreadArray([b], nodes, true);
        });
    };
    return Toc;
}(element_1.Element));
exports.Toc = Toc;
function newUUID() {
    return "heading-".concat((0, uuid_1.v4)());
}
