import { Element } from "./element";
export declare class Cmd extends Element {
    expected_exit: number;
    args?: string[];
    timeout?: string;
    constructor(c: any);
}
