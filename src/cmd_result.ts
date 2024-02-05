import { Element } from "./element";

export class CmdResult extends Element {
    result: {
        args: string[];
        dir: string;
        stdout: string;
        duration: number;
        exit: number;
        stderr: string;
    }

    constructor(cr: CmdResult) {
        super(cr);

        this.result = cr.result;
    }
}