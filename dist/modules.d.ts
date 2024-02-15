import { Module } from "./module";
export declare class Modules {
    current: Module;
    private mods;
    constructor();
    add(mod: Module): Module[];
    list(): Module[];
    get(file: string): Module;
}
