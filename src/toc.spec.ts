import exp from "constants";
import fs from "fs";
import { Document } from "./document"
import { Node, NodesToHtml, NodesToString } from "./node";
import { Text } from "./text";
import { Toc } from "./toc";
import { VisitAtom } from "./visit_atom";
import { atoms } from "./atoms"
import { Parser } from "./parser";

describe('toc', () => {

    let p: Parser = new Parser();
    let data = require("./testdata/09-errors.json")

    describe('errors doc', () => {

        test("should generate html", () => {
            let doc = p.parse(data);

            let toc = new Toc()

            let id: number = 0;
            toc.perform(doc, () => {
                return `heading-${id++}`
            });

            let act: string = toc.toHtml().trim();

            let buf = fs.readFileSync(__dirname + "/testdata/tocs/errors.html", "utf-8")
            let exp: string = buf.toString().trim();
            expect(act).toEqual(exp);
        })

    })

});