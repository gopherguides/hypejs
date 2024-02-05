"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToHex = void 0;
function ToHex(str) {
    if (str === void 0) { str = ""; }
    var hex = "";
    for (var i = 0; i < str.length; i++) {
        var charCode = str.charCodeAt(i);
        var hexValue = charCode.toString(16);
        // Pad with zeros to ensure two-digit representation
        hex += hexValue.padStart(2, "0");
    }
    return hex;
}
exports.ToHex = ToHex;
