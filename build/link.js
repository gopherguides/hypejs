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
exports.NewLink = exports.Link = void 0;
var element_1 = require("./element");
var atoms_1 = require("./atoms");
var gotypes_1 = require("./gotypes");
var Link = /** @class */ (function (_super) {
    __extends(Link, _super);
    function Link(l) {
        var _this = _super.call(this, l) || this;
        _this.url = l.url;
        return _this;
    }
    return Link;
}(element_1.Element));
exports.Link = Link;
function NewLink(url, attrs) {
    var ats = attrs ? attrs : {};
    if ((ats === null || ats === void 0 ? void 0 : ats.href) === undefined) {
        ats.href = url;
    }
    return new Link({
        atom: atoms_1.atoms.A,
        attributes: ats,
        nodes: [],
        type: gotypes_1.gotypes.Link,
        url: url,
    });
}
exports.NewLink = NewLink;
