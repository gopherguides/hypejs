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
exports.Cmd = void 0;
var element_1 = require("./element");
var Cmd = /** @class */ (function (_super) {
    __extends(Cmd, _super);
    function Cmd(c) {
        var _this = _super.call(this, c) || this;
        _this.expected_exit = c.expected_exit;
        _this.args = c.args ? c.args : [];
        _this.timeout = c.timeout ? c.timeout : "30s";
        return _this;
    }
    return Cmd;
}(element_1.Element));
exports.Cmd = Cmd;
