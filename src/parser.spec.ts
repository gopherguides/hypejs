import exp from "constants";
import { Parser } from "./parser";
import { Element } from "./element";

describe('parser', () => {

    class CustomTag extends Element {
        constructor(n: any) {
            super(n);
        }
    }

    test('custom tags', () => {
        let data = require("./testdata/custom.json")

        let p: Parser = new Parser();
        p.handlers["CustomTag"] = (n: any) => new CustomTag(n)

        let d = p.parse(data);

        expect(d.id).toBeDefined();
        expect(d.atom).toBeUndefined();
        expect(d.type).toEqual("*hype.Document");
        expect(d.title).toEqual("Custom Tags");
        expect(d.nodes?.length).toEqual(1);
    })

});