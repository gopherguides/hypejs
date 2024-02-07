import { Element } from "./element";

export class Cmd extends Element {
    expected_exit: number;
    args?: string[];
    timeout?: string;

    constructor(c: any) {
        super(c);

        this.expected_exit = c.expected_exit;
        this.args = c.args ? c.args : [];
        this.timeout = c.timeout ? c.timeout : "30s";
    }
}