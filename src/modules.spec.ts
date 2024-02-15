import exp from "constants";
import { Module } from "./module";
import { Modules } from "./modules";
import { EmptyModule } from "./empty_mod";

describe("modules", () => {

    describe("add", () => {

        test("should add a new module to the list", () => {
            let mods: Modules = new Modules();
            expect(mods.list().length).toBe(0);

            expect(mods.current.file).toBe("empty.md");

            let mod = new Module({
                file: "test.md",
                id: "1234",
            });

            let list = mods.add(mod);
            expect(list.length).toBe(1);

            expect(mods.current.file).toBe("test.md");
        });

        test("should update a module in the list", () => {
            let mods: Modules = new Modules();
            expect(mods.list().length).toBe(0);

            let mod = new Module({
                filepath: "test.md",
                id: "1234",
            });

            let list = mods.add(mod);
            expect(list.length).toBe(1);

            list = mods.add(mod);
            expect(list.length).toBe(1);
        });
    });
});