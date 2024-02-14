import exp from "constants";
import { Document } from "./document"
import { Node } from "./node";
import { Text } from "./text";
import { VisitAtom } from "./visit_atom";
import { atoms } from "./atoms"
import { Parser } from "./parser";

describe('visitAtom', () => {

    let p: Parser = new Parser();
    let data = require("./testdata/errors.json")

    describe('errors doc', () => {

        test('should find all the pages', () => {
            let d = p.parse(data);

            let found: Node[] = []
            VisitAtom(atoms.Page, d, (n) => {
                n.nodes = [new Text({
                    type: "hype.Text",
                    text: `page-${found.length}`,
                })]
                found.push(n)
            })

            expect(found.length).toEqual(9)

            expect(d.toHtml()).toContain("page-6")
        });

        test('should find all the includes and pages', () => {
            let d = p.parse(data);

            let found: Node[] = []

            VisitAtom([atoms.Page, atoms.Include], d, (n) => {
                found.push(n)
            })

            expect(found.length).toEqual(16)
        });

        test('should find all the headings', () => {
            let d = p.parse(data);

            let found: Node[] = []

            VisitAtom(atoms.Headings, d, (n) => {
                found.push(n)
            })

            expect(found.length).toEqual(33)
        })
    })

});