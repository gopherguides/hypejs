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
exports.Figure = void 0;
var element_1 = require("./element");
var Figure = /** @class */ (function (_super) {
    __extends(Figure, _super);
    function Figure(f) {
        var _this = _super.call(this, f) || this;
        if (f.style === "") {
            f.style = "listing";
        }
        if (f.pos < 1) {
            f.pos = 1;
        }
        f.section_id ? f.section_id : 1;
        _this.pos = f.pos;
        _this.style = f.style;
        _this.section_id = f.section_id;
        return _this;
    }
    return Figure;
}(element_1.Element));
exports.Figure = Figure;
