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
exports.Document = void 0;
var element_1 = require("./element");
var parse_nodes_1 = require("./parse_nodes");
var Document = /** @class */ (function (_super) {
    __extends(Document, _super);
    function Document(el) {
        var _this = _super.call(this, el) || this;
        _this.id = "";
        _this.file = "module.md";
        _this.root = el.root;
        _this.title = el.title;
        _this.parser = el.parser;
        _this.file = el.file;
        if (_this.file === undefined) {
            _this.file = "module.md";
        }
        // this.id = ToHex(path.join(this.root, this.file));
        _this.nodes = (0, parse_nodes_1.ParseNodes)(el.nodes);
        return _this;
    }
    Document.prototype.toString = function () {
        var _a;
        var s = "";
        (_a = this.nodes) === null || _a === void 0 ? void 0 : _a.forEach(function (n) {
            s += n.toString();
        });
        return s;
    };
    return Document;
}(element_1.Element));
exports.Document = Document;
