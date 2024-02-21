import exp from "constants";
import { ParseError } from "./parse_error";
import { ExecuteError } from "./execute_error";
import { CmdError } from "./cmd_error";
import { Parser } from "./parser";
import { parse } from "path";
import { PostParseError } from "./post_parse_error";

describe("ParseError", () => {
    let cmdData = require("./testdata/errors/cmd.json")
    let parseData = require("./testdata/errors/parse.json")
    let postParseData = require("./testdata/errors/post_parse.json")

    let parser = new Parser();

    test("cmd error", () => {
        let err = parser.parseError(cmdData);
        expect(err.filename).toBe(cmdData.filename);
        expect(err.root).toBe(cmdData.root);

        expect(err).toBeInstanceOf(ExecuteError);
        expect(err.error).toBeInstanceOf(CmdError);
    });

    test("parse error", () => {
        let err = parser.parseError(parseData);
        expect(err.filename).toBe(parseData.filename);
        expect(err.root).toBe(parseData.root);

        expect(err).toBeInstanceOf(ParseError);
        expect(err.error).toBeDefined();
    });

    test("parse post parse error", () => {
        let err = parser.parseError(postParseData);
        expect(err.filename).toBe(postParseData.filename);
        expect(err.root).toBe(postParseData.root);

        expect(err).toBeInstanceOf(PostParseError);
        expect(err.error).toBeDefined();
    });
});