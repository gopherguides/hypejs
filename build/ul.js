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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewUL = exports.UL = void 0;
var element_1 = require("./element");
var atoms_1 = require("./atoms");
var gotypes_1 = require("./gotypes");
var UL = /** @class */ (function (_super) {
    __extends(UL, _super);
    function UL(ul) {
        return _super.call(this, ul) || this;
    }
    return UL;
}(element_1.Element));
exports.UL = UL;
function NewUL(attrs) {
    return new UL({
        atom: atoms_1.atoms.Ul,
        type: gotypes_1.gotypes.UL,
        nodes: [],
        attributes: attrs,
    });
}
exports.NewUL = NewUL;