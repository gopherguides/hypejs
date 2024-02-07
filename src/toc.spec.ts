import exp from "constants";
import fs from "fs";
import { Document } from "./document"
import { Node, NodesToHtml, NodesToString } from "./node";
import { Text } from "./text";
import { Toc } from "./toc";
import { VisitAtom } from "./visit_atom";
import { atoms } from "./atoms"

describe('toc', () => {

    let data = require("./testdata/errors.json")

    describe('errors doc', () => {

        // test("should build a toc", () => {
        //     let doc = new Document(structuredClone(data))

        //     let toc = new Toc(doc)
        //     expect(toc.headings.length).toEqual(33)

        //     let act: string = "";
        //     toc.headings.forEach((n: Node) => {
        //         act += NodesToHtml(n.nodes ? n.nodes : []) + "\n";
        //     });
        //     act = act.trim();


        //     let buf = fs.readFileSync(__dirname + "/testdata/tocs/errors.txt", "utf-8")
        //     let exp: string = buf.toString().trim();

        //     expect(act).toEqual(exp);
        // });

        test("should generate html", () => {
            let doc = new Document(structuredClone(data))

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