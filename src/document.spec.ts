import exp from "constants";
import { Parser } from "./parser";
import { gotypes } from "./gotypes";

describe('document', () => {

    describe('parsers correctly', () => {

        class tc {
            name: string = "";
            input: any;
            title: string = "";
        }

        let tcs: tc[] = [
            {
                name: "errors",
                input: require('./testdata/09-errors.json'),
                title: "Errors",
            },
            {
                name: "generics",
                input: require('./testdata/10-generics.json'),
                title: "Generics",
            },
            {
                name: "context",
                input: require('./testdata/12-context.json'),
                title: "Context",
            }
        ]

        tcs.forEach(tc => {
            let p: Parser = new Parser();
            test(tc.name, () => {
                let d = p.parse(tc.input)
                expect(d.id).toBeDefined();

                expect(d.atom).toBeUndefined();
                expect(d.type).toEqual(gotypes.Document);
                expect(d.title).toEqual(tc.title);
                expect(d.nodes?.length).toEqual(1);

                let html = d.nodes ? d.nodes[0] : undefined;

                expect(html).toBeDefined();
                expect(html?.nodes?.length).toEqual(1);

                // expect(d.toString()).toEqual("Document: " + tc.title);
            })
        })


    });

});