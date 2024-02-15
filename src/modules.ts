import { EmptyModule } from "./empty_mod";
import { Module } from "./module";

export class Modules {
    current: Module = EmptyModule();

    private mods: { [key: string]: Module } = {};

    constructor() { }

    add(mod: Module): Module[] {
        this.mods[mod.filepath] = mod;
        this.current = mod;

        return this.list();
    }

    list(): Module[] {
        return Object.values(this.mods);
    }

    get(file: string): Module {
        return this.mods[file];
    }

    // getMod(mod: Module): Module {
    //     return this.mods[mod.file];
    // }

}