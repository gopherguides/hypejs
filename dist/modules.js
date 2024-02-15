import { EmptyModule } from "./empty_mod";
export class Modules {
    constructor() {
        this.current = EmptyModule();
        this.mods = {};
    }
    add(mod) {
        this.mods[mod.filepath] = mod;
        this.current = mod;
        return this.list();
    }
    list() {
        return Object.values(this.mods);
    }
    get(file) {
        return this.mods[file];
    }
}
