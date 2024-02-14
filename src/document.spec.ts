import exp from "constants";
import { Parser } from "./parser";

describe('document', () => {

    describe('parsers correctly', () => {

        class tc {
            name: string = "";
            input: any;
            title: string = "";
        }

        let tcs: tc[] = [
            {
                name: "arrays",
                input: require('./testdata/arrays.json'),
                title: "Arrays, Slices, and Iteration"
            },
            {
                name: "errors",
                input: require('./testdata/errors.json'),
                title: "Errors",
            },
            {
                name: "generics",
                input: require('./testdata/generics.json'),
                title: "Generics",
            },
            {
                name: "files",
                input: require('./testdata/files.json'),
                title: "Working With Files",
            },
            {
                name: "channels",
                input: require('./testdata/channels.json'),
                title: "Channels",
            },
            {
                name: "context",
                input: require('./testdata/context.json'),
                title: "Context",
            }
        ]

        tcs.forEach(tc => {
            let p: Parser = new Parser();
            test(tc.name, () => {
                let d = p.parse(tc.input)
                expect(d.id).toBeDefined();

                expect(d.atom).toBeUndefined();
                expect(d.type).toEqual("*hype.Document");
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