import { Element } from "./element";
export declare class CmdResult extends Element {
    result: {
        args: string[];
        dir: string;
        stdout: string;
        duration: number;
        exit: number;
        stderr: string;
    };
    constructor(cr: any);
}
