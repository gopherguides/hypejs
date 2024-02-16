import exp from "constants";
import { ParseError } from "./parse_error";
import { ExecuteError } from "./execute_error";
import { CmdError } from "./cmd_error";
import { Parser } from "./parser";
import { parse } from "path";

describe("ParseError", () => {
    let cmdData = require("./testdata/errors/cmd.json")
    let parseData = require("./testdata/errors/parse.json")

    let parser = new Parser();

    test("cmd error", () => {
        let err = parser.parseError(cmdData);
        expect(err.filename).toBe(cmdData.filename);
        expect(err.root).toBe(cmdData.root);

        expect(err).toBeInstanceOf(ExecuteError);
        expect(err.err).toBeInstanceOf(CmdError);
    });

    test("parse error", () => {
        let err = parser.parseError(parseData);
        expect(err.filename).toBe(parseData.filename);
        expect(err.root).toBe(parseData.root);

        expect(err).toBeInstanceOf(ParseError);
        expect(err.err).toBeDefined();
    });
});